import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Em um determinado ano, os computadores da receita federal de um país
      identificaram como inconsistentes 20% das declarações de imposto de renda
      que lhe foram encaminhadas. Uma declaração é classificada como
      inconsistente quando apresenta algum tipo de erro ou conflito nas
      informações prestadas.
      <p />
      Essas declarações consideradas inconsistentes foram analisadas pelos
      auditores, que constataram que <b>FI</b>% delas eram fraudulentas.
      Constatou-se ainda que, dentre as declarações que não apresentaram
      inconsistências, <b>FC</b>% eram fraudulentas.
      <p />
      Neste problema você deve criar um programa que receba como entrada a
      porcentagem de declarações consideradas consistentes que eram fraudulentas
      (<b>FC</b>) e a porcentagem de declarações inconsistentes que eram
      fraudulentas (<b>FI</b>) e que emita como saída a a probabilidade de,
      nesse ano, a declaração de um contribuinte ser considerada inconsistente,
      dado que ela era fraudulenta.
      <h3>Entrada</h3>
      Dois números inteiros, <b>FC</b>, <b>FI</b> com a porcentagem de
      declarações fraudulentas consistentes e inconsistentes.
      <h3>Saída</h3>
      Um número real contendo a probabilidade da declaração de um contribuinte
      ser considerada inconsistente, dado que ela era fraudulenta.
      <p />
    </div>
  );
}
