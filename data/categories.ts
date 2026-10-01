import { WasteCategory } from "@/types";

export const categoriesData: WasteCategory[] = [
  {
    id: "smartphones",
    categoryNumber: "CATEGORIA 01",
    title: "Celulares & Smartphones",
    description:
      "Aparelhos antigos, quebrados, com tela trincada, baterias estufadas ou simplesmente sem uso.",
    items: [
      "iPhones e Androids",
      "Tablets e iPads",
      "Baterias e carregadores",
    ],
    footerNote: "Descarte seguro de lítio",
    iconName: "Smartphone",
    badgeBg: "bg-eco-500/10",
    iconColor: "text-eco-400",
  },
  {
    id: "computers",
    categoryNumber: "CATEGORIA 02",
    title: "Computadores & Notebooks",
    description:
      "Equipamentos completos ou peças soltas de informática de casas, comércios e escritórios.",
    items: [
      "Gabinetes e Servidores",
      "Notebooks e MacBooks",
      "Placas, memórias e fontes",
    ],
    footerNote: "Reciclagem de placas e metais",
    iconName: "Laptop",
    badgeBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: "tvs",
    categoryNumber: "CATEGORIA 03",
    title: "TVs & Aparelhos",
    description:
      "Televisores, monitores, rádios, DVDs, impressoras, videogames e micro-ondas.",
    items: [
      "TVs LED, LCD e tubo",
      "Impressoras e scanners",
      "Aparelhos de som e DVDs",
    ],
    footerNote: "Isolamento de vidros e fósforo",
    iconName: "Tv",
    badgeBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
  },
  {
    id: "cables",
    categoryNumber: "CATEGORIA 04",
    title: "Cabos & Carregadores",
    description:
      "Fios elétricos, cabos de rede, adaptadores, conectores, mouses, teclados e acessórios em geral.",
    items: [
      "Fios de cobre e energia",
      "Fontes e carregadores",
      "Teclados, mouses e fones",
    ],
    footerNote: "Recuperação de cobre nobre",
    iconName: "Cable",
    badgeBg: "bg-green-500/10",
    iconColor: "text-green-400",
  },
];
