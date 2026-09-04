import React, { useState } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Clock,
  Award,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { CuratedTour, Artwork } from '../types';
import { CURATED_TOURS } from '../data/tours';
import { ARTWORKS } from '../data/artworks';
import { useAudioGuide } from '../hooks/useAudioGuide';

interface CuratedToursViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenARWithArtwork: (artwork: Artwork) => void;
}

export const CuratedToursView: React.FC<CuratedToursViewProps> = ({
  onSelectArtwork,
  onOpenARWithArtwork,
}) => {
  const [selectedTour, setSelectedTour] = useState<CuratedTour | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const {
    isPlaying,
    isPaused,
    playNarration,
    pauseNarration,
    resumeNarration,
    stopNarration,
  } = useAudioGuide();

  // If inside active tour
  const currentArtworkId = selectedTour?.artworkIds[currentStepIndex];
  const currentArtwork = ARTWORKS.find((a) => a.id === currentArtworkId);

  const handleStartTour = (tour: CuratedTour) => {
    setSelectedTour(tour);
    setCurrentStepIndex(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    stopNarration();
    // Play intro
    setTimeout(() => {
      playNarration(tour.introNarration);
    }, 200);
  };

  const handleLeaveTour = () => {
    stopNarration();
    setSelectedTour(null);
  };

  const handleNextStep = () => {
    if (!selectedTour) return;
    if (currentStepIndex < selectedTour.artworkIds.length) {
      stopNarration();
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);

      if (nextIndex < selectedTour.artworkIds.length) {
        const nextArt = ARTWORKS.find((a) => a.id === selectedTour.artworkIds[nextIndex]);
        if (nextArt) {
          playNarration(nextArt.audioGuideTranscript);
        }
      } else {
        // Reached end / quiz stage
        playNarration(selectedTour.conclusionNarration);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0 && selectedTour) {
      stopNarration();
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      const prevArt = ARTWORKS.find((a) => a.id === selectedTour.artworkIds[prevIndex]);
      if (prevArt) {
        playNarration(prevArt.audioGuideTranscript);
      }
    }
  };

  return (
    <div id="curated-tours-section" className="space-y-6 pb-20">
      {/* Tour Selection Screen */}
      {!selectedTour ? (
        <>
          <div className="border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-6 sm:p-8 shadow-2xl">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.2em] font-medium block mb-2">
              Roteiros Narrados • Visitas Curadas
            </span>
            <h1 className="serif text-2xl sm:text-4xl text-[#E5E5E5] tracking-tight">
              Tours Interativos & Audioguias
            </h1>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Escolha uma trilha curatorial imersiva. Caminhe por salas virtuais guiado pela voz de historiadores de arte e teste seus conhecimentos com quizzes interativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CURATED_TOURS.map((tour) => {
              const artworksInTour = tour.artworkIds
                .map((id) => ARTWORKS.find((a) => a.id === id))
                .filter(Boolean) as Artwork[];

              return (
                <div
                  key={tour.id}
                  id={`tour-card-${tour.id}`}
                  className="border border-white/10 bg-[#121212] hover:border-[#C5A059]/60 shadow-xl overflow-hidden flex flex-col justify-between transition duration-300 group hover:shadow-[0_0_20px_rgba(197,160,89,0.12)]"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-black">
                    <img
                      src={tour.bannerImage}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-70"
                    />
                    <div className="absolute inset-0 artwork-gradient" />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-xs text-[#E5E5E5] font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{tour.durationMinutes} min</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                        {tour.curator}
                      </span>
                      <h3 className="serif text-lg font-bold text-[#E5E5E5] group-hover:text-[#C5A059] transition">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-white/60 mt-2 line-clamp-2 leading-relaxed">
                        {tour.subtitle}
                      </p>

                      {/* Artworks thumbnails in this tour */}
                      <div className="mt-4 flex items-center gap-2">
                        {artworksInTour.map((art) => (
                          <img
                            key={art.id}
                            src={art.thumbUrl}
                            alt={art.title}
                            title={art.title}
                            className="w-8 h-8 object-cover border border-white/10"
                          />
                        ))}
                        <span className="text-[11px] text-white/40 ml-1 font-mono">
                          {tour.artworkIds.length} obras
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={() => handleStartTour(tour)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition cursor-pointer gold-glow"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Iniciar Tour Guiado
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* ACTIVE TOUR EXPERIENCE SCREEN */
        <div className="border border-white/10 bg-[#121212] p-4 sm:p-8 shadow-2xl space-y-6">
          {/* Active Tour Header & Progress Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <button
                onClick={handleLeaveTour}
                className="text-xs text-white/50 hover:text-[#C5A059] flex items-center gap-1 mb-1 transition cursor-pointer uppercase tracking-wider"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Voltar à Seleção de Tours
              </button>
              <h2 className="serif text-xl sm:text-2xl font-bold text-[#E5E5E5]">
                {selectedTour.title}
              </h2>
              <p className="text-xs text-white/40 mt-0.5">
                Curadoria: {selectedTour.curator}
              </p>
            </div>

            {/* Stepper info */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#C5A059] bg-white/5 border border-white/15 px-3 py-1.5 uppercase tracking-wider">
                {currentStepIndex < selectedTour.artworkIds.length
                  ? `Parada ${currentStepIndex + 1} de ${selectedTour.artworkIds.length}`
                  : 'Desafio do Historiador'}
              </span>
            </div>
          </div>

          {/* Progress bar line */}
          <div className="w-full h-1 bg-white/5 overflow-hidden">
            <div
              className="h-full bg-[#C5A059] transition-all duration-300"
              style={{
                width: `${
                  ((currentStepIndex + 1) / (selectedTour.artworkIds.length + 1)) * 100
                }%`,
              }}
            />
          </div>

          {/* STEP 1 to N: Displaying the Current Artwork */}
          {currentStepIndex < selectedTour.artworkIds.length && currentArtwork ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Artwork visual preview */}
              <div className="lg:col-span-7 relative border border-white/10 overflow-hidden bg-black aspect-[4/3] max-h-[500px] flex items-center justify-center shadow-2xl">
                <img
                  src={currentArtwork.imageUrl}
                  alt={currentArtwork.title}
                  className="max-h-full max-w-full object-contain cursor-pointer"
                  onClick={() => onSelectArtwork(currentArtwork)}
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                  <button
                    onClick={() => onSelectArtwork(currentArtwork)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white hover:border-[#C5A059] transition uppercase tracking-wider text-[10px]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    Inspecionar em Super-HD
                  </button>

                  <button
                    onClick={() => onOpenARWithArtwork(currentArtwork)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition gold-glow text-[10px]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Ver em AR
                  </button>
                </div>
              </div>

              {/* Audio guide and narration explanation for this stop */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                    {currentArtwork.museum}, {currentArtwork.city}
                  </span>
                  <h3 className="serif text-xl sm:text-2xl font-bold text-[#E5E5E5]">
                    {currentArtwork.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    {currentArtwork.artist} • {currentArtwork.year}
                  </p>
                </div>

                {/* Narration audio box */}
                <div className="p-4 border border-white/10 bg-[#0c0c0c] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#E5E5E5] font-medium">
                    <span className="flex items-center gap-1.5 text-[#C5A059] uppercase tracking-wider text-[11px]">
                      <Headphones className="w-4 h-4 text-[#C5A059]" />
                      Audioguia do Curador
                    </span>
                    {isPlaying && (
                      <span className="text-[11px] text-[#C5A059] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
                        Reproduzindo
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed italic serif text-sm pl-2 border-l border-[#C5A059]">
                    "{currentArtwork.audioGuideTranscript}"
                  </p>

                  <button
                    onClick={() => {
                      if (isPlaying) pauseNarration();
                      else if (isPaused) resumeNarration();
                      else playNarration(currentArtwork.audioGuideTranscript);
                    }}
                    className="flex items-center gap-2 px-3.5 py-1.5 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition gold-glow"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" /> Pausar
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" /> Ouvir Narração
                      </>
                    )}
                  </button>
                </div>

                {/* Navigation Next/Prev buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={currentStepIndex === 0}
                    onClick={handlePrevStep}
                    className="flex items-center gap-1 px-3 py-2 border border-white/10 bg-white/5 text-xs text-white/70 hover:text-white hover:border-[#C5A059] disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider text-[11px]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Parada Anterior
                  </button>

                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition gold-glow"
                  >
                    {currentStepIndex === selectedTour.artworkIds.length - 1
                      ? 'Concluir Tour & Fazer Quiz'
                      : 'Próxima Parada'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* FINAL STEP: QUIZ CHALLENGE */
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-white/5 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto gold-glow">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="serif text-2xl font-bold text-[#E5E5E5]">
                  Desafio do Historiador da Arte
                </h3>
                <p className="text-xs text-white/60">
                  Responda às questões sobre as obras exploradas para validar seu conhecimento.
                </p>
              </div>

              {/* Quiz questions list */}
              <div className="space-y-4">
                {selectedTour.triviaQuiz.map((q, qIndex) => {
                  const selectedOption = quizAnswers[qIndex];
                  const isAnswered = selectedOption !== undefined;
                  const isCorrect = isAnswered && selectedOption === q.correctIndex;

                  return (
                    <div
                      key={qIndex}
                      className="p-5 border border-white/10 bg-[#0c0c0c] space-y-3"
                    >
                      <p className="text-xs sm:text-sm font-medium text-[#E5E5E5] serif">
                        {qIndex + 1}. {q.question}
                      </p>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptSelected = selectedOption === optIdx;
                          let btnStyle = 'border-white/10 bg-white/5 text-white/70 hover:border-white/20';

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                            } else if (isOptSelected) {
                              btnStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
                            }
                          } else if (isOptSelected) {
                            btnStyle = 'border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059] gold-glow';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() =>
                                setQuizAnswers((prev) => ({ ...prev, [qIndex]: optIdx }))
                              }
                              className={`w-full text-left p-3 border text-xs transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="pt-3 border-t border-white/10 text-[11px] text-white/60">
                          <strong className="text-[#C5A059]">Explicação: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center gap-1 text-xs text-white/50 hover:text-white uppercase tracking-wider"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar às Obras
                </button>

                {!quizSubmitted ? (
                  <button
                    disabled={
                      Object.keys(quizAnswers).length < selectedTour.triviaQuiz.length
                    }
                    onClick={() => setQuizSubmitted(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 disabled:opacity-40 transition cursor-pointer gold-glow"
                  >
                    Verificar Respostas
                  </button>
                ) : (
                  <button
                    onClick={handleLeaveTour}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition cursor-pointer gold-glow"
                  >
                    Finalizar e Voltar aos Tours
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
