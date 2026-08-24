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
      A estrutura de repetição <b>while</b> é bastante flexível e não assume
      nada em relação a como o programador irá controlar o número de repetições.
      Basta colocar uma expressão lógica que avalia se dada condição é verdade,
      cabendo ao programador estabelecer algum mecanismo de incremento ou
      modificação das variáveis que aparecem na expressão lógica.
      <p />
      Porém, o uso de variáveis contadoras e incrementos é tão comum em laços de
      repetição, que linguagens como o JavaScript oferecem uma outra estrutura
      de controle que facilita seu uso. A estrutura <b>for</b> tem essa função,
      e iremos aprender como ela funciona nessa seção.
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
      <ClassSectionTitle title="Outro Padrão de Repetição" />
      <p />
      O padrão de laço de repetição que vimos anteriormente se torna muito comum
      em situações em que sabemos de antemão o número de vezes que iremos
      precisar executar um trecho de código. Entenda que saber o número de vezes
      de antemão pode significar duas coisas.
      <p />
      Podemos saber que o laço deve ser executado um determinado número de vezes
      durante o desenvolvimento do nosso programa e podemos colocar o número
      fixo (um literal numérico) diretamente no código. Nesse caso, o laço terá
      um número fixo de repetição que não se altera nunca.
      <p />
      Alternativamente, o número de repetições pode não ser determinado durante
      o desenvolvimento do programa, porém pode estar armazenado em uma variável
      durante sua execução. Antes de entrarmos no laço, já temos como saber
      quantas vezes o bloco de código dentro do mesmo será repetido. Nesse caso
      podemos variar o número de repetições entre execuções diferentes do
      programa, mas o código será bastante parecido com caso em que temos um
      número fixo, por exemplo:
      <p />
      <ClassCodeEditor
        code={`var limite = 5;\nvar contadora = 0;\n\nwhile(contadora < limite){\n    output("Essa mensagem será impressa "+limite+" vezes");\n    contadora = contadora + 1;\n}\n\noutput("Essa mensagem será impressa só uma vez.");`}
        height="175px"
      />
      <p />
      Temos um teste lógico que verifica se uma variável contadora atingiu um
      determinado valor e temos um incremento ocorrendo no trecho de código, que
      efetivamente conta quantas vezes o laço de repetição foi executado até
      aquele instante. De fato, essa estrutura é tão comum que as linguagens de
      programação evoluíram de forma a criar uma estrutura de repetição que
      incorporasse esse padrão. Chamamos essa estrutura de laço de repetição{" "}
      <b>for</b>, e iremos estudar seu funcionamento.
      <p />
      <ClassSectionTitle title="Repetição com For" />A palavra <b>for</b> em
      inglês pode ser traduzida como <b>Para</b>. Não é muito intuitivo à
      princípio, mas em geral, ao nos depararmos com uma estrutura <b>for</b> em
      nosso código, podemos interpretá-la como algo do tipo: Para uma
      determinada variável, iniciada com um valor e tendo o valor menor que um
      determinado limite, façamos algo. Não se preocupe se estiver muito
      abstrato agora, vamos entender melhor o que isso significa.
      <p />A estrutura <b>for</b> é, em muitos aspectos, equivalente à estrutura{" "}
      <b>while</b>. Isto é, ambas tem a mesma função de permitir a repetição de
      um mesmo bloco de código. São maneiras diferentes de atingir objetos
      parecidos. A estrutura <b>for</b> será preferível em qualquer situação em
      que a repetição se dará um número de vezes conhecido de antemão.
      <p />
      De maneira geral, é possível dizer que estrutura <b>for</b> é mais comum
      do que a estrutura <b>while</b>. Isto é, na maioria das vezes você irá se
      deparar com códigos contendo <b>fors</b> e não <b>whiles</b>.
      <p />
      Vamos a um exemplo de repetição com a estrutura <b>for</b>:
      <p />
      <ClassCodeEditor
        code={`for(var cont = 0; cont < 5; cont = cont + 1){\n    output("Essa mensagem será impressa 5 vezes");\n}\n\noutput("Essa mensagem será impressa só uma vez.");`}
        input={`{}`}
        height="100px"
      />
      <p />
      Em um primeiro momento o <b>for</b> parece muito mais complexo do que o{" "}
      <b>while</b>, mas iremos entender cada parte do comando com calma. Veja
      que após a palavra reservada <b>for</b>, nós temos três partes ou comandos entre
      parênteses separados por ; (ponto é vírgula).
      <p />A primeira parte é o que chamamos de inicialização. Esse comando é
      executado uma vez apenas e antes que o bloco de código seja executado pela
      primeira vez. Nele, nós geralmente declaramos e iniciamos uma variável que
      funcionará como contadora, neste caso a chamamos de <b>cont</b> para
      encurtar.
      <p />A segunda parte é o teste lógico. Ele funciona da mesma forma que o
      teste lógico contido em um comando <b>while</b>. Trata-se de uma expressão
      lógica muito simples, que depende do valor da variável definida durante a
      inicialização. Essa expressão lógica é avaliada antes de qualquer execução
      do bloco de código associado. O bloco de código só será executado se a
      expressão lógica <b>for</b> avaliada como verdadeira.
      <p />A terceira parte é o incremento. Essa parte é executada após cada
      execução do bloco de código. Essa parte do <b>for</b> é onde colocamos uma
      instrução de incremento, isto é, onde atualizamos o valor da variável
      contadora. O incremento em 1 é a maneira mais comum, porém isto não é uma
      obrigação, é possível que o incremento se dê em valores maiores do que 1,
      ou mesmo que ocorra o decremento (existem laços de repetição em que
      decrementamos sucessivamente a variável contadora).
      <p />
      Podemos ter um expressão lógica em um <b>for</b> que dependa de outras
      variáveis também. Da mesma forma que nosso exemplo com o <b>while</b> que
      dependia de um limite, podemos ter um <b>for</b> que funciona da mesma
      maneira. Um exemplo:
      <p />
      <ClassCodeEditor
        code={`var limite = input("limite");\n\nfor(var cont = 0; cont < limite; cont = cont + 1){\n    output("Essa mensagem será impressa "+limite+" vezes");\n}\n\noutput("Essa mensagem será impressa só uma vez.");`}
        input={`{\n    "limite": 5\n}`}
        height="175px"
      />
      <p />
      Teste o código acima, variando o valor da variável de entrada{" "}
      <b>limite</b> e veja também que o número de repetições irá variar.
      <ClassSectionTitle title="Convenções de Repetição com o For" />
      Vamos dar uma olhada nesse laço de repetição:
      <p />
      <ClassCodeEditor
        code={`for(var i = 0; i < 5; i++){\n    output("Essa mensagem será impressa 5 vezes");\n}\n\noutput("Essa mensagem será impressa só uma vez.");`}
        input={`{}`}
        height="100px"
      />
      <p />
      Se executarmos esse trecho de código teremos o mesmo resultado que a
      execução do trecho apresentado anteriormente. Apenas adicionamos duas
      convenções que deixam o código mais compacto.
      <p />A primeira delas é que ao invés de chamarmos a variável de{" "}
      <b>cont</b> a batizamos de <b>i</b>. Em geral, é ideal que os nomes das
      variáveis sejam significativos e nesse aspecto, o nome <b>cont</b> parece
      nos dar um indício melhor do que <b>i</b>, para a função da variável em
      nosso código. Entretanto, a variável com nome <b>i</b> é utilizada como
      convenção para variáveis controladores de laços de repetição do tipo <b>for</b>.
      <p />
      Por isso, embora não seja um nome aparentemente significativo, podemos
      dizer que adotar essa convenção é aceitável e até desejável, pois mantém o
      código compacto, fácil de ler e de acordo com o que outros programadores
      esperam.
      <p />
      Outra coisa interessante que adicionamos é o operador de incremento. Ao
      invés de escrevermos: i = i + 1, podemos escrever i++. O operador ++
      incrementa em 1 o valor da variável. Esse operador é aquilo que chamamos
      de <b>açúcar sintático</b>, isto é, uma maneira um pouco mais compacta e
      simples de fazer algo comum na programação.
    </ClassContainer>
  );
}

export default Content;
