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
      Vamos mostrar nesta seção uma arranjo de código que pode ser utilizado
      para criar um sequência de comandos if que funcionam juntos para permitir
      a execução exclusiva de uma bloco de código.
      <p />
      If e Elses Encadeados
      <p />
      A linguagem Javascript permite que um novo comando If seja definido após
      um comando Else. Dessa forma é possível encadear If e Elses de maneira a
      criar um conjunto de blocos de código em que apenas um dos blocos será
      executado enquanto os outros serão ignorados. Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero == 1) {\n    output("numero é igual a 1");\n} else if (numero == 2) {\n    output("numero é menor ou igual a 2");\n} else if (numero == 3) {\n    output("numero é menor ou igual a 3");\n} else {\n    output("numero é diferente de 1, 2 e 3");\n}`}
        input={`{\n    "numero":1\n}`}
        height="190px"
      />
      <p />
      Mais uma vez vamos pedir para você testar esse código e experimentar
      brincar com ele para ver o que acontece.  Neste exemplo, vemos que após o
      else do primeiro if, temos um novo comando if. Esse comando if tem um
      outro else associado. Isto se repete até chegarmos a um comando else no
      final da cadeia.
      <p />
      Vamos entender o que o ocorre nesse código de exemplo. Primeiro temos o
      nosso comando if sendo avaliado. Caso o valor contido na variável numero
      seja igual a 1, o primeiro bloco de código abaixo do comando if é
      executado e o o resto da cadeia é ignorado. Devemos lembrar que quando o
      If é executado o bloco associado ao seu else equivalente é ignorado. Neste
      caso o programa terá como saída a cadeia de caracteres: “numero é igual a
      1”.
      <p />
      Supondo que o valor de numero seja diferente de 1, isto significa que o
      bloco else será executado. Neste bloco temos um novo comando if, com outra
      expressão lógica. A partir daí temos novamente duas possibilidades. Se a
      expressão lógica for avaliada como verdadeira, o bloco e código adjacente
      será executado, o programa terá como saída a cadeia de caracteres: “numero
      é igual a 2”. O resto da cadeia será ignorada e o programa irá terminar.
      <p />
      Se o valor da cadeia for diferente de dois, o processo continua. Ao final
      da cadeia de ifs e elses, temos um comando else para o qual não existe
      outra condição. Isso significa que caso todas as expressões lógicas sejam
      avaliadas como falsas, o bloco relacionado ao else é executado. Neste caso
      o programa irá emitir como saída a cadeia de caracteres: numero difere de
      1, 2 e 3.
      <p />
      O else ao final será executado apenas se nenhuma das outras expressões
      lógicas forem consideradas verdadeiras. Esse else não é obrigatório
      (nenhum else é) e naturalmente só pode existir como parte um comando if.
      <p />
    </ClassContainer>
  );
}

export default Content;
