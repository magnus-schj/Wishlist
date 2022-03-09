import { DocumentData } from "firebase/firestore";
import { createContext } from "react";

export const UserDataContext = createContext<DocumentData[] | null>(null);
