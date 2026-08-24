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
      <ClassSectionTitle title="Progressões" />
      Uma <b>sequência numérica</b> é uma sucessão de números, que são dispostos
      entre parênteses: (1, 6, 15, 39). Se há um padrão na disposição desses
      números, ou seja, se cada número depende de alguma forma do anterior,
      então a sequência é chamada de <b>progressão</b>.
      <ul>
        <li>
          {" "}
          Cada número em uma progressão é chamado de <b>termo</b>. Por exemplo,
          na progressão (7, 8, 9) o número 7 é o primeiro termo, o número 8 é o
          segundo termo e o número 9 é o terceiro termo. Normalmente, cada termo
          é referido a partir de uma letra minúscula e sua posição é indicada
          por um subíndice. Neste exemplo, <Eq s="a_1=7" />, <Eq s="a_2=8" /> e{" "}
          <Eq s="a_3=9" />.{" "}
        </li>
      </ul>
      As progressões mais importantes são a Progressão Aritmética (PA) e a
      Progressão Geométrica (PG), que muitas vezes possuem infinitos termos.
      <ClassSectionTitle title="Progressão Aritmética (PA)" />
      Uma <b>Progressão Aritmética (PA)</b> é uma sequência numérica em que cada
      termo é igual ao outro mais uma constante, que é chamada de <b>razão</b> e
      indicada pela letra <Eq s="r" />. Vale destacar que <Eq s="r" /> pode ser
      entrado pela diferença entre um termo e seu antecessor. Além disso,{" "}
      <Eq s="r" /> pode ser um número positivo ou negativo.
      <ul>
        <li>
          <span>1. </span> Na progressão aritmética{" "}
          <Eq s="(11, 13, 15, 17, ...)" />, cada termo a partir do segundo é
          igual ao anterior mais 2. Assim, 2 é a razão desta PA. Em simbologia
          matemática,
          <p />
          <Eq s="a_1=11" />
          <p />
          <Eq s="a_2=a_1 +2=13" /> <p />
          <Eq s="a_3=a_2 + 2= 15" /> <p />
          <Eq s="a_4=a_3+2=17" />
          <p />
          <Eq s="r=2" />
        </li>
        <p />A partir do raciocínio de que, em uma PA, cada elemento a partir do
        segundo é igual ao anterior mais uma razão, podemos estabelecer uma
        fórmula para encontrar qualquer termo de uma PA. Essa relação é chamada
        de <b>Termo Geral de uma PA</b>:
        <p />
        <Eq block s="a_n=a_1 +(n-1)\cdot r" />
        em que <Eq s="n" /> é a posição do termo <Eq s="a_n" /> buscado.
        <p />
        <li>
          <span>2.</span> Determine o 13º termo da PA <Eq s="(11, 7, 3,...)" />.
          <p />
          Pelo enunciado, <Eq s="a_1=3" /> e <Eq s="r=-4" />. Utilizando a
          fórmula do Termo Geral de uma PA para <Eq s="n=13" />:
          <p />
          <Eq s="a_{13}=3 +(13-1)\cdot (-4)" />
          <p />
          <Eq s="=3-48" />
          <p />
          <Eq s="=-45" />
          <p />
          <p />
        </li>
        <li>
          <span>3.</span> Na PA <Eq s="(20,30,40,...)" /> qual é a posição do
          termo 420?
          <p />
          Perceba que neste caso procuramos o valor de <Eq s="n" />, sabendo que{" "}
          <Eq s="a_n=420" />, <Eq s="a_1=20" /> e <Eq s="r=10" />. Utilizando a
          fórmula do Termo Geral de uma PA:
          <p />
          <Eq s="420=20 + (n-1)\cdot10" />
          <p />
          <Eq s="420=10n+10" />
          <p />
          <Eq s="n=\frac{410}{10}" />
          <p />
          <Eq s="n=41" />
          <p />
          <p />
        </li>
      </ul>
      Outro conceito importante diz respeito à soma dos <Eq s="n" /> termos de
      uma PA. Quando <Eq s="n" /> é um valor baixo, podemos facilmente calcular
      a soma: tomando a PA <Eq s="(7,8,9,...)" />, a soma dos três primeiros
      termos é <Eq s="7+8+9=24" />. No entanto, para valores maiores de{" "}
      <Eq s="n" /> é útil conhecermos a fórmula da{" "}
      <b>
        Soma dos <Eq s="n" /> termos de uma PA
      </b>
      : <p />
      <Eq block s="S_n=\frac{(a_1 + a_n)\cdot n}{2}" />
      <ul>
        <li>
          <span>4.</span> Calcule a soma dos 101 primeiros elementos da PA{" "}
          <Eq s="(4,6,8,...)" />.<p />
          Pelo enunciado, <Eq s="a_1=4" /> e <Eq s="n=101" />. No entanto,
          precisamos do valor de <Eq s="a_{101}" /> para aplicar na fórmula da
          Soma. Antes, devemos utilizar a fórmula do Termo Geral de uma PA, com{" "}
          <Eq s="r=2" />: <p />
          <Eq block s="a_{101} =4 +(101-1)\cdot 2 = 204" /> <p />
          <p />
          Agora, substituímos as informações encontradas na fórmula da Soma:
          <p />
          <Eq block s="S_{101}=\frac{(4 + 204)\cdot 101}{2} = 10.504" />
          <p />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
