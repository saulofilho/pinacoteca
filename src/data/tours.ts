import { CuratedTour } from '../types';

export const CURATED_TOURS: CuratedTour[] = [
  {
    id: 'mestres-da-luz',
    title: 'Mestres da Luz: Do Sfumato ao Tenebrismo',
    subtitle: 'Uma jornada através das maiores revoluções ópticas e dramáticas da pintura ocidental.',
    curator: 'Dra. Helena Visconti (Curadora Sênior de Pintura Clássica)',
    durationMinutes: 18,
    artworkIds: ['mona-lisa', 'vocacao-sao-mateus', 'ronda-noturna', 'moca-brinco-perola'],
    bannerImage: 'https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=1200&q=80',
    introNarration: 'Seja bem-vindo a este tour curado exclusivo pela Pinacoteca Clássica. Neste percurso, examinaremos como a manipulação da luz transformou para sempre a consciência artística ocidental. Partiremos da névoa poética do sfumato de Leonardo da Vinci, passaremos pelo raio de luz implacável do tenebrismo de Caravaggio, desvendaremos o impasto dourado de Rembrandt e contemplaremos a pureza óptica quase fotográfica de Vermeer.',
    conclusionNarration: 'Parabéns por concluir este tour. Você testemunhou como quatro séculos de mestres manipularam a física e a metafísica da luz para revelar a alma humana.',
    triviaQuiz: [
      {
        question: 'Qual técnica pictórica Leonardo da Vinci consagrou para eliminar contornos rígidos e simular a fumaça atmosférica?',
        options: ['Impasto com espátula', 'Sfumato', 'Pontilhismo', 'Tenebrismo'],
        correctIndex: 1,
        explanation: 'O sfumato (da palavra italiana "fumaça") consiste em aplicar sucessivas camadas translúcidas de tinta para criar gradações imperceptíveis de sombra e luz.'
      },
      {
        question: 'Em "A Vocação de São Mateus" de Caravaggio, a mão estendida de Cristo cita expressamente qual outra obra monumental?',
        options: ['A Criação de Adão (Michelangelo)', 'A Escola de Atenas (Rafael)', 'A Última Ceia (Da Vinci)', 'O Nascimento de Vênus (Botticelli)'],
        correctIndex: 0,
        explanation: 'Caravaggio copiou o desenho exato da mão de Adão da Capela Sistina, simbolizando que Cristo é o novo Adão que vem redimir a humanidade.'
      },
      {
        question: 'Que pigmento mineral precioso, originário do Afeganistão e mais caro que o ouro, Vermeer usou no turbante da Moça com Brinco de Pérola?',
        options: ['Malaquita', 'Azurita', 'Lápis-lazúli (Azul Ultramarino)', 'Cobalto Real'],
        correctIndex: 2,
        explanation: 'Vermeer era famoso por sua obsessão por azul ultramarino natural, obtido através da moagem da gema semipreciosa lápis-lazúli.'
      }
    ]
  },
  {
    id: 'sublime-revolucao',
    title: 'Paixões, Mitos e a Chama Romântica',
    subtitle: 'Da harmonia mitológica do Renascimento ao tumulto existencial e revolucionário do Romantismo.',
    curator: 'Prof. Gabriel D\'Orsay (Historiador de Arte e Estética)',
    durationMinutes: 22,
    artworkIds: ['nascimento-de-venus', 'juramento-dos-horacios', 'caminhante-mar-nevoa', 'liberdade-guiando-o-povo', 'saturno-devorando-filho'],
    bannerImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    introNarration: 'Neste percurso emocional e estético, exploramos a transição radical entre o ideal de beleza pura e harmônica de Botticelli, a austeridade de David, e o despertar tempestuoso do espírito romântico, onde o Sublime, a rebelião popular e os abismos da mente humana tomam o centro do palco.',
    conclusionNarration: 'Você completou a jornada pelas paixões clássicas e românticas, compreendendo como a arte refletiu as convulsões políticas e espirituais da Europa.',
    triviaQuiz: [
      {
        question: 'O que caracteriza o conceito estético de "Sublime" tão celebrado pelos artistas românticos como Friedrich?',
        options: [
          'Uma beleza agradável, decorativa e simétrica',
          'O sentimento de assombro, vertigem e temor diante da imensidão incomensurável da natureza',
          'A obediência estrita às regras matemáticas da academia',
          'A representação exclusiva de cenas mitológicas alegres'
        ],
        correctIndex: 1,
        explanation: 'Conceituado por Edmund Burke e Kant, o Sublime é o prazer estético misturado ao terror reverente perante a infinitude da tempestade, dos abismos e do cosmos.'
      },
      {
        question: 'Quem é a figura feminina central em "A Liberdade Guiando o Povo" de Eugène Delacroix?',
        options: ['Joana d’Arc', 'A deusa Atena', 'Marianne (A personificação da República Francesa)', 'A Rainha Maria Antonieta'],
        correctIndex: 2,
        explanation: 'A figura é Marianne, símbolo nacional da França e encarnação da República, da Liberdade e da Razão que conduz o povo sobre as barricadas.'
      },
      {
        question: 'Onde Francisco de Goya pintou originalmente sua aterrorizante obra "Saturno Devorando um Filho"?',
        options: ['No teto da Capela Real de Madri', 'Nas paredes de gesso da sua casa de campo (Quinta del Sordo)', 'Em uma encomenda para o Rei Fernando VII', 'Na Academia de San Fernando'],
        correctIndex: 1,
        explanation: 'As 14 Pinturas Negras foram pintadas diretamente sobre as paredes rebocadas da Quinta del Sordo como desabafo íntimo de Goya, sem intenção original de exibição pública.'
      }
    ]
  },
  {
    id: 'enigma-do-olhar',
    title: 'O Enigma do Olhar & Espelhos da Alma',
    subtitle: 'A fascinante metaficção visual e os segredos ocultos dos maiores retratos da humanidade.',
    curator: 'Dra. Beatriz Sanches (Especialista em Teoria da Imagem)',
    durationMinutes: 15,
    artworkIds: ['mona-lisa', 'as-meninas', 'escola-de-atenas', 'moca-brinco-perola'],
    bannerImage: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=80',
    introNarration: 'Quando contemplamos uma grande pintura clássica, estamos apenas olhando para ela ou ela também nos observa de volta? Em "O Enigma do Olhar", descobriremos como mestres como Leonardo, Velázquez e Rafael desafiaram a fronteira entre ficção e realidade, convidando o observador a fazer parte ativa da cena.',
    conclusionNarration: 'Excelente! Você agora é capaz de decifrar as camadas ocultas de metalinguagem, reflexos e olhares que tornam estas obras imortais.',
    triviaQuiz: [
      {
        question: 'Em "As Meninas" de Velázquez, quem está refletido no espelho ao fundo do aposento?',
        options: ['O próprio pintor Velázquez', 'A Infanta Margarida', 'O Rei Felipe IV e a Rainha Mariana da Áustria', 'O espectador moderno'],
        correctIndex: 2,
        explanation: 'O espelho revela o casal real, provando que o espectador ocupa exatamente a mesma posição soberana onde o Rei e a Rainha estavam posicionados.'
      },
      {
        question: 'Qual filósofo solitário na "Escola de Atenas" de Rafael recebeu as feições do mestre Michelangelo?',
        options: ['Platão', 'Heráclito de Éfeso', 'Sócrates', 'Diógenes'],
        correctIndex: 1,
        explanation: 'Rafael retratou Heráclito com o rosto e a postura melancólica de Michelangelo sentado sobre um bloco de pedra mármore no primeiro plano.'
      }
    ]
  }
];
