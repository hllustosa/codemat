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
      Nesta unidade iremos aprender sobre estruturas de repetição, fundamentais
      para a solução da maioria absoluta dos problemas computacionais. Porém,
      primeiramente, vamos nos aprofundar em um tópico importante antes de
      prosseguirmos. Vamos aprender mais sobre expressões lógicas e mergulhar no
      mundo da lógica matemática.
      <p />
      <ClassSectionTitle title="Expressões Lógicas Complexas" />
      Nós aprendemos em outra seção que expressões lógicas são muito
      importantes na programação. Até o momento, nós as utilizamos em comandos
      if e como veremos elas também irão aparecer nos chamados laços de
      repetição que veremos em breve.
      <p />
      Porém, até o momento só vimos expressões lógicas muito simples, formadas
      apenas pelos operadores relacionais ou de comparação, tais como ==, !=,
      &gt;, &lt;, &gt;= e &lt;=. Esses operadores permitem com que valores sejam
      comparados e que dessa forma se obtenha um resultado lógico (booleano,
      verdadeiro ou falso) a partir de valores de diversos tipos.
      <p />
      Entretanto, existem situações em que será preciso combinar o resultado de
      diversas expressões lógicas mais simples do tipo. Situações em que iremos
      avaliar se mais de uma expressão lógica é verdadeira, ou mesmo se ao menos
      uma delas é verdadeira. Para tanto, nós utilizamos os chamados operadores
      lógicos.
      <p />
      <ClassSectionTitle title="O Operador E" />
      <p />
      O primeiro operador lógico que iremos estudar é o operador “E” (também
      chamado de operador And em inglês) representado em JavaScript por
      &amp;&amp; (E comercial duplo). Esse operador tem a seguinte
      característica. Ele combina dois valores lógicos ou duas outras expressões
      lógicas e seu resultado é verdadeira se e somente os valores lógicos sobre
      os quais ele opera também forem verdadeiros. Em qualquer outro caso, o
      resultado será falso.
      <p />
      Um exemplo simples da aplicação desse operador pode ser visto nesse
      código:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 0 && numero < 10){\n    output("numero está no intervalo (0, 10)");\n} else {\n    output("numero não está no intervalo (0, 10)");\n}`}
        input={`{\n    "numero":1\n}`}
        height="175px"
      />
      <p />
      Neste exemplo, temos um programa que avalia se a valor contido na variável
      número está no intervalo aberto (0, 10). Para determinar isto, precisamos,
      na verdade que duas coisas sejam verdadeiras ao mesmo tempo. A primeira é
      que o valor de numero deve ser maior que 0 e a segunda é que o valor de
      numero deve ser menor que 10.
      <p />
      Portanto, se o valor em numero estiver no intervalo, tanto a expressão
      numero &gt; 0 quanto a expressão numero &lt; 10 serão avaliadas como
      verdadeira. Neste caso, a expressão mais complexa numero &gt; 0 &amp;&amp;
      numero &lt; 10 também será avaliada como verdadeira. Neste caso o programa
      irá produzir a mensagem: numero está no intervalo (0, 10).
      <p />
      Suponha um caso em que o valor numero está fora do intervalo, tomemos como
      exemplo o valor 20. Tendo o valor 20 armazenado na variável numero fará
      com que apenas a primeira expressão (numero &gt; 0) seja avaliada como
      verdadeira, a segunda expressão (numero &gt; 10) será avaliada como falsa
      e consequentemente a expressão maior (numero &gt; 0 &amp;&amp; numero &lt;
      10). Neste caso o programa irá produzir a mensagem: numero não está no
      intervalo (0, 10).
      <p />
      Algo semelhante irá ocorrer caso o número seja menor ou igual a zero,
      porém apenas inverteremos qual das expressões menores é verdadeira e qual
      é falsa, o resultado final da expressão maior continuará sendo falso, pois
      teremos da mesma uma expressão falsa.
      <p />
      O operador é chamado de "e", pois ele é verdadeiro se uma expressão "e"
      outra são verdadeiras simultaneamente. Lembre-se que a expressão lógica
      numero &gt; 0 &amp;&amp; numero &lt; 10 deve ser lida como. Se numero for
      maior que zero e se numero for menor que 10. 
      <p />
      <ClassSectionTitle title="O Operador Ou" />
      <p />
      Vamos aprender agora a combinar expressões lógicas de outra maneira. Vamos
      utilizar o operador “Ou” (também chamado de operador Or em inglês),
      representado por || (dois pipes ou barras verticais) em JavaScript.
      <p />
      Este operador combina dois valores lógicos ou duas outras expressões
      lógicas e seu resultado é verdadeira caso ao menos um dos valores lógicos
      sobre os quais ele opera seja verdadeiro. Caso todos os valores lógicos
      sejam falsos, o resultado também será falso.
      <p />
      Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 0 || numero < 10){\n    output("numero está fora do intervalo (0, 10)");\n} else {\n    output("numero está no intervalo (0, 10)");\n}`}
        input={`{\n    "numero":1\n}`}
        height="175px"
      />
      <p />
      Neste exemplo, estamos avaliando a mesma coisa que estávamos no exemplo
      anterior do operador “E”, porém dessa vez estamos usando o operador “Ou” e
      a lógica está invertida. Suponha agora queremos estabelecer se o valor
      contido em número não está no intervalo (0, 10). Para isso ser verdade, ou
      o valor em numero deve ser menor que 0 ou o valor em número deve ser maior
      que 10. Qualquer uma dessas condições é suficiente para que o valor não
      esteja no intervalo.
      <p />
      Se o valor em numero estiver dentro fora do intervalo, ou a expressão
      numero &lt; 0 ou a expressão numero &gt; 10 serão avaliadas como
      verdadeira. Neste caso, a expressão mais complexa numero &lt; 0 || numero
      &gt; 10 também será avaliada como verdadeira.
      <p />
      Suponha um caso em que o valor numero está no intervalo, tomemos como
      exemplo novamente o valor 20. Tendo o valor 20 armazenado na variável
      numero fará com que a segunda expressão (numero &gt; 10) seja avaliada
      como verdadeira. Embora a primeira expressão (numero &lt; 0) seja avaliada
      como falsa ainda assim, por termos a segunda como verdadeira o resultado
      da expressão (numero &lt; 0 || numero &gt; 10) avaliada como verdadeira,
      pois uma das duas expressões é verdadeira. Neste caso o programa ira
      produzir como saída a mensagem: numero está fora do intervalo (0, 10).
      <p />
      Um outro caso que podemos analisar é aquele em que o valor de numero é
      igual a 5. Neste caso, o valor está no intervalo (0,10) e como podemos
      perceber, isto fará com que a expressão maior seja avaliada como falso.
      Isto porque, tanto numero &lt; 0 quanto numero &gt; 10 serão avaliadas
      como falsa. No caso de ambas serem falsas, o resultado da expressão:
      numero &lt; 0 || numero &gt; 10 também é falsa. Neste caso, o programa irá
      produzir a mensagem: numero está no intervalo (0, 10).
      <p />
      Para solidificarmos o conhecimento, devemos entender que operador é
      chamado de “Ou”, pois ele é verdadeiro se uma expressão “ou” outra forem
      verdadeiras. Desta forma, a expressão numero &lt; 0 || numero &gt; 10 deve
      ser lida como: se numero for menor que 0 ou se numero for maior que 10.
      <p />
      <ClassSectionTitle title="O Operador Não" />
      <p />
      O terceiro operador lógico “Não” (chamado de Not em inglês) permite com
      que consigamos inverter o resultado de uma operação lógica. Este operador
      é representado por ! (uma exclamação) em Javascript, e quando aplicado
      sobre o resultado de uma variável lógica ou sobre uma expressão lógica
      qualquer, faz com que seu valor seja modificado de verdadeiro para falso
      ou vice-versa.
      <p />
      Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(!(numero > 100)){\n    output("numero NÃO É maior que 100");\n} else {\n    output("numero É maior que 100");\n}`}
        input={`{\n    "numero":50\n}`}
        height="175px"
      />
      <p />
      Neste caso temos uma expressão lógica numero &gt; 100 que está entre
      parênteses. Externo aos parênteses temos o operador ! (“Não”) que fará com
      que o valor de numero &gt; 100 seja invertido. Vamos supor que o valor
      contido em numero seja 90, neste caso a expressão de numero &gt; 100 será
      avaliada como falsa, porém o operador ! fará com que seu resultado seja
      invertido, e portanto o resultado da expressão !(numero &gt; 100) será
      verdadeiro. Neste cenário, o programa irá produzir a mensagem: numero NÃO
      É maior que 100.
      <p />
      Caso o valor contido em numero seja 200, teremos o cenário inverso. O
      valor da expressão numero &gt; 100 será verdadeiro. Entretanto, com a
      aplicação do operador “Não” fará com que o valor de !(numero &gt; 100)
      seja falso. Isto fará com que apenas o bloco Else seja executado e
      portanto o programa irá produzir a seguinte mensagem: numero É maior que
      100.
      <p />
      <ClassSectionTitle title="Combinações e Regra de Precedência" />
      <p />
      Os operadores lógicos podem ser combinados dando origem a uma expressão
      lógica tão grande e complexa quanto você quiser. É possível termos
      expressões do tipo: cond1 || cond2 || cond3 || cond4 ou mesmo cond1
      &amp;&amp; cond2 &amp;&amp; cond3 &amp;&amp; cond4. Nessa notação cond1,
      cond2 ou cond3 apenas representam expressões ou variáveis lógicas
      quaisquer.
      <p />
      No caso do operador “Ou” se apenas uma das condições for verdadeira, toda
      a expressão é considerada verdadeira. No caso do operador “E” todas as
      condições precisam ser consideradas verdadeiras para que a expressão final
      seja considerada verdadeira.
      <p />
      Podemos também combinar os operadores da seguinte forma: cond1 || cond2
      &amp;&amp; cond3. Mas devemos ficar atentos a precedência das operações.
      Da mesma forma que * (multiplicação) tem precedência sobre + (soma), o
      operador &amp;&amp; (E) tem precedência sobre || (Ou). Neste caso, mesmo o
      operador || estando mais a esquerda, primeiro teremos a avaliação de cond2
      &amp;&amp; cond3 e depois seu resultado será operador com cond1. Para
      mudar a ordem devemos usar parênteses da mesma forma que fazemos em
      expressões aritméticas: (cond1 || cond2) &amp;&amp; cond3. Desta forma
      garantimos que cond1 || cond2 será avaliado primeiro e seu resultado
      operador com cond3.
      <p />
      É interessante notar que o operador ! (Não) tem precedência maior ainda
      que &amp;&amp; e ||. Na verdade esse operador tem precedência sobre a
      maioria dos outros, até mesmo sobre os operadores relacionais. Por este
      motivo no exemplo de código anterior utilizamos !( numero &gt; 100). Se
      tivéssemos escrito  !numero &gt; 100, teríamos aplicado a negação em
      numero, de forma que iriámos alterar seu valor.
      <p />
      A linguagem JavaScript permite com que a apliquemos o operador ! a uma
      variável numérica. De fato, o Javascript permite com que tratemos às vezes
      vários tipos de variáveis como se fossem valores lógicos. Como este é um
      tema um pouco mais avançado, vamos nos limitar a aconselhar que você tome
      cuidado ao utilizar o operador !, e faça isso seguindo o exemplo de código
      que mostramos nessa seção.
      <p />
    </ClassContainer>
  );
}

export default Content;
