import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/container/container';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  });

  //Theme
  useEffect(() => {
    const html = document.documentElement;
    if(isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },[isDark]);

  return (
        <div className="
          p-4
          md:p-8
          w-full
          min-h-screen
          dark:bg-gradient-to-br
        dark:from-slate-900
        dark:via-blue-900
        dark:to-slate-900
          bg-gradient-to-br
        from-sky-100
        via-blue-50
        to-indigo-100
          transition-colors
          duration-300
          "
        >
          <Container>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Main />
          </Container>
        </div>
  )
}

export default App
