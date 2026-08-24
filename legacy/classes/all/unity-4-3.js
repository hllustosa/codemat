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
} from "@codemat/lesson-kit";
import { ProblemsList } from "@codemat/lesson-kit";

function Content() {
  return (
    <ClassContainer>
      <ClassSectionTitle title="Recursos" />
      <ul>
        <li>
          David Griffiths - Use a cabeça! Programação - Alta Books; 1ª edição
          2009 - 8576084732.
        </li>
        <li>
          Eric Freeman - Use a cabeça! Programação JavaScript - Alta Books; 1ª
          edição 2016 - 8576089904.
        </li>
        <li>
          Gilvan Vilarim - Algoritmos. Programação Para Iniciantes: Ciência
          Moderna; 3ª edição 2017 - 8539908352.
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Exercícios" />
      <ProblemsList unity="4" />
    </ClassContainer>
  );
}

export default Content;
