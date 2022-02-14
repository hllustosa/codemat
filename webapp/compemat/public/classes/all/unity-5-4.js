import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSectionTitle,
  ClassImage,
  ClassToolTip,
  ClassCodeEditor,
} from "../../../components/ClassContent";
import ProblemsList from "../../../components/ProblemsList";

function Content() {
  return (
    <ClassContainer>
      <ClassSectionTitle title="Recursos" />
      <ul>
        <li>
          CARMO, Manfredo Perdigão do; MORGADO, Augusto Cesar; WAGNER, Eduardo.Trigonometria Números Complexos. 3ª edição. Rio de Janeiro: SBM, 2005. 164p. (Coleção Professor de Matemática)
        </li>
        <li>
          LIMA, Elon Lages.et al. A Matemática do Ensino Médio.  11ª edição.  Rio de Janeiro:SBM, 2016. 250p. (Coleção Professor de Matemática).
        </li>
        <li>
        SBEM. Sociedade Brasileira de Educação Matemática, 2022.  Página inicial. Disponível em: <a href="http://www.sbembrasil.org.br/sbembrasil/">http://www.sbembrasil.org.br/sbembrasil/ </a>. Acesso em: 10 de fevereiro de 2022.
        </li>
      </ul>
    <p />
      <ClassSectionTitle title="Exercícios" />
      <ProblemsList unity="5" />
    </ClassContainer>
  );
}

export default Content;
