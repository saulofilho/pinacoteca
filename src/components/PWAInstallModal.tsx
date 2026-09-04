import React from 'react';
import { Smartphone, Apple, CheckCircle2, Download, X, ShieldCheck, Zap } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      onClose();
    }
  };

  return (
    <div
      id="pwa-install-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="pwa-install-modal-card"
        className="relative w-full max-w-lg border border-white/10 bg-[#121212] p-6 sm:p-8 shadow-2xl text-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="pwa-install-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 bg-[#C5A059] p-0.5 flex items-center justify-center shadow-lg gold-glow">
            <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center">
              <span className="serif text-base font-bold text-[#C5A059]">AR</span>
            </div>
          </div>
          <div>
            <h3 className="serif text-xl font-bold text-[#E5E5E5]">
              Instalar Pinacoteca Clássica
            </h3>
            <p className="text-xs text-white/50">
              Aplicativo Nativo para iOS, iPadOS e Android
            </p>
          </div>
        </div>

        {/* Benefits pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5">
          <div className="border border-white/10 bg-white/5 p-3 text-center">
            <Zap className="w-5 h-5 text-[#C5A059] mx-auto mb-1.5" />
            <p className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider text-[11px]">100% Offline</p>
            <p className="text-[11px] text-white/40 mt-0.5">Sem internet</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-3 text-center">
            <Smartphone className="w-5 h-5 text-[#C5A059] mx-auto mb-1.5" />
            <p className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider text-[11px]">Tela Cheia</p>
            <p className="text-[11px] text-white/40 mt-0.5">Sem barras de URL</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-3 text-center">
            <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1.5" />
            <p className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider text-[11px]">AR & Câmera</p>
            <p className="text-[11px] text-white/40 mt-0.5">Acesso direto</p>
          </div>
        </div>

        {isInstalled ? (
          <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 text-center my-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-emerald-200 uppercase tracking-wider text-xs">
              O aplicativo já está instalado no seu dispositivo!
            </p>
            <p className="text-xs text-white/50 mt-1">
              Abra-o a partir da tela inicial do seu celular ou computador.
            </p>
          </div>
        ) : isInstallable ? (
          <div className="space-y-4 my-4">
            <p className="text-xs text-white/60">
              Seu navegador oferece suporte direto à instalação instantânea.
            </p>
            <button
              id="pwa-native-install-button"
              onClick={handleInstallClick}
              className="w-full flex items-center justify-center gap-2.5 bg-[#C5A059] py-3.5 px-6 font-medium text-black text-xs uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-[0.99] transition cursor-pointer gold-glow"
            >
              <Download className="w-4 h-4" />
              Instalar Aplicativo Agora
            </button>
          </div>
        ) : isIOS ? (
          <div className="border border-white/10 bg-white/5 p-4 my-4 space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
              <Apple className="w-4 h-4 text-white" />
              Como instalar no iPhone ou iPad:
            </div>
            <ol className="text-xs text-white/70 space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-[#C5A059] text-black font-bold text-[11px]">
                  1
                </span>
                <span>
                  No navegador <strong>Safari</strong> do iOS, toque no botão de{' '}
                  <strong className="text-[#C5A059]">Compartilhar</strong> (ícone com quadrado e seta para cima).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-[#C5A059] text-black font-bold text-[11px]">
                  2
                </span>
                <span>
                  Role o menu para baixo e selecione a opção{' '}
                  <strong className="text-[#C5A059]">"Adicionar à Tela de Início"</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-[#C5A059] text-black font-bold text-[11px]">
                  3
                </span>
                <span>
                  Toque em <strong className="text-[#C5A059]">"Adicionar"</strong> no canto superior direito.
                </span>
              </li>
            </ol>
          </div>
        ) : (
          <div className="border border-white/10 bg-white/5 p-4 my-4 space-y-2">
            <p className="text-xs text-white/70">
              Para instalar este aplicativo no seu computador ou celular:
            </p>
            <p className="text-xs text-white/50">
              Clique no ícone de instalação <Download className="inline w-3.5 h-3.5 text-[#C5A059]" /> na barra de endereços do seu navegador Chrome, Edge ou Brave, ou utilize o menu do navegador e clique em <strong>"Instalar aplicativo"</strong>.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
          <span className="uppercase tracking-wider">Compatível com iOS 14+ & Android 8+</span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white uppercase tracking-wider transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
