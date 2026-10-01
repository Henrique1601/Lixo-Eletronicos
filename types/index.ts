export interface WasteItem {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
}

export interface WasteCategory {
  id: string;
  categoryNumber: string;
  title: string;
  description: string;
  items: string[];
  footerNote: string;
  iconName: string;
  badgeBg: string;
  iconColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
