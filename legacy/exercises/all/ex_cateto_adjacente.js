import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Os nomes dos três lados de um triângulo retângulo são dados em relação a
      um ângulo de referência <Eq s="\theta" /> (theta). Os dois lados que
      formam o ângulo de 90 graus são chamados de catetos. O cateto adjacente é
      um dos lados que ajuda a formar o ângulo de referência, o cateto oposto é
      aquele que está do outro lado e não ajuda a formar o ângulo de referência.
      O terceiro lado do triângulo retângulo é chamado de hipotenusa, este lado
      está sempre oposto ao ângulo de 90 graus.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/triangle.svg"} width="50%" />
        <p />
      </div>
      <p />
      Neste problema você deve produzir um programa que receba como entrada o
      valor para o ângulo de referência <b>theta</b> (em graus), bem como o
      comprimento da hipotenusa <b>h</b> de um triângulo retângulo, e produza
      como saída o tamanho do cateto adjacente.
      <p />
      Dica: Utilize as funções trigonométricas <b>Math.sin</b> ou{" "}
      <b>Math.cos</b>. Lembrando que o ângulo de entrada dessas funções deve
      estar em radianos. Você também pode usar <b>Math.PI</b> para ter acesso ao
      valor de <Eq s="\pi" />.
      <p />
      <h3>Entradas</h3>
      Dois números <b>theta</b> e <b>h</b> contento ângulo de referência e o
      comprimento da hipotenusa. <p />
      <h3>Saída</h3>
      Um número contendo o comprimento do cateto adjacente.
      <p />
    </div>
  );
}
