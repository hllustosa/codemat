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
      Vamos mostrar, nesta seção, uma arranjo de código que pode ser utilizado
      para criar um sequência de <b>ifs</b> funcionando juntos para permitir a
      execução de um bloco de código específico enquanto os outros são
      ignorados.
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
      <ClassSectionTitle title="Ifs e Elses Encadeados" />
      <p />A linguagem Javascript permite que um novo <b>if</b> seja definido
      após um <b>else</b>. Dessa forma é possível encadear <b>ifs</b> e{" "}
      <b>elses</b> de maneira a criar um conjunto de blocos de código em que
      apenas um dos blocos será executado enquanto os outros serão ignorados.
      Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero == 1) {\n    output("numero é igual a 1");\n} else if (numero == 2) {\n    output("numero é menor ou igual a 2");\n} else if (numero == 3) {\n    output("numero é menor ou igual a 3");\n} else {\n    output("numero é diferente de 1, 2 e 3");\n}`}
        input={`{\n    "numero":1\n}`}
        height="210px"
      />
      <p />
      Mais uma vez vamos sugerir que você teste o código e experimente brincar
      com ele para se familiarizar. Neste exemplo, vemos que após o <b>
        else
      </b>{" "}
      do primeiro <b>if</b>, temos um novo <b>if</b>. Esse <b>if</b>
      tem um outro <b>else</b> associado. Isto se repete até chegarmos a um
      <b>else</b> no final da cadeia.
      <p />
      Vamos entender o que o ocorre nesse código de exemplo. Primeiro temos o
      nosso <b>if</b> sendo avaliado. Caso o valor contido na variável{" "}
      <b>numero</b>{" "}
      seja igual a 1, o primeiro bloco de código abaixo do <b>if</b> é executado
      e o o resto da cadeia é ignorado. Devemos lembrar que quando o <b>if</b> é
      executado, o bloco associado ao seu <b>else</b> equivalente é ignorado.
      Neste caso o programa terá como saída a string: "numero é igual a 1".
      <p />
      Supondo que o valor de numero seja diferente de 1, isto significa que o
      primeiro bloco <b>else</b> será executado. Dentro desse bloco temos um
      novo <b>if</b>, com uma outra expressão lógica. A partir daí temos
      novamente duas possibilidades. Se a expressão lógica for avaliada como
      verdadeira, o bloco e código adjacente será executado e o programa terá
      como saída a string: "numero é igual a 2". O resto da cadeia será ignorada
      e o programa irá terminar.
      <p />
      Se o valor da cadeia for diferente de 2, o programa continua. Ao final da
      cadeia de <b>ifs</b> e <b>elses</b>, temos um <b>else</b> para o qual não
      existe outra condição. Isso significa que caso todas as expressões lógicas
      sejam avaliadas como falsas, o bloco relacionado ao último <b>else</b> é
      executado. Neste caso, o programa irá emitir como saída a string: "numero
      difere de 1, 2 e 3".
      <p />O <b>else</b> ao final será executado apenas se nenhuma das outras
      expressões lógicas forem consideradas verdadeiras. Esse <b>else</b> não é
      obrigatório (nenhum <b>else</b> é) e naturalmente só pode existir como
      parte um <b>if</b>.
      <p />
    </ClassContainer>
  );
}

export default Content;
