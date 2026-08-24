import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Para um docente estrangeiro trabalhar no Brasil, ele necessita validar o
      seu diploma junto ao Ministério da Educação. Num determinado ano, somente
      para estrangeiros que trabalharão em universidades dos estados de São
      Paulo e Rio de Janeiro, foram validados os diplomas de 402 docentes
      estrangeiros.
      <p />
      Desses 402, uma porção desses profissionais foram trabalhar em uma
      universidade em São Paulo. Esses profissionais trabalhando em São Paulo
      vieram dos seguintes países:
      <p />
      <ul>
        <li>
          Um número de <b>A</b> professores da Argentina
        </li>
        <li>
          Um número de <b>E</b> professores da Espanha
        </li>
        <li>
          Um número de <b>C</b> professores de Cuba
        </li>
        <li>
          Um número de <b>P</b> professores da Portugal
        </li>
        <li>
          Um número de <b>V</b> professores da Venezuela
        </li>
      </ul>
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número de profissionais que trabalham em São Paulo advindos dos cinco
      países, e calcule a probabilidade de se escolher, aleatoriamente, um
      docente espanhol, sabendo-se que ele trabalha em uma universidade do
      estado de São Paulo.
      <p />
      <h3>Entrada</h3>
      Cinco números, <b>A</b>, <b>E</b>, <b>C</b>, <b>P</b> e <b>V</b>. Contendo
      o número de profissionais advindos de cada país que trabalham em São
      Paulo.
      <h3>Saída</h3>
      Um número real contendo a probabilidade de se escolher, aleatoriamente, um
      docente espanhol, sabendo-se que ele trabalha em uma universidade do
      estado de São Paulo.
      <p />
    </div>
  );
}
