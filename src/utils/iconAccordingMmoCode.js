import {
  Cloud,
  LightRain,
  PartlyCloud,
  RainShower,
  Rain,
  Sunny,
  ThunderShower,
} from '../assets/weathers-icons';

export function iconAccordingMmoCode(code_weather) {
  switch (code_weather) {
    case 0:
      return <Sunny />;
      break;
    case 1:
      console.log('Principalmente claro');
      return <Sunny />;
      break;
    case 2:
      console.log('Parcialmente nublado');
      return <PartlyCloud />;
      break;
    case 3:
      console.log('Encoberto');
      return <Cloud />;
      break;
    case 51:
    case 61:
      console.log('Chuva Intensidade leve');
      return <LightRain />;
      break;
    case 53:
    case 63:
      console.log('Chuva Intensidade moderada');
      return <Rain />;
      break;
    case 55:
    case 65:
      console.log('Chuva Intensidade forte');
      return <RainShower />;
      break;
    case 80:
    // return <h1>Pancadas de chuva Intensidade leve</h1>;
    // break;
    case 81:
    // return <h1>Pancadas de chuva Intensidade moderada</h1>;
    // break;
    case 82:
      console.log('Pancadas de chuva Intensidade violentas');
      return <ThunderShower />;
      break;

    default:
      return <h1>default</h1>;
      break;
  }

  return weatherIcon.props.children;
}
