import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Maximize2,
  Headphones,
  CheckCircle2,
  Sparkles,
  Layers,
  LayoutGrid,
  Columns,
  Compass,
  Shuffle,
} from 'lucide-react';
import { Artwork, ArtisticMovementId, GalleryViewMode } from '../types';
import { ARTWORKS } from '../data/artworks';
import { MOVEMENTS } from '../data/movements';

interface GalleryViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenARWithArtwork: (artwork: Artwork) => void;
  downloadedIds: string[];
  onToggleOffline: (artworkId: string) => void;
  onGoToMovements: (movementId?: ArtisticMovementId) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onSelectArtwork,
  onOpenARWithArtwork,
  downloadedIds,
  onToggleOffline,
  onGoToMovements,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovement, setSelectedMovement] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<GalleryViewMode>('grid');
  const [sortBy, setSortBy] = useState<'year' | 'artist' | 'title'>('year');

  // Random / Daily Artwork of the Day state
  const [artworkOfTheDayIndex, setArtworkOfTheDayIndex] = useState<number>(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.abs(dayOfYear) % ARTWORKS.length;
  });

  const handleShuffleArtworkOfTheDay = () => {
    setArtworkOfTheDayIndex((prev) => {
      let next = Math.floor(Math.random() * ARTWORKS.length);
      if (next === prev) next = (next + 1) % ARTWORKS.length;
      return next;
    });
  };

  const artworkOfTheDay = ARTWORKS[artworkOfTheDayIndex] || ARTWORKS[0];
  const movementOfTheDay = MOVEMENTS.find((m) => m.id === artworkOfTheDay.movementId);

  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.museum.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.medium.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMovement =
        selectedMovement === 'todos' || art.movementId === selectedMovement;

      return matchesSearch && matchesMovement;
    }).sort((a, b) => {
      if (sortBy === 'artist') return a.artist.localeCompare(b.artist);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      // Sort roughly by year
      const yearA = parseInt(a.year.replace(/\D/g, '') || '0', 10);
      const yearB = parseInt(b.year.replace(/\D/g, '') || '0', 10);
      return yearA - yearB;
    });
  }, [searchQuery, selectedMovement, sortBy]);

  const movementButtons = [
    { id: 'todos', label: 'Todas as Obras' },
    ...MOVEMENTS.map((m) => ({ id: m.id, label: m.name })),
  ];

  return (
    <div id="gallery-view-section" className="space-y-6 pb-20">
      {/* Top Hero Banner */}
      <div className="relative border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A059] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.2em] font-medium block">
              Acervo Clássico • Resolução Microscópica
            </span>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <span className="text-[10px] uppercase tracking-wider text-white/70">Ultra-HD • Sincronizado</span>
            </div>
          </div>
          <h1 className="serif text-2xl sm:text-4xl text-[#E5E5E5] tracking-tight leading-tight mb-3">
            Galerias de Arte Clássica
          </h1>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            Navegue pelos tesouros do Louvre, Uffizi, Prado e Rijksmuseum. Inspecione pinceladas com superzoom, ouça audioguias curados e projete obras em tamanho real na parede com Realidade Aumentada.
          </p>
        </div>
      </div>

      {/* Obra do Dia (Artwork of the Day) Informative Card */}
      <div
        id="artwork-of-the-day-card"
        className="relative border border-[#C5A059]/40 bg-gradient-to-r from-[#181612] via-[#121212] to-[#0d0d0d] p-4 sm:p-5 overflow-hidden shadow-xl"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Thumbnail preview */}
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden border border-white/10 group cursor-pointer bg-black"
            onClick={() => onSelectArtwork(artworkOfTheDay)}
          >
            <img
              src={artworkOfTheDay.thumbUrl}
              alt={artworkOfTheDay.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-1 right-1 p-1 bg-black/80 text-[#C5A059] border border-white/10">
              <Maximize2 className="w-3 h-3" />
            </div>
          </div>

          {/* Info content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-widest font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Obra do Dia
                </span>
                <span
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-white/10 text-white/70"
                  style={{ backgroundColor: `${movementOfTheDay?.colorAccent}33` }}
                >
                  {movementOfTheDay?.name}
                </span>
              </div>

              <button
                id="shuffle-artwork-of-day-btn"
                onClick={handleShuffleArtworkOfTheDay}
                className="flex items-center gap-1 text-[11px] text-white/60 hover:text-[#C5A059] px-2.5 py-1 bg-white/5 border border-white/10 hover:border-[#C5A059]/40 transition cursor-pointer"
                title="Sortear outra obra do acervo"
              >
                <Shuffle className="w-3 h-3" />
                <span className="hidden sm:inline">Sortear Outra</span>
              </button>
            </div>

            <h3
              onClick={() => onSelectArtwork(artworkOfTheDay)}
              className="serif text-base sm:text-xl font-bold text-[#E5E5E5] hover:text-[#C5A059] transition cursor-pointer line-clamp-1"
            >
              {artworkOfTheDay.title}
            </h3>
            <p className="text-xs text-white/60 mb-2">
              <span className="text-white/85 font-medium">{artworkOfTheDay.artist}</span> ({artworkOfTheDay.artistLifespan}) • <span className="text-[#C5A059]">{artworkOfTheDay.year}</span> • {artworkOfTheDay.museum}
            </p>

            <p className="text-xs text-white/50 line-clamp-2 leading-relaxed mb-3">
              {artworkOfTheDay.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <button
                id="artwork-of-day-explore-btn"
                onClick={() => onSelectArtwork(artworkOfTheDay)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A059] text-black text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition gold-glow cursor-pointer"
              >
                <Headphones className="w-3.5 h-3.5" />
                Explorar em Alta Resolução
              </button>

              <button
                id="artwork-of-day-ar-btn"
                onClick={() => onOpenARWithArtwork(artworkOfTheDay)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-[#C5A059]/50 text-xs font-medium uppercase tracking-wider transition cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                Projetar em AR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 border border-white/10 bg-[#0c0c0c]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            id="artwork-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar por obra, artista, museu ou técnica (ex: Leonardo, Barroco, Louvre)..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#E5E5E5] text-xs placeholder:text-white/40 focus:outline-none focus:border-[#C5A059] transition"
          />
        </div>

        {/* View Mode & Sort Controls */}
        <div className="flex items-center gap-2">
          {/* Sort Selector */}
          <select
            id="gallery-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white/80 text-xs focus:outline-none focus:border-[#C5A059] cursor-pointer"
          >
            <option value="year" className="bg-[#121212] text-white">Ordem Cronológica</option>
            <option value="title" className="bg-[#121212] text-white">Título da Obra</option>
            <option value="artist" className="bg-[#121212] text-white">Nome do Artista</option>
          </select>

          {/* View Mode Switcher */}
          <div className="flex items-center border border-white/10 rounded p-0.5 bg-black/40">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#C5A059] text-black font-medium gold-glow'
                  : 'text-white/40 hover:text-white'
              }`}
              title="Visualização em Grade"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('spotlight')}
              className={`p-1.5 rounded transition cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-[#C5A059] text-black font-medium gold-glow'
                  : 'text-white/40 hover:text-white'
              }`}
              title="Visualização em Destaques"
            >
              <Columns className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Movement Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {movementButtons.map((btn) => {
          const isSelected = selectedMovement === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setSelectedMovement(btn.id)}
              className={`px-3.5 py-1.5 text-xs tracking-wider uppercase transition cursor-pointer ${
                isSelected
                  ? 'bg-[#C5A059] text-black font-semibold gold-glow'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:border-white/20 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-white/50 px-1">
        <span>
          Exibindo <strong className="text-[#C5A059]">{filteredArtworks.length}</strong> obras-primas
        </span>
        {selectedMovement !== 'todos' && (
          <button
            onClick={() => onGoToMovements(selectedMovement as ArtisticMovementId)}
            className="flex items-center gap-1 text-[#C5A059] hover:underline cursor-pointer tracking-wide"
          >
            <Compass className="w-3.5 h-3.5" />
            Movimento {MOVEMENTS.find((m) => m.id === selectedMovement)?.name}
          </button>
        )}
      </div>

      {/* ARTWORKS CONTAINER: Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art) => {
            const isOffline = downloadedIds.includes(art.id);
            const movement = MOVEMENTS.find((m) => m.id === art.movementId);

            return (
              <div
                key={art.id}
                id={`artwork-card-${art.id}`}
                className="group relative flex flex-col border border-white/10 bg-[#121212] hover:border-[#C5A059]/60 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition duration-300 overflow-hidden"
              >
                {/* Artwork Image Container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => onSelectArtwork(art)}
                >
                  <img
                    src={art.thumbUrl || art.imageUrl}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 artwork-gradient opacity-90 group-hover:opacity-70 transition-opacity" />

                  {/* Badges on top of image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 text-[10px] font-semibold text-white uppercase tracking-widest backdrop-blur-md border border-white/10"
                      style={{ backgroundColor: `${movement?.colorAccent}99` }}
                    >
                      {movement?.name}
                    </span>

                    {isOffline && (
                      <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                        <CheckCircle2 className="w-3 h-3" />
                        Offline
                      </span>
                    )}
                  </div>

                  {/* Dimensions badge at bottom right of image */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/70 border border-white/10">
                    {art.dimensionsCm.width} × {art.dimensionsCm.height} cm
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#121212]">
                  <div onClick={() => onSelectArtwork(art)} className="cursor-pointer">
                    <h3 className="serif text-base font-bold text-[#E5E5E5] group-hover:text-[#C5A059] transition line-clamp-1">
                      {art.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-0.5">
                      {art.artist} • <span className="font-mono text-[#C5A059]">{art.year}</span>
                    </p>
                    <p className="text-[11px] text-white/40 mt-1 line-clamp-1">
                      {art.museum}, {art.city}
                    </p>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectArtwork(art)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 hover:border-[#C5A059]/60 border border-white/10 text-xs text-white/80 hover:text-white transition cursor-pointer"
                    >
                      <Headphones className="w-3.5 h-3.5 text-[#C5A059]" />
                      Audioguia & HD
                    </button>

                    <button
                      onClick={() => onOpenARWithArtwork(art)}
                      className="flex items-center justify-center p-2 bg-[#C5A059]/15 hover:bg-[#C5A059] hover:text-black border border-[#C5A059]/50 text-[#C5A059] transition cursor-pointer gold-glow"
                      title="Projetar em Realidade Aumentada (AR)"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ARTWORKS CONTAINER: Spotlight View */}
      {viewMode === 'spotlight' && (
        <div className="space-y-6">
          {filteredArtworks.map((art) => {
            const isOffline = downloadedIds.includes(art.id);
            const movement = MOVEMENTS.find((m) => m.id === art.movementId);

            return (
              <div
                key={art.id}
                className="flex flex-col md:flex-row border border-white/10 bg-[#121212] hover:border-[#C5A059]/60 shadow-2xl overflow-hidden transition"
              >
                <div
                  className="md:w-1/2 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-black cursor-pointer group"
                  onClick={() => onSelectArtwork(art)}
                >
                  <img
                    src={art.thumbUrl || art.imageUrl}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-white uppercase tracking-widest backdrop-blur-md border border-white/10"
                    style={{ backgroundColor: `${movement?.colorAccent}cc` }}
                  >
                    {movement?.name}
                  </div>
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-between bg-[#121212]">
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-1">
                      <span>{art.museum}, {art.city}</span>
                      <span className="font-mono text-[#C5A059]">{art.year}</span>
                    </div>
                    <h2 className="serif text-2xl font-bold text-[#E5E5E5] mb-1">
                      {art.title}
                    </h2>
                    <p className="text-xs text-[#C5A059] font-medium tracking-wide mb-3">
                      {art.artist} ({art.artistLifespan})
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                      {art.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => onSelectArtwork(art)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C5A059] text-black font-medium text-xs tracking-wider uppercase gold-glow hover:bg-white transition cursor-pointer"
                    >
                      <Headphones className="w-4 h-4 fill-current" />
                      Explorar em Super-HD & Audioguia
                    </button>
                    <button
                      onClick={() => onOpenARWithArtwork(art)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 border border-white/20 text-xs uppercase tracking-wider text-white/80 hover:border-[#C5A059] hover:text-[#C5A059] transition cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                      AR na Parede
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
