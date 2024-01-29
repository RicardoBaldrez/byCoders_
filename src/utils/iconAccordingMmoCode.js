import {
  Cloud,
  LightRain,
  PartlyCloud,
  RainShower,
  Rain,
  Sunny,
  ThunderShower,
  Bolt,
} from '../assets';

export function iconAccordingMmoCode(code_weather) {
  switch (code_weather) {
    case 0:
      return {
        icon: <Sunny />,
        reason: 'Céu limpo',
      };
      break;
    case 1:
      return {
        icon: <Sunny />,
        reason: 'Principalmente claro',
      };
      break;
    case 2:
      return {
        icon: <PartlyCloud />,
        reason: 'Parcialmente nublado',
      };
      break;
    case 3:
      return {
        icon: <Cloud />,
        reason: 'Encoberto',
      };
      break;
    case 51:
    case 61:
      return {
        icon: <LightRain />,
        reason: 'Chuva Intensidade leve',
      };
      break;
    case 53:
    case 63:
      return {
        icon: <Rain />,
        reason: 'Chuva Intensidade moderada',
      };
      break;
    case 55:
    case 65:
      return {
        icon: <RainShower />,
        reason: 'Chuva Intensidade forte',
      };
      break;
    case 80:
    case 81:
    case 82:
      return {
        icon: <ThunderShower />,
        reason: 'Pancadas de chuva Intensidade violentas',
      };
      break;
    case 95:
    case 96:
      return {
        icon: <Bolt />,
        reason: 'Pancadas de chuva',
      };
      break;
    default:
      return <PartlyCloud />;
      break;
  }

  return weatherIcon.props.children;
}
