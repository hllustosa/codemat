import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      As fábricas de pneus utilizam-se de modelos matemáticos próprios em sua
      produção, para a adaptação dos vários tipos de pneus aos veículos: de
      bicicletas a caminhões, tratores e aviões. Um dos conceitos utilizados
      pela indústria é o de "índice de carga", que está relacionado à carga
      máxima que pode ser suportada por um pneu. Uma empresa fabricante de pneus
      possui uma tabela, relativa às cargas máximas suportadas por pneus cujos
      índices variam de 70 a 80.
      <p />
      Há um comportamento regular em alguns intervalos, como entre os índices de
      70 a 74. Esse comportamento é linear e pode ser modelado por uma função:
      <p />
      <Eq s="f(i) = ai + c" block />
      <p />
      Onde <Eq s="f(i)" /> representa a carga máxima suportada por um pneu de
      índice de carga <Eq s="i" />.
      <p />
      Neste problema você deve criar um programa que receba como entrada o valor{" "}
      <b>i70</b> contendo a carga suportada para um pneu de índice <b>70</b> e{" "}
      <b>i74</b>, que contém a carga suportada para pneu de índice 74. O
      programa deve calcular os parâmetros <b>a</b> e <b>c</b> da equação e
      produzir uma string contendo a expressão da função{" "}
      <Eq s="f(i) = ai + c" /> substituindo <b>a</b> e <b>c</b> pelos seus
      valores calculados.
      <p />
      <h3>Entradas</h3>
      Dois números <b>i70</b> e <b>i74</b> contento o valores de{" "}
      <Eq s="f(70)" /> e <Eq s="f(74)" /> respectivamente.
      <p />
      <h3>Saída</h3>
      Um string contendo a expressão <Eq s="f(i) = ai + c" /> substituindo{" "}
      <b>a</b> e <b>c</b> pelos seus valores calculados.
      <p />
    </div>
  );
}
