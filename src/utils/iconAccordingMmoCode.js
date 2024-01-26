export function iconAccordingMmoCode(code_weather) {
  let weatherIcon;

  switch (code_weather) {
    case 0:
      weatherIcon = <h1>Clear Sky</h1>;
      break;
    case 1:
      weatherIcon = <h1>Principalmente claro</h1>;
      break;
    case 2:
      weatherIcon = <h1>Parcialmente nublado</h1>;
      break;
    case 3:
      weatherIcon = <h1>Encoberto</h1>;
      break;
    case 51:
      weatherIcon = <h1>Chuvisco Intensidade leve</h1>;
      break;
    case 53:
      weatherIcon = <h1>Chuvisco Intensidade moderada</h1>;
    case 55:
      weatherIcon = <h1>Chuvisco Intensidade denso</h1>;
      break;
    case 61:
      weatherIcon = <h1>Chuva Intensidade leve</h1>;
      break;
    case 63:
      weatherIcon = <h1>Chuva Intensidade moderada</h1>;
      break;
    case 65:
      weatherIcon = <h1>Chuva Intensidade forte</h1>;
      break;
    case 80:
      weatherIcon = <h1>Pancadas de chuva Intensidade leve</h1>;
      break;
    case 81:
      weatherIcon = <h1>Pancadas de chuva Intensidade moderada</h1>;
      break;
    case 82:
      weatherIcon = <h1>Pancadas de chuva Intensidade violentas</h1>;
      break;

    default:
      weatherIcon = <h1>default</h1>;
      break;
  }

  return weatherIcon.props.children;
}
