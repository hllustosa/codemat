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

function Content() {
  return (
    <ClassContainer>
      Chegou o momento de começarmos a criar programas mais poderosos, capazes
      de ter um comportamento diferente dependendo dos dados inseridos. Para
      isso precisamos entender como criar expressões lógicas cujos resultados
      são valores booleanos (verdadeiros ou falsos).
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
      <ClassSectionTitle title="Expressões Lógicas" />
      <p />
      Aprendemos sobre expressões e como elas podem ser utilizadas para realizar
      algum tipo de computação e retornar valores. Podemos operar sobre números
      e ter um número como resposta. Este é o caso das chamadas{" "}
      <b>expressões aritméticas</b>. Vimos também situações em que operamos
      sobre cadeias de caracteres, as concatenando e obtivemos uma nova cadeia
      de caracteres como resposta.
      <p />
      Agora vamos estudar um tipo bastante interessante de expressões, as
      chamadas expressões lógicas. As expressões lógicas são aquelas cujo valor
      de retorno é booleano, ou seja, lógico. Ao invés dessas expressões serem
      resolvidas e resultarem em um número, elas são resolvidas em um valor
      lógico: verdadeiro ou falso.
      <p />
      Essas expressões são muito úteis em situações em que devemos decidir o que
      fazer em seguida, ou mesmo estabelecer quantas vezes devemos repetir a
      execução de um conjunto de instruções em nosso código. Iremos usar esse
      tipo de expressão com bastante frequência.
      <p />
      Você pode pensar em expressões lógicas como perguntas que fazemos e cujas
      repostas aceitáveis são apenas o sim ou o não (ou o verdadeiro e o falso).
      Por exemplo, vamos supor que queremos saber se uma determinada entrada em
      nosso código é ou não maior do que 10, podemos executar o seguinte código.
      <p />
      <ClassCodeEditor
        code={`var entrada = input("entrada");\nvar resultado = entrada > 10;\noutput(resultado);`}
        input={`{\n    "entrada" : 11\n}`}
        height="75px"
      />
      <p />
      Na linha 2, temos um comando de atribuição com uma expressão lógica. Essa
      expressão está operando sobre a variável <b>entrada</b>, que é um número e
      também sobre um literal numérico de valor 10. Perceba que temos o{" "}
      <b>sinal de maior que</b>, que chamamos de operador relacional. Esse tipo
      de operador aparece com frequência em expressões lógicas. Neste caso, o
      resultado da expressão será verdadeiro caso o valor contido na variável
      entrada seja maior que 10, ou falso caso o contrário. Veja esse código em
      execução aqui.
      <p />
      Esse valor, verdadeiro ou falso, será armazenado na variável{" "}
      <b>resultado</b>. A variável <b>resultado</b> é um exemplo de variável do
      tipo lógico ou booleano. É como se tivéssemos feito a pergunta: O valor
      contido em entrada é maior que 10? Independente da resposta ser sim
      (verdadeira) ou não (falsa), ela será armazenada na variável{" "}
      <b>resultado</b>, e poderemos utilizar esse valor posteriormente em nosso
      código caso seja necessário. Em muitos casos, veremos expressões lógicas
      sendo usadas diretamente ao invés de terem seu resultado armazenado em uma
      variável lógica.
      <p />
      Existem diversos operadores que podemos utilizar para construir expressões
      lógicas, uma lista deles:
      <p />
      <ul>
        <li>
          <b>==</b> igual
        </li>
        <li>
          <b>!=</b> diferente
        </li>
        <li>
          <b>&gt;</b> maior que
        </li>
        <li>
          <b>&lt;</b> menor que
        </li>
        <li>
          <b>&gt;=</b> maior ou igual que
        </li>
        <li>
          <b>&lt;=</b> menor ou igual que
        </li>
      </ul>
      Podemos substituir qualquer um desses operadores no programa acima e ver
      os resultados. Aconselho que você faça isso para entender cada caso.
      <p />
      Um ponto que geralmente provoca dúvidas é o do <b>operador de igualdade</b> ==
      (igual igual). Devemos lembrar que o operador igual (=) já é utilizado para realizar
      <b>atribuições de valores</b>, quando queremos <b>verificar se dois valores são
      iguais</b> em uma expressão lógica, devemos utilizar o operador de igualdade
      composto por dois sinais de igual em sequência. Faça o teste com esse
      operador para verificar os resultados.
      <p />
    </ClassContainer>
  );
}

export default Content;
