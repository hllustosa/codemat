import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um jovem investidor precisa escolher qual investimento lhe trará maior
      retorno financeiro em uma aplicação de R$ 500,00. Para isso, pesquisa o
      rendimento e o imposto a ser pago em dois investimentos: poupança e CDB
      (certificado de depósito bancário).
      <p />A poupança oferece um rendimento mensal <b>r_p</b> e é isenta de
      imposto de renda. O CDB, por outro lado, oferece um rendimento mensal{" "}
      <b>r_cdb</b>, porém o imposto de renda a ser pago deve ser de 4% sobre o
      ganho.
      <p />
      Neste problema, você deve criar um programa que receba como entrada as
      taxas de rendimento da poupança e do CDB e que prduza duas saídas. A
      primeira saída deve ser um cadeia de caracteres: "poupanca" ou "cdb"
      indicando qual o investimento produziu o maior rendimento líquido. A
      segunda saída deve ser um número contendo o rendimento líquido do
      investimento mais vantajoso.
      <p />
      <h3>Entradas</h3>
      Dois números, <b>r_p</b>, <b>r_cdb</b> contendo a taxa de rendimento da
      poupanca e do CDB respectivamente.
      <p />
      <h3>Saída</h3>
      Duas saídas, primeiro uma cadeia de caracteres: "poupanca" ou "cdb"
      indicando o melhor investimento, e em seguida um número contendo o
      rendimento líquido produzido pelo investimento mais vantajoso.
      <p />
    </div>
  );
}
