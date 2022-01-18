import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Uma empresa de chocolates consultou o gerente de produção e verificou que
      existem cinco tipos diferentes de barras de chocolate que podem ser
      produzidas, vamos denominá-las: <b>barraI</b>, <b>barraII</b>,{" "}
      <b>barraIII</b>,<b>barraIV</b> e <b>barraV</b>.
      <p />
      Analisando as tendências do mercado, que incluem a quantidade vendida e a
      procura pelos consumidores, o gerente de vendas da empresa verificou que o
      lucro L com a venda de barras de chocolate é expresso pela função:
      <p />
      <Eq s="L(x) = -x^2 + 14x - 45" block />
      Onde <Eq s="x" /> representa o preço da barra de chocolate. A empresa irá
      investir na fabricação da barra de chocolate cujo preço praticado no
      mercado renderá o maior lucro.
      <p />
      Neste problema você deve criar um programa que receba como entrada os
      preços das 5 barras:
      <b>barraI</b>, <b>barraII</b>, <b>barraIII</b>, <b>barraIV</b> e{" "}
      <b>barraV</b>, e produza como saída uma cadeia de caracteres contendo a
      barra que dá o maior lucro.
      <p />
      <h3>Entradas</h3>
      Cinco números contendo os preços das barras de chocolate:
      <b>barraI</b>, <b>barraII</b>, <b>barraIII</b>,<b>barraIV</b> e{" "}
      <b>barraV</b>.
      <p />
      <h3>Saída</h3>
      Uma string contendo o nome da barra de chocolate que dá mais lucro.
      <p />
    </div>
  );
}
