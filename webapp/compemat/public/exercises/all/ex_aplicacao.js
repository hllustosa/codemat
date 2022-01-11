import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um investidor deseja aplicar R$ 10.000,00 durante um mês em um dos fundos
      de investimento de um banco. O agente de investimentos desse banco
      apresentou dois tipos de aplicações financeiras: a aplicação Básica e a
      aplicação Pessoal.
      <p />A aplicação Básica tem uma taxa <b>ib</b>% mensal e além disso uma
      taxa de administração de <b>ab</b> reais por mês. A aplicação Pessoal tem
      uma taxa mensal de <b>ip</b>% e uma taxa de administração mensal de{" "}
      <b>ab</b>% sobre o valor do rendimento.
      <p />
      Neste problema, você deve criar um programa que receba como entrada as
      taxas de rendimento e as taxas de administração das aplicações Básica e
      Pessoal e deve emitir duas saídas. A primeira saída deve ser um cadeia de
      caracteres: "basica" ou "pessoal" indicando qual o investimento produziu o
      maior rendimento líquido. A segunda saída deve ser um número contendo o
      rendimento líquido da aplicação.
      <p />
      <h3>Entradas</h3>
      Quatro números, <b>ib</b>, <b>ab</b>, <b>ip</b> e <b>ap</b> contendo a
      taxa de rendimento e de administração das aplicações Básica e Pessoal
      respectivamente.
      <p />
      <h3>Saída</h3>
      Duas saídas, primeiro uma cadeia de caracteres: "basica" ou "pessoal"
      indicando o melhor investimento, e em seguida um número contendo o
      rendimento líquido produzido pela aplicação.
      <p />
    </div>
  );
}
