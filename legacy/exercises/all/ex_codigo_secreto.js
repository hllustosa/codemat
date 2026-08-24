import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Alguns modelos de rádios automotivos estão protegidos por um código de
      segurança. Para ativar o sistema de áudio, deve-se digitar o código
      secreto composto por quatro algarismos. No primeiro caso de erro na
      digitação, a pessoa deve esperar 60 segundos para digitar o código
      novamente. O tempo de espera duplica, em relação ao tempo de espera
      anterior, a cada digitação errada.
      <p />
      Suponha que uma pessoa consegua ativar o rádio somente na tentativa número{" "}
      <b>n</b>, sendo de 30 segundos o tempo gasto para digitação do código
      secreto a cada tentativa. Nos casos da digitação incorreta, ela iniciou a
      nova tentativa imediatamente após a liberação do sistema de espera.
      <p />
      Neste problema, você deve produzir um programa que receba um inteiro{" "}
      <b>n</b>
      contendo o número de tentativas necessária para acertar o código secreto.
      O seu programa deve produzir como saída o tempo total em segundos
      requerido para ter acesso ao rádio, considerando o tempo de espera e os
      tempos de digitação.
      <p />
      Dica: Utilize a função <b>Math.pow(base, expoente)</b> para o cálculo de potências. 
      <p />
      <h3>Entradas</h3>
      Um número inteiro <b>n</b> contendo a quantidade de tentativas. <p />
      <h3>Saída</h3>
      Um número contendo o tempo total gasto para se obter acesso ao rádio.
      <p />
    </div>
  );
}
