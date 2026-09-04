import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle2,
  DownloadCloud,
  Eye,
  Info,
  Sliders,
  Volume2,
} from 'lucide-react';
import { Artwork, Hotspot } from '../types';
import { useAudioGuide } from '../hooks/useAudioGuide';

interface ArtworkDetailModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onOpenARWithArtwork: (artwork: Artwork) => void;
  isSavedOffline: boolean;
  onToggleOffline: (artworkId: string) => void;
}

export const ArtworkDetailModal: React.FC<ArtworkDetailModalProps> = ({
  artwork,
  onClose,
  onOpenARWithArtwork,
  isSavedOffline,
  onToggleOffline,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showHotspots, setShowHotspots] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [conservationMode, setConservationMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'tecnica' | 'simbolismo' | 'audioguia'>('info');

  const {
    isPlaying,
    isPaused,
    playbackRate,
    playNarration,
    pauseNarration,
    resumeNarration,
    stopNarration,
    changePlaybackRate,
  } = useAudioGuide();

  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom on open or change
  useEffect(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setSelectedHotspot(null);
    stopNarration();
  }, [artwork?.id, stopNarration]);

  if (!artwork) return null;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4.0));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Audio guide controls
  const handleToggleAudio = () => {
    if (isPlaying) {
      pauseNarration();
    } else if (isPaused) {
      resumeNarration();
    } else {
      playNarration(artwork.audioGuideTranscript);
    }
  };

  return (
    <div
      id="artwork-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="artwork-detail-modal-container"
        className="relative w-full max-w-6xl max-h-[96vh] flex flex-col lg:flex-row border border-white/10 bg-[#121212] shadow-2xl overflow-hidden text-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="artwork-detail-close-btn"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 bg-black/80 border border-white/10 text-white/60 hover:text-white hover:border-[#C5A059] transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Deep Zoom Canvas Viewer & Hotspots */}
        <div className="relative flex-1 bg-[#0A0A0A] flex flex-col min-h-[380px] lg:min-h-[580px] overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/10">
          {/* Top Canvas Toolbar */}
          <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 border border-white/10">
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 4.0}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 transition"
              title="Aumentar Zoom (Ultra-HD)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 transition"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition"
              title="Redefinir Enquadramento"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="h-4 w-px bg-white/15 mx-1" />

            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs uppercase tracking-wider font-medium transition ${
                showHotspots
                  ? 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059] gold-glow'
                  : 'text-white/50 hover:text-white'
              }`}
              title="Pontos de Interesse & Análise Visual"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pontos Chave</span>
            </button>

            <button
              onClick={() => setConservationMode(!conservationMode)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs uppercase tracking-wider font-medium transition ${
                conservationMode
                  ? 'bg-[#C5A059] text-black gold-glow'
                  : 'text-white/50 hover:text-white'
              }`}
              title="Modo Luz Rasante e Exame de Conservação"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Luz Rasante</span>
            </button>

            <span className="text-[11px] font-mono text-white/40 px-1">
              {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          {/* Interactive Interactive Viewer Canvas Area */}
          <div
            ref={containerRef}
            className={`relative flex-1 flex items-center justify-center p-4 overflow-hidden ${
              zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="relative transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                transformOrigin: 'center center',
              }}
            >
              {/* Painting Frame Border Shadow */}
              <div
                className={`relative shadow-2xl transition-all duration-300 ${
                  conservationMode
                    ? 'contrast-125 sepia-[0.35] brightness-90 saturate-150'
                    : ''
                }`}
              >
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="max-h-[50vh] lg:max-h-[70vh] w-auto max-w-full object-contain border-2 border-white/10 shadow-2xl"
                  loading="eager"
                  draggable={false}
                />

                {/* Hotspot Pins Overlay */}
                {showHotspots &&
                  zoomLevel <= 2.5 &&
                  artwork.hotspots.map((hotspot) => {
                    const isSelected = selectedHotspot?.id === hotspot.id;
                    return (
                      <button
                        key={hotspot.id}
                        id={`hotspot-pin-${hotspot.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHotspot(isSelected ? null : hotspot);
                        }}
                        style={{
                          left: `${hotspot.xPercent}%`,
                          top: `${hotspot.yPercent}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-transform ${
                          isSelected ? 'scale-125' : 'hover:scale-110'
                        }`}
                        title={hotspot.title}
                      >
                        <span className="relative flex h-5 w-5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                          <span className="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-tr from-[#997722] to-[#f5dfa8] border-2 border-black items-center justify-center text-[10px] font-bold text-black shadow-lg">
                            +
                          </span>
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Active Hotspot Explanation Drawer / Card */}
          {selectedHotspot && (
            <div
              id="selected-hotspot-card"
              className="absolute bottom-3 left-3 right-3 z-30 bg-[#121212]/95 backdrop-blur-md border border-[#C5A059] p-4 shadow-2xl text-xs flex items-start justify-between gap-3 animate-fade-in gold-glow"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#C5A059]/20 text-[#C5A059] font-medium text-[10px] uppercase tracking-wider">
                    {selectedHotspot.tag}
                  </span>
                  <h4 className="serif font-bold text-[#E5E5E5] text-sm">
                    {selectedHotspot.title}
                  </h4>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  {selectedHotspot.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="text-white/50 hover:text-white p-1 hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Bottom Zoom Hint */}
          <div className="absolute bottom-2 left-4 text-[10px] text-white/40 pointer-events-none hidden sm:block uppercase tracking-wider">
            Dica: Clique e arraste quando o zoom estiver ampliado para navegar pela textura.
          </div>
        </div>

        {/* RIGHT COLUMN: Masterpiece Curator Data, Audio Guide & Deep Tabs */}
        <div className="w-full lg:w-[440px] flex flex-col bg-[#121212] p-5 sm:p-6 overflow-y-auto max-h-[50vh] lg:max-h-[96vh]">
          {/* Header Title & Artist */}
          <div className="mb-5">
            <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-medium block mb-1">
              {artwork.city} • {artwork.museum}
            </span>
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#E5E5E5] leading-tight">
              {artwork.title}
            </h2>
            {artwork.originalTitle && (
              <p className="text-xs text-white/50 italic mt-0.5 font-serif">
                {artwork.originalTitle}
              </p>
            )}
            <p className="text-xs text-white/60 mt-2 flex items-center gap-2">
              <span className="font-semibold text-white">{artwork.artist}</span>
              <span className="text-white/40">({artwork.artistLifespan})</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] text-[#C5A059] font-mono">
                {artwork.year}
              </span>
            </p>
          </div>

          {/* Audio Guide Player Box */}
          <div className="border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-4 mb-5 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E5E5E5]">
                <Headphones className="w-4 h-4 text-[#C5A059]" />
                <span className="uppercase tracking-wider text-[11px]">Audioguia Oficial da Obra</span>
              </div>
              <div className="flex items-center gap-1">
                {[1.0, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`px-2 py-0.5 text-[10px] font-mono uppercase transition ${
                      playbackRate === rate
                        ? 'bg-[#C5A059] text-black font-bold'
                        : 'text-white/50 hover:text-white bg-white/5 border border-white/10'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-white/60 line-clamp-2 italic mb-3">
              "{artwork.audioGuideTranscript}"
            </p>

            <div className="flex items-center gap-3">
              <button
                id="audio-guide-play-pause-btn"
                onClick={handleToggleAudio}
                className="flex items-center gap-2 bg-[#C5A059] px-4 py-2 text-xs font-medium uppercase tracking-wider text-black hover:brightness-110 transition cursor-pointer gold-glow"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    Pausar Narração
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Ouvir Audioguia
                  </>
                )}
              </button>

              {isPlaying && (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-3 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="w-1.5 h-4 bg-[#C5A059] rounded-full animate-pulse delay-75" />
                  <span className="w-1.5 h-2 bg-[#C5A059] rounded-full animate-pulse delay-150" />
                  <span className="text-[11px] text-[#C5A059] ml-1.5 font-mono uppercase">Narrando...</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Action Buttons (AR Wall & Offline) */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            <button
              id="artwork-ar-wall-shortcut-btn"
              onClick={() => {
                onOpenARWithArtwork(artwork);
                onClose();
              }}
              className="flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-white/80 hover:text-white hover:border-[#C5A059] transition cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-[#C5A059]" />
              Projetar em AR
            </button>

            <button
              id="artwork-toggle-offline-btn"
              onClick={() => onToggleOffline(artwork.id)}
              className={`flex items-center justify-center gap-2 border px-3 py-2.5 text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                isSavedOffline
                  ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300'
                  : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-white/30'
              }`}
            >
              {isSavedOffline ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Salvo Offline
                </>
              ) : (
                <>
                  <DownloadCloud className="w-4 h-4 text-white/50" />
                  Salvar Offline
                </>
              )}
            </button>
          </div>

          {/* Tabs Switcher for In-Depth Learning */}
          <div className="flex border-b border-white/10 mb-4">
            {(
              [
                { id: 'info', label: 'História & Contexto' },
                { id: 'tecnica', label: 'Técnica' },
                { id: 'simbolismo', label: 'Símbolos' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 py-2 text-xs font-medium uppercase tracking-wider text-center border-b-2 transition ${
                  activeTab === t.id
                    ? 'border-[#C5A059] text-[#C5A059]'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="flex-1 space-y-3 text-xs leading-relaxed text-white/70">
            {activeTab === 'info' && (
              <>
                <p>{artwork.description}</p>
                <div className="pt-2">
                  <h4 className="serif text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider mb-1">
                    Contexto Histórico:
                  </h4>
                  <p className="text-white/60">{artwork.historicalContext}</p>
                </div>
              </>
            )}

            {activeTab === 'tecnica' && (
              <>
                <div>
                  <h4 className="serif text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider mb-1">
                    Análise dos Materiais & Pincelada:
                  </h4>
                  <p className="text-white/60">{artwork.techniqueAnalysis}</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-white/50">Suporte & Meio:</span>
                    <span className="text-white font-medium">{artwork.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Dimensões Reais:</span>
                    <span className="text-[#C5A059] font-mono">
                      {artwork.dimensionsCm.width} cm × {artwork.dimensionsCm.height} cm
                    </span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'simbolismo' && (
              <>
                <div>
                  <h4 className="serif text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider mb-1">
                    Decodificação Simbólica e Iconografia:
                  </h4>
                  <p className="text-white/60">{artwork.symbolismAnalysis}</p>
                </div>
              </>
            )}

            {/* Extracted Classical Color Palette */}
            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-2">
                Paleta Cromática dos Pigmentos Clássicos:
              </span>
              <div className="flex items-center gap-2">
                {artwork.paletteColors.map((color, idx) => (
                  <div key={idx} className="group relative flex-1 text-center">
                    <div
                      className="h-7 w-full border border-white/20 shadow-sm transition group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-white/50 mt-1 block">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
