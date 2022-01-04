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
        src="/img/loops.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      A estrutura de repetição While é bastante flexível e não assume nada em
      relação a como o programador irá controlar o número de repetições. Basta
      colocar uma expressão lógica que avalie se dada condição é verdade,
      cabendo ao programador estabelecer algum mecanismo de incremento ou
      modificação das variáveis que aparecem na expressão lógica, de maneira que
      esta seja avaliada como falso no momento em que o laço deve parar de ser
      executado.
      <p />
      No entanto, o padrão que vimos anteriormente se torna muito comum em
      situações em que sabemos de antemão o número de vezes que iremos precisar
      executar um trecho de código. Entenda que saber o número de vezes de
      antemão pode significar duas coisas.
      <p />
      Podemos saber que o laço deve ser executado um determinado número de vezes
      durante o desenvolvimento do nosso programa e podemos colocar o número
      fixo (um literal numérico) direto no código. Nesse caso o laço terá um
      número fixo de repetição que não se altera nunca.
      <p />
      Alternativamente, o número de repetições pode não ser determinado durante
      o desenvolvimento do programa, porém pode estar armazenado em uma variável
      durante sua execução. Antes de entrarmos no laço while, já temos como
      saber quantas vezes o bloco de código dentro do while será repetido. Nesse
      caso podemos variar o número de repetições entre execuções diferentes do
      programa, mas o código será bastante parecido com caso em que temos um
      número fixo, exemplo:
      <p />
      <ClassCodeEditor
        code={`var contadora = 0;\n\nwhile(contadora < 5){\n    output("Essa linha será impressa 5 vezes");\n    contadora = contadora + 1;\n}\noutput("Essa mensagem será impressa só uma vez.");\n`}
        input={`{}`}
        height="175px"
      />
      <p />
      Temos um teste lógico que verifica se uma variável contadora atingiu um
      determinado valor e temos um incremento ocorrendo no trecho de código, que
      efetivamente conta quantas vezes o laço de repetição foi executado até
      aquele instante. De fato, essa estrutura é tão comum que as linguagens de
      programação evoluíram de forma criar uma estrutura de repetição que
      incorporasse esse padrão. Chamamos essa estrutura de laço de repetição for
      (para), e iremos ver como ele funciona agora.
      <p />
      <ClassSectionTitle title="Repetição com For" />
      A palavra For em inglês pode ser traduzida como “Para”. A estrutura For é,
      em muitos aspectos, equivalente ao While. Isto é, tem a mesma função. São
      maneiras diferentes de atingir objetos parecidos. A estrutura For será
      preferível em qualquer situação em que a repetição se dará um número de
      vezes conhecido de antemão.
      <p />
      De maneira geral, é possível dizer que estrutura For é mais comum do que a
      estrutura While. Isto é, na maioria das vezes você irá se deparar com
      códigos contendo For’s e não While’s.
      <p />
      Vamos a um exemplo de repetição com a estrutura for: 
      <p />
      <ClassCodeEditor
        code={`for(var contadora = 0; contadora < 5; contadora = contadora + 1){\n    output("Essa linha será impressa 5 vezes");\n}\noutput("Essa mensagem será impressa só uma vez.");\n`}
        input={`{}`}
        height="105px"
      />
      <p />
      Em um primeiro momento o for parece muito mais complexo do que o While,
      mas iremos entender cada parte do comando. Veja que após a palavra
      reservada for, nós temos três partes ou comandos entre parênteses
      separados por ; (ponto é vírgula).
      <p />
      A primeira parte é o que chamamos de inicialização. Esse comando é
      executado uma vez apenas e antes que o bloco de código seja executado pela
      primeira vez. Nele, nós geralmente declaramos e iniciamos uma variável que
      funcionará como contadora.
      <p />
      A segunda parte é o teste lógico. Ele funciona da mesma forma que o teste
      lógico contido em um comando While . Trata-se de uma expressão lógica
      geralmente muito simples, que depende do valor da variável definida
      durante a inicialização. Essa expressão lógica é avaliada antes de
      qualquer execução do bloco de código associado. O bloco de código só será
      executado se a expressão lógica for avaliada como verdadeira.
      <p />
      A terceira parte é o incremento. Essa parte é executada após cada execução
      do bloco de código. Essa parte do código é onde colocamos uma instrução de
      incremento, isto é, onde atualizamos o valor da variável contadora. O
      incremento em 1 é a maneira mais comum, porém isto não é uma obrigação, é
      possível que o incremento se dê em valores maiores do que 1, ou mesmo que
      ocorra o decremento (existem laços de repetição em que decrementamos
      sucessivamente a variável contadora).
      <p />
      <ClassSectionTitle title="Convenções de Repetição com o For" />
      Vamos dar uma olhada nesse laço de repetição:
      <p />
      <ClassCodeEditor
        code={`for(var i = 0; i < 5; i++){\n    output("Essa linha será impressa 5 vezes");\n}\noutput("Essa mensagem será impressa só uma vez.");\n`}
        input={`{}`}
        height="105px"
      />
      <p />
      Se executarmos esse trecho de código teremos o mesmo resultado que a
      execução do trecho apresentado anteriormente. Apenas adicionamos duas
      convenções que deixam o código mais compacto.
      <p />
      A primeira delas é que ao invés de chamarmos a variável de contadora a
      batizamos de i. Em geral, é ideal que os nomes das variáveis sejam
      significativos e nesse aspecto, o nome contadora parece nos dar um indício
      melhor do que i, para a função da variável em nosso código. Entretanto, a
      variável com nome i é utilizada como convenção para variáveis
      controladores de laços de repetição do tipo for.
      <p />
      Por isso, embora não seja um nome altamente significativo, podemos dizer
      que adotar essa convenção é aceitável e até desejável, pois mantém o
      código compacto, fácil de ler e segundo o que outros programadores
      esperam.
      <p />
      Outra coisa interessante que adicionamos é o operador de incremento. Ao
      invés de escrevermos i = i + 1, podemos escrever i++. O operador ++
      incrementa em 1 o valor da variável. Esse operador é aquilo que chamamos
      de açúcar sintático, isto é, uma maneira um pouco mais compacta e simples
      de fazer algum comum na programação.
    </ClassContainer>
  );
}

export default Content;
