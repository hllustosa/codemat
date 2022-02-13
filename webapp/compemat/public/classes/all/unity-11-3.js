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
      <ClassSectionTitle title="Arranjo simples" />
      Até então, realizamos agrupamentos de <Eq s="n" /> elementos em grupos com{" "}
      <Eq s="n" /> elementos, ou seja, somente estávamos trocando os elementos
      de lugar. A partir de agora buscamos agrupamentos de <Eq s="n" />{" "}
      elementos em grupos de <Eq s="p" /> elementos. Perceba que assim{" "}
      <Eq s="p < n" />.
      <p />
      Um <b>arranjo simples</b> é um agrupamento de elementos distintos que se
      diferem pela <b>ordem ou natureza (tipo)</b>. Cada grupo é formado por{" "}
      <Eq s="p" /> elementos escolhidos dentre <Eq s="n" /> elementos. Nessa
      situação, a fórmula abaixo indica a quantidade total de arranjos
      possíveis:
      <p />
      <Eq block s="A_{n,p}=\frac{n!}{(n-p)!}" />
      <p />
      <b>Observação</b>: <Eq s="A_{n,p}" /> também pode ser representado como{" "}
      <Eq s="A^n_{p}" /> ou <Eq s="A^p_{n}" />.
      <p />
      Vamos estudar alguns exemplos:
      <p />
      <ul>
        <li>
          {" "}
          Quais são todos os agrupamentos dois a dois com as letras C, K e V?
          <p />
          Observe que <Eq s="n=3" /> (nº de elementos disponíveis) e{" "}
          <Eq s="p=2" /> (quantidade de elementos em cada grupo). Podemos
          utilizar a fórmula ou procurar manualmente pelos agrupamentos. Vejamos
          essas duas abordagens. Pela fórmula, <p />
          <Eq block s="A_{3,2}=\frac{3!}{(3-2)!}=\frac{3.2.1}{1}=6" />
          <p />
          De fato, são 6 agrupamentos buscados: CK, CV, KC, KV, VC, VK
          <p />
        </li>
        <li>
          {" "}
          De quantas formas diferentes é possível organizar cinco pessoas em 2
          assentos? Observe que <Eq s="n=5" /> e <Eq s="p=2" />. Pela fórmula de arranjo
          simples,
          <p />
          <Eq block s="A_{5,2}=\frac{5!}{(5-2)!}=\frac{5.4.3!}{3!}= 20" />
          <p />
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Arranjo com repetição" />
      Um <b>arranjo com repetição</b> é um agrupamento de <Eq s="p" /> elementos
      dentre <Eq s="n" /> que se diferem pela <b>ordem ou natureza (tipo)</b>,
      sendo que há elementos repetidos entre os <Eq s="n" /> possíveis. Exemplos
      comuns de arranjo com repetição são criações de senhas e placas de
      automóveis. Nessa situação, a fórmula abaixo indica a quantidade total de
      arranjos com repetição possíveis:
      <p />
      <Eq block s="Ar_{n,p}=n^p" />
      <ul>
        <li>
          {" "}
          Considere o seguinte exemplo. De quantas maneiras diferentes é possível compor uma senha de 4
          algarismos utilizando somente os números 1,2,3,4 e 5?
          <p />
          Perceba que <Eq s="n=5" /> e <Eq s="p=4" />. 
          <p />
          Assim, <p />
          <Eq block s="Ar_{5,4}=5^4=5.5.5.5=625" />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
