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
} from "@codemat/lesson-kit";

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
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Análise Combinatória" />A{" "}
      <b>Análise Combinatória</b> é o campo da Matemática que estuda os
      processos de contagem:
      <p />
      <ul>
        <li> De quantas formas podemos posicionar 5 pessoas em uma foto? </li>
        <li>
          {" "}
          A partir de um grupo de 12 pessoas, de quantas maneiras diferentes
          podemos formar uma comissão com 3 integrantes?{" "}
        </li>
      </ul>
      <p />
      Ainda que existam diferentes tipos de contagem, conforme veremos a seguir,
      há um conceito que permeia todos: o fatorial.
      <p />
      <ClassSectionTitle title="Fatorial" />O <b>fatorial</b> de um número
      corresponde à multiplicação deste número por todos os seus antecessores
      naturais:
      <p />
      <Eq block s="n! = n\cdot(n-1)\cdot(n-2)\cdot(n-3) ... " />
      <p />
      Lê-se: <Eq s="n" /> fatorial
      <p />
      Olhemos alguns exemplos:
      <p />
      <ul>
        <li>
          <span>a)</span>
          <Eq s="4!=4.3.2.1=24" />
        </li>
        <li>
          <span>b)</span>
          <Eq s="9!=9.8.7.6.5.4.3.2.1=362.880" />
        </li>
        <li>
          <span>c)</span>
          <Eq s="0!=1" /> (este caso é uma definição)
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Princípio fundamental da contagem" />O{" "}
      <b>Princípio Fundamental da Contagem</b> determina o número de combinações
      possíveis a partir de eventos independentes. Segundo este princípio, o{" "}
      <b>produto</b> das possibilidades (individuais) de cada evento resulta na
      quantidade total de agrupamentos existentes.
      <p />
      Considere os seguintes cenários:
      <p />
      <ul>
        <li>
          {" "}
          Quantas combinações são possíveis com o lançamento de duas moedas?
          <p />
          <ul>
            <li>
              Evento 1 - Lançamento de uma moeda: <b>2</b> possibilidades (cara
              ou coroa)
            </li>
            <li>
              Evento 2 - Lançamento de uma moeda: <b>2</b> possibilidades (cara
              ou coroa).
            </li>
          </ul>
          <p />
          Pelo princípio fundamental da contagem, o total de possibilidade são
          4, pois <Eq s="2.2=4 " />.
          <p />
        </li>
        <li>
          {" "}
          <p />
          Quantas combinações são possíveis com o lançamento de uma moeda e um
          dado de seis faces?
          <p />
          <ul>
            <li>
              Evento 1 - Lançamento de uma moeda: <b>2</b> possibilidades (cara
              ou coroa)
            </li>
            <li>
              Evento 2 - Lançamento de um dado: <b>6</b> possibilidades (números
              de 1 a 6).
            </li>
          </ul>
          <p />
          Pelo princípio fundamental da contagem, o total de possibilidade são
          12, pois <Eq s="2.6=12" />.
          <p />
        </li>
        <li>
          <p />
          Quantas combinações são possíveis com o lançamento de duas moedas e
          dois dados de seis faces?
          <p />
          <ul>
            <li>
              Evento 1 - Lançamento de uma moeda: <b> 2 </b> possibilidades
              (cara ou coroa)
            </li>
            <li>
              Evento 2 - Lançamento de uma moeda: <b>2</b> possibilidades (cara
              ou coroa)
            </li>
            <li>
              Evento 3 - Lançamento de um dado: <b>6</b> possibilidades (números
              de 1 a 6)
            </li>
            <li>
              Evento 4 - Lançamento de um dado: <b>6</b> possibilidades (números
              de 1 a 6).
            </li>
          </ul>
          <p />
          Pelo princípio fundamental da contagem, o total de possibilidade são
          144, pois <Eq s="2.2.6.6=144" />.
          <p />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
