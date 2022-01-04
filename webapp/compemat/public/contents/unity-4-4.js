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
} from "../../components/ClassContent";


function Content() {
  return (
    <ClassContainer>
      <ClassImage
        src="/img/programming.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      Em alguns exercícios, será necessário realizar a entrada e saída de
      variáveis que contém listas. Tanto o comando input como output podem
      produzir ou emitir uma lista de valores respectivamente.
      <p />
      Vamos dar uma olhada nesse exemplo de código:
      <p />
      <ClassCodeEditor
        code={`var numeros = input("numeros");\nvar dobros = [];\n\nfor(var i = 0; i < numeros.length; i++){\n    var dobro = numeros[i] * 2;\n    dobros.push(dobro);\n}\n\noutput(dobros);`}
        input={`{\n  "numeros": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n}`}
        height="175px"
      />
      <p />
      Neste exemplo, temos como entrada uma lista de números salva em uma
      variável de mesmo nome. Também criamos uma lista vazia chamada de dobros.
      Após a leitura e declaração das listas, nós iteramos pela lista numeros, e
      para cada elemento encontrado nela é multiplicado por 2 e tem seu valor
      armazenado na variável dobro e em seguida inserido na lista dobros.
      <p />
      No final, realizamos a saída da lista como todo, ao invés de cada
      elemento. Vamos ver uma única saída contendo uma lista com o dobro de cada
      elemento da nossa lista de entrada:
      <p />
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20
      <p />
      Em alguns exercícios será necessário realizar a leitura de listas e
      produzir listas como saída. Nesses exercícios em particular, esse detalhe
      estará especificado no enunciado.
      <p />
    </ClassContainer>
  );
}

export default Content;
