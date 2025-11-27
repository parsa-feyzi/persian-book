import { CSSProperties, SetStateAction, Dispatch } from "react";

export type T_Style = { styles?: CSSProperties };

export interface I_ListItem {
  title: string;
  href: string;
  id: number;
}

export type T_Size = "sm" | "md" | "lg";

// _______________ IsModal Open types _______________ //
export interface I_IsModalOpen {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// _______________ Category Tab types _______________ //
export interface I_SortingTab {
  title: string;
  href: string;
  isActive?: boolean;
}

// _______________ Book types _______________ //
export interface I_BookDetails {
  weight: number;
  paper: string;
  pageNumber: number;
  edition: string;
  publishDate: string;
  cover: string;
}
export interface I_Book {
  title: string;
  author: string;
  publisher: string;
  translator: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  category: string;
  details: I_BookDetails;
}
