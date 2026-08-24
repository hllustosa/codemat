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
      <ClassSectionTitle title="Combinação simples" />
      Uma <b>combinação simples</b> é um agrupamento de elementos distintos que
      se diferem <b>somente pela natureza (tipo)</b>, ou seja, a ordem não é
      relevante. Cada grupo é formado por <Eq s="p" /> elementos escolhidos
      dentre <Eq s="n" /> elementos. Nessa situação, a fórmula abaixo indica a
      quantidade total de combinações possíveis:
      <p />
      <Eq block s="C_{n,p}=\frac{n!}{p!\cdot(n-p)!}" />
      <p />
      <b>Observação</b>: <Eq s="C_{n,p}" /> também pode ser representado como{" "}
      <Eq s="C^n_{p}" /> ou <Eq s="C^p_{n}" />.
      <p />
      Vamos estudar alguns cenários:
      <p />
      <ul>
        <li>
          {" "}
          De quantas maneiras é possível montar uma comissão com 3 participantes
          a partir de 8 pessoas?
          <p />
          Observe que a ordem dos participantes <b>não importa</b>, somente quem
          está ou não na comissão. Como a ordem não é relevante, temos uma
          combinação de <Eq s="n=8" /> em grupos de <Eq s="p=4" />. Utilizando a
          fórmula,
          <p />
          <Eq
            block
            s="C_{8,4}=\frac{8!}{4!\cdot(8-4)!}=\frac{8.7.6.5.4!}{4!\cdot4.3.2.1} = \frac{8.7.6.5}{4.3.2.1}=70"
          />
          <p />
          Ou seja, a comissão pode ser formada de 70 maneiras diferentes.
          <p />
        </li>
        <li>
          {" "}
          Para realizar entrevistas, um pesquisador deve escolher 4 pessoas de
          um total de 9 candidatos. De quantas formas diferentes ele pode
          realizar esta escolha?
          <p />
          Novamente, a ordem dos escolhidos não é relevante, somente quem foi
          escolhido. Portanto, temos uma combinação de <Eq s="n=9" /> em grupos
          de <Eq s="p=4" />. Utilizando a fórmula:
          <p />
          <Eq s="C_{9,4}=\frac{9!}{4!\cdot(9-4)!}=\frac{9.8.7.6.5!}{(4.3.2.1)\cdot(5!)}=\frac{9.8.7.6}{4.3.2.1}=126" />
          <p />O pesquisador pode escolher os entrevistados de 126 formas
          diferentes.
        </li>
      </ul>
      <ClassSectionTitle title="Combinação com repetição" />
      Uma <b>combinação com repetição</b> é um agrupamento de elementos que se
      diferem <b>somente pela natureza (tipo)</b> podendo haver repetição. Cada
      grupo é formado por <Eq s="p" /> elementos escolhidos dentre <Eq s="n" />{" "}
      elementos, sendo que cada elemento pode aparecer mais de uma vez. Nessa
      situação, a fórmula abaixo indica a quantidade total de combinações com
      repetição possíveis:
      <p />
      <Eq block s="Cr_{n,p}=\frac{(n+p-1)!}{p!\cdot(n-1)!}" />
      <p />
      <ul>
        <li>
          Considere o exemplo a seguir. Em uma loja há 10 modelos de camisetas.
          De quantos modos diferentes é possível realizar uma compra de 6
          camisetas nessa loja? Considere que é possível comprar mais de uma
          camiseta do mesmo modelo.
          <p />
          Observe que neste caso temos uma combinação com repetição (a ordem não
          é relevante no agrupamento e podemos escolher elementos repetidos) com{" "}
          <Eq s="n=10" /> e <Eq s="p=6" />. Assim,
          <p />
          <Eq s="Cr_{10,6}=\frac{(10+6-1)!}{6!\cdot(10-1)!}=\frac{15.14.13.12.11.10.9!}{6!\cdot9!}=5005" />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
