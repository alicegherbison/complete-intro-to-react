import { createContext } from 'react';

// updater doesn't do anything - hence empty function
const useThemeContext = createContext(['#a9dc76', () => {}]);

export default useThemeContext;
