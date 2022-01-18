import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Uma pessoa se interessou em adquirir um produto anunciado em uma loja.
      Negociou com o gerente e conseguiu comprá-lo a uma taxa de juros compostos
      de 1% ao mês. O primeiro pagamento será um mês após a aquisição do
      produto, e no valor de <b>p1</b> reais. O segundo pagamento será efetuado
      um mês após o primeiro, e terá o valor de <b>p2</b> reais . Para
      concretizar a compra, o gerente emitirá uma nota fiscal com o valor do
      produto à vista negociado com o cliente, correspondendo ao financiamento
      aprovado.
      <p />
      Neste problema, você deve criar um programa que receba como entrada os
      valores pagos nas duas prestações <b>p1</b> e <b>p2</b> e que produza como
      saída o valor real do produto que deverá constar na nota fiscal.
      <p />
      Dica: Utilize a função <b>Math.pow(base, expoente)</b> para o cálculo de potências.
      <p />
      <h3>Entradas</h3>
      Dois números, <b>p1</b> e <b>p2</b>, sendo os valores das duas prestações
      pagas pelo produto.
      <p />
      <h3>Saída</h3>
      Um número contendo o valor real do produto que deverá constar na nota fiscal.
      <p />
    </div>
  );
}
