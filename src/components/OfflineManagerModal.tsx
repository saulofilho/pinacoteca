import React from 'react';
import { DownloadCloud, CheckCircle, Wifi, WifiOff, Trash2, X, HardDrive } from 'lucide-react';
import { ARTWORKS } from '../data/artworks';

interface OfflineManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOnline: boolean;
  downloadedIds: string[];
  isDownloading: boolean;
  downloadProgress: number;
  onDownloadAll: () => Promise<void>;
  onClearOffline: () => Promise<void>;
  onSelectArtwork: (artworkId: string) => void;
}

export const OfflineManagerModal: React.FC<OfflineManagerModalProps> = ({
  isOpen,
  onClose,
  isOnline,
  downloadedIds,
  isDownloading,
  downloadProgress,
  onDownloadAll,
  onClearOffline,
  onSelectArtwork,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="offline-manager-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="offline-manager-card"
        className="relative w-full max-w-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 shadow-2xl text-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="offline-manager-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] gold-glow">
            <DownloadCloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="serif text-xl font-bold text-[#E5E5E5]">
              Gerenciador de Modo Offline
            </h3>
            <p className="text-xs text-white/50">
              Explore a pinacoteca mesmo sem internet durante viagens ou voos
            </p>
          </div>
        </div>

        {/* Connectivity status banner */}
        <div
          className={`flex items-center justify-between px-4 py-3 mb-5 border ${
            isOnline
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-amber-950/40 border-[#C5A059]/40 text-amber-200'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[11px]">
            {isOnline ? (
              <>
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>Conexão ativa à internet (Online)</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-[#C5A059]" />
                <span>Modo Offline ativo — Cache local</span>
              </>
            )}
          </div>
          <span className="text-[11px] px-2.5 py-0.5 bg-black/60 border border-white/10 font-mono">
            {downloadedIds.length} de {ARTWORKS.length} salvas
          </span>
        </div>

        {/* Storage stats */}
        <div className="border border-white/10 bg-white/5 p-4 mb-5 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-white/70 uppercase tracking-wider text-[11px]">
              <HardDrive className="w-4 h-4 text-[#C5A059]" />
              Armazenamento Local
            </span>
            <span className="text-[#C5A059] font-mono">
              ~{(downloadedIds.length * 1.8).toFixed(1)} MB em cache
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#C5A059] transition-all duration-300 gold-glow"
              style={{ width: `${(downloadedIds.length / ARTWORKS.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              id="download-all-masterpieces-btn"
              disabled={isDownloading || downloadedIds.length === ARTWORKS.length}
              onClick={onDownloadAll}
              className="flex items-center gap-2 bg-[#C5A059] px-4 py-2 text-xs font-medium uppercase tracking-wider text-black hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition gold-glow"
            >
              <DownloadCloud className="w-4 h-4" />
              {isDownloading
                ? `Baixando... (${downloadProgress}%)`
                : downloadedIds.length === ARTWORKS.length
                ? 'Coleção Salva'
                : 'Baixar Todas em HD'}
            </button>

            {downloadedIds.length > 0 && (
              <button
                id="clear-offline-cache-btn"
                onClick={onClearOffline}
                className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 uppercase tracking-wider text-[11px] transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Limpar Cache
              </button>
            )}
          </div>
        </div>

        {/* List of downloaded artworks */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
            Obras Disponíveis Offline:
          </h4>
          <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
            {ARTWORKS.map((art) => {
              const isSaved = downloadedIds.includes(art.id);
              return (
                <div
                  key={art.id}
                  className="flex items-center justify-between border border-white/10 bg-white/5 p-2.5 hover:border-[#C5A059]/50 transition cursor-pointer"
                  onClick={() => {
                    onSelectArtwork(art.id);
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={art.thumbUrl}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-cover border border-white/10"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#E5E5E5] line-clamp-1 serif">
                        {art.title}
                      </p>
                      <p className="text-[11px] text-white/50">
                        {art.artist} • {art.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSaved ? (
                      <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1">
                        <CheckCircle className="w-3 h-3" />
                        Offline
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-white/40">
                        Requer conexão
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
