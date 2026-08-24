export default function Exercise() {
  return (
    <div>
      Dados estatísticos coletados sobre ataques cardíacos apontam alguns
      fatores que podem influenciar em sua ocorrência. Alguns desses fatores são
      hábitos prejudiciais (fumo e consumo de álcool), doenças cardíacas
      preexistentes e sobrepeso. As regras que estabelecem a probabilidade da
      ocorrência de um ataque cardíaco são: <p />
      <ul>
        {" "}
        <li>
          Caso a pessoa não tenha nenhum dos fatores o risco de ataque cardíaco
          é muito baixo.
        </li>
        <li>
          Caso a pessoa tenha apenas hábitos prejudiciais ou apenas sobrepeso, o
          risco de ataque é baixo.
        </li>
        <li>
          Caso a pessoa tenha hábitos prejudiciais e sobrepeso o risco é médio.
        </li>
        <li>Caso a pessoa tenha apenas doença cardíaca o risco é médio.</li>
        <li>
          Caso a pessoa tenha doença cardíaca e hábitos prejudiciais o risco é
          alto.
        </li>
        <li>Caso a pessoa tenha doença cardíaca e sobrepeso o risco é alto.</li>
        <li>Caso a pessoa tenha os três fatores, o risco é muito alto.</li>
      </ul>{" "}
      <p />
      Neste exercício você deve criar um programa que receba como entrada três
      valores lógicos que indicam a existência ou ausência dos fatores citados e
      produza como saída uma cadeia de caracteres contendo o risco da ocorrência
      de ataque cardíaco conforme as regras estabelecidas. O risco pode ser:
      "muito baixo", "baixo", "medio", "alto" ou "muito alto". As entradas
      lógicas <b>doenca</b>, <b>habitos</b> e <b>sobrepeso</b> têm o valor true
      (verdadeiro) quando o fator está presente e false (falso) caso contrário.
      <h3>Entradas</h3>
      Três valores lógicos <b>doenca</b>, <b>habitos</b> e <b>sobrepeso</b>{" "}
      <p />
      <h3>Saída</h3>
      Uma cadeia de caracteres contendo o risco de ataque cardíaco. <p />
    </div>
  );
}
