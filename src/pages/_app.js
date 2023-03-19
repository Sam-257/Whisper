import { createContext } from 'react';
import '@styles/global.scss'

const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme} setTheme={setTheme}>
      <div className={theme === 'dark' ? 'theme--dark' : 'theme--light'}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}
