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
      Progressões são sequências numéricas em que a diferença entre números
      consecutivos se dão de acordo com uma regra. Nesta unidade iremos estudar
      dois tipos comuns de progressões, as aritméticas e geométricas.
      <ClassImage
        src="/img/progression.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Progressão Geométrica (PG)" />
      Uma <b>Progressão Geométrica (PG)</b> é uma sequência numérica em que cada
      termo é igual ao anterior multiplicado por uma constante, que é chamada de{" "}
      <b>razão</b> e indicada pela letra letra <Eq s="q" />. Vale destacar que{" "}
      <Eq s="q" /> pode ser encontrado pela razão entre um termo e seu
      antecessor. Ainda, <Eq s="q" /> pode ser um número positivo ou negativo.
      <ul>
        <li>
          {" "}
          <span>1.</span> Na progressão geométrica{" "}
          <Eq s="(3,9,27,81,...)" /> cada termo a partir do segundo é igual ao
          anterior multiplicado por 3. Assim, a razão desta PG é 3. Em
          simbologia matemática,
          <Eq s="a_1=3" /> <p />
          <Eq s="a_2=a_1\cdot 3=9" /> <p />
          <Eq s="a_3=a_2 \cdot 3= 27" /> <p />
          <Eq s="a_4 =a_3\cdot 3=81" /> <p />
          <Eq s="q =3" /> <p />
          <p />
          Seguindo esta lógica, podemos encontrar uma expressão que descreva
          todos os termos de uma PG. Sendo <Eq s="n" /> a posição do termo{" "}
          <Eq s="a_n" /> procurado, podemos utilizar a fórmula do{" "}
          <b>Termo Geral de uma PG</b>:
          <p />
          <Eq block s="a_n=a_1 \cdot q^{n-1}" />
          <p />
        </li>
        <li>
          <span>2.</span> Encontre o 29º termo da PG{" "}
          <Eq s="\left(1,\frac{1}{2},\frac{1}{4},\frac{1}{8},...\right)" />.
          <p />
          Pelo enunciado, <Eq s="a_1=1" /> e <Eq s="q=\frac{1}{2}" />.
          Utilizando a fórmula do Termo Geral de uma PG para <Eq s="n=29" />:
          <p />
          <Eq s="a_{29} =1 \cdot \left( \frac{1}{2}\right)^{29-1}" /> <p />
          <Eq s="=\frac{1}{2^{28}}" /> <p />
          <p />
        </li>
        <li>
          <span>3.</span> Assim como no caso de uma PA, também é possível encontrar a{" "}
          <b>Soma dos termos de uma PG</b>. No entanto, para as progressões
          geométricas é comum considerar duas situações: uma em que somamos uma
          quantidade finita de termos e outra em que somamos infinitos termos.
        </li>
      </ul>
      <ClassSectionTitle title="Soma finita de uma PG" />
      Quando buscamos a soma de uma quantidade finita <Eq s="n" /> de termos de
      uma PG, utilizamos a seguinte expressão:
      <p />
      <Eq block s="S_n=\frac{a_1\cdot(q^n -1)}{q-1}" />
      <p />
      <ul>
        <li>
          <span>4.</span> Encontre a soma dos 20 primeiros termos da PG{" "}
          <Eq s="(1,-4,16,-64,...)" />
          <p />
          Pelo enunciado, <Eq s="a_1=1" /> e <Eq s="q=-4" />. Utilizando a
          fórmula da soma finita de uma PG para <Eq s="n=20" />:
          <p />
          <Eq s="S_{20}=\frac{1\cdot((-4)^{20} -1)}{(-4)-1}" /> <p />
          <Eq s="=\frac{(-4)^{20} -1}{-5}" />
          <p />
          <p />
        </li>
      </ul>
      <ClassSectionTitle title="Soma infinita de uma PG" />
      Quando <Eq s="-1 < q < 1" /> e buscamos a soma de uma quantidade infinita
      de termos de uma PG, utilizamos a seguinte expressão:
      <Eq block s="S_{\infty}=\frac{a_1}{1-q}" />
      <ul>
        <li>
          <span>5.</span> Determine a soma dos infinitos termos da PG{" "}
          <Eq s="\left(1,\frac{1}{2},\frac{1}{4},\frac{1}{8},...\right)" />.
          <p />
          Pelo enunciado, <Eq s="a_1=1" /> e <Eq s="q=\frac{1}{2}" />.
          Utilizando a fórmula da soma infinita de uma PG:
          <p />
          <Eq block s="S_{\infty} =\frac{1}{1-\frac{1}{2}} = 1" />
          <p />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
