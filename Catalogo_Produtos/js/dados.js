/* ==========================================================
   DADOS DO SITE (edite aqui, não precisa mexer no HTML)
   ========================================================== */

/* 1) WhatsApp: troque pelo número real, com 55 + DDD + número, só dígitos.
      Exemplo: "5519999998888" */
const CONFIG = {
    whatsapp: "5500000000000"
};

/* 2) Calopsitas para adoção.
      disponivel: true  -> mostra "Disponível para adoção" e libera o botão
      disponivel: false -> mostra "Já adotada" e desativa o botão */
const CALOPSITAS = [
    {
        id: "kiuca",
        nome: "Kiuca",
        variedade: "Silvestre",
        imagem: "imagem/cinza_silvestre.jpg",
        alt: "Kiuca, calopsita silvestre de corpo cinza e bochechas laranjas",
        resumo: "Alegre, cheia de energia e sempre comendo e se divertindo. Carrega o padrão original da espécie.",
        descricao: [
            "Essa é a Kiuca, uma calopsita silvestre. Ela é muito alegre, esbanja energia e passa o dia inteiro comendo e se divertindo! A Kiuca carrega o padrão original e ancestral da espécie, vinda diretamente das regiões semiáridas da Austrália. Ao contrário das mutações coloridas que conhecemos hoje, ela exibe a beleza pura da natureza: um corpo cinza elegante, bordas das asas brancas e as icônicas bochechas laranjas.",
            "Nos machos adultos, a cabeça se ilumina com um amarelo vibrante, enquanto as fêmeas mantêm um tom acinzentado discreto e gracioso. No Brasil, ela é classificada como uma ave exótica e doméstica pelo IBAMA. Isso significa que sua criação é 100% legalizada e livre, tornando-as companheiras perfeitas, seguras e cheias de personalidade para se ter em casa!"
        ],
        disponivel: true
    },
    {
        id: "gabi",
        nome: "Gabi",
        variedade: "Arlequim",
        imagem: "imagem/arlequim.jpg",
        alt: "Gabi, calopsita arlequim com manchas amarelas, brancas e cinzas",
        resumo: "Pura fofura, com manchas amarelas, brancas e cinzas. Nenhuma arlequim tem as manchas iguais às de outra.",
        descricao: [
            "Esta é a Gabi, uma calopsita arlequim! A Gabi é pura fofura e chama a atenção de qualquer um com o seu visual único. A mutação arlequim foi a primeiríssima variação de cor a ser desenvolvida em cativeiro, quebrando o cinza tradicional da espécie. O charme da Gabi está justamente nessa mistura linda de manchas amarelas, brancas e cinzas espalhadas pelo corpo, fazendo com que cada ave dessa mutação seja completamente exclusiva: nenhuma arlequim tem as manchas iguais às de outra!",
            "Ela é uma ave exótica e doméstica totalmente legalizada no Brasil, trazendo um colorido especial para o dia a dia e está sempre pronta para encher a casa de vida, curiosidade e momentos divertidos!"
        ],
        disponivel: true
    },
    {
        id: "adriana",
        nome: "Adriana",
        variedade: "Lutino",
        imagem: "imagem/lutino.jpg",
        alt: "Adriana, calopsita lutino de plumagem amarela e bochechas laranjas",
        resumo: "Visual radiante, com plumagem amarela ou branco-marfim, olhos vermelhos e bochechas laranjas vibrantes.",
        descricao: [
            "Esta é a Adriana, uma linda calopsita lutino! A Adriana é pura luz e encanta a todos com o seu visual angelical e radiante. A mutação lutino é uma das mais famosas do mundo e se destaca por ser uma ave albina parcial: ela não produz a melanina cinza, o que resulta em uma plumagem inteiramente amarela ou branca-marfim, olhos vermelhos expressivos e bochechas laranjas super acesas e vibrantes!",
            "É uma ave doméstica totalmente legalizada no Brasil. Com sua cor de sol e sua presença marcante, ela completa o bando trazendo muita elegância, doçura e alegria para o dia a dia!"
        ],
        disponivel: true
    },
    {
        id: "anna",
        nome: "Anna",
        variedade: "Canela",
        imagem: "imagem/canela.jpeg",
        alt: "Anna, calopsita canela de tons marrom-claros",
        resumo: "Visual suave e sofisticado, em tons marrom-claros, com bico e pezinhos rosados.",
        descricao: [
            "Esta é a Anna, uma linda calopsita canela! Ela encanta a todos com seu visual suave e sofisticado. A mutação canela destaca-se por transformar o cinza tradicional em tons marrom-claros elegantes, que lembram a cor da especiaria. Com bico e pezinhos rosados e bochechas laranjas acesas, ela é uma ave doméstica totalmente legalizada no Brasil. Com sua beleza única, a Anna traz muita elegância, doçura e alegria para o dia a dia!"
        ],
        disponivel: true
    },
    {
        id: "pithuca",
        nome: "Pithuca",
        variedade: "Pérola",
        imagem: "imagem/perola.jpg",
        alt: "Pithuca, calopsita pérola com penas em efeito de pequenas pérolas",
        resumo: "Penas com efeito de pequenas pérolas em amarelo e cinza, olhar curioso e jeito carinhoso.",
        descricao: [
            "Esta é a Pithuca, uma linda calopsita pérola! A Pithuca é puro charme e conquista todo mundo com seu padrão de plumagem único e desenhado. A mutação pérola é famosa justamente por esse visual salpicado: cada pena das suas costas e asas parece ter sido pintada à mão, criando um efeito de \"escamas\" ou pequenas pérolas em tons de amarelo e cinza. Com suas bochechas laranjas bem marcadas e um olhar super curioso, ela é uma ave doméstica totalmente legalizada no Brasil. Com seu visual artístico e seu jeito carinhoso, a Pithuca transforma a rotina em momentos de pura diversão, doçura e alegria!"
        ],
        disponivel: true
    }
];

