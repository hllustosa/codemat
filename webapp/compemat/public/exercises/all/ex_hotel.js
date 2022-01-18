import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um hotel de <b>n</b> andares está sendo construído. Cada andar terá 100
      quartos. Os quartos serão numerados com três dígitos a00 a a99 (onde a é o
      número do andar) e cada um terá seu número afixado à porta. Cada número
      será composto por peças individuais, cada uma simbolizando um único
      algarismo.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número de andares <b>n</b>, e produza como saída a quantidade mínima de
      peças, simbolizando o algarismo 2, necessárias para identificar o número
      de todos os quartos.
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> (<Eq s="3 \leq n \leq 9" />) contendo a quantidade de
      andares
      <p />
      <h3>Saída</h3>
      O número peças, simbolizando o algarismo 2, necessárias para identificar o
      número de todos os quartos
      <p />
    </div>
  );
}
