import { createContext } from "react";

import { EThemes } from "../redux/types/theme";

// updater doesn't do anything - hence empty function
const useThemeContext = createContext<[string, (theme: EThemes) => void]>([
  EThemes.Green,
  () => {},
]);

export default useThemeContext;
