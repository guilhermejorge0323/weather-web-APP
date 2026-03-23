import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/container/container';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { searchWeather, searchWeatherByCords } from './API/weatherApi';

function App() {
  //API
  const [dataWeather, setDataWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Função de processar (Simples, sem useCallback para não complicar)
  const handleWeatherData = (data) => {
    if (data) {
      setDataWeather(data);
      localStorage.setItem('lastCity', data.cityName);
    }
    setLoading(false);
  }

  // 2. Busca via input
  const onSearchCity = async (city) => {
    setLoading(true);
    const data = await searchWeather(city);
    handleWeatherData(data);
  }

  useEffect(() => {
    const getInitialLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const data = await searchWeatherByCords(latitude, longitude);
            handleWeatherData(data);
          },
          () => {
            const savedCity = localStorage.getItem('lastCity') || 'Brasília';
            onSearchCity(savedCity);
          }
        );
      } else {
        onSearchCity('Brasília');
      }
    };

    getInitialLocation();
  }, []);

  //Theme
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  });

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
              {loading ? (
                  <div className="flex flex-col items-center justify-center h-64 text-blue-900 dark:text-sky-100">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current mb-4"></div>
                    <p className="text-xl font-medium">Buscando clima...</p>
                  </div>
                ) : (
                <Main data={dataWeather} />
              )}
          </Container>
        </div>
  )
}

export default App
