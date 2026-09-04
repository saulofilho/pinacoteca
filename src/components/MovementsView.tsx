import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Scale,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Maximize2,
  Users,
} from 'lucide-react';
import { Movement, ArtisticMovementId, Artwork } from '../types';
import { MOVEMENTS } from '../data/movements';
import { ARTWORKS } from '../data/artworks';

interface MovementsViewProps {
  initialMovementId?: ArtisticMovementId;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const MovementsView: React.FC<MovementsViewProps> = ({
  initialMovementId = 'renascimento',
  onSelectArtwork,
}) => {
  const [selectedId, setSelectedId] = useState<ArtisticMovementId>(initialMovementId);
  const [comparisonA, setComparisonA] = useState<ArtisticMovementId>('renascimento');
  const [comparisonB, setComparisonB] = useState<ArtisticMovementId>('barroco');
  const [isComparing, setIsComparing] = useState(false);

  const currentMovement = MOVEMENTS.find((m) => m.id === selectedId) || MOVEMENTS[0];
  const movementArtworks = ARTWORKS.filter((a) => a.movementId === selectedId);

  const movA = MOVEMENTS.find((m) => m.id === comparisonA) || MOVEMENTS[0];
  const movB = MOVEMENTS.find((m) => m.id === comparisonB) || MOVEMENTS[2];

  return (
    <div id="movements-view-section" className="space-y-8 pb-20">
      {/* Hero Header */}
      <div className="border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.2em] font-medium block mb-2">
              Cronologia Estética • Séculos XIV ao XIX
            </span>
            <h1 className="serif text-2xl sm:text-4xl text-[#E5E5E5] tracking-tight">
              Movimentos da Arte Clássica
            </h1>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Compreenda as rupturas, revoluções técnicas e a filosofia que moldaram séculos de pintura na Europa.
            </p>
          </div>

          {/* Toggle Compare Mode */}
          <button
            id="toggle-movements-comparator-btn"
            onClick={() => setIsComparing(!isComparing)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
              isComparing
                ? 'bg-[#C5A059] text-black gold-glow'
                : 'border border-white/20 bg-white/5 text-[#E5E5E5] hover:border-[#C5A059] hover:text-[#C5A059]'
            }`}
          >
            <Scale className="w-4 h-4" />
            {isComparing ? 'Fechar Comparador' : 'Comparar 2 Movimentos'}
          </button>
        </div>
      </div>

      {/* COMPARATOR MODE VIEW */}
      {isComparing ? (
        <div className="border border-white/10 bg-[#121212] p-6 shadow-2xl space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#C5A059]" />
              <h2 className="serif text-lg font-bold text-[#E5E5E5]">
                Comparador Dialético de Estilos Artísticos
              </h2>
            </div>
            <span className="text-xs text-white/50 tracking-wider uppercase">
              Análise Filosófica & Óptica
            </span>
          </div>

          {/* Selectors for Movement A & B */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movement A Selector */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-[#C5A059] uppercase tracking-[0.2em] block">
                Movimento A:
              </label>
              <select
                value={comparisonA}
                onChange={(e) => setComparisonA(e.target.value as ArtisticMovementId)}
                className="w-full p-2.5 bg-white/5 border border-white/15 text-[#E5E5E5] serif font-bold text-sm focus:border-[#C5A059] cursor-pointer"
              >
                {MOVEMENTS.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white">
                    {m.name} ({m.century})
                  </option>
                ))}
              </select>

              <div className="p-4 border border-white/10 bg-[#0c0c0c] space-y-3 text-xs">
                <p className="text-white/80 serif italic text-sm border-l border-[#C5A059] pl-3">
                  "{movA.summary}"
                </p>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Filosofia Central:</span>
                  <p className="text-white/60 leading-relaxed">{movA.philosophy}</p>
                </div>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Mestres Pioneiros:</span>
                  <p className="text-white/80">{movA.pioneeringMasters.join(', ')}</p>
                </div>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Tratamento da Luz & Espaço:</span>
                  <p className="text-white/60 leading-relaxed">{movA.keyCharacteristics[0]}</p>
                </div>
              </div>
            </div>

            {/* Movement B Selector */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-[#C5A059] uppercase tracking-[0.2em] block">
                Movimento B:
              </label>
              <select
                value={comparisonB}
                onChange={(e) => setComparisonB(e.target.value as ArtisticMovementId)}
                className="w-full p-2.5 bg-white/5 border border-white/15 text-[#E5E5E5] serif font-bold text-sm focus:border-[#C5A059] cursor-pointer"
              >
                {MOVEMENTS.map((m) => (
                  <option key={m.id} value={m.id} className="bg-[#121212] text-white">
                    {m.name} ({m.century})
                  </option>
                ))}
              </select>

              <div className="p-4 border border-white/10 bg-[#0c0c0c] space-y-3 text-xs">
                <p className="text-white/80 serif italic text-sm border-l border-[#C5A059] pl-3">
                  "{movB.summary}"
                </p>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Filosofia Central:</span>
                  <p className="text-white/60 leading-relaxed">{movB.philosophy}</p>
                </div>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Mestres Pioneiros:</span>
                  <p className="text-white/80">{movB.pioneeringMasters.join(', ')}</p>
                </div>
                <div>
                  <span className="text-[#C5A059] uppercase tracking-wider text-[10px] block mb-1">Tratamento da Luz & Espaço:</span>
                  <p className="text-white/60 leading-relaxed">{movB.keyCharacteristics[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Interactive Horizontal Timeline Tabs */}
      <div className="space-y-2">
        <h3 className="text-[10px] uppercase tracking-[0.25em] text-white/40 px-1 font-medium">
          Linha do Tempo dos Movimentos
        </h3>
        <div className="flex items-center gap-3 overflow-x-auto pb-3 scrollbar-none">
          {MOVEMENTS.map((mov) => {
            const isSelected = selectedId === mov.id;
            return (
              <button
                key={mov.id}
                id={`timeline-btn-${mov.id}`}
                onClick={() => setSelectedId(mov.id)}
                className={`relative flex-shrink-0 flex flex-col items-start p-4 border transition text-left cursor-pointer min-w-[190px] ${
                  isSelected
                    ? 'border-l-2 border-l-[#C5A059] border-t-white/10 border-r-white/10 border-b-white/10 bg-white/5 gold-glow'
                    : 'border-l-2 border-l-transparent border-t-white/5 border-r-white/5 border-b-white/5 bg-[#0c0c0c] hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  {mov.period}
                </span>
                <span
                  className={`serif text-base font-bold mt-1 ${
                    isSelected ? 'text-[#E5E5E5]' : 'text-white/80'
                  }`}
                >
                  {mov.name}
                </span>
                <span className="text-[11px] text-white/50 mt-1 line-clamp-1">
                  {mov.century}
                </span>

                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Movement Deep Dive Card */}
      <div className="border border-white/10 bg-[#121212] overflow-hidden shadow-2xl">
        {/* Banner Section */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-black">
          <img
            src={currentMovement.bannerImage}
            alt={currentMovement.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 artwork-gradient" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span
                className="px-3 py-1 text-xs uppercase tracking-widest text-white inline-block mb-2 backdrop-blur-md border border-white/10"
                style={{ backgroundColor: `${currentMovement.colorAccent}99` }}
              >
                {currentMovement.period}
              </span>
              <h2 className="serif text-3xl sm:text-5xl font-bold text-[#E5E5E5]">
                {currentMovement.name}
              </h2>
            </div>
            <div className="text-xs font-mono text-white/70 bg-black/70 px-3 py-1.5 border border-white/10 backdrop-blur-md">
              {currentMovement.century}
            </div>
          </div>
        </div>

        {/* Content Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary Quote */}
          <div className="p-4 border-l-2 border-[#C5A059] bg-white/5">
            <p className="serif italic text-base sm:text-lg text-white/90">
              "{currentMovement.summary}"
            </p>
          </div>

          {/* Two-Column History & Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="serif text-base font-bold text-[#E5E5E5] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                Contexto Histórico e Surgimento:
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                {currentMovement.fullHistory}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <h3 className="serif text-base font-bold text-[#E5E5E5] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  Fundamentos Filosóficos:
                </h3>
                <p className="text-xs text-white/70 leading-relaxed bg-[#0c0c0c] p-3.5 border border-white/10">
                  {currentMovement.philosophy}
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="serif text-base font-bold text-[#E5E5E5] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C5A059]" />
                  Mestres Pioneiros:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {currentMovement.pioneeringMasters.map((artist, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-xs text-white/80 font-medium"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059]">
              5 Características Técnicas Fundamentais
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentMovement.keyCharacteristics.map((char, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 border border-white/10 bg-[#0c0c0c] text-xs text-white/70"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-[11px] font-mono">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contrast section */}
          <div className="p-4 border border-white/10 bg-[#0a0a0a] text-xs text-white/60">
            <strong className="text-[#C5A059]">Diferenciação Estética: </strong>
            {currentMovement.contrastWithOther}
          </div>

          {/* Masterpieces in this Movement */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="serif text-base font-bold text-[#E5E5E5]">
                Obras em Destaque no Acervo ({movementArtworks.length}):
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movementArtworks.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArtwork(art)}
                  className="group border border-white/10 bg-[#0c0c0c] hover:border-[#C5A059]/70 hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] p-3 transition cursor-pointer flex items-center gap-3"
                >
                  <img
                    src={art.thumbUrl}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 object-cover border border-white/10 group-hover:border-[#C5A059]"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="serif text-xs font-bold text-[#E5E5E5] truncate group-hover:text-[#C5A059] transition">
                      {art.title}
                    </h4>
                    <p className="text-[11px] text-white/50 truncate">{art.artist}</p>
                    <span className="text-[10px] font-mono text-[#C5A059]">{art.year}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#C5A059] transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
