import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um casal realiza um financiamento imobiliário de R$ 180 000,00, a ser pago
      em 360 prestações mensais, com taxa de juros efetiva de 1% ao mês. A
      primeira prestação é paga um mês após a liberação dos recursos e o valor
      da prestação mensal é de R$ 500,00 mais juro de 1% sobre o saldo devedor
      (valor devido antes do pagamento). Observe que, a cada pagamento, o saldo
      devedor se reduz em R$ 500,00 e considere que não há prestação em atraso.
      Neste contexto, deseja-se saber quanto o casal irá pagar na prestação
      número <b>n</b>.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número da prestação <b>n</b> e produza como saída, quanto o casal irá
      pagar nessa prestação.
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> indicando o número da prestação.
      <p />
      <h3>Saída</h3>
      Um número indicando quanto será pago, em reais, na prestação <b>n</b>.
      <p />
    </div>
  );
}
