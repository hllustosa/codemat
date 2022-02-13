import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSectionTitle,
  ClassSubSectionTitle,
  Eq,
  ClassImage,
  ClassToolTip,
  ClassCodeEditor,
} from "../../../components/ClassContent";

function Content() {
  return (
    <ClassContainer>
      A análise combinatória nos ajuda a facilitar o processo de contagem. Nessa
      unidade, vamos explorar alguns conceitos importantes da análise
      combinatória, como fatoriais, permutações, arranjos e combinações.
      <ClassImage
        src="/img/combinatorics.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "370px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Permutação" />
      <b>Permutar</b> elementos significa alterar a ordem em que estão
      distribuídos, construindo um novo agrupamento. Um exemplo comum de
      permutação é o <b>anagrama</b>, que consiste na troca de letras em uma
      palavra para compor outras (que não necessariamente possuem significado),
      como LIVRO e ILVOR. Dizemos que ILVOR é um anagrama de LIVRO.
      <p />
      São dois os tipos de permutação: o simples e o com repetição.
      <p />
      <ClassSectionTitle title="Permutação simples" />
      A permutação simples não envolve elementos repetidos. Para encontrar o
      número de combinações nesse caso basta calcular o fatorial da quantidades
      de elementos permutados:
      <p style={{textAlign: "center"}}>
      Quantidade de permutações (sem repetição) <Eq s="=P_n=n!" />
      </p>
      Vamos estudar alguns exemplos:
      <p />
      <ul>
        <li>
          {" "}
          Quantos anagramas possui a palavra RIO?
          <p />
          Como a palavra RIO possui somente 3 letras, podemos tentar encontrar
          manualmente todos os seus anagramas: RIO, ROI, IRO, IOR, ORI, OIR. Ou
          seja, podemos organizar as letras da palavra RIO de 6 modos
          diferentes. Outra abordagem seria utilizar a fórmula fatorial:
          <p />
          <Eq block s="P_3=3!=3.2.1=6" />
          <p />
        </li>
        <li>
          {" "}
          Quantos anagramas possui a palavra CADERNO?
          <p />
          Perceba que não há repetição de letras. Assim,
          <p />
          <Eq block s="P_7=7!=7.6.5.4.3.2.1=5040" />
          <p />
        </li>
        <li>
          {" "}
          De quantas formas podemos posicionar 5 pessoas em uma foto?
          <p />
          <Eq block s="P_5=5!=5.4.3.2.1=120" />
          <p />
          Podemos posicionar 6 pessoas em uma foto de 720 formas diferentes.
        </li>{" "}
      </ul>
      <p />
      <ClassSectionTitle title="Permutação com repetição" />
      <p />
      Caso haja elementos repetidos na permutação, temos uma permutação com
      repetição. Considere a palavra XÍCARA: a troca dos dois A's, ou seja, da
      quarta letra pela última letra, não altera a palavra. Assim, não forma um
      novo anagrama. Portanto, a fórmula da permutação com repetição é
      diferente. Abaixo, a letra A representa o número de repetições.
      <p />
      <p style={{textAlign: "center"}}>
      Quantidade de permutações (com repetição) <Eq s="=P_n^A=\frac{n!}{A!}" />
      </p>
      Vamos estudar alguns exemplos:
      <p />
      <ul>
        <li>
          {" "}
          De quantos modos podemos organizar as letras da palavra LATA? Ou seja,
          LATA possui quantos <b>anagramas</b>?
          Como LATA possui duas repetições das letra A:
          <p />
          <Eq block s="P_4^2=\frac{4!}{2!}=\frac{4.3.2.1}{2.1}=4.3=12" />
          Ou seja, existem 12 anagramas com as letras da palavras LATA.
          <p />
        </li>
        <li>
          {" "}
          De quantas formas podemos posicionar as letras da palavra CACAU? Ou
          seja, CACAU possui quantos <b>anagramas</b>?
          Perceba que este exemplo possui um diferencial: tanto a letra C como a
          letra A possuem 2 repetições. Como temos mais de um elemento sendo
          repetido, é necessário incluir a quantidade de repetições no
          denominador para cada um e depois multiplicá-los:
          <p />
          <Eq block s="P_5^{2,2}=\frac{5!}{2!\cdot2!}=\frac{5.4.3.2.1}{(2.1).(2.1)}=\frac{5.4.3}{2.1}=30" />
          Ou seja, CACAU possui 30 anagramas. O exemplo a seguir ilustra outra
          situação com repetição em mais de um elemento.
          <p />
        </li>
        <li>
          {" "}
          De quantas maneiras podemos montar um sorvete com 6 bolas sendo 3 de
          chocolate, 2 de morango e 1 de creme?
          Aqui estamos realizando uma permutação de 6 elementos em que chocolate
          possui 3 repetições e morango possui 2. Logo:
          <p />
          <Eq block s="P_6^{2,3}=\frac{6!}{2!\cdot3!}=\frac{6.5.4.3!}{2!\cdot3!}=\frac{6.5.4}{2!}=60" />
          <p />
          Portanto, podemos montar o sorvete de 60 maneiras diferentes.
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
