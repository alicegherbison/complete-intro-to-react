import { createContext } from 'react';

// updater doesn't do anything - hence empty function
const ThemeContext = createContext(['peru', () => {}]);

export default ThemeContext;
