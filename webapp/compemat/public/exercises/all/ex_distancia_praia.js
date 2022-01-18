import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Para determinar a distância de um barco até a praia, um navegante utilizou
      o seguinte procedimento: a partir de um ponto A, mediu o ângulo visual{" "}
      <Eq s="\alpha" /> fazendo mira em um ponto fixo P da praia. Mantendo o
      barco no mesmo sentido, ele seguiu até um ponto B de modo que fosse
      possível ver o mesmo possível ver o mesmo ponto P da praia, no entanto sob
      um ângulo visual <Eq s="2\alpha" />. A figura ilustra essa situação:
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2011q158.svg"} width="60%" />
        <p />
      </div>
      <p />
      Suponha que ao chegar ao ponto B, verificou que o barco havia percorrido a
      distância AB = 2 000 m. Deseja-se saber a menor distância que o barco
      estará do ponto fixo P caso ele siga sua trajetória.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      valor <b>alpha</b> representando <Eq s="\alpha" />. Seu programa deve
      produzir como saída a menor distância que o barco estará do ponto fixo P,
      caso siga sua trajetória.
      <p />
      Dica: Utilize a função trigonométrica <b>Math.sin</b>. Lembrando que o
      ângulo de entrada dessas funções deve estar em radianos. Você também pode
      usar <b>Math.PI</b> para ter acesso ao valor de <Eq s="\pi" />.
      <p />
      <h3>Entradas</h3>
      <p />
      Um ângulo <b>alpha</b> (em graus) representando <Eq s="\alpha" />.
      <p />
      <h3>Saída</h3>
      Um número contendo a menor distância que o barco estará do ponto fixo P,
      caso siga sua trajetória.
      <p />
    </div>
  );
}
