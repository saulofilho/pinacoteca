import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  Compass,
  Maximize2,
  Minimize2,
  Sun,
  Sliders,
  Sparkles,
  CameraOff,
  RotateCw,
  Eye,
  Layers,
  Check,
  Download,
  Smartphone,
} from 'lucide-react';
import { Artwork } from '../types';
import { ARTWORKS } from '../data/artworks';

interface ARViewProps {
  initialArtwork?: Artwork;
  onSelectArtwork: (artwork: Artwork) => void;
}

type FrameStyle = 'baroque-gold' | 'classic-mahogany' | 'renaissance-gilt' | 'minimalist-museum';

export const ARView: React.FC<ARViewProps> = ({
  initialArtwork,
  onSelectArtwork,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>(
    initialArtwork || ARTWORKS[0]
  );
  const [arSubTab, setArSubTab] = useState<'wall' | 'walkthrough'>('wall');

  // Camera AR State
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [frameStyle, setFrameStyle] = useState<FrameStyle>('baroque-gold');
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1.0);
  const [isTrueScale, setIsTrueScale] = useState<boolean>(true);
  const [lightingWarmth, setLightingWarmth] = useState<'warm' | 'neutral' | 'cool'>('warm');
  const [shadowDepth, setShadowDepth] = useState<number>(20);
  const [capturedPhotoUrl, setCapturedPhotoUrl] = useState<string | null>(null);

  // 3D Walkthrough state
  const [currentRoom, setCurrentRoom] = useState<'renascenca' | 'barroco' | 'romantismo'>('renascenca');
  const [rotation3D, setRotation3D] = useState<{ yaw: number; pitch: number }>({ yaw: 0, pitch: 0 });
  const [isGyroActive, setIsGyroActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Camera stream starter
  const startCamera = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Prefer rear camera on phones
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err: any) {
      console.warn('Camera access denied or unavailable:', err);
      setCameraError('Acesso à câmera não concedido. Usando simulador de parede de galeria.');
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  // Switch artwork if prop changes
  useEffect(() => {
    if (initialArtwork) {
      setSelectedArtwork(initialArtwork);
    }
  }, [initialArtwork]);

  // Clean up camera on unmount or tab change
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Gyroscope orientation listener for mobile 360 tour
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        setIsGyroActive(true);
        // Map gamma (-90 to 90) to horizontal yaw, beta to pitch
        setRotation3D({
          yaw: Math.max(-45, Math.min(45, e.gamma)),
          pitch: Math.max(-20, Math.min(20, (e.beta - 60) * 0.5)),
        });
      }
    };

    if (window.DeviceOrientationEvent && arSubTab === 'walkthrough') {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [arSubTab]);

  // Frame CSS classes helper
  const getFrameStyling = () => {
    switch (frameStyle) {
      case 'baroque-gold':
        return 'border-[16px] sm:border-[22px] border-[#9c7929] ring-4 ring-[#f5dfa8]/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]';
      case 'classic-mahogany':
        return 'border-[14px] sm:border-[20px] border-[#2c150c] ring-2 ring-[#c5a059] shadow-2xl';
      case 'renaissance-gilt':
        return 'border-[12px] sm:border-[18px] border-[#c5a059] ring-1 ring-white/40 shadow-2xl';
      case 'minimalist-museum':
        return 'border-[6px] sm:border-[10px] border-[#181614] ring-1 ring-stone-700 shadow-xl';
    }
  };

  // Capture snapshot
  const handleCaptureSnapshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1280;
    canvas.height = 720;

    // Draw background
    if (isCameraActive && videoRef.current) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    } else {
      // Draw gallery wall gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#221f1b');
      grad.addColorStop(1, '#11100e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw artwork
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = selectedArtwork.imageUrl;
    img.onload = () => {
      const artW = 400 * scaleMultiplier;
      const artH = (artW * selectedArtwork.dimensionsCm.height) / selectedArtwork.dimensionsCm.width;
      const posX = (canvas.width - artW) / 2;
      const posY = (canvas.height - artH) / 2;

      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.7)';
      ctx.shadowBlur = shadowDepth;
      ctx.shadowOffsetY = shadowDepth / 2;
      ctx.drawImage(img, posX, posY, artW, artH);
      ctx.restore();

      const dataUrl = canvas.toDataURL('image/png');
      setCapturedPhotoUrl(dataUrl);
    };
  };

  return (
    <div id="ar-view-section" className="space-y-6 pb-20">
      {/* Top Banner & Mode Switcher */}
      <div className="border border-white/10 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] p-5 sm:p-7 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.2em] font-medium block mb-2">
              Realidade Aumentada (AR) • Tour Virtual 3D
            </span>
            <h1 className="serif text-2xl sm:text-3xl font-bold text-[#E5E5E5] tracking-tight">
              Projeção Espacial & Galerias em AR
            </h1>
            <p className="text-white/60 text-xs mt-1 max-w-xl leading-relaxed">
              Projete a obra em escala real 1:1 na parede da sua casa usando a câmera do celular ou caminhe pelo salão de museu em 360°.
            </p>
          </div>

          {/* Tab Subselector */}
          <div className="flex items-center border border-white/10 p-1 bg-black/70">
            <button
              onClick={() => setArSubTab('wall')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                arSubTab === 'wall'
                  ? 'bg-[#C5A059] text-black gold-glow'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              AR na Parede
            </button>
            <button
              onClick={() => setArSubTab('walkthrough')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                arSubTab === 'walkthrough'
                  ? 'bg-[#C5A059] text-black gold-glow'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              Tour 3D
            </button>
          </div>
        </div>
      </div>

      {/* AR MODE 1: LIVE CAMERA AR WALL PROJECTION */}
      {arSubTab === 'wall' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 border border-white/10 bg-[#121212]">
            {/* Artwork Selector Picker */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50 uppercase tracking-wider font-medium text-[11px]">Obra:</span>
              <select
                id="ar-artwork-selector"
                value={selectedArtwork.id}
                onChange={(e) => {
                  const found = ARTWORKS.find((a) => a.id === e.target.value);
                  if (found) setSelectedArtwork(found);
                }}
                className="p-2 bg-white/5 border border-white/15 text-xs text-[#E5E5E5] serif font-medium focus:border-[#C5A059] cursor-pointer max-w-[220px] sm:max-w-xs"
              >
                {ARTWORKS.map((art) => (
                  <option key={art.id} value={art.id} className="bg-[#121212] text-white">
                    {art.title} ({art.dimensionsCm.width}x{art.dimensionsCm.height}cm)
                  </option>
                ))}
              </select>
            </div>

            {/* Camera Toggle Button */}
            <div className="flex items-center gap-2">
              {!isCameraActive ? (
                <button
                  id="ar-start-camera-btn"
                  onClick={startCamera}
                  className="flex items-center gap-2 bg-[#C5A059] px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-black hover:brightness-110 transition cursor-pointer gold-glow"
                >
                  <Camera className="w-4 h-4" />
                  Ativar Câmera da Parede
                </button>
              ) : (
                <button
                  id="ar-stop-camera-btn"
                  onClick={stopCamera}
                  className="flex items-center gap-2 bg-rose-950/40 border border-rose-500/60 text-rose-300 px-3.5 py-2 text-xs font-medium uppercase tracking-wider hover:bg-rose-900/40 transition cursor-pointer"
                >
                  <CameraOff className="w-4 h-4" />
                  Desativar Câmera
                </button>
              )}

              <button
                onClick={handleCaptureSnapshot}
                className="flex items-center gap-1.5 px-3.5 py-2 border border-white/15 bg-white/5 text-xs font-medium uppercase tracking-wider text-white/80 hover:text-white hover:border-[#C5A059] transition"
                title="Capturar Foto com a Obra na Parede"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Capturar Foto
              </button>
            </div>
          </div>

          {/* Stage / Canvas Container */}
          <div className="relative w-full aspect-[16/10] max-h-[640px] border border-white/10 overflow-hidden bg-[#0A0A0A] flex items-center justify-center shadow-2xl select-none">
            {/* Live Camera Video Feed */}
            {isCameraActive && (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            )}

            {/* Simulated Luxury Museum Wall when Camera is Off */}
            {!isCameraActive && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-[#111111] to-[#0A0A0A] flex flex-col justify-between p-6 pointer-events-none">
                {/* Ceiling molding & ambient spotlights */}
                <div className="h-6 w-full border-b border-white/5 flex justify-around">
                  <div className="w-32 h-48 bg-gradient-to-b from-[#C5A059]/10 via-[#C5A059]/5 to-transparent blur-xl rounded-full" />
                  <div className="w-32 h-48 bg-gradient-to-b from-[#C5A059]/10 via-[#C5A059]/5 to-transparent blur-xl rounded-full" />
                </div>
                {/* Simulated luxury floor baseboard */}
                <div className="h-10 w-full border-t border-white/10 bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414]" />
              </div>
            )}

            {/* Framed Artwork Displayed on Wall */}
            <div
              id="ar-framed-artwork-wrapper"
              className="relative transition-all duration-200 z-10"
              style={{
                transform: `scale(${scaleMultiplier})`,
                filter:
                  lightingWarmth === 'warm'
                    ? 'sepia(0.08) brightness(1.02)'
                    : lightingWarmth === 'cool'
                    ? 'hue-rotate(15deg) brightness(0.98)'
                    : 'none',
              }}
            >
              <div
                className={`relative overflow-hidden transition-all duration-300 ${getFrameStyling()}`}
                style={{
                  boxShadow: `0 ${shadowDepth}px ${shadowDepth * 1.5}px rgba(0,0,0,0.85)`,
                }}
              >
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[38vh] sm:max-h-[50vh] w-auto max-w-full object-contain pointer-events-none"
                  draggable={false}
                />

                {/* Museum wall plaque beneath painting */}
                <div className="absolute bottom-1 right-2 bg-black/85 px-2 py-0.5 text-[8px] font-mono text-white/70 pointer-events-none backdrop-blur-sm border border-white/10">
                  {selectedArtwork.title} ({selectedArtwork.dimensionsCm.width}×{selectedArtwork.dimensionsCm.height}cm)
                </div>
              </div>
            </div>

            {/* Floating AR Alignment Overlay Grid / Helper */}
            <div className="absolute top-3 left-3 text-[11px] font-mono text-white/70 bg-black/80 px-3 py-1.5 border border-white/10 backdrop-blur-md">
              {isCameraActive ? 'Câmera Real Ativa' : 'Galeria Virtual'} • Escala: {Math.round(scaleMultiplier * 100)}%
            </div>
          </div>

          {/* AR Customizer: Frame, Scale & Lighting Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 border border-white/10 bg-[#121212]">
            {/* Frame selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#C5A059] uppercase tracking-[0.2em] block">
                Estilo da Moldura
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'baroque-gold', label: 'Barroca Dourada' },
                  { id: 'classic-mahogany', label: 'Mogno Imperial' },
                  { id: 'renaissance-gilt', label: 'Ouro Renascença' },
                  { id: 'minimalist-museum', label: 'Preto de Museu' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFrameStyle(item.id as FrameStyle)}
                    className={`px-2.5 py-2 border text-xs font-medium transition cursor-pointer text-left ${
                      frameStyle === item.id
                        ? 'border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059] gold-glow'
                        : 'border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Real Scale Adjuster */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#C5A059] uppercase tracking-[0.2em]">
                  Escala da Obra
                </span>
                <button
                  onClick={() => {
                    setIsTrueScale(true);
                    setScaleMultiplier(1.0);
                  }}
                  className={`text-[10px] uppercase tracking-wider px-2 py-0.5 transition ${
                    isTrueScale ? 'bg-[#C5A059] text-black font-medium' : 'text-white/50 hover:text-white border border-white/10'
                  }`}
                >
                  Tamanho Real (1:1)
                </button>
              </div>

              <input
                type="range"
                min="0.4"
                max="2.2"
                step="0.05"
                value={scaleMultiplier}
                onChange={(e) => {
                  setIsTrueScale(false);
                  setScaleMultiplier(parseFloat(e.target.value));
                }}
                className="w-full accent-[#C5A059] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-white/50">
                <span>50%</span>
                <span className="text-[#E5E5E5] font-bold">
                  {Math.round(selectedArtwork.dimensionsCm.width * scaleMultiplier)} cm ×{' '}
                  {Math.round(selectedArtwork.dimensionsCm.height * scaleMultiplier)} cm
                </span>
                <span>200%</span>
              </div>
            </div>

            {/* Lighting Tone & Shadow */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#C5A059] uppercase tracking-[0.2em] block">
                Iluminação & Sombra
              </label>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'warm', label: 'Quente' },
                  { id: 'neutral', label: 'Neutra' },
                  { id: 'cool', label: 'Fria' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setLightingWarmth(t.id as any)}
                    className={`flex-1 py-2 border text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                      lightingWarmth === t.id
                        ? 'border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059] gold-glow'
                        : 'border-white/10 bg-white/5 text-white/50 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="pt-1 flex items-center justify-between text-xs text-white/60">
                <span>Profundidade de Sombra</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={shadowDepth}
                  onChange={(e) => setShadowDepth(parseInt(e.target.value))}
                  className="w-24 accent-[#C5A059]"
                />
              </div>
            </div>
          </div>

          {/* Hidden Canvas for Photo Capture */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Photo Modal Preview if Captured */}
          {capturedPhotoUrl && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="bg-[#121212] border border-white/20 p-6 max-w-lg w-full space-y-4 shadow-2xl gold-glow">
                <h3 className="serif text-lg font-bold text-[#E5E5E5]">
                  Fotografia da Obra na Sua Parede
                </h3>
                <img
                  src={capturedPhotoUrl}
                  alt="Foto capturada"
                  className="w-full border border-white/10"
                />
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setCapturedPhotoUrl(null)}
                    className="px-4 py-2 text-xs text-white/60 hover:text-white uppercase tracking-wider"
                  >
                    Fechar
                  </button>
                  <a
                    href={capturedPhotoUrl}
                    download={`pinacoteca_${selectedArtwork.id}.png`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#C5A059] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 gold-glow"
                  >
                    <Download className="w-4 h-4" />
                    Salvar Imagem
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* AR MODE 2: 3D VIRTUAL GALLERY ROOM WALKTHROUGH */}
      {arSubTab === 'walkthrough' && (
        <div className="space-y-4">
          {/* Room Selector */}
          <div className="flex items-center justify-between p-3.5 border border-white/10 bg-[#121212]">
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/50 uppercase tracking-wider font-medium text-[11px]">Salão:</span>
              <div className="flex items-center gap-2">
                {[
                  { id: 'renascenca', label: 'Salão Renascença' },
                  { id: 'barroco', label: 'Grande Galeria Barroca' },
                  { id: 'romantismo', label: 'Gabinete Romântico' },
                ].map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setCurrentRoom(room.id as any)}
                    className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                      currentRoom === room.id
                        ? 'bg-[#C5A059] text-black gold-glow'
                        : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>

            {isGyroActive && (
              <span className="text-xs text-[#C5A059] flex items-center gap-1 uppercase tracking-wider text-[11px]">
                <Smartphone className="w-3.5 h-3.5 animate-pulse" />
                Giroscópio Ativo
              </span>
            )}
          </div>

          {/* 3D Perspective Virtual Hall Canvas */}
          <div
            className="relative w-full aspect-[16/9] max-h-[580px] border border-white/10 overflow-hidden bg-[#070707] flex items-center justify-center select-none cursor-grab active:cursor-grabbing shadow-2xl"
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                // Mouse drag navigation
                setRotation3D((prev) => ({
                  yaw: Math.max(-40, Math.min(40, prev.yaw + e.movementX * 0.2)),
                  pitch: Math.max(-15, Math.min(15, prev.pitch + e.movementY * 0.1)),
                }));
              }
            }}
          >
            {/* 3D Perspective Container */}
            <div
              className="relative w-full h-full transition-transform duration-100 ease-out"
              style={{
                perspective: '1200px',
                transform: `rotateY(${rotation3D.yaw}deg) rotateX(${rotation3D.pitch}deg)`,
              }}
            >
              {/* Ceiling with Coffered Panels and Chandelier Glow */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#161616] to-transparent flex justify-around items-start pt-2 opacity-80">
                <div className="w-40 h-40 bg-[#C5A059]/10 blur-3xl rounded-full" />
                <div className="w-40 h-40 bg-[#C5A059]/10 blur-3xl rounded-full" />
              </div>

              {/* Marble Floor with Reflections */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] via-[#0d0d0d] to-transparent border-t border-white/10 flex justify-around">
                <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
              </div>

              {/* Back Wall with Paintings Hanging in 3D */}
              <div className="absolute inset-0 flex items-center justify-around px-8">
                {ARTWORKS.slice(
                  currentRoom === 'renascenca' ? 0 : currentRoom === 'barroco' ? 3 : 8,
                  currentRoom === 'renascenca' ? 3 : currentRoom === 'barroco' ? 6 : 11
                ).map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArtwork(art)}
                    className="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
                  >
                    {/* Spotlight from ceiling */}
                    <div className="absolute -top-24 w-28 h-40 bg-gradient-to-b from-[#C5A059]/15 to-transparent blur-md pointer-events-none rounded-full" />

                    {/* Framed Canvas in Hall */}
                    <div className="p-2 border-[6px] border-[#C5A059] shadow-[0_20px_40px_rgba(0,0,0,0.9)] bg-black gold-glow">
                      <img
                        src={art.thumbUrl}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="h-36 sm:h-52 w-auto object-cover"
                      />
                    </div>

                    {/* Plaque beneath */}
                    <div className="mt-2 text-center bg-black/85 px-3 py-1 border border-white/10 backdrop-blur-sm">
                      <p className="serif text-xs font-bold text-[#E5E5E5] line-clamp-1">
                        {art.title}
                      </p>
                      <p className="text-[10px] text-white/50">
                        {art.artist} • {art.year}
                      </p>
                    </div>

                    <span className="mt-1 text-[10px] text-[#C5A059] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition">
                      Inspecionar em Super-HD
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instruction tooltip */}
            <div className="absolute bottom-3 left-4 text-xs text-white/60 bg-black/80 px-3 py-1.5 border border-white/10 backdrop-blur-md pointer-events-none uppercase tracking-wider text-[10px]">
              Arraste com o mouse ou gire seu smartphone para explorar o salão em 360°
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
