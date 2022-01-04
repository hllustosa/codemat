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
import CodeEditor from "../../components/CodeEditor";

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
      Todas as listas que criamos até o momento foram definidas de maneira
      estática com uma inicialização feita com um conjunto de literais. Porém,
      na maioria das vezes nós queremos que nossas listas tenham conteúdo
      inserido dinamicamente.
      <p />
      Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var nomes = [];\nnomes.push("João");\nnomes.push("“Maria”");\nnomes.push("“Ana”");\n\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="105px"
      />
      <p />
      Neste exemplo nós criamos uma lista vazia, apenas atribuindo um conjunto
      vazio de elementos entre colchetes: []. Após isso nós utilizamos a
      sintaxe: [nome da lista].push([elemento]) para inserir dinamicamente os
      elementos. O push funciona como um comando que permite a inserção de um
      elemento no final da lista.
      <p />
      Veja que nesse exemplo nós iremos adicionar dois elementos na lista, mais
      precisamente duas cadeias de caracteres. Quando entrarmos no laço de
      repetição, podemos perceber que os nomes serão impressos na ordem em que
      foram inseridos na lista.
      <p />
      Podemos também remover o último elemento:
      <p />
      <ClassCodeEditor
        code={`var nomes = [];\nnomes.push("João");\nnomes.push("“Maria”");\nnomes.push("“Ana”");\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}\n\noutput("Removendo último elemento");\nnomes.pop();\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="205px"
      />
      <p />
      Neste exemplo de código, após inserirmos os três elementos e imprimimos
      todo o conteúdo da lista, nós usamos o comando pop. Com isso o último
      elemento da lista e removido. Podemos perceber que    ao iterar pela lista
      pela segunda vez, imprimimos apenas dois elementos: João e Maria. A cadeia
      de caracteres Ana foi removida pelo comando pop.
    </ClassContainer>
  );
}

export default Content;
