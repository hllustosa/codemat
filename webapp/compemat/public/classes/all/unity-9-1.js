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
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <ClassSectionTitle title="Matemática Financeira" />A{" "}
      <b>Matemática Financeira</b> é o campo que trabalha com conceitos e
      fenômenos monetários, principalmente no que diz respeito ao valor do
      dinheiro ao longo do tempo. Neste contexto, alguns termos são
      corriqueiros:
      <ul>
        <li> Capital: é um sinônimo para dinheiro. </li>
        <li>
          {" "}
          Receita: corresponde à uma arrecadação financeira, como venda de
          mercadorias, prestação de serviços, etc. É o contrário de despesa.{" "}
        </li>
        <li>
          {" "}
          Lucro: consiste no ganho monetário a partir de atividades comerciais
          ou operações financeiras. No primeiro caso, pode ser encontrado pela
          diferença entre o valor de venda e o valor de custo:{" "}
        </li>
        <Eq block s="\text{Lucro} = \text{Venda} - \text{Custo}" />
      </ul>
      <p />
      Vamos estudar alguns exemplos:
      <p />
      <ol>
        <li>
          {" "}
          Uma comerciante vendeu um produto por R$ 650,00. Sabendo que o custo
          de produção foi R$ 510,00, qual foi seu lucro?
          <p />
          <Eq s="\text{Lucro} = R$650,00 - R$ 510,00" /> <p />
          <Eq s="= R\$ 140,00" /> <p />
          <p />
        </li>
        <li>
          {" "}
          Um revendedor recebeu R$ 40,00 por uma mercadoria que lhe custou R$
          60,00. Qual foi seu lucro? Interprete o resultado. <p />
          <Eq s="\text{Lucro} = R$ 40,00 - R$ 60,00" /> <p />
          <Eq s="= R\$ -20,00" /> <p />
          <p />O lucro negativo representa uma situação de prejuízo, uma vez que
          o custo foi maior que o valor de venda.
        </li>
      </ol>
      <p />
      <ClassSectionTitle title="Juros simples" />O conceito de juros é
      fundamental na Matemática Financeira, uma vez que integra praticamente
      todas as operações financeiras. Em um investimento, por exemplo,
      determinada quantia é aplicada ao longo do tempo, gerando juros. Em um
      financiamento, certo valor é emprestado por uma instituição bancária, que
      cobra juros ao longo do tempo. Porém existem diferentes tipos de juros: os
      juros simples e compostos. No regime de <b>juros simples</b>, os juros
      obtidos em cada período (tempo associado à taxa) decorrem da aplicação
      inicial e portanto são constantes em cada período. A expressão utilizada
      no estudo dos juros simples é
      <p />
      <Eq block s="J=C\cdot i \cdot t" />
      <p />
      em que:
      <p />
      <ul>
        <li>
          {" "}
          <Eq s="J" /> indica os juros obtidos até o tempo <Eq s="t" />{" "}
        </li>
        <li>
          {" "}
          <Eq s="C" /> corresponde ao capital inicial, ou seja, o dinheiro que
          foi inicialmente investido;{" "}
        </li>
        <li>
          {" "}
          <Eq s="i" /> é a taxa de juros associada à operação, que é
          representada por uma <b>porcentagem</b> e pode ser a.a. (ao ano), a.m.
          (ao mês), a.t. (ao trimestre), etc;{" "}
        </li>
        <li>
          {" "}
          <Eq s="t" /> indica o tempo da operação, que pode ser anos, meses,
          trimestres, etc. É essencial que o tempo <Eq s="t" /> seja o mesmo do
          período indicado por <Eq s="i" />.
        </li>
      </ul>
      <p />O termo Montante (M) também é presente no estudo de juros simples e
      indica a soma dos juros com o capital inicial. Vejamos alguns exemplos:
      <ol>
        <li>
          {" "}
          Carla realizou um empréstimo de R\$10.000,00 no regime de juros
          simples, sob uma taxa de 1% a.m. (ao mês), que será pago em 2 anos.
          Quanto Carla pagará de juros?
          <p />
          Observe que o tempo <Eq s="t" /> está em anos, enquanto a taxa{" "}
          <Eq s="i" /> está medida em meses. Inicialmente, podemos converter o
          tempo em meses ao considerar que um ano corresponde a 12 meses:
          <p />
          <Eq s="t=2\text{ anos}=24\text{ meses}" />. <p />
          <Eq s="i=1\% \text{ a.m. (ao mes)}" /> <p />
          <Eq s="C=R$ 10.000,00" /> <p />
          <p />
          Logo, utilizando a fórmula de juros simples:
          <p />
          <Eq s="J = 10.000 \cdot \frac{1}{100} \cdot 24" />
          <p />
          <Eq s="=2.400" /> <p />
          <p />
          Ou seja, nesses 24 meses Carla pagará os R$ 10.000,00 correspondentes
          ao empréstimo mais um total de R$ 2.400,00 de juros.
          <p />
        </li>

        <li>
          {" "}
          Certo valor foi aplicado por 3 anos sob uma taxa de 6\% a.a. (ao ano)
          no regime de juros simples. Determine o capital inicial para que o
          montante, após o tempo total da aplicação, seja R\$ 21.240,00.
          <p />
          Como <Eq s="M=C+J" />, temos que <Eq s="21.240 = C + J" />. Utilizando
          a fórmula de juros simples, podemos encontrar o valor de <Eq s="J" />{" "}
          e consequentemente o valor do capital inicial <Eq s="C" />.<p />
          Pelo enunciado,
          <p />
          <Eq s="C=?" /> <p />
          <Eq s="i=6\%" /> a.a. (ao ano) <p />
          <Eq s="t=3" /> anos <p />
          <p />
          Perceba que o período de <Eq s="i" /> e <Eq s="t" /> é o mesmo: anos.
          Ainda, mesmo que sem saber o valor de <Eq s="C" />, podemos deixá-lo
          indicado na fórmula:
          <p />
          <Eq s="J = C \cdot \frac{6}{100} \cdot 3 = 0,18 \cdot C" />
          <p />
          Assim, como <Eq s="M=C+J" />, ou seja, <Eq s="21.240 = C + J" />:{" "}
          <p />
          <Eq s="21.240 = C + J" /> <p />
          <Eq s="21.240 =C + 0,18 \cdot C" /> <p />
          <Eq s="21.240 =1,18 \cdot C" /> <p />
          <Eq s="C =\frac{21.240}{1,18}" />
          <p />
          <Eq s="C=18.000" />
          <p />
          <p />
          Portanto, o capital inicial aplicado foi de R$ 18.000,00.
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
