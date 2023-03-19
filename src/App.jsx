import { createContext, useState } from 'react';
import Input from './atoms/Input';

const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={theme} setTheme={setTheme}>
      <div className={theme === 'dark' ? 'theme--dark' : 'theme--light'}>
        <Input />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
