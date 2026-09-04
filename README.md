# 🏛️ Pinacoteca Clássica AR

> **Aplicativo de Arte Clássica com Galerias Virtuais em Ultra-HD, Guias Interativos Narrados, Realidade Aumentada (AR) e Suporte Offline Total para iOS e Android.**

[![Node.js](https://img.shields.io/badge/Node.js-20%20LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Pronto%20para%20iOS%20%26%20Android-4A90E2?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![GitHub Actions](https://img.shields.io/badge/Deploy-GitHub%20Pages-2088FF?logo=github-actions&logoColor=white)](https://pages.github.com/)

---

## 🌟 Visão Geral

A **Pinacoteca Clássica AR** é uma experiência museológica imersiva desenvolvida para entusiastas, estudantes e pesquisadores de história da arte. O aplicativo reúne tesouros do **Louvre, Uffizi, Prado, Rijksmuseum e Mauritshuis**, permitindo examinar pinceladas com microscópico superzoom, ouvir audioguias especializados narrados e projetar obras em **escala física real (1:1)** diretamente na parede do seu ambiente via Realidade Aumentada.

Projetado como um **Progressive Web App (PWA)** de última geração, o aplicativo funciona com fluidez nativa tanto no **iOS (iPhone/iPad)** quanto no **Android**, com suporte robusto a navegação 100% offline.

---

## 🎨 Funcionalidades Principais

### 1. 🖼️ Galerias Virtuais em Alta Definição (Ultra-HD)
- **Deep Zoom & Pan:** Ampliação de até 400% nas telas para inspeção de craqueluras, empastamento e velaturas.
- **Pontos de Interesse Interativos (Hotspots):** Pinos dourados posicionados nas obras revelam segredos técnicos, simbolismos e iconografias com um clique.
- **Modo Exame de Conservação (Luz Rasante):** Filtro fotográfico especial que simula a inspeção laboratorial de restauro para análise do relevo das tintas a óleo.
- **Paleta de Pigmentos Clássicos:** Extração das cores e tons históricos utilizados pelos mestres (ex: Azul Ultramar, Ocre Dourado, Betume de Judeia).

### 2. 🧭 Cronologia & Comparador de Movimentos Artísticos
- Linha do tempo interativa cobrindo:
  - **Renascimento** (Leonardo da Vinci, Rafael, Botticelli)
  - **Maneirismo** (Parmigianino, El Greco, Bronzino)
  - **Barroco** (Caravaggio, Velázquez, Artemisia Gentileschi)
  - **Século de Ouro Holandês** (Rembrandt, Johannes Vermeer)
  - **Rococó** (Jean-Honoré Fragonard, François Boucher)
  - **Neoclassicismo** (Jacques-Louis David, Ingres)
  - **Romantismo** (Caspar David Friedrich, Eugène Delacroix, Francisco de Goya)
- **Comparador Dialético:** Ferramenta comparativa lado a lado para contrastar filosofias, tratamentos de luz/sombra e pinceladas entre dois movimentos.

### 3. 🎧 Tours Guiados Interativos & Audioguias
- Trilhas temáticas narradas:
  - *"Mestres da Luz: Do Sfumato ao Tenebrismo"*
  - *"Paixões, Mitos e a Chama Romântica"*
  - *"O Enigma do Olhar & Espelhos da Alma"*
- **Audioguias Narrados:** Síntese de voz com entonação curatorial em português, com ajuste de velocidade (1x, 1.25x, 1.5x) e transcrição completa.
- **Desafio do Historiador:** Quiz interativo de fixação no final de cada tour para testar conhecimentos e desbloquear certificados.

### 4. 📱 Realidade Aumentada (AR) & Projeção Espacial
- **Modo Câmera Real na Parede:** Utiliza a câmera traseira do celular ou webcam do computador para sobrepor pinturas em tamanho físico exato (em centímetros reais).
- **Molduras de Época:** Escolha entre *Moldura Barroca Ouro Velho*, *Mogno Imperial*, *Ouro Renascença* ou *Preto Minimalista*.
- **Ajustes de Iluminação e Sombra:** Modificação de temperatura de luz (quente, neutra, fria) e projeção de sombra na parede.
- **Captura Fotográfica:** Salve fotos em alta resolução da obra na parede da sua casa.
- **Passeio 3D em Galeria com Giroscópio:** Caminhe pelos salões do museu e explore a sala em 360° virando fisicamente seu smartphone.

### 5. ⚡ Modo Offline Completo (PWA)
- Armazenamento em cache via **Service Workers** (`vite-plugin-pwa`) e **Cache API**.
- Gerenciador de cache local: baixe o acervo completo em alta definição com um clique para usar em aviões ou locais sem conexão.
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
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **PWA & Offline:** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) com Workbox
- **Ícones:** [lucide-react](https://lucide.dev/)
- **Áudio & Giroscópio:** Web Speech API e DeviceOrientation API nativas do navegador

---

## 💻 Como Rodar Localmente

Certifique-se de possuir o **Node.js 20 LTS** ou superior instalado em seu sistema:

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

## 🌐 Deploy no GitHub Pages (Node.js Atualizado)

O projeto já inclui o fluxo de integração e entrega contínua (**CI/CD**) configurado em `.github/workflows/deploy.yml` utilizando o **Node.js 20 LTS**.

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

## 🏛️ Acervo Incluído

- **Mona Lisa (La Gioconda)** — Leonardo da Vinci (1503–1519, Museu do Louvre)
- **A Moça com o Brinco de Pérola** — Johannes Vermeer (1665, Mauritshuis)
- **O Nascimento de Vênus** — Sandro Botticelli (1485, Galleria degli Uffizi)
- **A Ronda Noturna** — Rembrandt van Rijn (1642, Rijksmuseum)
- **A Vocação de São Mateus** — Caravaggio (1599–1600, San Luigi dei Francesi)
- **As Meninas** — Diego Velázquez (1656, Museu do Prado)
- **A Escola de Atenas** — Rafael Sanzio (1509–1511, Museus Vaticanos)
- **O Balanço (L'Escarpolette)** — Jean-Honoré Fragonard (1767, Wallace Collection)
- **O Juramento dos Horácios** — Jacques-Louis David (1784, Museu do Louvre)
- **O Caminhante sobre o Mar de Névoa** — Caspar David Friedrich (1818, Hamburger Kunsthalle)
- **A Liberdade Guiando o Povo** — Eugène Delacroix (1830, Museu do Louvre)
- **O Três de Maio de 1808** — Francisco de Goya (1814, Museu do Prado)

---

## 📄 Licença

Distribuído sob a licença **Apache-2.0**.
