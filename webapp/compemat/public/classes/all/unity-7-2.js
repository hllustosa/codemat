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
      Esta unidade contém uma discussão sobre probabilidade. O estudo das
      probabilidades nos permite estimar quão fácil ou difícil é para que um
      determinado evento ocorra.
      <ClassImage
        src="/img/probability.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Eventos independentes" />
      Dois eventos são chamados de <b>independentes</b> se um não influencia no
      outro. Sejam <Eq s="A" /> e <Eq s="B" /> eventos independentes. Como
      podemos determinar a chance dos dois acontecerem simultaneamente? Perceba
      que estamos buscando a probabilidade de ocorrer A <b>e</b> B. Em
      simbologia de conjuntos, buscamos a probabilidade da interseção (
      <Eq s="\cap" />) entre A e B, que é dada por:{" "}<Eq s="P(A\cap B)=P(A) \cdot P(B)" />.
      <p />
      Ou seja, a probabilidade de ocorrência de dois eventos independentes{" "}
      <Eq s="A" /> e <Eq s="B" /> é igual à multiplicação das probabilidades de{" "}
      <Eq s="A" /> e <Eq s="B" />.
      <ol>
        <li>
          {" "}
          Qual a probabilidade de obtermos, em um lançamento de uma moeda e um
          dado de seis lados, a face cara na moeda e o número 5 no dado?
          <p />
          Seja A o evento de obter cara em uma moeda e B o evento de tirar o
          número 5 em um dado de seis lados. Perceba que esses eventos não
          possuem qualquer relação ou dependência um com o outro, ou seja, são
          independentes.
          <p />
          Observe que <Eq s="P(A)=\frac{1}{2}" /> (pois pode sair cara ou coroa)
          e <Eq s="P(B)=\frac{1}{6}" />. Portanto:
          <p />
          <Eq
            block
            s="P(A\cap B)=P(A) \cdot P(B) =\frac{1}{2}\cdot \frac{1}{6}=\frac{1}{12}"
          />
          <p />
          Ou seja, existe 1 chance em 12 de, a partir do lançamento de uma moeda
          e de um dados de seis lados, obtermos cara e o número 5.
        </li>
        <p />
        <li>
          {" "}
          Em uma urna com 9 fichas, 4 são vermelhas, 2 são azuis e 3 são
          amarelas. Escolhendo aleatoriamente duas fichas e supondo que haja
          reposição, qual a chance de se obter uma vermelha na primeira retirada
          e uma azul na segunda retirada?
          <p />
          Seja A o evento de retirar uma ficha vermelha da urna e B o evento de
          retirar uma ficha azul. Perceba que esses eventos não possuem qualquer
          relação ou dependência um com o outro, ou seja, são independentes.
          <p />
          Inicialmente temos 9 fichas e, portanto,{"  "}<Eq s="P(A)=\frac{4}{9}" />.
          Como, segundo o enunciado, há reposição, para a segunda retirada temos
          novamente 9 fichas na urna (se não houvesse reposição deveríamos
          considerar 8 fichas na urna para a segunda retirada). Assim,{" "}
          <Eq s="P(B)=\frac{2}{9}" />. Logo:
          <p />
          <Eq block s="P(A\cap B)= P(A\cap B)=P(A) \cdot P(B)=\frac{4}{9} \cdot \frac{2}{9} = \frac{8}{81}" />
          <p />
        </li>
      </ol>
      <ClassSectionTitle title="Eventos Mutualmente Exclusivos (ou Excludentes)" />
      Dois eventos são chamados de{" "}
      <b>mutualmente exclusivos ou mutualmente excludentes</b> se não puderem
      ocorrer simultaneamente. Sejam <Eq s="A" /> e <Eq s="B" /> eventos
      mutualmente exclusivos. Assim, não existe a possibilidade de ocorrência de{" "}
      <Eq s="A" /> e <Eq s="B" />, mas existe a possibilidade de ocorrência de{" "}
      <Eq s="A" /> <b>ou</b> <Eq s="B" /> e essa é a probabilidade que
      buscaremos: 
      <p />
      <Eq block s="P(A\cup B)=P(A) + P(B)" />
      <p />
      Ou seja, se <Eq s="A" /> e <Eq s="B" /> são eventos mutualmente
      excludentes, então a probabilidade de ocorrer <Eq s="A" /> <b>ou</b>{" "}
      <Eq s="B" /> é dada pela soma das probabilidades de <Eq s="A" /> e{" "}
      <Eq s="B" />.
      <ol>
        <li>
          {" "}
          Qual a probabilidade de obtermos, em um lançamento de dado de seis
          faces, o número 1 ou o número 3?
          <p />
          Seja <Eq s="A" /> o evento de tirar o número 1 e <Eq s="B" /> o evento
          de tirar o número 3. Perceba que esses eventos não podem acontecer ao
          mesmo tempo e portanto são mutualmente excludentes. Ainda,{" "}
          <Eq s="P(A)=\frac{1}{6}" /> e <Eq s="P(B)=\frac{1}{6}" />. Portanto:
          <p />
          <Eq block s="P(A\cup B)=P(A) + P(B)=\frac{1}{6}+\frac{1}{6}=\frac{2}{6}=\frac{1}{3}" />
          <p />
          <p/>
        </li>{" "}
        <li>
          {" "}
          Em uma caixa com 30 bolas, sendo 10 amarelas, 12 verdes e 8 laranjas,
          qual a probabilidade de retirar ao acaso uma bola verde ou uma bola
          laranja?
          <p />
          Seja <Eq s="A" /> o evento de retirar uma bola verde e <Eq s="B" /> o
          evento de retirar uma bola laranja. Perceba que esses eventos não
          podem acontecer ao mesmo tempo e portanto são mutualmente excludentes.
          Ainda, <Eq s="P(A)=\frac{12}{30}" /> e <Eq s="P(B)=\frac{8}{30}" />.
          Portanto:
          <p/>
          <Eq block s="P(A\cup B)=P(A) + P(B)=\frac{12}{30} + \frac{8}{30} + \frac{20}{30} + \frac{2}{3}" />
          <p/>
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
