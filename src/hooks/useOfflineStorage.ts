import { useState, useEffect, useCallback } from 'react';
import { ARTWORKS } from '../data/artworks';

const STORAGE_KEY = 'pinacoteca_offline_artwork_ids_v1';

export function useOfflineStorage() {
  const [downloadedIds, setDownloadedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : ['mona-lisa', 'moca-brinco-perola', 'nascimento-de-venus'];
    } catch {
      return ['mona-lisa', 'moca-brinco-perola', 'nascimento-de-venus'];
    }
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(downloadedIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [downloadedIds]);

  const isArtworkOffline = useCallback(
    (id: string) => downloadedIds.includes(id),
    [downloadedIds]
  );

  const saveArtworkOffline = async (id: string) => {
    if (downloadedIds.includes(id)) return;
    const artwork = ARTWORKS.find((a) => a.id === id);
    if (!artwork) return;

    try {
      if ('caches' in window) {
        const cache = await caches.open('artwork-hd-images');
        await cache.addAll([artwork.imageUrl, artwork.thumbUrl]);
      }
    } catch (e) {
      console.warn('Cache API fetch warning, fallback stored:', e);
    }

    setDownloadedIds((prev) => [...prev, id]);
  };

  const removeArtworkOffline = (id: string) => {
    setDownloadedIds((prev) => prev.filter((item) => item !== id));
  };

  const downloadAllMasterpieces = async () => {
    setIsDownloading(true);
    setDownloadProgress(10);

    const total = ARTWORKS.length;
    let count = 0;

    for (const art of ARTWORKS) {
      try {
        if ('caches' in window) {
          const cache = await caches.open('artwork-hd-images');
          await Promise.allSettled([
            cache.add(art.imageUrl),
            cache.add(art.thumbUrl)
          ]);
        }
      } catch (e) {
        console.warn('Caching item error:', e);
      }
      count++;
      setDownloadProgress(Math.round((count / total) * 100));
    }

    const allIds = ARTWORKS.map((a) => a.id);
    setDownloadedIds(allIds);
    setIsDownloading(false);
  };

  const clearOfflineStorage = async () => {
    setDownloadedIds([]);
    try {
      if ('caches' in window) {
        await caches.delete('artwork-hd-images');
      }
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed clearing cache:', e);
    }
  };

  return {
    downloadedIds,
    isArtworkOffline,
    saveArtworkOffline,
    removeArtworkOffline,
    downloadAllMasterpieces,
    clearOfflineStorage,
    isDownloading,
    downloadProgress,
    totalDownloaded: downloadedIds.length,
    totalAvailable: ARTWORKS.length,
  };
}
