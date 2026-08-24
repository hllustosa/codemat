import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      O número{" "}
      <b>
        {" "}
        <Eq s="\pi" />{" "}
      </b>
      (3,14159265359...) é uma constante matemática muito importante e com
      diversas aplicações. A primeira e mais fundamental de todas envolve o
      cálculo da área de uma circunferência. <p />O número
      <b>
        {" "}
        <Eq s="\pi" />{" "}
      </b>
      representa a razão entre a área e o quadrado do raio de uma
      circunferência. O raio <b>r</b> de uma circunferência é determinado pelo
      comprimento de um segmento de reta que sai do centro da circunferência até
      sua borda: <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/circ.svg"} height="260px" width="220px" />
        <p />
      </div>
      Desta forma, dado o raio de uma circunferência, a área é obtida através
      de: <p />
      <Eq s="area = \pi . raio^{2}" block />
      Neste exercício você deve criar um programa que receba como entrada um
      raio de uma circunferência <b>r</b> e o valor de <Eq s="\pi" /> (<b>pi</b>) e produza como saída a área da circunferência.{" "}
      <p />
      <h3>Entradas</h3>
      Dois números reais, <b>r</b> com o raio de uma circunferência e <b>pi</b>{" "}
      contendo o valor de{" "}
      <b>
        <Eq s="\pi" />
      </b>
      .<p />
      <h3>Saída</h3>
      Um número real <b>area</b> contendo a área da circunferência de raio{" "}
      <b>r</b>. <p />
    </div>
  );
}
