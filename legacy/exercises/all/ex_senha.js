import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Um procedimento padrão para aumentar a capacidade do número de senhas de
      banco é acrescentar mais caracteres a essa senha. Essa prática, além de
      aumentar as possibilidades de senha, gera um aumento na segurança.
      Deseja-se colocar <b>n</b> novos caracteres na senha de um banco.
      Decidiu-se que esses novos caracteres devem ser vogais e o sistema
      conseguirá diferenciar maiúsculas de minúsculas.
      <p /> Deseja-se saber qual será o impacto que esta adição irá causar no
      número de senhas. Isto é, adicionar <b>n</b> novos caracteres à senha, com
      as restrições especificadas, irá multiplicar o número de senhas possíveis.
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número <b>n</b> de novos caracteres que será adicionado à senha do banco.
      O programa deve produzir como saída um número indicando o fator de
      multiplicação das senhas que essa adição irá causar.
      <p />
      <h3>Entradas</h3>
      Um número <b>n</b> contendo o número de caracteres a ser adicionado à
      senha.
      <p />
      <h3>Saída</h3>
      Um número indicando o fator de multiplicação das senhas que a adição de{" "}
      <b>n</b>
      caracteres irá causar.
      <p />
    </div>
  );
}
