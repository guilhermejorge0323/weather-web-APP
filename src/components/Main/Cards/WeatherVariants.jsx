import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";

export const WeatherVariants = (width, height) => {

  return {
    Clear: {
      label: "Céu Limpo",
      icon: <Sun className="text-yellow-400" style={{ width: width, height: height }} />, // Exemplo se quiser mudar o fundo depois
    },
    Clouds: {
      label: "Parcialmente Nublado",
      icon: <Cloud className="text-slate-400" style={{ width: width, height: height }} />,
    },
    Rain: {
      label: "Chuva",
      icon: <CloudRain className="text-blue-500" style={{ width: width, height: height }} />,
      bgClass: "from-blue-700 to-slate-900"
    },
    Drizzle: {
      label: "Garoa",
      icon: <CloudDrizzle className="text-sky-400" style={{ width: width, height: height }} />,
    },
    Thunderstorm: {
      label: "Tempestade",
      icon: <CloudLightning className="text-yellow-600" style={{ width: width, height: height }} />,
    },
    Snow: {
      label: "Neve",
      icon: <CloudSnow className="text-blue-100" style={{ width: width, height: height }} />,
    },
    Mist: {
      label: "Névoa",
      icon: <CloudFog className="text-slate-300" style={{ width: width, height: height }} />,
    },
    Smoke: { label: "Fumaça", icon: <CloudFog className="text-slate-300" style={{ width: width, height: height }} /> },
    Haze: { label: "Neblina", icon: <CloudFog className="text-slate-300" style={{ width: width, height: height }} /> },
    Dust: { label: "Poeira", icon: <Wind className="text-orange-300" style={{ width: width, height: height }} /> },
    Fog: { label: "Nevoeiro", icon: <CloudFog className="text-slate-300" style={{ width: width, height: height }} /> },
    Sand: { label: "Areia", icon: <Wind className="text-orange-300" style={{ width: width, height: height }} /> },
    Ash: { label: "Cinzas", icon: <Wind className="text-slate-500" style={{ width: width, height: height }} /> },
    Squall: { label: "Rajadas", icon: <Wind className="text-blue-300" style={{ width: width, height: height }} /> },
    Tornado: { label: "Tornado", icon: <Wind className="text-red-600" style={{ width: width, height: height }} /> },
  };
}