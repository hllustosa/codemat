import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Durante suas férias, um grupo de <b>n</b> amigos (sendo <b>n</b> um número
      par), dos quais dois são canhotos, decidem realizar um torneio de vôlei de
      praia. Eles precisam formar duplas para a realização do torneio. Nenhuma
      dupla pode ser formada por dois jogadores canhotos.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número de pessoas <b>n</b> no grupo de amigos, e que produza como saída um
      número que indique de quantas maneiras diferentes podem ser formadas essas
      quatro duplas.
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> (<Eq s="4 \leq n \leq 8" />) de pessoas no grupo de
      amigos.
      <p />
      <h3>Saída</h3>
      Um número que indique de quantas maneiras diferentes podem ser formadas
      essas quatro duplas.
      <p />
    </div>
  );
}