/* 3) Loja.
      ATENÇÃO: nomes, descrições e preços abaixo são EXEMPLOS para você
      substituir pelos produtos reais.
      imagem: se quiser foto real, coloque o caminho (ex.: "imagem/racao-500g.jpg").
              Deixando "" aparece um ícone da categoria. */
const CATEGORIAS = ["Todos", "Ração", "Alimentos", "Casinhas", "Ninhos"];

const PRODUTOS = [
    { id: "racao-500", nome: "Ração extrusada para calopsitas 500 g", categoria: "Ração", preco: 24.90, descricao: "Ração extrusada para a alimentação diária.", imagem: "" },
    { id: "racao-1kg", nome: "Ração extrusada para calopsitas 1 kg", categoria: "Ração", preco: 42.90, descricao: "Pacote econômico da ração extrusada.", imagem: "" },
    { id: "mix-sementes", nome: "Mix de sementes para calopsitas 500 g", categoria: "Alimentos", preco: 18.90, descricao: "Mistura de sementes selecionadas.", imagem: "" },
    { id: "painco", nome: "Painço em espiga", categoria: "Alimentos", preco: 12.90, descricao: "Petisco natural, ótimo para o dia a dia.", imagem: "" },
    { id: "casinha-madeira", nome: "Casinha de madeira para calopsita", categoria: "Casinhas", preco: 59.90, descricao: "Casinha de madeira para o descanso da ave.", imagem: "" },
    { id: "casinha-coco", nome: "Casinha de fibra de coco", categoria: "Casinhas", preco: 34.90, descricao: "Cantinho aconchegante em fibra natural.", imagem: "" },
    { id: "ninho-madeira", nome: "Ninho de madeira com entrada lateral", categoria: "Ninhos", preco: 79.90, descricao: "Ninho de madeira para reprodução.", imagem: "" },
    { id: "ninho-fibra", nome: "Ninho de fibra natural (cesto)", categoria: "Ninhos", preco: 29.90, descricao: "Ninho em formato de cesto, de fibra natural.", imagem: "" }
];
