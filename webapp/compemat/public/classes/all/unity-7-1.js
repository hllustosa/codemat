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
      <ClassSectionTitle title="Conceitos fundamentais" />A <b>Probabilidade</b>{" "}
      é o campo da Matemática que estuda a <b>chance</b> de um fenômeno
      acontecer. Esse estudo envolve alguns termos importantes:
      <ul>
        <li>
          {" "}
          <b>Experimento</b>: É a situação observada para estudo da
          probabilidade.
          <br />
          Ex: Lançamento de um dado de seis faces
          <p />
        </li>
        <li>
          {" "}
          <b>Espaço amostral</b>: É o conjunto de todas as possibilidades
          existentes e normalmente é indicado pela letra grega Ômega.
          <br />
          Ex: Quando lançamos um dado de seis faces, podemos obter os números 1,
          2, 3, 4, 5 ou 6. Nesse caso, o espaço amostral é{" "}
          <Eq s="\Omega=\{1,2,3,4,5,6\}" />.
          <p />{" "}
        </li>
        <li>
          {" "}
          <b>Eventos</b>: Corresponde aos subconjuntos do Espaço Amostral, que
          contém elementos do experimento. Normalmente é indicado por uma letra
          maiúscula como A, B e C.
          <br />
          Ex: Qual lançamos um dado de seis faces, podemos obter números menores
          que 3. Observe que há 2 possibilidades disso acontecer: se tirarmos 1
          ou 2 no dado. Chamando de B este evento, temos <Eq s="B=\{1,2\}" />.
          <p />
        </li>{" "}
      </ul>
      Assim, a probabilidade é um <b>número</b> avaliado sobre cada evento.
      <ol>
        {" "}
        <li>
          {" "}
          Qual a probabilidade de ocorrer o evento <Eq s="B" />, ou seja, de se
          obter números menores do que 3 em um dado de seis faces?
          <p />A probabilidade de ocorrer o evento B descrito acima é indicado
          por <Eq s="P(B)" />. Para encontrar quanto vale <Eq s="P(B)" /> vamos
          relacionar as chances dele ocorrer com o total de possibilidades. B
          possui 2 chances de ocorrer (tirarmos 1 ou 2), enquanto o total de
          possibilidades são seis (tirarmos 1, 2, 3, 4, 5 ou 6). Logo:
          <p />
          <Eq block s="P(B)=\frac{2}{6}=\frac{1}{3}" />. <p />
        </li>{" "}
      </ol>
      Em linhas gerais, para um evento A qualquer, sua probabilidade de
      ocorrência é:
      <p />
      <Eq
        block
        s="P(A)=\frac{\text{Evento desejado}}{\text{Eventos possiveis}}=\frac{\text{Numero de elementos de A}}{\text{Espaco amostral}}"
      />
      <p />
      <p />
      Uma observação importante disso é que <Eq s="0 \leq P(A) \leq 1" />. Um
      evento A é chamado de impossível se <Eq s="P(A)=0" /> e de certo se{" "}
      <Eq s="P(A)=1" />.
    </ClassContainer>
  );
}

export default Content;
