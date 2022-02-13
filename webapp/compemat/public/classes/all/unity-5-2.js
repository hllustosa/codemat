import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSubSectionTitle,
  Eq,
  ClassImage,
  ClassToolTip,
  ClassCodeEditor,
  ClassSectionTitle,
} from "../../../components/ClassContent";

function Content() {
  return (
    <ClassContainer>
      A partir dessa unidade iremos nos dedicar ao estudo da matemática.
      Começaremos fazendo uma revisão dos conceitos mais básicos da aritmética.
      <ClassImage
        src="/img/arithmetic.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Porcentagem" />
      <b>Porcentagem (%)</b> é um conceito matemático que utiliza frações de
      denominador 100 para comparar grandezas. Dessa forma, quando nos deparamos
      com os números 10%, 25% ou 50%, por exemplo, devemos interpretar como{" "}
      <Eq s="\frac{10}{100}" />, <Eq s="\frac{25}{100}" /> e{" "}
      <Eq s="\frac{50}{100}" />, respectivamente.
      <p />
      Vejamos um exemplo de como calcular uma porcentagem sobre certo valor:
      <ol>
        <li>
          {" "}
          Ana herdou 25% de uma herança de R$80.000,00 reais. Quanto Ana
          recebeu?
          <p />
          Na prática, resolver essa questão significa resolver a multiplicação{" "}
          <Eq s="\frac{25}{100}\cdot 80000" />.
          <p />
          <Eq
            block
            s="\text{25% de 80000} = \frac{25}{100}\cdot 80000 = \frac{25}{100}\cdot \frac{80000}{1} = \frac{25\cdot80000}{100\cdot1} = \frac{2000000}{100} = 20000"
          />
          <p />
          Portanto, Ana recebeu R$20.000,00 reais.
        </li>
      </ol>
      <ClassSectionTitle title="Acréscimo e Desconto" />
      No comércio, é frequente o uso da porcentagem para estipular novos preços
      às mercadorias. Se o valor de um artigo aumentou, dizemos que houve{" "}
      <b>acréscimo</b>; se diminuiu, que houve <b>desconto</b>. Observe os
      exemplos:
      <ol>
        <li>
          {" "}
          Um produto de R$300 reais sofreu um acréscimo de 50%. Qual o valor
          atual desse produto?
          <Eq s="300 + (\text{50% de 300}) = 300 + (150)= 450" />{" "}
        </li>
        O produto passou a custar R$450,00 reais.
        <li>
          {" "}
          Um produto de R$90 reais sofreu um desconto de 10%. Qual o valor atual
          desse produto?
          <Eq s="90 - (\text{10% de 90)} = 90 - 9 = 81" /> <br /> O produto
          passou a custar R$81,00 reais.
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
