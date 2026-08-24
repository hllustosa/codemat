import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Uma pessoa comprou um aparelho sem fio para transmitir músicas a partir do
      seu computador para o rádio de seu quarto. Esse aparelho possui <b>n</b>
      chaves seletoras e cada uma pode estar na posição 0 ou 1. Cada escolha das
      posições dessas chaves corresponde a uma frequência diferente de
      transmissão.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número de chaves seletoras <b>n</b>, e produza como saída a quantidade de
      frequências diferentes que esse aparelho pode transmitir.
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> (<Eq s="4 \leq n \leq 20" />) chaves seletoras.
      <p />
      <h3>Saída</h3>
      O número contendo a quantidade de frequências diferentes que esse aparelho
      pode transmitir.
      <p />
    </div>
  );
}
