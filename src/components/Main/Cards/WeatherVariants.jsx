import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";

export const WeatherVariants = {
  Clear: {
    label: "Céu Limpo",
    icon: <Sun className="text-yellow-400 w-[100px] h-[100px]" />, // Exemplo se quiser mudar o fundo depois
  },
  Clouds: {
    label: "Parcialmente Nublado",
    icon: <Cloud className="text-slate-400 w-[100px] h-[100px]" />,
  },
  Rain: {
    label: "Chuva",
    icon: <CloudRain className="text-blue-500 w-[100px] h-[100px]" />,
    bgClass: "from-blue-700 to-slate-900"
  },
  Drizzle: {
    label: "Garoa",
    icon: <CloudDrizzle className="text-sky-400 w-[100px] h-[100px]" />,
  },
  Thunderstorm: {
    label: "Tempestade",
    icon: <CloudLightning className="text-yellow-600 w-[100px] h-[100px]" />,
  },
  Snow: {
    label: "Neve",
    icon: <CloudSnow className="text-blue-100 w-[100px] h-[100px]" />,
  },
  Mist: {
    label: "Névoa",
    icon: <CloudFog className="text-slate-300 w-[100px] h-[100px]" />,
  },
  Smoke: { label: "Fumaça", icon: <CloudFog className="text-slate-300 w-[100px] h-[100px]" /> },
  Haze: { label: "Neblina", icon: <CloudFog className="text-slate-300 w-[100px] h-[100px]" /> },
  Dust: { label: "Poeira", icon: <Wind className="text-orange-300 w-[100px] h-[100px]" /> },
  Fog: { label: "Nevoeiro", icon: <CloudFog className="text-slate-300 w-[100px] h-[100px]" /> },
  Sand: { label: "Areia", icon: <Wind className="text-orange-300 w-[100px] h-[100px]" /> },
  Ash: { label: "Cinzas", icon: <Wind className="text-slate-500 w-[100px] h-[100px]" /> },
  Squall: { label: "Rajadas", icon: <Wind className="text-blue-300 w-[100px] h-[100px]" /> },
  Tornado: { label: "Tornado", icon: <Wind className="text-red-600 w-[100px] h-[100px]" /> },
};