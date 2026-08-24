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
          width: "80%", width: "250px",
        }}
      />
      <ClassSectionTitle title="Ângulos" />
      <b>Ângulo</b> é a medida da abertura, no sentido anti-horário, entre dois
      segmentos (pedaços) de reta:
      <p />
      <ClassImage
        src="/img/classes/Angulo.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "300px" }}
      />
      <p />
      Observe, a partir da imagem abaixo, que podemos afastar os segmentos de
      reta (indicados em azul) para obter ângulos cada vez maiores, sendo que o
      maior ângulo corresponde à circunferência na terceira e última imagem:
      <p />
      <ClassImage
        src="/img/classes/Angulos.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "870px" }}
      />
      <p />
      São duas as principais unidades de medida de ângulos: graus e radianos,
      sendo este último a medida adotada pelo Sistema Internacional de Unidades.
      <p />
      Um <b>grau</b> (1º) é a medida de <Eq s="\frac{1}{360}" /> da
      circunferência, como mostra a imagem à abaixo.
      <p />
      <ClassImage
        src="/img/classes/1grau.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "400px" }}
      />
      <p />
      A seguir, temos alguns exemplos de ângulos medidos em graus. A volta
      completa possui 360º. Além disso, o ângulo de 90º, conhecido como ângulo
      reto, tem maior relevância no estudo da trigonometria -- como veremos
      adiante -- e portanto é representado de maneira distinta, por um quadrado.
      <p />
      <ClassImage
        src="/img/classes/graus.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "370px" }}
      />
      <p />
      Um <b>radiano</b> (1rad) é o ângulo central de uma circunferência obtido
      pelo arco que possui mesma medida do raio. A imagem abaixo indica um
      exemplo de como delinear a medida de 1rad tomando raio de medida 1.
      <p />
      <ClassImage
        src="/img/classes/1rad.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "370px" }}
      />
      <p />
      Uma habilidade relevante no estudo da trigonometria é conseguir converter
      medidas de ângulos em graus para radianos (e vice versa). Uma estratégia
      para isso é observar que o ângulo de 180º corresponde ao ângulo de{" "}
      <Eq s="\pi" /> radianos:
      <p />
      <ClassImage
        src="/img/classes/180pi.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "470px" }}
      />
      <p />
      Logo, é vantajoso utilizar esta equivalência por meio da Regra de Três.
      Observe os exemplos:
      <ul>
        <li>
          {" "}
          Um ângulo de 45º corresponde a quantos radianos?
          <p />
          Considerando que 180º equivale a <Eq s="\pi" /> radianos, podemos
          montar a Regra de Três:
          <p />
          <Eq s="\frac{180}{45}=\frac{\pi}{x}" /> <p />
          <Eq s="x=\frac{\pi}{4}" /> <p />
          <p />
          Ou seja, 45º corresponde a <Eq s="\frac{\pi}{4}" /> rad.
          <p />
        </li>
        <li>
          {" "}
          Determine a medida em grau do ângulo <Eq s="\frac{3 \pi}{2}" />.<p />
          Novamente, podemos construir a Regra de Três:
          <p />
          <Eq s="\frac{180}{x}=\frac{\pi}{\frac{3 \pi}{2}}" />
          <p />
          <Eq s="\frac{180}{x}=\pi\cdot\frac{2}{3\pi}" /> <p />
          <Eq s="x=270" />
          <p />
          Ou seja, <Eq s="\frac{\pi}{4}" /> rad corresponde a 270º.
        </li>
      </ul>
      <ClassSectionTitle title="Classificação de triângulos" />
      As principais classificações para triângulos são as que dizem respeito aos
      lados e aos ângulos.
      <ClassSubSectionTitle title="Em relação aos lados" />
      Os traços iguais nas imagens indicam lados de mesma medida.
      <p />
      <ClassImage
        src="/img/classes/classiflados.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "470px" }}
      />
      <p />
      <ClassSubSectionTitle title="Em relação aos ângulos" />
      Os traços iguais nas imagens indicam ângulos de mesma medida.
      <p />
      <ClassImage
        src="/img/classes/classifangulos.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "470px" }}
      />
      <p />
      <b>Observação</b>: Uma propriedade importante em relação aos ângulos de um
      triângulo é que sua soma <b>sempre</b> resulta em 180º.
      <p />
      <ClassSectionTitle title="Semelhança de triângulos" />
      <p />
      A partir de agora vamos nomear os ângulos de um triângulo, de modo a
      referenciá-los com mais facilidade. Considere o triângulo ABC abaixo (ou
      seja, de vértices A, B e C).
      <p />
      <ClassImage
        src="/img/classes/notangulos.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "570px" }}
      />
      <p />
      Podemos nomear seus ângulos da seguinte maneira:
      <ul>
        <li> Ângulo vermelho: <Eq s="\hat{A}" /> ou <Eq s="C\hat{A}B" /> ou <Eq s="B\hat{A}C" /></li>
        <li> Ângulo verde: <Eq s="\hat{B}" /> ou <Eq s="A\hat{B}C" /> ou <Eq s="C\hat{B}A" /></li>
        <li> Ângulo azul: <Eq s="\hat{C}" /> ou <Eq s="A\hat{C}B" /> ou <Eq s="B\hat{C}A" /></li>
      </ul>
      <p />
      Estabelecidas essas notações, podemos prosseguir com a semelhança de
      triângulos.
      <p />
      Dois triângulos são ditos <b>semelhantes</b> se existe uma correspondência
      entre seus lados e ângulos. Mais precisamente, seus ângulos possuem mesma
      medida e há uma proporção entre os lados dos triângulos, relacionada a uma
      constante (chamada razão de semelhança). Nos triângulos abaixo, a razão de
      semelhança é 2 pois os lados do primeiro triângulo medem o dobro que os
      lados do segundo triângulo.
      <p />
      <ClassImage
        src="/img/classes/semel.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "670px" }}
      />
      <p />
      Apesar disso, não é necessário conhecer todos os lados e ângulos dos dois
      triângulos para verificar se são ou não semelhantes. Para isso existem
      três propriedades, chamadas <b>Casos de Semelhança</b>:
      <p />
      <ul>
        <li>
          {" "}
          <b>Caso A.A. (Angulo Ângulo)</b>: Se os triângulos possuem dois
          ângulos iguais, então são semelhantes.
          <ClassImage
            src="/img/classes/casoaa.png"
            pos="center"
            style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "670px" }}
          />
        </li>
        <li>
          {" "}
          <b>Caso L.L.L. (Lado Lado Lado)</b>: Se os triângulos possuem três
          lados semelhantes, então são semelhantes.
          <ClassImage
            src="/img/classes/casolll.png"
            pos="center"
            style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "670px" }}
          />
        </li>
        <li>
          {" "}
          <b>Caso L.A.L. (Lado Ângulo Lado)</b>: Se os triângulos possuem dois
          lados semelhantes e o ângulo entre eles de mesma medida, então são
          semelhantes.
          <ClassImage
            src="/img/classes/casolal.png"
            pos="center"
            style={{ marginTop: "35px", marginBottom: "35px", width: "80%", maxWidth: "670px" }}
          />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
