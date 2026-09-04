import { Artwork } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'mona-lisa',
    title: 'Mona Lisa (La Gioconda)',
    originalTitle: 'Ritratto di Monna Lisa del Giocondo',
    artist: 'Leonardo da Vinci',
    artistLifespan: '1452 – 1519',
    year: 'c. 1503 – 1519',
    movementId: 'renascimento',
    museum: 'Musée du Louvre',
    city: 'Paris, França',
    medium: 'Óleo sobre painel de álamo',
    dimensionsCm: { width: 53, height: 77 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    description: 'A pintura mais célebre do mundo ocidental, Mona Lisa retrata Lisa Gherardini, esposa do comerciante florentino Francesco del Giocondo. Notável pelo pioneirismo no uso do sfumato e pelo sorriso que parece transformar-se conforme o ângulo de observação.',
    audioGuideTranscript: 'Bem-vindo à contemplação da Mona Lisa de Leonardo da Vinci. Observe como Leonardo elimina completamente os contornos rígidos por meio da técnica do sfumato — a fumaça sutil que mescla a pele às sombras circundantes. Os cantos da boca e dos olhos estão intencionalmente esfumados, o que impede nosso cérebro de fixar uma única emoção definitiva: ora ela parece sorrir com complacência, ora exibe um semblante sóbrio e contemplativo. Ao fundo, uma paisagem montanhosa primordial, quase aquática, ilustra a crença de Leonardo na simbiose entre o microcosmo humano e o macrocosmo da Terra.',
    hotspots: [
      {
        id: 'hl-smile',
        xPercent: 51,
        yPercent: 36,
        title: 'O Sorriso Enigmático',
        tag: 'Técnica',
        description: 'Leonardo aplicou até 30 camadas microscópicas de velatura sem deixar marcas de pincelada, criando a ilusão de dinamismo óptico nos cantos labiais.'
      },
      {
        id: 'hl-eyes',
        xPercent: 49,
        yPercent: 28,
        title: 'O Olhar Direto (Sfumato Ocular)',
        tag: 'Composição',
        description: 'A transição imperceptível entre sombra e luz na córnea confere vida e inteligência penetrante ao retrato, acompanhando o espectador.'
      },
      {
        id: 'hl-hands',
        xPercent: 56,
        yPercent: 82,
        title: 'A Postura Aristocrática das Mãos',
        tag: 'Simbolismo',
        description: 'As mãos cruzadas com delicadeza transmitem fidelidade conjugal, serenidade interior e virtude moral, tornando-se modelo para retratos renascentistas.'
      },
      {
        id: 'hl-bridge',
        xPercent: 78,
        yPercent: 49,
        title: 'Ponte Buriano no Val d’Arno',
        tag: 'História',
        description: 'A ponte de pedra arcaica visível à direita âncora a paisagem mística em uma geografia real da Toscana, ligando a história humana à natureza eterna.'
      }
    ],
    historicalContext: 'Pintada durante o retorno de Leonardo a Florença e levada consigo até a corte do Rei Francisco I da França em Amboise, onde o mestre faleceu em 1519.',
    techniqueAnalysis: 'Uso de vernizes transparentes ultrafinos sobre gesso e madeira de álamo, com ausência absoluta de traços lineares duros.',
    symbolismAnalysis: 'A fusão entre a anatomia feminina e as veias de água da paisagem rochosa sintetiza o homem como espelho do universo cósmico.',
    paletteColors: ['#3b3628', '#5b4f3b', '#8a7752', '#a89367', '#1a1813']
  },
  {
    id: 'nascimento-de-venus',
    title: 'O Nascimento de Vênus',
    originalTitle: 'Nascita di Venere',
    artist: 'Sandro Botticelli',
    artistLifespan: '1445 – 1510',
    year: 'c. 1484 – 1486',
    movementId: 'renascimento',
    museum: 'Galleria degli Uffizi',
    city: 'Florença, Itália',
    medium: 'Têmpera sobre tela de linho',
    dimensionsCm: { width: 278, height: 172 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1200px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    description: 'A deusa do amor e da beleza emerge das espumas do mar sobre uma concha de vieira, soprada até as margens de Chipre pelos ventos Zéfiro e Aura, enquanto uma Hora da Primavera se apressa a cobri-la com um manto floral.',
    audioGuideTranscript: 'Botticelli nos oferece um dos ápices do Neoplatonismo florentino. Inspirado pela academia filosófica de Lorenzo de Médici, Vênus não é apenas uma divindade carnal, mas a personificação da Beleza Celestial que eleva o espírito humano a Deus. Note o desenho linear lírico característico de Botticelli: ao invés da anatomia estritamente realista, ele alonga o pescoço e curva graciosamente o corpo em uma pose de Vênus Pudica. A chuva de rosas que cai em torno dos ventos sopra o doce aroma do renascimento cultural da humanidade.',
    hotspots: [
      {
        id: 'hl-venus',
        xPercent: 51,
        yPercent: 44,
        title: 'Vênus Pudica',
        tag: 'Composição',
        description: 'A pose clássica onde a deusa cobre com modéstia seus seios e ventre, aludindo ao mito da pureza virginal combinada à fecundidade.'
      },
      {
        id: 'hl-zephyr',
        xPercent: 22,
        yPercent: 32,
        title: 'Zéfiro e Clóris (Aura)',
        tag: 'Simbolismo',
        description: 'O vento oeste fertilizador e sua consorte voam entrelaçados, soprando a deusa em direção à costa enquanto chovem rosas douradas.'
      },
      {
        id: 'hl-mantle',
        xPercent: 82,
        yPercent: 52,
        title: 'O Manto Bordado de Primavera',
        tag: 'História',
        description: 'A ninfa Hora oferece uma capa escarlate bordada com miosótis e margaridas, símbolos da renovação primaveril e da corte dos Médici.'
      }
    ],
    historicalContext: 'Criada para a influente família Médici durante o apogeu da Florença renascentista, antes da crise religiosa provocada pelo monge Savonarola.',
    techniqueAnalysis: 'Têmpera pura sobre tela (inovação na época, quando o painel de madeira dominava), finalizada com pó de ouro nas folhas e cabelos.',
    symbolismAnalysis: 'A concha como metáfora do útero materno da Criação e o nascimento do intelecto poético nas águas límpidas.',
    paletteColors: ['#67878a', '#d2b67f', '#d78970', '#3b553e', '#e7dec9']
  },
  {
    id: 'escola-de-atenas',
    title: 'Escola de Atenas',
    originalTitle: 'Scuola di Atene',
    artist: 'Rafael Sanzio',
    artistLifespan: '1483 – 1520',
    year: '1509 – 1511',
    movementId: 'renascimento',
    museum: 'Museus Vaticanos (Stanze di Raffaello)',
    city: 'Cidade do Vaticano, Roma',
    medium: 'Afresco mural',
    dimensionsCm: { width: 770, height: 500 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1200px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/400px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    description: 'O monumento pictórico da reconciliação entre a filosofia pagã antiga e a teologia cristã. Platão e Aristóteles debatem no centro de uma basílica clássica monumental, ladeados pelos maiores pensadores da história.',
    audioGuideTranscript: 'Contemple a perfeita harmonia espacial concebida por Rafael aos 27 anos de idade. No centro da composição, vemos dois gigantes da filosofia: à esquerda, Platão aponta para o céu, sustentando o livro Timeu e representando o mundo das Ideias puras; à direita, Aristóteles estende a mão espalmada para a terra, segurando a Ética e representando a observação empírica. Rafael prestou homenagem aos seus contemporâneos modelando os filósofos com feições de artistas de sua época: Platão tem a fisionomia de Leonardo da Vinci, e o solitário Heráclito, no primeiro plano pensativo sobre um bloco de mármore, é ninguém menos que Michelangelo.',
    hotspots: [
      {
        id: 'hl-plato-aristotle',
        xPercent: 50,
        yPercent: 48,
        title: 'O Diálogo Fundamental: Platão e Aristóteles',
        tag: 'Simbolismo',
        description: 'O contraste entre o idealismo transcendente (dedo apontado para cima) e o pragmatismo da observação terrena (mão estendida ao chão).'
      },
      {
        id: 'hl-michelangelo',
        xPercent: 40,
        yPercent: 78,
        title: 'Heráclito (Homenagem a Michelangelo)',
        tag: 'História',
        description: 'Rafael adicionou esta figura após ver a abóbada da Capela Sistina, imitando a musculatura colossal e a melancolia genial de Michelangelo.'
      },
      {
        id: 'hl-euclid',
        xPercent: 82,
        yPercent: 78,
        title: 'Euclides / Bramante com o Compasso',
        tag: 'Técnica',
        description: 'O arquiteto Bramante é retratado como Euclides, ensinando geometria prática a quatro discípulos extasiados.'
      }
    ],
    historicalContext: 'Encomendado pelo Papa Júlio II para decorar a Stanza della Segnatura, biblioteca privada pontifícia.',
    techniqueAnalysis: 'Afresco magistral com rigorosa perspectiva linear matemática, arcos triunfais monumentais e caixotões renascentistas.',
    symbolismAnalysis: 'A celebração do Saber Racional e das quatro faculdades humanas: Filosofia, Teologia, Poesia e Justiça.',
    paletteColors: ['#7c3f35', '#2a445d', '#d6be8c', '#535c43', '#23201b']
  },
  {
    id: 'vocacao-sao-mateus',
    title: 'A Vocação de São Mateus',
    originalTitle: 'Vocazione di San Matteo',
    artist: 'Caravaggio (Michelangelo Merisi)',
    artistLifespan: '1571 – 1610',
    year: '1599 – 1600',
    movementId: 'barroco',
    museum: 'Igreja de São Luís dos Franceses',
    city: 'Roma, Itália',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 328, height: 322 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg/1200px-The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg/400px-The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg',
    description: 'A obra-prima que consagrou o Tenebrismo barroco. Cristo entra em uma taberna escura e aponta imperiosamente para o cobrador de impostos Levi (Mateus), que aponta para si mesmo atônito.',
    audioGuideTranscript: 'Aqui temos a grande revolução barroca iniciada por Caravaggio. A cena não se passa em um palácio celestial, mas em uma taberna romana clandestina. Jovens nobres com chapéus de plumas contam moedas sobre a mesa. De repente, a porta se abre: Cristo, descalço e envolto em sombras, ergue a mão. Note que a mão de Cristo espelha com precisão a mão de Adão pintada por Michelangelo na Capela Sistina, simbolizando que Cristo é o novo Adão trazendo a redenção. Um feixe de luz diagonal impiedoso rompe a escuridão espessa, iluminando o rosto incrédulo de Mateus: "Eu, Senhor?". A Graça divina atinge os mais pecadores no ambiente mais mundano.',
    hotspots: [
      {
        id: 'hl-christ-hand',
        xPercent: 88,
        yPercent: 44,
        title: 'A Mão da Graça (Citação de Michelangelo)',
        tag: 'Simbolismo',
        description: 'Caravaggio inverteu o gesto da Criação de Adão da Capela Sistina: Cristo agora aponta concedendo não apenas vida física, mas vida espiritual.'
      },
      {
        id: 'hl-matthew-gesture',
        xPercent: 41,
        yPercent: 49,
        title: 'O Gesto de Dúvida de Mateus',
        tag: 'Composição',
        description: 'Levi aponta para si mesmo com a mão esquerda como quem pergunta: "Sou eu quem vós chamais?", capturando o ápice do drama psicológico.'
      },
      {
        id: 'hl-money-counter',
        xPercent: 20,
        yPercent: 68,
        title: 'O Moço que não Vê a Luz',
        tag: 'Simbolismo',
        description: 'O jovem à esquerda continua compenetrado em contar as moedas, cego à presença salvífica da luz divina.'
      }
    ],
    historicalContext: 'Pintado para a Capela Contarelli em Roma, o quadro causou espanto imediato pela modernidade dos trajes e pela luz cinematográfica.',
    techniqueAnalysis: 'Tenebrismo radical: preparação de fundo negro com iluminação dirigida artificial vinda de uma fonte externa alta à direita.',
    symbolismAnalysis: 'A luz como veículo visível da Graça Divina penetrando nas trevas morais do mundo.',
    paletteColors: ['#120f0c', '#382a1e', '#875d31', '#be8944', '#e2c58a']
  },
  {
    id: 'as-meninas',
    title: 'As Meninas',
    originalTitle: 'Las Meninas (La familia de Felipe IV)',
    artist: 'Diego Velázquez',
    artistLifespan: '1599 – 1660',
    year: '1656',
    movementId: 'barroco',
    museum: 'Museu do Prado',
    city: 'Madri, Espanha',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 276, height: 318 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/1200px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/400px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg',
    description: 'Descrita como "a teologia da pintura" por Luca Giordano, esta obra magistral retrata a infanta Margarida Teresa acompanhada por damas de honra, anões da corte, e o próprio Velázquez trabalhando diante de um imenso cavalete.',
    audioGuideTranscript: 'Diante de As Meninas, encontramos o mais formidável enigma da história da pintura ocidental. Onde estamos nós, os espectadores? O próprio Velázquez está diante de uma tela gigante pintando o que parece ser o nosso próprio ponto de vista. Se você olhar no espelho ao fundo da sala, verá os reflexos do Rei Felipe IV e da Rainha Mariana da Áustria: nós estamos ocupando exatamente o lugar dos monarcas da Espanha. A infanta de cinco anos fita-nos com inocência altiva enquanto uma dama lhe oferece água em um jarro de barro aromático. Velázquez não apenas pintou a realeza; ele transformou o próprio ato de pintar e o ato de olhar em filosofia viva.',
    hotspots: [
      {
        id: 'hl-mirror',
        xPercent: 47,
        yPercent: 32,
        title: 'O Espelho dos Reis',
        tag: 'Simbolismo',
        description: 'O espelho revela o casal real Felipe IV e Mariana, confirmando que a tela é pintada do ponto de vista soberano dos monarcas.'
      },
      {
        id: 'hl-velazquez',
        xPercent: 19,
        yPercent: 38,
        title: 'Autorretrato de Velázquez',
        tag: 'História',
        description: 'O pintor se retrata nobremente com a Cruz da Ordem de Santiago no peito, reivindicando a pintura não como ofício mecânico, mas como arte liberal suprema.'
      },
      {
        id: 'hl-infanta',
        xPercent: 51,
        yPercent: 62,
        title: 'A Infanta Margarida Teresa',
        tag: 'Composição',
        description: 'Banhada pela luz dourada da janela da direita, seu vestido de seda prateada e cabelos louros formam o fulcro luminoso do aposento.'
      }
    ],
    historicalContext: 'Pintado no Palácio do Alcázar Real de Madri, no estúdio pessoal do pintor, quatro anos antes de sua morte.',
    techniqueAnalysis: 'Pincelada solta com manchas aparentemente abstratas de perto (alla prima) que se resolvem em textura viva e ar circulante à distância.',
    symbolismAnalysis: 'A metaficção visual: uma pintura sobre a ilusão, a soberania régia e a consciência do olhar.',
    paletteColors: ['#1b1915', '#3f392f', '#7e735e', '#b8a685', '#d4493e']
  },
  {
    id: 'ronda-noturna',
    title: 'A Ronda Noturna',
    originalTitle: 'De Nachtwacht (Militia Company of District II under Frans Banninck Cocq)',
    artist: 'Rembrandt van Rijn',
    artistLifespan: '1606 – 1669',
    year: '1642',
    movementId: 'ouro-holandes',
    museum: 'Rijksmuseum',
    city: 'Amsterdã, Países Baixos',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 437, height: 363 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1200px-The_Night_Watch_-_HD.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/400px-The_Night_Watch_-_HD.jpg',
    description: 'O monumental retrato coletivo dos mosqueteiros cívicos de Amsterdã. Contrariando os retratos estáticos da época, Rembrandt capturou a milícia marchando em pleno dinamismo desordenado sob um facho dramático de luz dourada.',
    audioGuideTranscript: 'A Ronda Noturna é o auge do gênio expressivo de Rembrandt. Enquanto outros pintores agrupavam guardas cívicos em filas comportadas de banquetes, Rembrandt colocou a tropa em movimento fervilhante: tambores soam, cães latem, armas são carregadas e alabardas cintilam. O capitão Frans Banninck Cocq avança e estende a mão para a frente, projetando uma sombra tridimensional impressionante sobre a jaqueta amarela de seu tenente. No meio da tropa masculina sombria, destaca-se misteriosamente uma menina etérea com uma galinha pendurada no cinto: a mascote da guilda dos arcabuzeiros (Kloveniers).',
    hotspots: [
      {
        id: 'hl-captain-hand',
        xPercent: 37,
        yPercent: 54,
        title: 'A Mão Projetada em Ilusão 3D',
        tag: 'Técnica',
        description: 'A mão do capitão parece sair do plano da tela em direção ao espectador, projetando sombra sobre o tenente em virtuosismo de perspectiva.'
      },
      {
        id: 'hl-golden-girl',
        xPercent: 39,
        yPercent: 62,
        title: 'A Menina Dourada (Mascote da Guilda)',
        tag: 'Simbolismo',
        description: 'Carrega no cinto uma galinha morta com garras em destaque — o emblema heráldico da guilda de atiradores (Klauw).'
      },
      {
        id: 'hl-drummer',
        xPercent: 92,
        yPercent: 70,
        title: 'O Tambor e o Alarido',
        tag: 'Composição',
        description: 'À extrema direita, o tocador de tambor espanta um cãozinho, conferindo som e vibração sensorial ao tumulto da marcha.'
      }
    ],
    historicalContext: 'Originalmente chamada "A Companhia do Capitão Frans Banninck Cocq", o apelido "Ronda Noturna" surgiu séculos depois devido ao escurecimento de vernizes antigos (a cena se passa de dia).',
    techniqueAnalysis: 'Técnica de impasto vigoroso com camadas táteis de tinta a óleo densa moldadas com espátula e cabo do pincel.',
    symbolismAnalysis: 'A celebração da autonomia e da força cívica burguesa de Amsterdã contra qualquer tirania monárquica.',
    paletteColors: ['#13100c', '#3b2816', '#724c23', '#cda043', '#e4d3a0']
  },
  {
    id: 'moca-brinco-perola',
    title: 'Moça com o Brinco de Pérola',
    originalTitle: 'Meisje met de parel',
    artist: 'Johannes Vermeer',
    artistLifespan: '1632 – 1675',
    year: 'c. 1665',
    movementId: 'ouro-holandes',
    museum: 'Mauritshuis',
    city: 'Haia, Países Baixos',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 39, height: 44.5 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1200px-1665_Girl_with_a_Pearl_Earring.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/400px-1665_Girl_with_a_Pearl_Earring.jpg',
    description: 'Apelidada de "a Mona Lisa do Norte", esta célebre "tronie" holandesa não é um retrato convencional, mas um estudo expressivo fascinante de uma jovem com turbante exótico oriental e um brinco reluzente.',
    audioGuideTranscript: 'Nesta tela intimista de apenas 44 centímetros de altura, Johannes Vermeer demonstra um domínio incomparável do comportamento da luz. A jovem volta a cabeça por sobre o ombro, os lábios ligeiramente entreabertos como se estivesse prestes a sussurrar um segredo. Repare no brinco: quando inspecionado de perto em alta definição, ele não tem contorno fixo nem fecho; é simplesmente duas pinceladas de tinta branca espelhada que capturam a luz da gola branca e da janela imaginária. O turbante de azul ultramarino genuíno, extraído do raríssimo mineral lápis-lazúli afegão, brilha contra o fundo escuro aveludado.',
    hotspots: [
      {
        id: 'hl-pearl',
        xPercent: 54,
        yPercent: 62,
        title: 'O Brinco de Pérola Ilusionista',
        tag: 'Técnica',
        description: 'Pintado magistralmente com duas pinceladas brancas refletindo a gola e a luz ambiente, sem nenhum traço de engate de metal.'
      },
      {
        id: 'hl-turban-blue',
        xPercent: 44,
        yPercent: 24,
        title: 'O Azul Ultramarino Natural',
        tag: 'História',
        description: 'Vermeer utilizou pigmento genuíno de lápis-lazúli do Afeganistão, um dos materiais mais caros da época, mais valioso que ouro.'
      },
      {
        id: 'hl-lips',
        xPercent: 52,
        yPercent: 71,
        title: 'Os Lábios Úmidos Entreabertos',
        tag: 'Composição',
        description: 'Um minúsculo ponto de luz branca na comissura labial confere umidade e vida imediata à fisionomia da modelo.'
      }
    ],
    historicalContext: 'Uma típica "tronie" (estudo de caráter ou vestimenta exótica na Holanda do século XVII), redescoberta no século XIX após longo esquecimento.',
    techniqueAnalysis: 'Aplicação de camadas translúcidas de óleo com sensibilidade quase fotográfica para a difração da luz.',
    symbolismAnalysis: 'A pérola como símbolo clássico de pureza virginal, beleza preciosa e a natureza fugaz da juventude.',
    paletteColors: ['#0f1113', '#24455f', '#8f7754', '#d8bc88', '#ece6db']
  },
  {
    id: 'o-balanco',
    title: 'O Balanço',
    originalTitle: 'Les Hasards heureux de l\'escarpolette',
    artist: 'Jean-Honoré Fragonard',
    artistLifespan: '1732 – 1806',
    year: '1767',
    movementId: 'rococo',
    museum: 'The Wallace Collection',
    city: 'Londres, Reino Unido',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 64.8, height: 81 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jean-Honor%C3%A9_Fragonard_-_The_Swing.jpg/1200px-Jean-Honor%C3%A9_Fragonard_-_The_Swing.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jean-Honor%C3%A9_Fragonard_-_The_Swing.jpg/400px-Jean-Honor%C3%A9_Fragonard_-_The_Swing.jpg',
    description: 'O epítome da graça sedutora e da alegria galante do Rococó francês. Uma jovem em vestido de seda cor-de-rosa balança em um jardim luxuriante, arremessando o sapatinho para o amante oculto nos arbustos.',
    audioGuideTranscript: 'Mergulhe no hedonismo perfumado do Rococó parisiense com O Balanço de Fragonard. A cena é uma conspiração amorosa travessa: o marido idoso, nas sombras do fundo, empurra o balanço da jovem esposa sem desconfiar que, escondido nas rosas do primeiro plano, o jovem amante vislumbra suas anáguas esvoaçantes. Observe o sapatinho rosa que voa pelos ares em direção a uma estátua do deus Cupido, que coloca o dedo sobre os lábios pedindo sigilo absoluto: "Chut!". A floresta ao redor não é selvagem, mas um parque de conto de fadas onde a vegetação curva-se em arabescos dourados pelo sol.',
    hotspots: [
      {
        id: 'hl-cupid-silence',
        xPercent: 28,
        yPercent: 44,
        title: 'A Estátua do Cupido Silencioso',
        tag: 'Simbolismo',
        description: 'A escultura de Falconet retrata o Amor com o dedo indicador aos lábios, guardando o segredo da traição galante.'
      },
      {
        id: 'hl-pink-shoe',
        xPercent: 47,
        yPercent: 48,
        title: 'O Sapatinho Arremessado',
        tag: 'Composição',
        description: 'O calçado projetado no ar simboliza a entrega espontânea aos caprichos do amor e a fuga das convenções morais.'
      },
      {
        id: 'hl-dress',
        xPercent: 54,
        yPercent: 58,
        title: 'O Vestido Rosa de Seda e Espuma',
        tag: 'Técnica',
        description: 'Fragonard pinta a seda com toques vertiginosos e fluidos de branco e carmim, capturando a brisa cálida do verão.'
      }
    ],
    historicalContext: 'Encomendado por um barão libertino da corte de Luís XV que pediu expressamente para ser retratado admirando as pernas de sua amante.',
    techniqueAnalysis: 'Pincelada ágil, efervescente e vaporosa com predomínio de cores pastel e contrastes aveludados de verde esmeralda e rosa.',
    symbolismAnalysis: 'A volubilidade do amor cortesão e a exaltação dos sentidos num instante efêmero de juventude.',
    paletteColors: ['#283d2d', '#486847', '#e88ba4', '#f6d5da', '#98855e']
  },
  {
    id: 'juramento-dos-horacios',
    title: 'O Juramento dos Horácios',
    originalTitle: 'Le Serment des Horaces',
    artist: 'Jacques-Louis David',
    artistLifespan: '1748 – 1825',
    year: '1784',
    movementId: 'neoclassicismo',
    museum: 'Musée du Louvre',
    city: 'Paris, França',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 425, height: 330 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/1200px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/400px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
    description: 'O manifesto definitivo do Neoclassicismo. Três irmãos romanos juram sobre as espadas erguidas pelo pai lutar até a morte por sua pátria, enquanto as mulheres da família choram a tragédia iminente.',
    audioGuideTranscript: 'Com O Juramento dos Horácios, Jacques-Louis David declarou guerra visual à futilidade do Rococó e lançou o manifesto estético que antecipou a Revolução Francesa. O espaço é austero como um templo romano, pontuado por três arcadas dóricas severas. À esquerda, os três irmãos Horácios estendem os braços com firmeza muscular inabalável em juramento cívico; ao centro, o venerável pai ergue as lâminas de ferro; à direita, em doloroso contraste de linhas curvas e suaves, as irmãs e mães curvam-se em pranto resignado, pois uma delas está noiva de um dos inimigos de Alba Longa. A razão cívica triunfa sobre os sentimentos familiares.',
    hotspots: [
      {
        id: 'hl-swords',
        xPercent: 49,
        yPercent: 43,
        title: 'As Espadas e o Dever Cívico',
        tag: 'Simbolismo',
        description: 'O ponto de convergência de toda a perspectiva: o juramento de dar a vida pela República perante o pátrio poder.'
      },
      {
        id: 'hl-brothers',
        xPercent: 24,
        yPercent: 52,
        title: 'A Geometria Muscular Heroica',
        tag: 'Composição',
        description: 'Linhas retas e rígidas nos corpos dos guerreiros inspiradas na estatuária grega, simbolizando força inquebrantável.'
      },
      {
        id: 'hl-crying-women',
        xPercent: 78,
        yPercent: 68,
        title: 'O Lamento das Mulheres',
        tag: 'História',
        description: 'Camilla chora antecipando a tragédia que a levará à morte pelas mãos do próprio irmão ao lamentar seu noivo inimigo.'
      }
    ],
    historicalContext: 'Pintado em Roma e exposto no Salão de Paris de 1785, causou furor patriótico e tornou-se o estandarte estético da Revolução.',
    techniqueAnalysis: 'Desenho cirúrgico e nítido com ausência de pinceladas visíveis, iluminação frontal límpida e perspectiva linear rigorosa.',
    symbolismAnalysis: 'O sacrifício supremo da vida pessoal em nome do bem comum da República.',
    paletteColors: ['#1e1c1b', '#6d2621', '#97876a', '#3f4651', '#c7b494']
  },
  {
    id: 'caminhante-mar-nevoa',
    title: 'O Caminhante sobre o Mar de Névoa',
    originalTitle: 'Der Wanderer über dem Nebelmeer',
    artist: 'Caspar David Friedrich',
    artistLifespan: '1774 – 1840',
    year: '1818',
    movementId: 'romantismo',
    museum: 'Hamburger Kunsthalle',
    city: 'Hamburgo, Alemanha',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 74.8, height: 94.8 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/1200px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/400px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
    description: 'O ícone máximo do espírito romântico. Um jovem solitário com casaca escura contempla, do alto de um penhasco rochoso escarpado, um oceano infinito de nuvens e picos montanhosos.',
    audioGuideTranscript: 'Nenhum quadro sintetiza tão profundamente o Romantismo quanto esta obra de Caspar David Friedrich. O protagonista está de costas para nós — um artifício conhecido como Rückenfigur —, convidando-nos a olhar através de seus próprios olhos e sentir o choque do Sublime. Diante dele, as montanhas da Suíça Saxônica emergem de um manto espesso de névoa como ilhas em um mar primordial. O homem não é o mestre da natureza, mas um peregrino solitário contemplando o mistério insondável do Infinito, da Criação e do destino da alma humana.',
    hotspots: [
      {
        id: 'hl-ruckenfigur',
        xPercent: 50,
        yPercent: 48,
        title: 'A Rückenfigur (Figura de Costas)',
        tag: 'Composição',
        description: 'Ao esconder o rosto do viajante, Friedrich transforma o personagem em um avatar universal para qualquer observador.'
      },
      {
        id: 'hl-fog-sea',
        xPercent: 49,
        yPercent: 74,
        title: 'O Mar de Névoa e o Sublime',
        tag: 'Simbolismo',
        description: 'A névoa representa as incertezas da vida terrena e o véu que separa a existência mortal da transcendência divina.'
      },
      {
        id: 'hl-rock-precipice',
        xPercent: 47,
        yPercent: 88,
        title: 'O Penhasco Inabalável da Fé',
        tag: 'Técnica',
        description: 'As pedras escuras e sólidas ancoram a composição em contraste direto com a imaterialidade translúcida do ar.'
      }
    ],
    historicalContext: 'Criado durante o despertar nacionalista alemão pós-guerras napoleônicas, o traje tradicional alemão (Altdeutsche Tracht) era símbolo de resistência política libertária.',
    techniqueAnalysis: 'Contraste entre o primeiro plano escuro e nítido e a luminosidade diáfana e aérea da névoa ao fundo.',
    symbolismAnalysis: 'A solidão existencial, a finitude humana perante as forças titânicas da natureza cósmica.',
    paletteColors: ['#171c20', '#3b4952', '#6b7b84', '#a7b4bc', '#d5dbe0']
  },
  {
    id: 'liberdade-guiando-o-povo',
    title: 'A Liberdade Guiando o Povo',
    originalTitle: 'La Liberté guidant le peuple',
    artist: 'Eugène Delacroix',
    artistLifespan: '1798 – 1863',
    year: '1830',
    movementId: 'romantismo',
    museum: 'Musée du Louvre',
    city: 'Paris, França',
    medium: 'Óleo sobre tela',
    dimensionsCm: { width: 325, height: 260 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1200px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/400px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
    description: 'A glorificação apaixonada da Revolução de Julho de 1830 (Três Dias Gloriosos). A personificação da Liberdade, Marianne, avança resoluta empunhando a bandeira tricolor sobre os corpos dos combatentes caídos na barricada.',
    audioGuideTranscript: 'Sinta a pólvora e a fúria das barricadas de Paris nesta tela colossal de Eugène Delacroix. A Liberdade não é uma estátua fria de mármore; é uma mulher viva, enérgica, de seios nus, usando o barrete frígio dos revolucionários e calçando passos decididos sobre a madeira despedaçada. Ao seu lado, a sociedade francesa une-se na luta: o jovem burguês de cartola (frequentemente tido como autorretrato de Delacroix), o operário fabril com espada, e o destemido garoto de rua empunhando pistolas — que inspirou o personagem Gavroche de Os Miseráveis de Victor Hugo. Ao fundo, entre a fumaça dos canhões, despontam as torres medievais de Notre-Dame.',
    hotspots: [
      {
        id: 'hl-tricolor-flag',
        xPercent: 54,
        yPercent: 20,
        title: 'A Bandeira Tricolor',
        tag: 'Simbolismo',
        description: 'O estandarte azul, branco e vermelho proibido pela Restauração monárquica é erguido como farol supremo da República.'
      },
      {
        id: 'hl-street-urchin',
        xPercent: 77,
        yPercent: 49,
        title: 'O Garoto de Paris (Gavroche)',
        tag: 'História',
        description: 'O menino que avança com coragem juvenil empunhando pistolas, símbolo do futuro combativo da juventude francesa.'
      },
      {
        id: 'hl-fallen-fighter',
        xPercent: 28,
        yPercent: 88,
        title: 'O Combatente Caído em Camisão Branco',
        tag: 'Técnica',
        description: 'A camisa branca ensanguentada é um facho cromático dramático que ecoa a luz branca da bandeira no céu.'
      }
    ],
    historicalContext: 'Comemora a insurreição popular de 27 a 29 de julho de 1830 que derrubou o tirânico rei absolutista Carlos X da França.',
    techniqueAnalysis: 'Composição piramidal turbulenta com uso expressionista da cor e fumaça atmosférica que dissolve contornos clássicos.',
    symbolismAnalysis: 'A personificação nacional de Marianne e a luta perpétua da humanidade contra a opressão tirânica.',
    paletteColors: ['#282622', '#8c2d28', '#2b4765', '#d4be88', '#898c88']
  },
  {
    id: 'saturno-devorando-filho',
    title: 'Saturno Devorando um Filho',
    originalTitle: 'Saturno devorando a su hijo',
    artist: 'Francisco de Goya',
    artistLifespan: '1746 – 1828',
    year: 'c. 1819 – 1823',
    movementId: 'romantismo',
    museum: 'Museu do Prado',
    city: 'Madri, Espanha',
    medium: 'Óleo sobre reboco transferido para tela',
    dimensionsCm: { width: 81.4, height: 143.5 },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/1200px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg',
    thumbUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/400px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg',
    description: 'Uma das célebres "Pinturas Negras" de Goya. O titã Cronos, apavorado pela profecia de que seria destronado por seus próprios descendentes, devora com selvageria canibal o corpo mutilado de seu filho recém-nascido.',
    audioGuideTranscript: 'Adentramos aqui as sombras mais aterrorizantes da mente humana com as Pinturas Negras de Francisco de Goya. Surdo, idoso e desiludido com a restauração absolutista na Espanha, Goya pintou este afresco diretamente nas paredes da sua casa de campo, a Quinta del Sordo, sem intenção de exibi-lo ao público. O titã Saturno não exibe nobreza mitológica: seus olhos estão desorbitados de terror e loucura; seus nós dos dedos cravam-se na carne ensanguentada. Esta tela é uma meditação visceral sobre o Tempo que devora tudo o que gera, o declínio físico e a barbárie autodestrutiva das guerras entre irmãos.',
    hotspots: [
      {
        id: 'hl-saturn-eyes',
        xPercent: 54,
        yPercent: 22,
        title: 'Os Olhos de Terror e Loucura',
        tag: 'Composição',
        description: 'Os globos oculares desvairados não expressam prazer, mas um pânico incontrolável diante de sua própria impotência temporal.'
      },
      {
        id: 'hl-bloody-claws',
        xPercent: 49,
        yPercent: 42,
        title: 'As Garras Cravadas na Carne',
        tag: 'Técnica',
        description: 'Goya aplicou pigmento vermelho e branco com espátula e pinceladas violentas, rasgando a escuridão do fundo.'
      },
      {
        id: 'hl-devoured-child',
        xPercent: 52,
        yPercent: 58,
        title: 'O Filho Mutilado e o Memento Mori',
        tag: 'Simbolismo',
        description: 'O corpo sem cabeça já adulto sintetiza a destruição da própria prole pela loucura tirânica do poder envelhecido.'
      }
    ],
    historicalContext: 'Pintado diretamente sobre o gesso da sala de jantar de Goya, só foi descoberto e transferido para tela décadas após sua morte.',
    techniqueAnalysis: 'Pintura monocromática expressionista precursora da arte moderna, com impasto cru e paleta reduzida a preto, ocre e sangue.',
    symbolismAnalysis: 'A alegoria trágica da tirania devorando o povo espanhol e do tempo inexorável destruindo a humanidade.',
    paletteColors: ['#0e0c0b', '#2e251b', '#624a30', '#9c2419', '#c09865']
  }
];
