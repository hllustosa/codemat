import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Um corredor estipulou um plano de treinamento diário, correndo 3
      quilômetros no primeiro dia e aumentando <b>m</b> metros por dia, a partir
      do segundo. Contudo, seu médico cardiologista autorizou essa atividade até
      que o corredor atingisse, no máximo, <b>d</b> km de corrida em um mesmo
      dia de treino.
      <p />
      Deseja-se saber se, caso o atleta cumpra a recomendação médica e pratique
      o treinamento estipulado corretamente em dias consecutivos, em quantos
      dias ele conseguirá atingir o limite autorizado pelo médico seguindo seu
      plano de treino.
      <p />
      Neste problema, você deve produzir um programa que receba como entrada os
      valores <b>m</b> e <b>d</b>, e o programa deve produzir como saída um
      número contendo o número de dias que irá levar para que o corredor cumpra
      seu plano de treino.
      <h3>Entradas</h3>
      Dois números <b>m</b>, <b>d</b> contendo a distância em metros
      incrementada ao treino diariamente e o número máximo de km autorizado pelo
      médico. <p />
      <h3>Saída</h3>
      Um número contendo o número de dias que irá levar para que o corredor
      cumpra seu plano de treino.
      <p />
    </div>
  );
}
