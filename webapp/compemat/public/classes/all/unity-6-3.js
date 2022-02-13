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
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Função do Segundo Grau (Função Quadrática)" />
      Um função é chamada de <b>função do segundo grau</b>, quando o maior
      expoente da variável independente é 2. Todas as funções do segundo grau
      possuem a seguinte estrutura, em que <Eq s="a" />, <Eq s="b" /> e{" "}
      <Eq s="c" /> simbolizam números reais, com <Eq s="a\neq 0" />:
      <Eq s="f(x)=a.x^2+b.x+c" />
      <p />
      Examine os exemplos de funções do segundo grau:
      <ul>
        <li>
          {" "}
          <Eq s="f(x)=3x^2+5x+7" /> (função <Eq s="f" /> com <Eq s="a=3" />,{" "}
          <Eq s="b=5" /> e <Eq s="c=7" />
          ).
        </li>
        <li>
          {" "}
          <Eq s="g(x)=x^2-6x" /> (função <Eq s="g" /> com <Eq s="a=1" />,{" "}
          <Eq s="b=-6" /> e <Eq s="c=0" />
          ).
        </li>
        <li>
          {" "}
          <Eq s="h(x)=4x^2-8" /> (função <Eq s="h" /> com <Eq s="a=4" />,{" "}
          <Eq s="b=0" /> e <Eq s="c=-8" />
          ).
        </li>
      </ul>
      <ClassSectionTitle title="Gráfico de uma Função do Segundo Grau" />
      As funções do segundo grau são descritas graficamente por <b>parábolas</b>
      .<p />
      Observe os exemplos de gráficos de funções do segundo grau:
      <p />
      a) <Eq s="f(x)=x^2" />
      <p />
      <ClassImage
        src="/img/classes/x-2.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      b) <Eq s="g(x)=-3x^2+8x" />
      <p />
      <ClassImage
        src="/img/classes/m3x2m8x.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      c) <Eq s="h(x)=2x^2-20" />
      <p />
      <ClassImage
        src="/img/classes/2x2m20.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      d) <Eq s="i(x)=-x^2-18x-81" />
      <p />
      <ClassImage
        src="/img/classes/mx2m18xm81.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <ClassSectionTitle title="Coeficientes" />
      Os coeficientes <Eq s="a" /> e <Eq s="c" /> são os que mais influenciam no
      comportamento gráfico de uma função de segundo grau.
      <p />
      O coeficiente <Eq s="a" /> determina a concavidade da parábola:
      <ul>
        <li>
          {" "}
          Se <Eq s="a>0" />, a concavidade é voltada para cima (semelhante a{" "}
          <Eq s="\cup" />, como exemplificado nos itens <Eq s="a" /> e{" "}
          <Eq s="c" /> da seção anterior).{" "}
        </li>
        <li>
          {" "}
          Se <Eq s="a<0" />, a concavidade é voltada para baixo (semelhante a{" "}
          <Eq s="\cap" />, como exemplificado nos itens <Eq s="b" /> e{" "}
          <Eq s="d" /> da seção anterior).{" "}
        </li>
      </ul>
      O coeficiente <Eq s="c" />, também chamado de termo independente, indica
      onde a parábola ``cortará'' o eixo vertical (observe, por exemplo, o item{" "}
      <Eq s="c" /> da seção anterior, no qual o coeficiente <Eq s="c=-20" />
      ). Isso ocorre pois, quando <Eq s="x=0" />, <Eq s="y=c" /> para qualquer
      função do segundo grau (que possui estrutura geral{" "}
      <Eq s="f(x)=a.x^2+b.x+c" />
      ). Em símbolos matemáticos, <Eq s="f(0)=c" />.
      <ClassSectionTitle title="Fórmula de Bhaskara: encontrando zeros de uma Função do Segundo Grau" />
      Como vimos no caso das funções de primeiro grau, o zero de uma função é o
      valor de <Eq s="x" /> para o qual a função vale zero, ou seja, buscamos{" "}
      <Eq s="x" /> tal que <Eq s="f(x)=0" />.<p />
      Porém, para as funções de segundo grau, essa tarefa é mais complexa.
      Perceba que nosso objetivo é isolar o valor de <Eq s="x" /> na expressão{" "}
      <Eq s="" />
      a.x^2+b.x+c=0
      <Eq s="" />
      Para realizar este processo, utilizaremos uma ferramenta matemática
      conhecida como <b>Fórmula de Bhaskara</b>:
      <p />
      <Eq block s="x = \frac{-b \pm \sqrt{b^2 - 4.a.c}}{2.a}" />
      <p />
      <b>Observação:</b> O radicando <Eq s="b^2 - 4.a.c" /> é chamado de{" "}
      <b>discriminante</b> e indicado pela letra grega delta maiúscula{" "}
      <Eq s="\Delta" />. Ao contrário das funções de primeiro grau, note que, na
      busca de zeros de função de segundo grau, a Fórmula de Bhaskara gera dois
      valores para <Eq s="x" />:
      <p />
      <Eq s="x_1 =  \frac{-b + \sqrt{b^2 - 4.a.c}}{2.a} \hspace{.4cm} \text{e} \hspace{.4cm} x_2 =  \frac{-b - \sqrt{b^2 - 4.a.c}}{2.a}" />
      <p />
      Isso ocorre porque uma função de segundo grau pode possuir <b>até</b> dois
      zeros, ou seja, podem existir até dois valores de <Eq s="x" /> para os
      quais <Eq s="f(x)=0" />. No entanto, pode acontecer de existir somente um
      zero ou, ainda, de não existir nenhum.
      <p />
      Existe uma relação entre o discriminante de uma função do segundo grau e o
      número de zeros que ela possui:
      <ul>
        <li>
          {" "}
          Se <Eq s="\Delta=0" />, temos <Eq s="\sqrt{b^2 - 4.a.c}=\sqrt{0}=0" />
          . Consequentemente, <Eq s="x_1 = x_2" />, ou seja, a função de segundo
          grau terá somente um zero. Em termos gráficos, isso significa que a
          função cortará o eixo <Eq s="x" /> (horizontal) em um único ponto.{" "}
        </li>
        <li>
          {" "}
          Se <Eq s="\Delta > 0" />, teremos valores distintos para{" "}
          <Eq s="x_1" /> e <Eq s="x_2" />, ou seja, a função de segundo grau
          terá dois zeros. Em termos gráficos, isso significa que a função
          cortará o eixo <Eq s="x" /> (horizontal) em dois pontos.{" "}
        </li>
        <li>
          {" "}
          Se <Eq s="\Delta < 0" />, teremos um radicando negativo. No entanto,
          não existem números reais que são raízes de valores negativos.
          Consequentemente, a função de segundo grau não terá zeros. Em termos
          gráficos, isso significa que a função não cortá o eixo <Eq s="x" />{" "}
          (horizontal).{" "}
        </li>
      </ul>
      Vejamos alguns exemplos do comportamento gráfico a partir da análise do
      discriminante:
      <p />
      a) <Eq s="f(x)=x^2" /> (<Eq s="\Delta=0" />)<p />
      <ClassImage
        src="/img/classes/delta-0.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      b) <Eq s="g(x)=-x^2+4" /> (<Eq s="\Delta > 0" />)<p />
      <ClassImage
        src="/img/classes/deltapos.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      c) <Eq s="h(x)=2x^2 +x+4" /> (<Eq s="\Delta < 0" />)<p />
      <ClassImage
        src="/img/classes/deltaneg.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
    </ClassContainer>
  );
}

export default Content;
