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
        src="/img/loops.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      Vamos aprender a criar laços de repetição, também chamados de estruturas
      de repetição ou loops. Com esta ferramenta, conseguiremos executar um
      mesmo conjunto de instruções múltiplas vezes.
      <p />
      <ClassSectionTitle title="Repetição com While" />
      A palavra While em inglês pode ser traduzida como “Enquanto”. Devemos
      pensar na estrutura while da seguinte forma: Enquanto uma expressão
      verdade for avaliada como verdadeira, um determinado bloco de código deve
      ser executado múltiplas vezes.
      <p />
      Geralmente, a expressão lógica contém variáveis cujos valores são
      alterados no bloco de código que tem sua execução repetida, de maneira
      que, em algum momento os valores das variáveis irão estar em um estado que
      fará com que a expressão lógica seja falsa.
      <p />
      O exemplo mais comum de estrutura while pode ser visto no exemplo de
      código a seguir:
      <p />
      <ClassCodeEditor
        code={`var contadora = 0;\n\nwhile(contadora < 5){\n    output("Essa linha será impressa 5 vezes");\n    contadora = contadora + 1;\n}\noutput("Essa mensagem será impressa só uma vez.");\n`}
        input={`{}`}
        height="175px"
      />
      <p />
      Nesse exemplo temos a palavra reservada while seguida de uma expressão
      lógica. Essa expressão é bem simples e avalia de se o conteúdo da variável
      contadora é menor que 5.
      <p />
      Essa expressão será avaliada múltiplas vezes, na primeira vez o valor da
      variável contadora será 0, pois acabamos de atribuí-lo na linha anterior.
      Desta forma, a expressão lógica será avaliada como verdadeira e como
      consequência o bloco de código definido entre chaves imediatamente após a
      expressão lógica será executado.
      <p />
      Perceba que no bloco de código temos duas linhas, em uma delas fazemos uma
      operação de saída emitindo uma cadeia de caracteres com a mensagem: “Essa
      linha será impressa 5 vezes”. A linha seguinte é a mais interessante. Nela
      fazemos uma operação muito comum na programação, chamada de incremento.
      Perceba que o valor da variável contadora é utilizado na expressão
      aritmética e que o resultado dessa expressão é armazenado também na
      variável contadora.
      <p />
      Na primeira vez que essa linha for executada, veremos que o valor atual da
      variável contadora é 0 e que portando, o resultado de contadora + 1 = 0 +
      1 = 1. Como consequência o valor 1 será armazenado na variável contadora.
      Essa é a última linha do nosso bloco de código no laço de repetição while.
      Nesse momento, a expressão lógica é avaliada novamente, e sendo
      verdadeira, o bloco de código será executado novamente.
      <p />
      No momento em que a expressão for avaliada pela segunda vez o valor da
      variável contadora é igual a 1. A expressão lógica contadora &lt; 5 será
      novamente avaliada como verdadeira e o bloco de código será executado
      novamente. Iremos emitir novamente a mensagem “Essa linha será impressa 5
      vezes.” e variável contadora será incrementada e terá o valor 2.
      <p />
      O processo irá se repetir mais três vezes, de forma que após a quinta
      execução do bloco de código o valor variável contadora será igual a 5.
      Nesse momento a expressão lógica será avaliada mais uma vez e o resultado
      da avaliação será falso. Nesse caso, o bloco de código não será executado,
      o que teremos é a execução da primeira instrução imediatamente posterior
      ao bloco, sendo no caso é a linha que realiza a saída da mensagem “Essa
      mensagem será impressa só uma vez.”. Após isso o programa irá terminar.
      <p />
      Vamos estudar brevemente um novo exemplo:
      <p />
      <ClassCodeEditor
        code={`var limite = input("limite");\nvar contadora = 0;\n\nwhile(contadora < limite){\n    output("Essa linha será impressa "+limite+" vezes");\n    contadora = contadora + 1;\n}\noutput("Essa mensagem será impressa só uma vez.");\n`}
        input={`{\n    "limite": 5\n}`}
        height="175px"
      />
      <p />
      Nesse exemplo, ao invés de um literal 5 em nosso código, teremos uma
      variável. Isso é interessante, pois, enquanto no primeiro programa sempre
      iremos executar o laço de repetição 5 vezes, nesse exemplo, iremos
      executar o programa um número de vezes que depende da entrada “limite”.
      Essa variável funciona como um limitador do número de vezes que o programa
      irá executar. A cada execução, um número diferente de repetições pode ser
      executado.
      <p />
      Sugerimos que você teste o código e experimente fazendo alterações para
      ver os resultados.
    </ClassContainer>
  );
}

export default Content;
