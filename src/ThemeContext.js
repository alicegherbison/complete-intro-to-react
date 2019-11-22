import { createContext } from 'react';

// updater doesn't do anything - hence empty function
const ThemeContext = createContext(['aliceblue', () => {}]);

export default ThemeContext;
