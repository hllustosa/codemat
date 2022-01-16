import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Três amigos, André, Bernardo e Carlos, moram em um condomínio fechado de
      uma cidade. O quadriculado representa a localização das ruas paralelas e
      perpendiculares, delimitando quadras de mesmo tamanho nesse condomínio, em
      que nos pontos A, B e C estão localizadas as casas de André, Bernardo e
      Carlos, respectivamente.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2020q142.svg"} width="35%" />
        <p />
      </div>
      <p />
      André deseja deslocar-se da sua casa até a casa de Bernardo, sem passar
      pela casa de Carlos, seguindo ao longo das ruas do condomínio, fazendo
      sempre deslocamentos para a direita ( → ) ou para cima ( ↑ ), segundo o
      esquema da figura.
      <p />
      Neste problema, você deve criar um programa que receba como entrada as
      coordenadas de C, isto é, <b>Cx</b> e <b>Cy</b>, representando a posição
      horizontal e vertical de C respectivamente. Considere um sistema de
      coordenadas em que a origem (0, 0) seja o ponto inferior esquerdo,e que a
      posição (1, 1) seja a posição de <b>A</b>.
      <p />
      O programa deve produzir como saída o número de diferentes caminhos que
      André poderá utilizar para realizar o deslocamento nas condições
      propostas. Isto é, se descolacando apenas para cima e para direita e sem
      passar pelo ponto C.
      <p />
      <h3>Entradas</h3>
      Dois números <b>Cx</b> e <b>Cy</b> representando a posição da casa de
      Carlos. <p />
      <h3>Saída</h3>
      O número de caminhos possíveis entre A e B, sem passar por C.
      <p />
    </div>
  );
}
