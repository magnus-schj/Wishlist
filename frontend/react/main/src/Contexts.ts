import { createContext } from "react";

export interface BooleanState {
  booleanValue: boolean;
  setBoolean: () => void;
}

export const ToggleListContext = createContext<null | BooleanState>(null);
