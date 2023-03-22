import { createContext, useState } from 'react';
// import Input from 'atoms/Input';
// import Avatar from 'atoms/Avatar';
// import Badge from 'atoms/Badge';
// import Navbar from './components/Navbar';

const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme} setTheme={setTheme}>
      <div className={theme === 'dark' ? 'theme__dark' : 'theme__light'}>
        {/* <Input /> */}
        {/* <Navbar /> */}
        {/* <Avatar 
          imgSrc="https://source.unsplash.com/user/c_v_r/100x100"
          isActive={true}
          clickable={false}
        /> */}
        {/* <Badge /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
