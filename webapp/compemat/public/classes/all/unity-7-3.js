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
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Eventos Inclusivos" />
      Dois eventos são chamados de <b>inclusivos</b> quando há a possibilidade
      de ocorrer o evento <Eq s="A" />, o evento <Eq s="B" /> ou os dois ao
      mesmo tempo. Neste caso, se procuramos a probabilidade de ocorrer{" "}
      <Eq s="A" /> <b>ou</b> <Eq s="B" />, devemos subtrair a chance de ocorrer
      ambos:
      <p/>
      <Eq block s="P(A\cup B)=P(A) + P(B)-P(A\cap B)" />
      <p/>
      <ol>
        <li>
          {" "}
          Considere um baralho de 52 cartas, com 13 cartas de cada tipo (copas,
          espadas, ouros e paus). Escolhendo aleatoriamente uma carta deste
          baralho, qual a probabilidade de se obter um dois ou uma carta de
          ouros?
          <p />
          Seja <Eq s="A" /> o evento de escolher um dois e <Eq s="B" /> o evento
          de escolher uma carta de ouros. Observe que existe a chance de ocorrer{" "}
          <Eq s="A" /> e <Eq s="B" /> ao mesmo tempo: o dois de ouros. Assim,{" "}
          <Eq s="P(A)=\frac{4}{52}" />, <Eq s="P(B)=\frac{13}{52}" /> e{" "}
          <Eq s="P(A\cap B)=\frac{1}{52}" />. Portanto, a chance de ocorrer{" "}
          <Eq s="A" /> <b>ou</b> <Eq s="B" /> é
          <p />
          <Eq
            block
            s="P(A\cup B)=P(A) + P(B)-P(A\cap B)=\frac{4}{52}+\frac{13}{52}-\frac{1}{52}=\frac{16}{52}"
          />
          <p />
          Ou seja, existem 16 chances em 52 de se obter um dois ou uma carta de
          ouros.
        </li>
      </ol>
      <ClassSectionTitle title="Probabilidade Condicional" />A Probabilidade{" "}
      <b>Condicional</b> refere-se à chance de ocorrer um evento <Eq s="A" />{" "}
      sabendo-se que o evento condicionante <Eq s="B" /> já ocorreu, com ambos
      no mesmo espaço amostral. A situação de "A ocorrer sabendo-se que B
      ocorreu" é indicada pelo símbolo <Eq s="A|B" /> e sua probabilidade é
      dada por: {" "} 
      <p />
        <Eq block s="P(A|B)=\frac{P(A\cap B)}{P(B)}" />
      <p />
      <ol>
        <li>
          {" "}
          Um número foi sorteado aleatoriamente entre 1 e 10. Qual a
          probabilidade que este número seja maior que 6 sabendo-se que foi
          sorteado um número ímpar?
          <p />
          Seja A possibilidade do número sorteado ser maior que 6 e seja B a
          possibilidade de ser ímpar. Assim, <Eq s="P(B)=\frac{5}{10}" />{" "}
          (1,3,5,7 e 9) e <Eq s="P(A\cap B)=\frac{2}{10}" /> (7 e 9). Portanto,
          <p />
          <Eq
            block
            s="P(A|B)=\frac{P(A\cap B)}{P(B)}=\frac{\frac{2}{10}}{\frac{5}{10}}=\frac{2}{10} \cdot \frac{10}{5}=\frac{2}{5}"
          />
          <p />
          Ou seja, existem 2 chances em 5 de que o número sorteado seja maior
          que 6 sabendo que é ímpar.
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
