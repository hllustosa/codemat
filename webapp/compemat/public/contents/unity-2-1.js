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
        src="/img/conditional.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />

      Chegou o momento de começarmos a criar programas mais poderosos, capazes
      de ter um comportamento diferente dependendo dos dados inseridos. Para
      isso precisamos entender como podemos executar expressões lógicas e
      relacionais cujos resultados são valores booleanos (verdadeiros ou
      falsos).
      <p />
      <ClassSectionTitle title="Expressões Lógicas" />
      <p />
      Aprendemos sobre expressões e como elas podem são utilizadas para realizar
      algum tipo de computação e retornar valores. Podemos operar sobre números
      e ter um número como resposta, é o caso das chamadas expressões
      aritméticas. Vimos também situações em que operamos sobre cadeias de
      caracteres, as concatenando e obtivemos uma nova cadeia de caracteres como
      resposta.
      <p />
      Agora vamos estudar um tipo bastante interessante de expressões, as
      chamadas expressões lógicas. As expressões lógicas são aquelas cujo valor
      de retorno é booleano, ou seja, lógico. Ao invés dessas expressões serem
      resolvidas e resultarem em um número, elas são resolvidas em um valor
      lógico verdadeiro ou falso.
      <p />
      Essas expressões são muito úteis em situações em que devemos decidir o que
      fazer em seguida, ou mesmo estabelecer quantas vezes devemos repetir a
      execução de um conjunto de linhas. Iremos usar esse tipo de expressão com
      bastante frequência.
      <p />
      Eu particularmente gosto de pensar em expressões lógicas como perguntas
      que fazemos e cujas repostas aceitáveis são apenas o sim e o ou não (ou o
      verdadeiro e o falso). Por exemplo, vamos supor que queremos saber se uma
      determinada entrada em nosso código é ou não maior do que 10, podemos
      executar o seguinte código.
      <p />
      <p />
      <ClassCodeEditor
        code={`var entrada = input("entrada");\nvar resultado = entrada > 10;\noutput(resultado);`}
        input={`{\n    "entrada" : 11\n}`}
        height="75px"
      />
      <p />
      Na linha dois temos um comando de atribuição com uma expressão lógica,
      essa expressão está operando sobre a variável entrada, que é um número e
      também sobre um literal numérico 10. Perceba que temo o sinal de maior
      que, que é o que chamamos de operador relacional. Esse tipo de operador
      aparece com frequência em expressões lógicas, de forma que o resultado da
      avaliação do operador será verdadeiro caso o valor contido na variável
      entrada seja maior que 10 ou falso caso o contrário. Veja esse código em
      execução aqui.
      <p />
      Esse valor, verdadeiro ou falso será armazenado na variável resultado. A
      variável resultado é um exemplo de variável do tipo lógico ou booleano. É
      como se tivéssemos feito a pergunta: O valor contido em entrada é maior
      que 10? Independente da resposta ser sim (verdadeira) ou não (falsa), ela
      será armazenada na variável resultado. Em muitos casos veremos expressões
      lógicas sendo usadas diretamente ao invés de terem seu resultado
      armazenado em uma variável lógica.
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
      os resultados. Aconselho que você faça isso para entender cada caso. Um
      ponto que geralmente provoca dúvidas é o do operador de igualdade ==
      (igual). Devemos lembrar que o operador igual já é utilizado para realizar
      atribuições de valores, quando queremos verificar se dois valores são
      iguais em uma expressão lógica, devemos utilizar o operador de igualdade
      composto por dois sinais de igual em sequência. Faça o teste com esse
      operador para verificar os resultados.
      <p />
    </ClassContainer>
  );
}

export default Content;
