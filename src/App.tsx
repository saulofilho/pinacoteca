import React, { useState } from 'react';
import { AppTab, Artwork, ArtisticMovementId } from './types';
import { Navbar } from './components/Navbar';
import { GalleryView } from './components/GalleryView';
import { MovementsView } from './components/MovementsView';
import { CuratedToursView } from './components/CuratedToursView';
import { ARView } from './components/ARView';
import { ArtworkDetailModal } from './components/ArtworkDetailModal';
import { PWAInstallModal } from './components/PWAInstallModal';
import { OfflineManagerModal } from './components/OfflineManagerModal';

import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useOfflineStorage } from './hooks/useOfflineStorage';
import { usePWAInstall } from './hooks/usePWAInstall';
import { ARTWORKS } from './data/artworks';

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>('galeria');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [arTargetArtwork, setArTargetArtwork] = useState<Artwork | undefined>(undefined);
  const [targetMovementId, setTargetMovementId] = useState<ArtisticMovementId | undefined>('renascimento');

  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState<boolean>(false);

  const isOnline = useOnlineStatus();
  const { isInstallable } = usePWAInstall();

  const {
    downloadedIds,
    isArtworkOffline,
    saveArtworkOffline,
    removeArtworkOffline,
    downloadAllMasterpieces,
    clearOfflineStorage,
    isDownloading,
    downloadProgress,
  } = useOfflineStorage();

  const handleToggleOffline = (artworkId: string) => {
    if (isArtworkOffline(artworkId)) {
      removeArtworkOffline(artworkId);
    } else {
      saveArtworkOffline(artworkId);
    }
  };

  const handleOpenARWithArtwork = (artwork: Artwork) => {
    setArTargetArtwork(artwork);
    setCurrentTab('ar');
  };

  const handleGoToMovements = (movementId?: ArtisticMovementId) => {
    if (movementId) {
      setTargetMovementId(movementId);
    }
    setCurrentTab('movimentos');
  };

  const handleSelectArtworkById = (artworkId: string) => {
    const art = ARTWORKS.find((a) => a.id === artworkId);
    if (art) {
      setSelectedArtwork(art);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] flex flex-col selection:bg-[#C5A059] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        isOnline={isOnline}
        offlineCount={downloadedIds.length}
        onOpenOfflineManager={() => setIsOfflineModalOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        isInstallable={isInstallable}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6">
        {currentTab === 'galeria' && (
          <GalleryView
            onSelectArtwork={setSelectedArtwork}
            onOpenARWithArtwork={handleOpenARWithArtwork}
            downloadedIds={downloadedIds}
            onToggleOffline={handleToggleOffline}
            onGoToMovements={handleGoToMovements}
          />
        )}

        {currentTab === 'movimentos' && (
          <MovementsView
            initialMovementId={targetMovementId}
            onSelectArtwork={setSelectedArtwork}
          />
        )}

        {currentTab === 'tours' && (
          <CuratedToursView
            onSelectArtwork={setSelectedArtwork}
            onOpenARWithArtwork={handleOpenARWithArtwork}
          />
        )}

        {currentTab === 'ar' && (
          <ARView
            initialArtwork={arTargetArtwork}
            onSelectArtwork={setSelectedArtwork}
          />
        )}
      </main>

      {/* Elegant Dark Footer */}
      <footer className="border-t border-white/5 bg-[#080808] py-6 px-4 sm:px-8 text-xs text-zinc-400 mb-14 md:mb-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-sm font-bold tracking-wider text-[#C5A059]">
              PINACOTECA CLÁSSICA AR
            </span>
            <span className="opacity-30">|</span>
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-light">
              Acervo HD & Projeção Espacial
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] tracking-wider uppercase opacity-70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              PWA iOS & Android
            </span>
            <span className="opacity-30">•</span>
            <button
              onClick={() => setIsOfflineModalOpen(true)}
              className="text-[#C5A059] hover:underline cursor-pointer transition"
            >
              Cache Offline ({downloadedIds.length} obras)
            </button>
            <span className="opacity-30">•</span>
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="hover:text-white cursor-pointer transition"
            >
              Instalar Aplicativo
            </button>
          </div>
        </div>
      </footer>

      {/* Artwork Deep Inspection Modal */}
      {selectedArtwork && (
        <ArtworkDetailModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onOpenARWithArtwork={handleOpenARWithArtwork}
          isSavedOffline={isArtworkOffline(selectedArtwork.id)}
          onToggleOffline={handleToggleOffline}
        />
      )}

      {/* PWA Install Modal (iOS & Android) */}
      <PWAInstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* Offline Storage Manager Modal */}
      <OfflineManagerModal
        isOpen={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
        isOnline={isOnline}
        downloadedIds={downloadedIds}
        isDownloading={isDownloading}
        downloadProgress={downloadProgress}
        onDownloadAll={downloadAllMasterpieces}
        onClearOffline={clearOfflineStorage}
        onSelectArtwork={handleSelectArtworkById}
      />
    </div>
  );
}
