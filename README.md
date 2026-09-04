# 🏛️ Pinacoteca Clássica AR

> **Aplicativo de Arte Clássica com Galerias Virtuais em Ultra-HD, Guias Interativos Narrados, Realidade Aumentada (AR) e Suporte Offline Total para iOS e Android.**

[![Node.js](https://img.shields.io/badge/Node.js-22%20LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Pronto%20para%20iOS%20%26%20Android-4A90E2?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![GitHub Actions](https://img.shields.io/badge/Deploy-GitHub%20Pages-2088FF?logo=github-actions&logoColor=white)](https://pages.github.com/)

---

## 🌟 Visão Geral

A **Pinacoteca Clássica AR** é uma experiência museológica imersiva desenvolvida para entusiastas, estudantes e pesquisadores de história da arte. O aplicativo reúne tesouros do **Louvre, Uffizi, Prado, Rijksmuseum e Mauritshuis**, permitindo examinar pinceladas com microscópico superzoom, ouvir audioguias especializados narrados e projetar obras em **escala física real (1:1)** diretamente na parede do seu ambiente via Realidade Aumentada.

Projetado com o tema estético **"Elegant Dark"** (fundo carvão profundo `#0A0A0A`, acentos em ouro clássico `#C5A059` e tipografia `Cinzel` com `Plus Jakarta Sans`) e como um **Progressive Web App (PWA)** de última geração, o aplicativo funciona com fluidez nativa tanto no **iOS (iPhone/iPad)** quanto no **Android**, com suporte robusto a navegação 100% offline.

---

## 🎨 Funcionalidades Principais

### 1. ✨ Obra do Dia (Artwork of the Day) & Curadoria Dinâmica
- **Card Informativo em Destaque:** Exibido no topo da galeria com a obra selecionada para o dia, trazendo dados do artista, movimento, museu e um resumo curatorial.
- **Sorteio Randômico Interativo:** Botão "Sortear Outra" para explorar aleatoriamente outras obras-primas do acervo a qualquer momento.
- **Acesso Direto:** Atalhos instantâneos para abrir a inspeção em alta resolução ou projetar diretamente no ambiente em AR.

### 2. 🖼️ Galerias Virtuais em Alta Definição (Ultra-HD)
- **Imagens Otimizadas:** Carregamento ultra-rápido de miniaturas padrão (500px) e visualização de detalhes em alta fidelidade (1280px), com suporte a políticas estritas de segurança de rede (`no-referrer`).
- **Deep Zoom & Pan:** Ampliação de até 400% nas telas para inspeção de craqueluras, empastamento e velaturas.
- **Pontos de Interesse Interativos (Hotspots):** Pinos dourados posicionados nas obras revelam segredos técnicos, simbolismos e iconografias com um clique.
- **Modo Exame de Conservação (Luz Rasante):** Filtro fotográfico especial que simula a inspeção laboratorial de restauro para análise do relevo das tintas a óleo.
- **Paleta de Pigmentos Clássicos:** Extração das cores e tons históricos utilizados pelos mestres (ex: Azul Ultramar, Ocre Dourado, Betume de Judeia).

### 3. 🧭 Cronologia & Comparador de Movimentos Artísticos
- Linha do tempo interativa cobrindo:
  - **Renascimento** (Leonardo da Vinci, Rafael, Botticelli)
  - **Maneirismo** (Parmigianino, El Greco, Bronzino)
  - **Barroco** (Caravaggio, Velázquez, Artemisia Gentileschi)
  - **Século de Ouro Holandês** (Rembrandt, Johannes Vermeer)
  - **Rococó** (Jean-Honoré Fragonard, François Boucher)
  - **Neoclassicismo** (Jacques-Louis David, Ingres)
  - **Romantismo** (Caspar David Friedrich, Eugène Delacroix, Francisco de Goya)
- **Comparador Dialético:** Ferramenta comparativa lado a lado para contrastar filosofias, tratamentos de luz/sombra e pinceladas entre dois movimentos.

### 4. 🎧 Tours Guiados Interativos & Audioguias
- Trilhas temáticas narradas:
  - *"Mestres da Luz: Do Sfumato ao Tenebrismo"*
  - *"Paixões, Mitos e a Chama Romântica"*
  - *"O Enigma do Olhar & Espelhos da Alma"*
- **Audioguias Narrados:** Síntese de voz com entonação curatorial em português, com ajuste de velocidade (1x, 1.25x, 1.5x) e transcrição completa.
- **Desafio do Historiador:** Quiz interativo de fixação no final de cada tour para testar conhecimentos e desbloquear certificados.

### 5. 📱 Realidade Aumentada (AR) & Projeção Espacial
- **Modo Câmera Real na Parede:** Utiliza a câmera traseira do celular ou webcam do computador para sobrepor pinturas em tamanho físico exato (em centímetros reais).
- **Molduras de Época:** Escolha entre *Moldura Barroca Ouro Velho*, *Mogno Imperial*, *Ouro Renascença* ou *Preto Minimalista*.
- **Ajustes de Iluminação e Sombra:** Modificação de temperatura de luz (quente, neutra, fria) e projeção de sombra na parede.
- **Captura Fotográfica:** Salve fotos em alta resolução da obra na parede da sua casa.
- **Passeio 3D em Galeria com Giroscópio:** Caminhe pelos salões do museu e explore a sala em 360° virando fisicamente seu smartphone.

### 6. ⚡ Modo Offline Completo (PWA)
- Armazenamento em cache via **Service Workers** (`vite-plugin-pwa`) e **Cache API**.
- Gerenciador de cache local: baixe o acervo completo em alta definição com um clique para usar em viagens ou locais sem conexão.
- Detecção em tempo real de status Online / Offline com sincronização transparente.

---

## 🚀 Instalação no iOS e Android

### No Android (Google Chrome / Edge)
1. Acesse o endereço da aplicação no Chrome.
2. Toque no botão **"Instalar App"** exibido no topo da tela ou selecione os três pontinhos do navegador e clique em **"Adicionar à tela inicial"**.

### No iOS / iPadOS (Apple Safari)
1. Acesse o endereço da aplicação no Safari.
2. Toque no botão de **Compartilhar** (ícone quadrado com uma seta para cima na barra inferior).
3. Role o menu para baixo e selecione **"Adicionar à Tela de Início"**.
4. Toque em **"Adicionar"** no canto superior direito. O app será executado em tela cheia (modo *standalone*), sem barras de navegação.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [React 19](https://react.dev/) com TypeScript 5.8
- **Bundler & Build Tool:** [Vite 6.2](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com design "Elegant Dark"
- **PWA & Offline:** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) com Workbox
- **Ícones:** [lucide-react](https://lucide.dev/)
- **Áudio & Giroscópio:** Web Speech API e DeviceOrientation API nativas do navegador

---

## 💻 Como Rodar Localmente

Certifique-se de possuir o **Node.js 20 LTS** ou **Node.js 22 LTS** instalado em seu sistema:

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/pinacoteca-classica-ar.git
cd pinacoteca-classica-ar

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador.

Para validar a compilação de produção:

```bash
npm run build
```

---

## 🌐 Deploy no GitHub Pages (Node.js 22 Atualizado)

O projeto inclui o fluxo de integração e entrega contínua (**CI/CD**) configurado em `.github/workflows/deploy.yml` utilizando o **Node.js 22 LTS**:

### Passos para ativar no seu repositório:
1. Faça o push do código para a branch principal (`main`):
   ```bash
   git add .
   git commit -m "feat: Pinacoteca Clássica AR pronta para produção"
   git push origin main
   ```
2. No seu repositório no GitHub:
   - Vá em **Settings** > **Pages** (no menu lateral esquerdo).
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. A pipeline irá compilar o aplicativo automaticamente e disponibilizá-lo em:
   `https://<seu-usuario>.github.io/<nome-do-repositorio>/`

---

## 🏛️ Acervo de Obras Incluído

- **Mona Lisa (La Gioconda)** — Leonardo da Vinci (1503–1519, Musée du Louvre)
- **O Nascimento de Vênus** — Sandro Botticelli (c. 1484–1486, Galleria degli Uffizi)
- **Escola de Atenas** — Rafael Sanzio (1509–1511, Stanze di Raffaello, Vaticano)
- **A Vocação de São Mateus** — Caravaggio (1599–1600, Igreja de São Luís dos Franceses)
- **As Meninas** — Diego Velázquez (1656, Museu do Prado)
- **A Ronda Noturna** — Rembrandt van Rijn (1642, Rijksmuseum)
- **Moça com o Brinco de Pérola** — Johannes Vermeer (c. 1665, Mauritshuis)
- **O Balanço** — Jean-Honoré Fragonard (1767, The Wallace Collection)
- **O Juramento dos Horácios** — Jacques-Louis David (1784, Musée du Louvre)
- **O Caminhante sobre o Mar de Névoa** — Caspar David Friedrich (1818, Hamburger Kunsthalle)
- **A Liberdade Guiando o Povo** — Eugène Delacroix (1830, Musée du Louvre)
- **Saturno Devorando um Filho** — Francisco de Goya (c. 1819–1823, Museu do Prado)

---

## 📄 Licença

Distribuído sob a licença **Apache-2.0**.
