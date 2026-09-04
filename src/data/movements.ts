import { Movement } from '../types';

export const MOVEMENTS: Movement[] = [
  {
    id: 'renascimento',
    name: 'Renascimento',
    century: 'Séculos XIV – XVI',
    period: 'c. 1300 – 1600',
    summary: 'O renascer do humanismo clássico greco-romano, a redescoberta da perspectiva matemática, a proporção áurea e o equilíbrio harmônico.',
    fullHistory: 'Surgido na Toscana (Florença) e irradiado por Roma e Veneza, o Renascimento rompeu com o teocentrismo medieval para colocar o ser humano no centro do cosmos. Artistas como Leonardo, Michelangelo e Rafael fundiram rigor anatômico científico, geometria euclidiana e lirismo poético. As inovações fundamentais incluem a perspectiva linear de ponto de fuga desenvolvida por Brunelleschi e Alberti, além do sfumato leonardino, que dissolve as linhas duras em sombras atmosféricas translúcidas.',
    philosophy: 'Humanismo, Antropocentrismo, Racionalismo, Simetria e Idealização da Beleza como reflexo da Harmonia Divina.',
    keyCharacteristics: [
      'Perspectiva linear matemática com ponto de fuga central',
      'Técnica do Sfumato (gradações sutis sem contornos rígidos)',
      'Estudo profundo da anatomia humana por dissecação real',
      'Equilíbrio composicional em formato piramidal ou triangular',
      'Inspiração na estatuária e mitologia da Antiguidade Clássica'
    ],
    pioneeringMasters: ['Leonardo da Vinci', 'Michelangelo Buonarroti', 'Rafael Sanzio', 'Sandro Botticelli', 'Donatello'],
    famousMasterpieces: ['Mona Lisa', 'A Criação de Adão', 'Escola de Atenas', 'O Nascimento de Vênus'],
    contrastWithOther: 'Diferente do Barroco subsequente, que privilegia o caos emotivo e diagonais vertiginosas, o Renascimento busca a serenidade absoluta, a luz diáfana uniforme e a estabilidade composicional.',
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#d4af37'
  },
  {
    id: 'maneirismo',
    name: 'Maneirismo',
    century: 'Século XVI',
    period: 'c. 1520 – 1600',
    summary: 'Elegância deliberadamente estilizada, figuras alongadas em "figura serpentinata", espaço comprimido e tensão psicológica pós-Alto Renascimento.',
    fullHistory: 'Com a morte de Rafael em 1520 e o Saque de Roma em 1527, a estabilidade e a clareza harmônica do Alto Renascimento entraram em colapso. O Maneirismo (derivado da "maniera" dos mestres) subverteu as regras clássicas: proporções humanas foram artificialmente alongadas, cores ácidas e contrastantes foram adotadas, e as perspectivas tornaram-se vertiginosas e labirínticas. O movimento reflete uma era de profunda inquietação espiritual, alimentada pela Reforma Protestante.',
    philosophy: 'Subversão virtuosa das regras clássicas, busca pelo capricho intelectual (invenzione) e expressividade emocional febril.',
    keyCharacteristics: [
      'Alongamento exagerado dos corpos e membros (figura serpentinata)',
      'Paleta cromática inesperada com tons ácidos e frios',
      'Composições densas, desprovidas de ponto focal único',
      'Ambiguidade espacial e perspectivas claustrofóbicas',
      'Sofisticação cortesã e simbolismos herméticos'
    ],
    pioneeringMasters: ['Parmigianino', 'El Greco', 'Pontormo', 'Rosso Fiorentino', 'Bronzino'],
    famousMasterpieces: ['Madona do Pescoço Longo', 'O Sepultamento do Conde de Orgaz', 'A Deposição da Cruz'],
    contrastWithOther: 'Enquanto o Renascimento cultivava a verossimilhança natural, o Maneirismo exibia orgulhosamente o artifício estilístico, distorcendo a natureza em prol de um refinamento intelectual sofisticado.',
    bannerImage: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#9e64a8'
  },
  {
    id: 'barroco',
    name: 'Barroco',
    century: 'Século XVII',
    period: 'c. 1600 – 1750',
    summary: 'Intensidade dramática espetacular, chiaroscuro teatral violento, emoção arrebatadora e dinamismo monumental a serviço da Contra-Reforma.',
    fullHistory: 'Nascido em Roma sob o impulso da Igreja Católica para combater a iconoclastia da Reforma Protestante, o Barroco visava converter os fiéis através do impacto sensorial direto e da paixão visceral. Caravaggio revolucionou a pintura ocidental introduzindo modelos populares recolhidos das ruas e iluminando-os com fachos de luz implacáveis sobre fundos de trevas abissais (Tenebrismo). Na Flandres e na Espanha, Rubens e Velázquez levaram a pincelada livre e a ilusão de presença viva ao apogeu.',
    philosophy: 'Teatralidade sensorial, persuasão emocional, memento mori e a fragilidade fugaz da existência humana perante o divino.',
    keyCharacteristics: [
      'Chiaroscuro violento e Tenebrismo (contraste extremo entre sombra e luz)',
      'Linhas diagonais e movimentos dinâmicos em espiral',
      'Realismo despojado de idealizações (rostos envelhecidos, pés sujos)',
      'Êxtase místico, dor pungente e intensidade teatral',
      'Fusão ilusionista entre espaço do espectador e espaço pictórico'
    ],
    pioneeringMasters: ['Caravaggio', 'Gian Lorenzo Bernini', 'Peter Paul Rubens', 'Diego Velázquez', 'Artemisia Gentileschi'],
    famousMasterpieces: ['A Vocação de São Mateus', 'As Meninas', 'Judite Degolando Holofernes', 'O Êxtase de Santa Teresa'],
    contrastWithOther: 'Oposto à contenção geométrica renascentista, o Barroco atira o observador no próprio clímax da ação, congelando instantes de choque, sangue, glória ou epifania luminosa.',
    bannerImage: 'https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#c97a2b'
  },
  {
    id: 'ouro-holandes',
    name: 'Século de Ouro Holandês',
    century: 'Século XVII',
    period: 'c. 1620 – 1672',
    summary: 'A intimidade da luz doméstica, naturezas-mortas microscópicas, retratos cívicos e paisagens da primeira república burguesa e mercantil do mundo.',
    fullHistory: 'Livre do domínio colonial espanhol e governada por mercadores calvinistas sem corte aristocrática nem mecenato eclesiástico católico, a República das Províncias Unidas criou um mercado de arte inédito. Pessoas comuns compravam quadros para suas residências. Vermeer registrou a poética do silêncio e o comportamento óptico da luz incidindo sobre tecidos, pães e mapas; Rembrandt investigou as profundezas da alma humana através de autorretratos sinceros e da magistral Ronda Noturna.',
    philosophy: 'A sacralidade do cotidiano laico, reflexão moral implícita (vanitas), veracidade óptica e celebração da vida civil.',
    keyCharacteristics: [
      'Iluminação natural translúcida (janelas laterais, reflexos em superfícies)',
      'Gêneros inovadores: cenas de gênero domésticas, marinhas, retratos coletivos',
      'Texturas táteis hiper-realistas (veludo, cerâmica, pão, conchas)',
      'Sensibilidade óptica precursora da fotografia (possível uso de camera obscura)',
      'Pincelada expressiva e texturizada (impasto de Rembrandt)'
    ],
    pioneeringMasters: ['Johannes Vermeer', 'Rembrandt van Rijn', 'Frans Hals', 'Jan Steen', 'Jacob van Ruisdael'],
    famousMasterpieces: ['Moça com Brinco de Pérola', 'A Ronda Noturna', 'A Leiteira', 'A Lição de Anatomia do Dr. Tulp'],
    contrastWithOther: 'Enquanto o Barroco italiano e francês glorificava monarcas e santos em escala monumental, o Século de Ouro Holandês encontrou o infinito na quietude de uma sala com azulejos de Delft.',
    bannerImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#3b82f6'
  },
  {
    id: 'rococo',
    name: 'Rococó',
    century: 'Século XVIII',
    period: 'c. 1715 – 1780',
    summary: 'A graça pastoral aristocrática, curvas rocalles em arabesco, paletas pastéis e o hedonismo galante da corte parisiense pré-Revolução.',
    fullHistory: 'Nascido em Paris nos salões nobres após a morte do austero Rei Sol Luís XIV, o Rococó foi a celebração do deleite amoroso, da frivolidade elegante e da intimidade suntuosa. Abandonando os pesados temas heroicos e religiosos, pintores como Watteau, Boucher e Fragonard representaram festas galantes nos parques, deusas mitológicas banhadas em luz perolada e brincadeiras sedutoras sob folhagens orvalhadas.',
    philosophy: 'Carpe diem cortesão, leveza decorativa, sensualidade refinada e celebração da natureza como refúgio paradisíaco.',
    keyCharacteristics: [
      'Paleta luminosa em tons pastéis (rosa pó, verde celadon, azul céu, marfim)',
      'Linhas curvas assimétricas e motivos orgânicos em concha (rocaille)',
      'Temas de amor cortês, piqueniques bucólicos e prazeres mundanos',
      'Pinceladas ágeis, vaporosas e repletas de frescor atmosférico',
      'Rejeição da gravidade moral e da sobriedade'
    ],
    pioneeringMasters: ['Jean-Honoré Fragonard', 'Antoine Watteau', 'François Boucher', 'Elisabeth Vigée Le Brun'],
    famousMasterpieces: ['O Balanço', 'Peregrinação à Ilha de Citera', 'O Triunfo de Vênus'],
    contrastWithOther: 'Contra o drama soturno e pesado do Barroco, o Rococó propôs um riso despreocupado; mas sua aparente futilidade acabou varrida pela severidade cívica moralista do Neoclassicismo.',
    bannerImage: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#ec4899'
  },
  {
    id: 'neoclassicismo',
    name: 'Neoclassicismo',
    century: 'Século XVIII – XIX',
    period: 'c. 1760 – 1830',
    summary: 'O retorno à sobriedade heroica de Atenas e Roma Antiga, linhas límpidas e virtudes cívicas em sintonia com o Iluminismo e a Revolução Francesa.',
    fullHistory: 'Inspirado pelas descobertas arqueológicas de Pompeia e Herculano e impulsionado pelas ideias iluministas de Voltaire e Diderot, o Neoclassicismo abominou a futilidade do Rococó. A arte foi convocada como instrumento pedagógico e moralizador da República e do Império Napoleônico. Jacques-Louis David liderou o movimento com composições frontais, rigor anatômico escultórico e devoção heroica ao dever patriótico.',
    philosophy: 'Racionalismo iluminista, virtude cívica moral (exemplum virtutis), nobre simplicidade e grandeza serena.',
    keyCharacteristics: [
      'Desenho preciso com contornos definidos e primazia da linha sobre a cor',
      'Iluminação clara e homogênea, sem ambiguidades tenebristas',
      'Composições lineares em friso, inspiradas nos baixos-relevos antigos',
      'Vestimentas togas, elmos romanos e arquitetura dórica/jônica',
      'Temas históricos de sacrifício, coragem moral e patriotismo'
    ],
    pioneeringMasters: ['Jacques-Louis David', 'Jean-Auguste-Dominique Ingres', 'Antonio Canova', 'Anton Raphael Mengs'],
    famousMasterpieces: ['O Juramento dos Horácios', 'A Morte de Marat', 'A Apoteose de Homero', 'Napoleão no Passo de São Bernardo'],
    contrastWithOther: 'Se o Rococó buscava seduzir os sentidos e o Romantismo enaltecia o delírio emocional irracional, o Neoclassicismo impôs a soberania da mente, da disciplina ética e da razão cívica.',
    bannerImage: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#10b981'
  },
  {
    id: 'romantismo',
    name: 'Romantismo',
    century: 'Séculos XVIII – XIX',
    period: 'c. 1790 – 1850',
    summary: 'A exaltação do sublime, o mistério insondável da natureza selvagem, a paixão individual rebelde e a busca fervorosa pela liberdade dos povos.',
    fullHistory: 'Reagindo contra o racionalismo mecânico do Iluminismo e a padronização cinzenta da Revolução Industrial, o Romantismo proclamou os direitos absolutos do sentimento, do sonho e da imaginação. Na Alemanha, Caspar David Friedrich retratou o homem minúsculo diante da infinitude cósmica; na França, Géricault e Delacroix pintaram naufrágios desesperados e barricadas revolucionárias incandescentes; na Espanha, Goya revelou os pesadelos sombrios da loucura e da tirania bélica.',
    philosophy: 'O conceito de "Sublime" (o fascínio diante do que é grandioso e aterrorizante ao mesmo tempo), nacionalismo poético e revolta existencial.',
    keyCharacteristics: [
      'Cenas de tempestades furiosas, mares revoltos e montanhas imponentes',
      'Predomínio da cor apaixonada e da pincelada gestual turbulenta',
      'Temas de tragédia, heroísmo rebelde, folclore medieval e pesadelo',
      'Sensação de solidão metafísica e nostalgia contemplativa',
      'Defesa apaixonada das revoluções de libertação popular'
    ],
    pioneeringMasters: ['Caspar David Friedrich', 'Eugène Delacroix', 'Francisco de Goya', 'J.M.W. Turner', 'Théodore Géricault'],
    famousMasterpieces: ['O Caminhante sobre o Mar de Névoa', 'A Liberdade Guiando o Povo', 'A Balsa da Medusa', 'Saturno Devorando um Filho', 'Chuva, Vapor e Velocidade'],
    contrastWithOther: 'O Romantismo derrubou o ideal neoclássico de ordem e geometria previsível, abraçando o caos emocional incontrolável, a tempestade e a vertigem do infinito.',
    bannerImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#ef4444'
  },
  {
    id: 'realismo',
    name: 'Realismo Acadêmico & Social',
    century: 'Século XIX',
    period: 'c. 1848 – 1880',
    summary: 'A representação verídica, crua e desmitificada da vida trabalhadora moderna, repudiando tanto a idealização neoclássica quanto o melodrama romântico.',
    fullHistory: 'Eclodindo após a Primavera dos Povos de 1848 e a consolidação do capitalismo industrial, o Realismo sustentou que a única missão legítima do pintor era retratar aquilo que podia ver e tocar. Gustave Courbet chocou a Academia Francesa ao dar a camponeses e operários telas monumentais tradicionalmente reservadas a reis e divindades. Millet dignificou as ceifadoras nos campos da Normandia e Daumier satirizou com perspicácia a hipocrisia das classes dirigentes.',
    philosophy: 'Materialismo histórico, compromisso com a verdade empírica, denúncia social e recusa da fantasia mitológica.',
    keyCharacteristics: [
      'Personagens humildes retratados sem afetação nem sentimentalismo piegas',
      'Cores terrosas, ocres, castanhos e cinzas que evocam o solo e o trabalho braçal',
      'Texturas pesadas com uso de espátula e tinta densa',
      'Rejeição absoluta de temas mitológicos, bíblicos ou cortesãos',
      'Registro direto do impacto social e humano da Revolução Industrial'
    ],
    pioneeringMasters: ['Gustave Courbet', 'Jean-François Millet', 'Honoré Daumier', 'Édouard Manet (período de transição)'],
    famousMasterpieces: ['Os Quebradores de Pedra', 'As Respiga Doras (As Ceifadoras)', 'Um Enterro em Ornans', 'O Vagão de Terceira Classe'],
    contrastWithOther: 'Courbet declarou: "Mostrem-me um anjo e eu pintarei um anjo". O Realismo substituiu heróis mitológicos por homens e mulheres reais com as mãos calosas da labuta diária.',
    bannerImage: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200&q=80',
    colorAccent: '#8b5cf6'
  }
];
