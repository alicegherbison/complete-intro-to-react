import { createContext } from "react";

// updater doesn't do anything - hence empty function
const useThemeContext = createContext<[string, (theme: string) => void]>([
  "var(--color-green)",
  () => {},
]);

export default useThemeContext;
