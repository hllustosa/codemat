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
      A Trigonometria é o campo da Matemática que estuda as medidas de um
      triângulo, que é uma figura plana com 3 lados e 3 ângulos. A trigonometria
      tem diversas aplicações na física, engenharia e na computação. Nessa
      unidade iremos estudar os conceitos mais básicos da trigonometria.
      <ClassImage
        src="/img/trigonometry.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "80%",
          width: "250px",
        }}
      />
      <ClassSectionTitle title="Relações Trigonométricas: Seno, cosseno e tangente" />
      O principal objeto de estudo da trigonometria é o triângulo retângulo, que
      será o foco de agora em diante.
      <p />
      Cada lado do triângulo retângulo recebe um nome especial. O lado oposto ao
      ângulo de 90º é chamado de <b>Hipotenusa</b> e os outros dois lados são
      chamados de <b>Catetos</b>.
      <p />
      <ClassImage
        src="/img/classes/ret.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%", width: "450px" }}
      />
      <p />
      Além disso, se considerarmos um dos ângulos do triângulo retângulo --
      exceto o de 90º -- podemos especificar a nomenclatura dos catetos.
      Considere o ângulo <Eq s="\hat{C}" />. O cateto <Eq s="\overline{BC}" /> é
      chamado de <b>Cateto adjacente</b>, enquanto o cateto{" "}
      <Eq s="\overline{AB}" /> é chamado de <b>Cateto oposto</b>. (Observe que,
      para o ângulo <Eq s="\hat{A}" /> é o contrário: o cateto <Eq s="\overline{AB}" /> é
      adjacente, enquanto o cateto <Eq s="\overline{BC}" /> é oposto).
      <p />A partir de um dos ângulos do triângulo retângulo -- exceto o de 90º
      -- podemos estabelecer três relações entre seus lados. Essas relação são
      conhecidas como <b>seno, cosseno e tangente</b>.<p />
      Supondo que o ângulo considerado é Â, definimos:
      <p />
      <Eq
        block
        s="\text{Seno} \hat{A}=\frac{\text{Cateto Oposto}}{\text{Hipotenusa}}"
      />
      <p />
      <Eq
        block
        s="\text{Cosseno} \hat{A}=\frac{\text{Cateto Adjacente}}{\text{Hipotenusa}}"
      />
      <p />
      <Eq
        block
        s="\text{Tangente } \hat{A}=\frac{\text{Cateto Oposto}}{\text{Cateto Adjacente}}"
      />
      <p />
      A tangente de um ângulo também pode ser encontrada pela divisão entre o
      seno e cosseno do mesmo ângulo.
      <p />
      Observe o exemplo:
      <p />
      <ul>
        <li>
          {" "}
          A partir do triângulo retângulo ABC abaixo, encontre o que se pede:
          <ClassImage
            src="/img/classes/ret2.png"
            pos="center"
            style={{ marginTop: "35px", marginBottom: "35px",  maxWidth: "80%", width: "300px" }}
          />
        </li>
        <li>
          {" "}
          Seno, Cosseno e Tangente do ângulo Â.
          <p />
          <Eq s="\text{Seno } \hat{A}=\frac{3}{5}" />
          <p />
          <Eq s="\text{Cosseno } \hat{A}=\frac{4}{5}" />
          <p />
          <Eq s="\text{Tangente } \hat{A} =\frac{3}{4}" />
          <p />
        </li>
        <li>
          {" "}
          Seno, Cosseno e Tangente do ângulo <Eq s="\hat{C}" />.
          <p />
          <Eq s="\text{Seno } \hat{C}=\frac{4}{5}" />
          <p />
          <Eq s="\text{Cosseno } \hat{C}=\frac{3}{5}" />
          <p />
          <Eq s="\text{Tangente } \hat{C}=\frac{4}{3}" />
          <p />
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Ângulos Notáveis" />
      Devido à sua relevância, os ângulos de 30º, 45º e 60º são conhecidos como{" "}
      <b>ângulos notáveis</b>. A tabela abaixo contém os valores do seno,
      cosseno e tangente de cada um.
      <p />
      <ClassImage
        src="/img/classes/not.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%", width:"340px" }}
      />
      <p />
      <ClassSectionTitle title="Circunferência Trigonométrica (Ciclo Trigonométrico)" />
      A <b>Circunferência Trigonométrica</b> é um instrumento utilizado para
      relacionar, em uma imagem, cada ângulo e seus respectivos valores de seno,
      cosseno e tangente.
      <p />
      Para isso, construímos uma circunferência de raio 1, e dividimos em quatro
      partes (chamados de quadrantes). Com ângulos crescentes no sentido
      anti-horário, marcamos alguns dos principais, como os ângulos de 0º, 90º,
      180º, 270º e 360º (perceba que, consequentemente, o ângulo de 0º e o de
      360º são indicados na mesma posição). O ângulo <Eq s="\alpha" /> da imagem
      à direita, por exemplo, está entre 0º e 90º.
      <p />
      <ClassImage
        src="/img/classes/circt.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      Projetando o segmento que determina <Eq s="\alpha" /> nos eixos vertical e
      horizontal, podemos construir um triângulo retângulo e obter o seno,
      cosseno e tangente deste ângulo. Observe nas imagens a seguir que a
      hipotenusa do triângulo construído é 1 pois este é o raio da
      circunferência. Consequentemente, utilizando as fórmulas do seno e cosseno
      com a hipotenusa valendo 1, temos a medida vertical (em verde) denotando o
      seno, enquanto a medida horizontal (em vermelho) denota o cosseno.
      <p />
      <ClassImage
        src="/img/classes/circt2.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      Encontrar a tangente utilizando a circunferência trigonométrica é menos
      natural: é necessário traçar uma reta tangente à circunferência e
      prolongar o segmento que determina <Eq s="\alpha" />, como monstra a
      figura à esquerda. Em muitos casos é mais relevante encontrar o seno e
      cosseno e obter a tangente pela razão entre os dois. <p />
      A figura à direita apresenta um exemplo para obter o seno e cosseno do
      ângulo de <Eq s="\alpha=30" /> º, indicando a medida das projeções
      vertical e horizontal, ou seja, o valor do seno de 30º e do cosseno de
      30º, respectivamente.
      <p />
      <ClassImage
        src="/img/classes/circt3.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
    </ClassContainer>
  );
}

export default Content;
