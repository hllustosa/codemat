export default function Exercise() {
  return (
    <div>
      Com o objetivo de contratar uma empresa responsável pelo serviço de
      atendimento ao público, os executivos de uma agência bancária realizaram
      uma pesquisa de satisfação envolvendo cinco empresas especializadas nesse
      segmento. Os procedimentos analisados (com pesos que medem sua importância
      para a agência) e as respectivas notas que cada empresa recebeu estão
      organizados no quadro.
      <p />
      A agência bancária contratará a empresa com a maior média ponderada das
      notas obtidas nos procedimentos analisados. Cada empresa foi avaliada em
      três critérios:
      <p />
      <ol>
        <li>Rapidez no antendimento: peso 3</li>
        <li>Clareza na informação: peso 5</li>
        <li>Cortesia no antedimento: peso 2</li>
      </ol>
      <p />
      Cinco empresas foram avaliadas, elas são identificadas pelas letras: X, Y,
      Z, W e T. Cada uma delas tem uma nota (um número inteiro) em cada um dos 3
      critérios apresentados.
      <p />
      Neste problema, você deve criar um programa que tenha cinco entradas:{" "}
      <b>X</b>, <b>Y</b>, <b>Z</b>, <b>W</b> e <b>T</b>. Cada uma delas é uma
      lista contendo as três notas que a empresa obteve na avaliação. A nota na
      posição 0 das listas é referente ao critério Rapidez no antendimento. A
      nota na posição 1 é referente ao critério Clareza na informação na
      informação. A nota na posição 2 é referente ao critério Cortesia no
      antedimento.
      <p />
      Seu programa deve emitir com saída o nome da empresa que teve a melhor
      avaliação, isto é, a melhor média ponderada.
      <h3>Entradas</h3>
      Cinco listas <b>X</b>, <b>Y</b>, <b>Z</b>, <b>W</b> e <b>T</b> contendo
      cada uma 3 notas nos critérios avaliados.
      <h3>Saída</h3>
      Uma cadeia de caracteres contendo o nome da empresa com a melhor média
      ponderada. <p />
    </div>
  );
}
