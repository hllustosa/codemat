import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Pergolado é o nome que se dá a um tipo de cobertura projetada por
      arquitetos, comumente em praças e jardins, para criar um ambiente para
      pessoas ou plantas, no qual há uma quebra da quantidade de luz, dependendo
      da posição do sol. É feito como um estrado de vigas iguais, postas
      paralelas e perfeitamente em fila, como ilustra a figura.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2020q180.svg"} width="50%" />
        <p />
      </div>
      <p />
      Um arquiteto projeta um pergolado com vãos de 30 cm de distância entre
      suas vigas, de modo que, no solstício de verão, a trajetória do sol
      durante o dia seja realizada num plano perpendicular à direção das vigas,
      e que o sol da tarde, no momento em que seus raios fizerem <b>theta</b>°
      com a posição a pino, gere a metade da luz que passa no pergolado ao
      meio-dia.
      <p />
      Deseja-se saber qual altura, em cm, das vigas do pergolado devem ter para
      atender à proposta do projeto elaborado pelo arquiteto. Neste problema
      você deve produzir um programa que receba como entrada o ângulo{" "}
      <b>theta</b>, e que produza como saída o valor da altura que as vigas
      devem ter.
      <p />
      Dica: Utilize as funções trigonométricas <b>Math.sin</b> ou{" "}
      <b>Math.cos</b>. Lembrando que o ângulo de entrada dessas funções deve
      estar em radianos. Você também pode usar <b>Math.PI</b> para ter acesso ao
      valor de <Eq s="\pi" />.
      <p />
      <p />
      <h3>Entradas</h3>
      Um número <b>theta</b> contento o ângulo de incidência da luz solar. <p />
      <h3>Saída</h3>
      Um número que contenha a altura do pergolado para garantir que a
      incidência de luz solar ao <b>theta</b> graus seja metade do que ao
      meio-dia.
      <p />
    </div>
  );
}
