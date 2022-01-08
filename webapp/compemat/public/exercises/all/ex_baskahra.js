import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      A fórmula de Baskahra, batizada em homenagem ao matemático e astrônomo
      indiano Bhāskara II, serve para resolver equações quadráticas, isto é,
      polinômios escritos na forma:
      <p />
      <Eq s="y = ax^2 + bx + c" block />
      <p />
      Uma curiosidade, a fórmula possui esse nome apenas no Brasil, pois existem{" "}
      <b>
        <a href="https://pt.wikipedia.org/wiki/Bhaskara_II">indícios</a>
      </b>{" "}
      de que a solução para equações quadráticas já era conhecida antes de
      Baskahra por outro matemática chamado Sridhara. De qualquer forma, a
      fórmula que utilizamos atualmente é:
      <p />
      <Eq s="x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}" block />
      <p />
      Algumas possibilidades existem para a solução de uma equação quadrática,
      dependendo do determinante definido por: <Eq s="\Delta = b^2 - 4ac" />:
      <p />
      <ul>
        <li>
          <Eq s="\Delta > 0" /> indica que existem duas soluções
        </li>
        <li>
          <Eq s="\Delta = 0" /> indica que existe apenas uma solução
        </li>
        <li>
          <Eq s="\Delta < 0" /> indica que não existe solução no domínio dos
          números reais
        </li>
      </ul>
      <p />
      Neste problema você deve produzir um programa que receba como entrada os
      três coeficientes de uma equação quadrática (<b>a</b>, <b>b</b> e <b>c</b>
      ) e produza como saída as raízes ou soluções da equação.
      <p />O programa deve produzir duas saídas caso o determinante seja
      positivo. Neste caso, emita primeiro como saída a raiz obtida com a versão
      da fórmula em que somamos a raiz do determinante e em seguida a função
      fórmula em que subtraímos a raíz do determinante.
      <p />
      Além disso, o programa deve produzir uma saída caso o determinante seja
      igual a 0, e a string "sem raizes" caso o determinante seja negativo.
      <p />
      Dica: utilize a função embutida <b>Math.sqrt</b> para calcular a raiz
      quadrada de um valor.
      <h3>Entradas</h3>
      Três números reais <b>a</b>, <b>b</b> e <b>c</b> contendo os coeficientes
      do polinômio. <p />
      <h3>Saída</h3>
      Dois números reais caso o determinante seja positivo. Um número real caso
      o determinante seja zero. A string "sem raizes", caso o determinante seja negativo.
      <p />
    </div>
  );
}
