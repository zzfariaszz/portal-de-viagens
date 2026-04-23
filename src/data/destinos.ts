import { Destino } from "@/types/destino";

export const destinos: Destino[] = [
  {
    id: "kyoto",
    nome: "Kyoto",
    pais: "Japão",
    continente: "Ásia",
    imagem: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    descricao:
      "Antiga capital imperial do Japão, Kyoto é um santuário de templos milenares, jardins zen e geishas que ainda caminham pelas ruas de pedra do bairro Gion. A cidade equilibra com maestria a tradição milenar e a vida moderna japonesa.",
    destaques: [
      "Templo Fushimi Inari",
      "Floresta de Bambu de Arashiyama",
      "Bairro histórico de Gion",
      "Pavilhão Dourado Kinkaku-ji",
    ],
    melhorEpoca: "Março – Maio (cerejeiras) e Out – Nov (folhagem)",
    populacao: "1,46 milhão",
    idioma: "Japonês",
  },
  {
    id: "patagonia",
    nome: "Patagônia",
    pais: "Argentina / Chile",
    continente: "América do Sul",
    imagem: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    descricao:
      "Fim do mundo habitável, a Patagônia é uma imensidão de ventos, geleiras e picos graníticos que desafiam a escala humana. O Parque Nacional Torres del Paine e o Perito Moreno formam um dos cenários naturais mais dramáticos do planeta.",
    destaques: [
      "Torres del Paine",
      "Glaciar Perito Moreno",
      "Trekking na rota W",
      "Fauna patagônica única",
    ],
    melhorEpoca: "Outubro – Março (verão austral)",
    populacao: "Região de baixa densidade",
    idioma: "Espanhol",
  },
  {
    id: "marrakech",
    nome: "Marrakech",
    pais: "Marrocos",
    continente: "África",
    imagem: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
    descricao:
      "A Cidade Vermelha seduz pelos sentidos: o cheiro de especiarias no souk, o azul dos azulejos nos riads, o caos organizado da Praça Djemaa el-Fna ao anoitecer. Marrakech é um labirinto de cor, sabor e história berbere e islâmica.",
    destaques: [
      "Praça Djemaa el-Fna",
      "Medina histórica (UNESCO)",
      "Jardim Majorelle",
      "Souks e artesanato",
    ],
    melhorEpoca: "Março – Maio e Set – Novembro",
    populacao: "928 mil",
    idioma: "Árabe e Berbere",
  },
  {
    id: "santorini",
    nome: "Santorini",
    pais: "Grécia",
    continente: "Europa",
    imagem: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    descricao:
      "Nascida de uma erupção vulcânica catastrófica, Santorini ergue sua caldera sobre o Mar Egeu em cascatas de branco e azul cobalto. Os pôres do sol de Oia e os vinhos cultivados em solos vulcânicos fazem da ilha uma experiência sensorial incomparável.",
    destaques: [
      "Pôr do sol em Oia",
      "Praia de Pedra Negra (Perissa)",
      "Vinícolas da caldera",
      "Sítio arqueológico de Akrotiri",
    ],
    melhorEpoca: "Abril – Junho e Setembro – Outubro",
    populacao: "15 mil (residente)",
    idioma: "Grego",
  },
  {
    id: "hanoi",
    nome: "Hanói",
    pais: "Vietnã",
    continente: "Ásia",
    imagem: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    descricao:
      "Capital milenar do Vietnã, Hanói guarda nas ruas do Bairro Antigo o ritmo caótico e poético da Ásia profunda. O cheiro do pho nas calçadas, os templos lacados de vermelho e os lagos refletindo pagodes compõem uma cidade de camadas infinitas.",
    destaques: [
      "Bairro Antigo (36 ruas)",
      "Lago Hoan Kiem",
      "Baía de Ha Long (próxima)",
      "Gastronomia de rua",
    ],
    melhorEpoca: "Outubro – Abril",
    populacao: "8,05 milhões",
    idioma: "Vietnamita",
  },
  {
    id: "islândia",
    nome: "Islândia",
    pais: "Islândia",
    continente: "Europa",
    imagem: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    descricao:
      "Terra de fogo e gelo, a Islândia é um laboratório geológico vivo: geysers, cachoeiras furiosas, campos de lava e a aurora boreal iluminando noites árticas. Reykjavik, a capital mais ao norte do mundo, adiciona design nórdico e cultura vibrante à equação.",
    destaques: [
      "Aurora Boreal",
      "Golden Circle (Geyser, Gullfoss, Þingvellir)",
      "Lagoa Azul (Blue Lagoon)",
      "Glaciares e fjords",
    ],
    melhorEpoca: "Jun – Ago (sol da meia-noite) e Set – Mar (aurora)",
    populacao: "370 mil",
    idioma: "Islandês",
  },
];