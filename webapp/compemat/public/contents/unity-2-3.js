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
        src="/img/conditional.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      Nesta seção vamos incrementar o comando if adicionando seu complemento, o
      else, que nos permite definir dois blocos de código, um para quando nossa
      expressão lógica é verdadeira e outro para quando é falsa.
      <p />
      <ClassSectionTitle title="A estrutura de Controle If com o Else" />
      A palavra Else na língua inglesa pode ser traduzida como a conjunção
      senão. Na programação, utilizamos essa palavra para criar um bloco de
      código que deve ser executado caso nossa expressão lógica seja avaliada
      com falsa. O Else é opcional, porém só aparece quando utilizamos a
      estrutura de controle if. Vamos ao exemplo:
      <p />
      Clique aqui para testar esse código. Como sempre, aconselho você a ir
      fazendo algumas alterações no código e nas entradas para se familiarizar
      com o comportamento. No exemplo temos o já conhecido comando if seguido de
      uma expressão lógica.
      <p />
      Porém, adicionamos uma nova parte nesse comando. Imediatamente depois do
      bloco de código terminado pelo fechamento das chaves, temos a palavra else
      seguida de um novo bloco de código. Esse bloco de código será executado
      somente se a expressão lógica: numero &gt; 10 for avaliada como falsa.
      <p />
      Os blocos if e else são extremamente comuns na programação e eles garantem
      que apenas um dos dois blocos de código será executado. Não se esqueça que
      após o final do bloco associado ao else, o código é executado de forma não
      condicional. Exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("numero é maior que 10");\n} else {\n    output("numero é menor ou igual a 10"); \n}\noutput("Essa linha é sempre executada ");`}
        input={`{\n    "numero":11\n}`}
        height="190px"
      />
      <p />
    </ClassContainer>
  );
}

export default Content;
