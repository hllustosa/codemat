import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      As temperaturas são representadas por algumas unidades de medida
      diferentes. No Brasil e em muitos países, utilizamos a escala em Celsius
      para medir as temperaturas no dia-a-dia. Esta escala possui uma relação
      íntima com os pontos de congelamento (0 °C) e ebulição (100 °C) da água
      medidas no nível do mar.
      <p />
      Nos Estados Unidos, a escala utilizada para medir a temperatura é a
      Fahrenheit (°F). Esta escala é bastante diferente da nossa. Por exemplo,
      um dia com uma agradável temperatura de 22 graus Celsius tem sua
      equivalência em 71,6 graus em Fahrenheit.
      <p />
      Neste exercício, você deve desenvolver um programa que auxilie na
      conversão de graus que estão originalmente na escala Celsius para a escala
      Fahrenheit. Para tanto, utilizamos a seguinte fórmula:
      <p />
      <Eq s="\frac{F - 32}{9} = \frac{C}{5}" block />
      Onde <Eq s="F" /> é uma temperatura em graus Fahrenheit e <Eq s="C" /> uma
      temperatura em graus Celsius.
      <h3>Entradas</h3>
      Um número real <b>temperatura</b> contendo o valor de uma temperatura
      representada em graus Celsius. <p />
      <h3>Saída</h3>
      Uma número real contendo o valor de <b>temperatura</b> convertido para a
      escala Fahrenheit. <p />
    </div>
  );
}
