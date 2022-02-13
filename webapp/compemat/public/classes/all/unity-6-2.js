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
      Nesta unidade estudaremos as funções. Vimos anteriormente o conceito de
      função e sua aplicação na programação. Estudaremos agora o conceito
      matemático de função, que está presente em diversos ramos de atividade
      humana.
      <ClassImage
        src="/img/functions.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Função de Primeiro Grau (Função Afim)" />O{" "}
      <b>grau</b> de uma função é o maior expoente da variável independente. No
      exemplo <Eq s="h(x)=2x" />, o expoente de <Eq s="x" /> é 1. Portanto,{" "}
      <Eq s="h(x)=2x" /> é uma função do primeiro grau.
      <p />
      Todas as <b>funções do primeiro grau</b> possuem a seguinte estrutura, em
      que <Eq s="a" /> e <Eq s="b" /> simbolizam números reais, com{" "}
      <Eq s="a\neq0" />:
      <Eq s="f(x) = a. x + b" />
      Examine os exemplos de funções do primeiro grau:
      <p />
      <ul>
        <li>
          {" "}
          <Eq s="f(x)= 3x + 1" /> (função <Eq s="f" /> com <Eq s="a=3" /> e{" "}
          <Eq s="b=1" />
          ).{" "}
        </li>
        <li>
          {" "}
          <Eq s="g(x)=-20x" /> (função <Eq s="g" /> com <Eq s="a=-20" /> e{" "}
          <Eq s="b=0" />
          ).{" "}
        </li>
        <li>
          {" "}
          <Eq s="h(x)=x-5" /> (função <Eq s="h" /> com <Eq s="a=1" /> e{" "}
          <Eq s="b=-5" />
          ).{" "}
        </li>
      </ul>
      <ClassSectionTitle title="Gráfico de uma Função do Primeiro Grau" />
      Toda função do primeiro grau é retratada no Plano Cartesiano por uma{" "}
      <b>reta</b>. Para desenhar tal gráfico, temos duas opções:
      <ol>
        <li>
          {" "}
          Estabelecer valores para <Eq s="x" /> (dois são suficientes) e
          encontrar a correspondência em <Eq s="y" />,{" "}
          <b>ligando pontos no plano cartesiano</b>.
        </li>{" "}
        <li>
          {" "}
          Utilizar <i>softwares</i> matemáticos como Geogebra, Maple, Matlab,
          Octave, entre outros.
        </li>
      </ol>
      Vejamos alguns exemplos de gráficos de funções do primeiro grau:
      <p />
      a) <Eq s="h(x)=2x" />
      <p />
      <ClassImage
        src="/img/classes/2x.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      b) <Eq s="f(x)=-x+3" />
      <p />
      <ClassImage
        src="/img/classes/mxm3.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <ClassSectionTitle title="Coeficientes" />
      Os coeficientes <Eq s="a" /> e <Eq s="b" /> interferem de maneiras
      distintas no comportamento do gráfico de uma função do primeiro grau.
      <p />
      O coeficiente <Eq s="a" /> é chamado de <b>coeficiente angular</b> (ou
      taxa de variação) e seu sinal indica a inclinação da reta:
      <ul>
        <li>
          {" "}
          Se <Eq s="a>0" />, a reta é crescente (quanto maior os valores de{" "}
          <Eq s="x" />, maior os valores de <Eq s="y" />
          ). O item a) da seção anterior é um exemplo de reta crescente, com
          coeficiente <Eq s="a=2" />.
        </li>{" "}
        <li>
          {" "}
          Se <Eq s="a<0" />, a reta é decrescente (quanto maior os valores de{" "}
          <Eq s="x" />, menor os valores de <Eq s="y" />
          ). O item b) da seção anterior é um exemplo de reta decrescente, com
          coeficiente <Eq s="a=-1" />.
        </li>{" "}
      </ul>
      O coeficiente <Eq s="b" /> é chamado de <b>coeficiente linear</b> (ou
      termo independente) e indica onde a reta "cortará" o eixo
      <b>vertical</b> (observe os itens <Eq s="a" /> e <Eq s="b" /> da seção
      anterior, nos quais o coeficiente linear <Eq s="b=0" /> e <Eq s="b=3" />,
      respectivamente). Isso acontece pois, quando <Eq s="x=0" />, temos{" "}
      <Eq s="y=b" /> para qualquer função do primeiro grau (que possui estrutura
      geral <Eq s="y=a.x+b" />
      ). Em símbolos matemáticos, <Eq s="f(0)=b" />.
      <ClassSectionTitle title="Zero de uma função" />O <b>zero</b> de uma
      função é o valor de <Eq s="x" /> para o qual a função vale zero. Em
      símbolos matemáticos, <Eq s="f(x)=0" />. Podemos encontrar o zero de uma
      função do primeiro grau de duas maneiras:
      <ol>
        <li>
          {" "}
          A partir da Lei da função, escrevendo <Eq s="f(x)=0" /> e encontrando
          a solução.
          <p />
          Por exemplo, se <Eq s="f(x)=x - 4" />, escrevemos:
          <p />
          <Eq s="x - 4 = 0" />
          <p />
          <Eq s="x = 4" />
          <p />
          Logo 4 é o zero da função <Eq s="f(x)=x-4" />. Em outras palavras, 4 é
          raiz da equação <Eq s="x-4=0" />.
        </li>
        <li>
          {" "}
          A partir do gráfico da função, encontrando o valor de <Eq s="x" /> em
          que a reta ``corta'' o eixo <b>horizontal</b>.<p />
          Por exemplo, se <Eq s="f(x)=3x+6" />, temos
          <ClassImage
            src="/img/classes/3xm6.png"
            pos="center"
            style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
          />
          Logo <Eq s="-2" /> é o zero da função <Eq s="f(x)=3x+6" />. Em outras
          palavras, <Eq s="-2" /> é raiz da equação <Eq s="3x+6=0" />.
        </li>
      </ol>
      <ClassSectionTitle title="O caminho inverso: encontrando a Lei de um função do primeiro grau" />
      Conhecendo dois pontos de uma reta, podemos determinar a lei da função do
      primeiro grau correspondente (ou seja, a reta que contém, que passa por
      esses pontos). A expressão obtida também é conhecida como{" "}
      <b>Equação Reduzida da Reta</b>. Observe o exemplo:
      <ol>
        <li>
          {" "}
          Sabendo que <Eq s="A=(1,0)" /> e <Eq s="B=(2,4)" /> pertencem à reta
          procurada, encontre a lei que a define.
          <p />
          Como <Eq s="f(x)=a.x+b" /> para diferentes valores de <Eq s="x" /> e{" "}
          <Eq s="y" />, substituímos os valores conhecidos dados pelos pontos{" "}
          <Eq s="A" /> e <Eq s="B" />: Pelo ponto <Eq s="A" />:{" "}
          <Eq s="0=a.1 + b" />.<p />
          Pelo ponto <Eq s="B" />: <Eq s="4=a.2+b" />
          Assim, montamos o sistema de duas equações:
          <p />
          <Eq s="0=a.1 + b" /><p />
        
          <Eq s="4=a.2+b" />
          <p />
          Que possui como solução <Eq s="a=4" /> e <Eq s="b=-4" />.<p />
          Logo, a expressão que buscamos é <Eq s="y=4x-4" /> ou{" "}
          <Eq s="f(x)=4x-4" />.
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
