import { useState, useEffect, useRef, useCallback } from 'react';

export function useAudioGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isSupported, setIsSupported] = useState(true);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const getBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (!synthRef.current) return null;
    const voices = synthRef.current.getVoices();
    // Prefer Portuguese voices (pt-BR or pt-PT)
    const ptVoice = voices.find(
      (v) => v.lang.startsWith('pt-BR') || v.lang.startsWith('pt')
    );
    if (ptVoice) return ptVoice;
    // Fallback to any natural or default voice
    return voices.find((v) => v.default) || voices[0] || null;
  }, []);

  const playNarration = useCallback(
    (text: string) => {
      if (!synthRef.current) return;

      synthRef.current.cancel();
      setCurrentText(text);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = playbackRate;
      utterance.pitch = 0.95; // Slightly lower, warmer museum curator pitch

      const voice = getBestVoice();
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
    },
    [playbackRate, getBestVoice]
  );

  const pauseNarration = useCallback(() => {
    if (!synthRef.current) return;
    if (synthRef.current.speaking && !synthRef.current.paused) {
      synthRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, []);

  const resumeNarration = useCallback(() => {
    if (!synthRef.current) return;
    if (synthRef.current.paused) {
      synthRef.current.resume();
      setIsPaused(false);
      setIsPlaying(true);
    }
  }, []);

  const stopNarration = useCallback(() => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  const changePlaybackRate = useCallback(
    (newRate: number) => {
      setPlaybackRate(newRate);
      if (isPlaying && currentText) {
        // Re-trigger with new rate seamlessly
        stopNarration();
        setTimeout(() => {
          playNarration(currentText);
        }, 100);
      }
    },
    [isPlaying, currentText, stopNarration, playNarration]
  );

  return {
    isPlaying,
    isPaused,
    playbackRate,
    isSupported,
    playNarration,
    pauseNarration,
    resumeNarration,
    stopNarration,
    changePlaybackRate,
  };
}
