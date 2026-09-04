import React from 'react';
import {
  Image as GalleryIcon,
  Compass,
  Headphones,
  View,
  DownloadCloud,
  Wifi,
  WifiOff,
  Smartphone,
  Menu,
  X,
} from 'lucide-react';
import { AppTab } from '../types';

interface NavbarProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  isOnline: boolean;
  offlineCount: number;
  onOpenOfflineManager: () => void;
  onOpenInstallModal: () => void;
  isInstallable: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  isOnline,
  offlineCount,
  onOpenOfflineManager,
  onOpenInstallModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const tabs: { id: AppTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'galeria', label: 'Galerias', icon: GalleryIcon },
    { id: 'movimentos', label: 'Movimentos', icon: Compass },
    { id: 'tours', label: 'Tours Guiados', icon: Headphones },
    { id: 'ar', label: 'Realidade Aumentada', icon: View },
  ];

  return (
    <>
      <header
        id="main-museum-header"
        className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080808]/95 backdrop-blur-md px-4 sm:px-8 py-3 transition"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="brand-logo-container"
            onClick={() => onTabChange('galeria')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-9 h-9 border border-[#C5A059] bg-[#0A0A0A] flex items-center justify-center gold-glow transition group-hover:bg-[#C5A059]/10">
              <span className="serif text-base font-bold text-[#C5A059]">
                AR
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="serif text-sm sm:text-base font-bold text-[#E5E5E5] tracking-tight block leading-tight">
                  PINACOTECA
                </span>
                <span className="text-[10px] tracking-[0.25em] font-light text-[#C5A059] uppercase">
                  CLÁSSICA
                </span>
              </div>
              <span className="text-[9px] text-white/50 tracking-[0.2em] uppercase font-sans block">
                HD Explorer & AR
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-widest transition cursor-pointer ${
                    isActive
                      ? 'text-[#C5A059] bg-white/5 border border-[#C5A059]/40 gold-glow font-medium'
                      : 'text-white/60 hover:text-[#C5A059] hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A059]' : 'text-white/40'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2.5">
            {/* Offline Manager Toggle */}
            <button
              id="header-offline-btn"
              onClick={onOpenOfflineManager}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition cursor-pointer ${
                isOnline
                  ? 'border-white/10 bg-white/5 text-[#E5E5E5] hover:border-[#C5A059]/50'
                  : 'border-amber-500/40 bg-amber-950/30 text-amber-300'
              }`}
              title="Gerenciar Modo Offline"
            >
              {isOnline ? (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ) : (
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span className="hidden sm:inline text-[11px] tracking-wider uppercase opacity-80">
                {isOnline ? 'Online' : 'Offline'}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-[#C5A059] font-mono">
                {offlineCount}
              </span>
            </button>

            {/* Install PWA Button */}
            <button
              id="header-install-app-btn"
              onClick={onOpenInstallModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C5A059] text-black font-medium text-xs tracking-wider uppercase gold-glow hover:bg-white transition-colors cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-black" />
              <span className="hidden sm:inline text-[10px] tracking-[0.15em] font-semibold">
                Instalar App
              </span>
              <span className="sm:hidden text-[10px]">App</span>
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white rounded hover:bg-white/5 transition"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-1 bg-[#080808]"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`mobile-nav-tab-${tab.id}`}
                  onClick={() => {
                    onTabChange(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs uppercase tracking-widest transition ${
                    isActive
                      ? 'bg-white/5 text-[#C5A059] border-l-2 border-[#C5A059]'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-white/40'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs px-2 text-white/50">
              <span className="tracking-wider uppercase text-[10px]">
                {isOnline ? 'Conectado à nuvem' : 'Modo Offline ativo'}
              </span>
              <button
                onClick={() => {
                  onOpenOfflineManager();
                  setMobileMenuOpen(false);
                }}
                className="text-[#C5A059] underline text-[11px] tracking-wide cursor-pointer"
              >
                Cache ({offlineCount})
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Floating Bottom Bar */}
      <nav
        id="mobile-bottom-navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-around"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 transition ${
                isActive ? 'text-[#C5A059]' : 'text-white/40 hover:text-white/70'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#C5A059]' : 'text-white/40'}`} />
              <span className="text-[9px] uppercase tracking-wider font-medium">{tab.label}</span>
              {isActive && <div className="w-1 h-1 rounded-full bg-[#C5A059] mt-0.5" />}
            </button>
          );
        })}
      </nav>
    </>
  );
};
