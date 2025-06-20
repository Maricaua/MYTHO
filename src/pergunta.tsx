export interface Pergunta {
  pergunta: string;
  alternativas: string[];
  resposta_correta: number;
}

export const perguntas: Pergunta[] = [
  {
    pergunta: "O que é a Boiuna?",
    alternativas: [
      "Uma sereia que encanta os pescadores",
      "Uma cobra gigante que vive nos rios",
      "Um pássaro de fogo que protege as matas",
      "Um espírito da floresta que protege os animais"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "Qual é a lenda do boto?",
    alternativas: [
      "Diz que o boto se transforma em um homem sedutor à noite",
      "Conta que o boto devora pescadores desavisados",
      "Afirma que o boto ilumina os rios com seu brilho mágico",
      "Diz que o boto protege as águas contra invasores"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Quem é a Iara?",
    alternativas: [
      "Um espírito da floresta que protege os animais",
      "Uma cobra gigante que vive nos rios",
      "Uma sereia que encanta e atrai pescadores para o fundo do rio",
      "Uma bruxa que se transforma em pássaro à noite"
    ],
    resposta_correta: 2, // Alternativa correta: 'c'
  },
  {
    pergunta: "O que o Curupira faz?",
    alternativas: [
      "Protege a floresta e engana caçadores com seus pés virados",
      "Hipnotiza pescadores com sua música mágica",
      "Se transforma em lobo nas noites de lua cheia",
      "Constrói casas mágicas para viajantes perdidos"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que é um lobisomem?",
    alternativas: [
      "Um homem que se transforma em lobo nas noites de lua cheia",
      "Um ser que protege a floresta contra invasores",
      "Um monstro que vive nas profundezas dos rios",
      "Um pássaro de fogo que ilumina as matas"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Quem é a Caipora?",
    alternativas: [
      "Um monstro que assombra os pescadores à noite",
      "Uma criatura que protege os animais da floresta",
      "Um ser que se transforma em lobo para assustar caçadores",
      "Uma bruxa que voa à noite em forma de pássaro"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "O que acontece com quem nega um presente à Matinta Perera?",
    alternativas: [
      "Nada acontece, pois é só uma lenda",
      "A pessoa recebe uma bênção inesperada",
      "A Matinta Perera amaldiçoa a pessoa com doenças e azar",
      "A floresta se fecha e a pessoa se perde para sempre"
    ],
    resposta_correta: 2, // Alternativa correta: 'c'
  },
  {
    pergunta: "O que o Boitatá protege?",
    alternativas: [
      "As matas e os rios contra incêndios",
      "Os animais da floresta contra caçadores",
      "Os navegantes contra tempestades",
      "As aldeias contra invasores"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Como surgiu a Vitória-Régia segundo a lenda?",
    alternativas: [
      "Uma índia que se apaixonou pela lua e virou uma flor na água",
      "Uma sereia que se transformou em planta para escapar de caçadores",
      "Um espírito da floresta que deu origem à flor encantada",
      "Um presente dos deuses para os povos ribeirinhos"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Quais são as travessuras do Saci-Pererê?",
    alternativas: [
      "Esconder objetos, fazer tranças no cabelo dos cavalos e assustar viajantes",
      "Encantar pescadores e levá-los para o fundo do rio",
      "Assombrar casas e transformar pessoas em animais",
      "Hipnotizar caçadores e fazê-los dormir por anos"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Onde a Boiuna costuma aparecer?",
    alternativas: [
      "Nas montanhas e cavernas",
      "Nos rios e lagos da Amazônia",
      "No fundo do oceano",
      "Em campos abertos e desertos"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "O que a Boiuna faz com os navegantes?",
    alternativas: [
      "Guia-os para o caminho certo",
      "Transforma-se em um barco para enganá-los",
      "Dá-lhes poderes mágicos",
      "Hipnotiza-os com seu canto"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "Por que o boto se transforma em um homem?",
    alternativas: [
      "Para ajudar pescadores em perigo",
      "Para seduzir mulheres em festas e bailes",
      "Para se proteger dos caçadores",
      "Para encontrar sua família humana"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "Como identificar um boto disfarçado de homem?",
    alternativas: [
      "Ele usa sempre um chapéu para esconder um buraco na cabeça",
      "Ele tem olhos brilhantes como os de um peixe",
      "Ele nunca fala, apenas sorri misteriosamente",
      "Ele evita pisar na sombra das pessoas"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Qual é o destino dos homens que caem no encanto da Iara?",
    alternativas: [
      "Viram espíritos das águas",
      "São levados para o fundo do rio e nunca mais voltam",
      "Se transformam em peixes encantados",
      "Ganham poderes mágicos sobre a água"
    ],
    resposta_correta: 1, // Alternativa correta: 'b'
  },
  {
    pergunta: "O que fez a Iara se tornar uma sereia?",
    alternativas: [
      "Ela nasceu assim como filha dos deuses das águas",
      "Foi amaldiçoada após desobedecer seu pai",
      "Era uma guerreira que foi jogada no rio por inveja dos irmãos",
      "Um feiticeiro transformou-a para salvar sua vida"
    ],
    resposta_correta: 2, // Alternativa correta: 'c'
  },
  {
    pergunta: "Por que os pés do Curupira são virados para trás?",
    alternativas: [
      "Para confundir caçadores e fazê-los se perder na floresta",
      "Porque ele nasceu com uma maldição",
      "Para fugir mais rápido dos perigos da mata",
      "Para não deixar pegadas visíveis"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que o Curupira faz com quem desrespeita a natureza?",
    alternativas: [
      "Ensina uma lição e os deixa ir embora",
      "Dá um susto e os manda de volta para casa",
      "Faz com que se percam para sempre na floresta",
      "Transforma-os em animais selvagens"
    ],
    resposta_correta: 2, // Alternativa correta: 'c'
  },
  {
    pergunta: "Quando um homem se transforma em lobisomem?",
    alternativas: [
      "Quando vê um espelho à meia-noite",
      "Quando nasce na noite de lua cheia",
      "Quando é mordido por outro lobisomem",
      "Quando comete um grande pecado"
    ],
    resposta_correta: 2, // Alternativa correta: 'c'
  },
  {
    pergunta: "Como se livrar da maldição do lobisomem?",
    alternativas: [
      "Atirando uma bala de prata",
      "Jogando água benta na criatura",
      "Fazendo sete cruzes no chão",
      "Todos os anteriores"
    ],
    resposta_correta: 3, // Alternativa correta: 'd'
  },
  {
    pergunta: "Como a Caipora se locomove na floresta?",
    alternativas: [
      "Montada em um porco-do-mato",
      "A cavalo",
      "Correndo com velocidade sobrenatural",
      "Viajando pelo vento"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que a Caipora exige dos caçadores para não castigá-los?",
    alternativas: [
      "Um pouco de fumo como oferenda",
      "Que nunca matem mais de um animal por dia",
      "Que plantem árvores em troca dos animais caçados",
      "Que saiam da floresta ao pôr do sol"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Como Matinta Perera avisa que está por perto?",
    alternativas: [
      "Emitindo um assobio assustador durante a noite",
      "Deixando pegadas estranhas no chão",
      "Mudando o tempo de repente",
      "Fazendo os animais da floresta ficarem em silêncio"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que acontece quando alguém promete um presente à Matinta Perera?",
    alternativas: [
      "A pessoa é protegida de todos os males",
      "Ela para de assombrar a casa da pessoa",
      "A pessoa recebe riquezas inesperadas",
      "A pessoa se torna a próxima Matinta Perera"
    ],
    resposta_correta: 3, // Alternativa correta: 'd'
  },
  {
    pergunta: "Como o Boitatá é descrito nas lendas?",
    alternativas: [
      "Uma serpente de fogo que protege a floresta",
      "Um espírito da água que controla as chuvas",
      "Um pássaro que ilumina a noite com seu brilho",
      "Um guardião invisível das árvores"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Por que o Boitatá protege as matas?",
    alternativas: [
      "Para evitar incêndios criminosos",
      "Para manter os segredos da floresta ocultos",
      "Porque foi criado pelos deuses para essa missão",
      "Para se vingar de quem corta árvores"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que levou a jovem a se transformar na Vitória-Régia?",
    alternativas: [
      "Ela caiu no rio ao tentar alcançar a lua",
      "Foi enfeitiçada por um pajé",
      "Se transformou ao tocar uma flor encantada",
      "Pediu para os deuses lhe darem imortalidade"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Por que a lenda da Vitória-Régia envolve a lua?",
    alternativas: [
      "Porque a jovem se apaixonou pela lua e tentou alcançá-la",
      "Porque a flor só abre quando há lua cheia",
      "Porque a lua reflete na água e cria a ilusão da flor",
      "Porque os índios acreditavam que a lua dava poderes à planta"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "O que o Saci usa na cabeça?",
    alternativas: [
      "Um gorro vermelho mágico",
      "Uma coroa de folhas encantadas",
      "Um chapéu de palha",
      "Um cocar indígena"
    ],
    resposta_correta: 0, // Alternativa correta: 'a'
  },
  {
    pergunta: "Como capturar o Saci?",
    alternativas: [
      "Jogando uma peneira sobre ele",
      "Derrubando-o no chão e tirando seu gorro",
      "Fazendo um círculo de sal no chão",
      "Todas as alternativas anteriores"
    ],
    resposta_correta: 3, // Alternativa correta: 'd'
  }
];
