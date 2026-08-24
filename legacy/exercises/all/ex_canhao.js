import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Um projétil é lançado por um canhão e atinge o solo a uma distância de{" "}
      <b>D</b> metros do ponto de partida. Ele percorre uma trajetória parabólica, e a
      altura máxima que atinge em relação ao solo é de <b>H</b> metros.
      <p />
      Admita um sistema de coordenadas xy em que no eixo vertical y está
      representada a altura e no eixo horizontal x está representada a
      distância, ambas em metro. Considere que o canhão está no ponto (0; 0) e
      que o projétil atinge o solo no ponto (D; 0) do plano xy.
      <p />
      Neste problema você deve receber como entrada a altura máxima <b>H</b>{" "}
      atingida pelo projétil, e a distância <b>D</b> percorrida por ele. Com
      estes dados, seu propaga deve determinar a equação quadrática na forma:{" "}
      <p />
      <Eq s="y = ax^{2} + bx" block/>
      <p />
      Que modele o comportamento do deslocamento do projeto no plano xy. A saída
      do programa deve ser uma string contendo a expressão quadrática com os
      coeficientes calculados.
      <p />
      <h3>Entradas</h3>
      Dois números <b>D</b> e <b>H</b> contendo respectivamente a distância e
      altura máxima atingidas pelo projétil.
      <p />
      <h3>Saída</h3>
      Um string contendo a expressão quadrática que representa o comportamento
      do projétil.
      <p />
    </div>
  );
}
