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
      O estudo da matemática financeira é essencial para termos as ferramentas
      capazes de gerir nosso próprio dinheiro. O entendimento dos juros simples
      e compostos e de como eles podem trabalhar contra nós ou ao nosso favor é
      a chave para o controle das próprias finanças.
      <ClassImage
        src="/img/finances.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Juros compostos" />
      Muito mais presentes, especialmente em investimentos no mercado
      financeiro, os <b>juros compostos</b> também são conhecidos como "juros
      sobre juros". Isso se deve ao fato de que, no regime de juros compostos,
      os juros obtidos em cada período decorrem do montante do período anterior,
      como uma nova aplicação.
      <p />
      Consequentemente, a partir do segundo período, os juros resultantes de uma
      operação sob juros compostos são maiores do que se a mesma operação
      estivesse sob juros simples (para observar um exemplo disso, compare os
      exercícios 1 e 4 desta seção. Quanto maior a taxa da aplicação, maior as
      diferença entre juros simples e compostos).
      <p />
      A expressão utilizada para o estudo dos juros compostos é <p />
      <Eq block s="M=C \cdot(1+i)^t" />
      <p />
      em que:
      <ul>
        <li>
          <Eq s="C" /> corresponde ao capital inicial, ou seja, o dinheiro que
          foi inicialmente investido;{" "}
        </li>
        <li>
          <Eq s="i" /> é a taxa de juros associada à operação, que é
          representada por uma <b>porcentagem</b> e pode ser a.a. (ao ano), a.m.
          (ao mês), a.t. (ao trimestre), etc;{" "}
        </li>
        <li>
          {" "}
          <Eq s="t" /> indica o tempo da operação, que pode ser anos, meses,
          trimestres, etc. É essencial que o tempo <Eq s="t" /> seja o mesmo do
          período indicado por <Eq s="i" />;{" "}
        </li>
        <li>
          {" "}
          <Eq s="M" /> é o montante, ou seja, a soma entre o capital inicial e
          os juros (<Eq s="M=C+J" />
          ). Lembrando que <Eq s="J" /> indica os juros obtidos até o tempo{" "}
          <Eq s="t" />. <p />
        </li>
      </ul>
      <p />
      Considere os exemplos:
      <ul>
        <li>
          <span>1.</span> Encontre o montante obtido após um aplicação à juros
          compostos de um capital inicial R$ 5.000,00 por 18 meses sob uma taxa
          de 1,5% a.m. (ao mês). Pelo enunciado temos:
          <p />
          <Eq s="C=R\$5.000,00" /> <p />
          <Eq s="i=1,5\%" /> a.m. (ao mês) <p />
          <Eq s="t=18" /> meses <p />
          <p />
          Como <Eq s="i" /> e <Eq s="t" /> estão alinhados, ou seja, ambos em
          meses, podemos aplicar diretamente a fórmula de juros compostos:
          <p />
          <Eq s="M =5.000 \cdot \left(1+ \frac{1,5}{100}\right)^{18} \approx 6.536,70 " />
          <p />
          Logo, o montante obtido neste período é de aproximadamente{" "}
          R$ 6.536,70$. 
          <p/>
        </li>
        <li>
          <span>2.</span> Suponha que Carla realizou um empréstimo de
          R\$10.000,00 no regime de juros compostos, sob uma taxa de 1% a.m.
          (ao mês), que será pago em 2 anos. Quanto Carla pagará de juros?
          <p />
          Considerando que <Eq s="M=C+J" /> e, para juros compostos,{" "}
          <Eq s="M=C \cdot(1+i)^t" />, podemos utilizar as duas relações para
          encontrar o valor de <Eq s="J" />. Pelo enunciado,
          <p />
          <Eq s="C=R$ 10.000,00" /> <p />
          <Eq s="i=1\%" /> a.m. (ao mês) <p />
          <Eq s="t=2" /> anos <p />
          <Eq s="=24" /> meses <p />
          <p />
          Utilizando a fórmula de juros compostos:
          <p />
          <Eq s="M =10.000 \cdot \left(1+\frac{1}{100}\right)^{24} \approx 12.697.35 " />
          <p />
          Como <Eq s="M=C+J" />, temos que <p />
          <p />
          <Eq s="12.697.35 =10.000 + J" />
          <p />
          <Eq s="J = 2.697,35" />
          <p />
          Ou seja, nesses 24 meses Carla pagará os R$ 10.000,00 correspondentes
          ao empréstimo mais um total de R$ 2.697,35 de juros.
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
