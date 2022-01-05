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

function Content() {
  return (
    <ClassContainer>
      Nesta seção, vamos incrementar o comando <b>if</b> adicionando seu
      complemento, o <b>else</b>. Isto nos permite definir dois blocos de
      código, um que deve ser executado quando nossa expressão lógica é
      verdadeira e outro para quando é falsa.
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
      <p />
      <ClassSectionTitle title="A estrutura de Controle If com o Else" />A
      palavra <b>else</b> na língua inglesa pode ser traduzida como a conjunção
      <b>Senão</b>. Na programação, utilizamos essa palavra para criar um bloco
      de código que deve ser executado caso nossa expressão lógica seja avaliada
      com falsa. O <b>else</b> é opcional, porém só aparece quando utilizado a
      em conjunto com estrutura de controle <b>if</b>. Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("numero é maior que 10");\n} else {\n    output("numero é menor ou igual a 10"); \n}`}
        input={`{\n    "numero":11\n}`}
        height="140px"
      />
      <p />
      Como sempre, aconselhamos você a fazer algumas alterações no código e nas
      entradas para se familiarizar com o comportamento. No exemplo temos o já
      conhecido <b>if</b> seguido de uma expressão lógica.
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
        height="160px"
      />
      <p />
    </ClassContainer>
  );
}

export default Content;
