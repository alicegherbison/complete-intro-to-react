import { createContext } from 'react';

// updater doesn't do anything - hence empty function
const useThemeContext = createContext(['peru', () => {}]);

export default useThemeContext;
