import { createContext } from "react";
// Used with TranslationProvider so that react can share props/methods across children using useContext hook
// This avoids "prop drilling"
const TranslationContext = createContext();

export default TranslationContext;