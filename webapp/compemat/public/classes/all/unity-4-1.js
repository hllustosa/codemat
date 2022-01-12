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
      À medida em que os programas ficam mais complexos, surge a necessidade de
      quebrá-los em partes menores. Softwares muito grandes são compostos por
      partes menores e mais fáceis de entender e gerenciar. Existem muitas
      maneiras de quebrar programas grandes em partes menores, em JavaScript,
      uma forma usual de fazermos isso é através do uso de funções, um conceito
      muito importante que apresentaremos nessa seção.
      <ClassImage
        src="/img/programming.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Funções" />
      Uma função é um bloco de código projetado para realizar uma tarefa
      específica. Esse bloco de código pode ser executado (ou invocado) em
      outros pontos do mesmo software, e até mesmo exportado e utilizado em
      outros softwares.
      <p />
      Quebrar um código grande e complexo em blocos menores é uma boa prática
      de programação e podemos fazer justamente isso com o uso de funções. As
      funções fazem com que o código fique mais legível e fácil de manter. Elas
      permitem que tarefas repetidas sejam encapsuladas, e ao invés de termos um
      mesmo conjunto de linhas em partes diferentes de nosso programa, podemos
      criar uma função com um bloco de código contendo esse trecho repetido em
      apenas uma parte do nosso programa.
      <p />
      Vamos ao nosso primeiro exemplo:
      <p />
      <ClassCodeEditor
        code={`function minha_funcao(){\n    output("Olá mundo");\n}\n\nminha_funcao();`}
        input={"{}"}
        height="100px"
      />
      <p />
      Neste exemplo, declaramos nossa primeira função. A partir da linha 1 temos
      a sintaxe de declaração. Tudo começa com a palavra reservada{" "}
      <b>function</b> que significa função em inglês. Usamos essa palavra para
      estabelecer que estamos prestes a definir uma nova função. Após isso,
      iremos colocar o nome da função. Esse nome segue as mesmas regras que
      utilizamos na hora de nomear variáveis. As mesmas boas práticas também se
      aplicam, de forma que devemos dar nomes significativos às nossas funções,
      pois estes nomes farão com que o código seja mais fácil de ser entendido
      por outras pessoas.
      <p />A função que definimos em nosso código se chama <b>minha_funcao</b>.
      Após o nome, temos os parênteses obrigatórios. Como veremos, uma função
      pode ter parâmetros que são listados entre parênteses após o nome. Como
      essa função não tem parâmetros, os parênteses estão vazios. Após estes,
      temos um bloco de código com o corpo da função.
      <p />
      Toda função tem um bloco de código principal. Dentro de uma função podemos
      utilizar todas as estruturas e conceitos que vimos até agora. Isto é, todo
      o código possível de ser escrito em JavaScript pode ser colocado dentro de
      uma função. Inclusive código aninhando, isto é, blocos de código com
      múltiplos níveis. Uma função pode chamar outras funções, o que é bastante
      comum. Uma função pode até mesmo chamar a si própria, estabelecendo aquilo
      que chamamos de recursividade.
      <p />
      Dentro do bloco de código de nossa função temos uma única linha, em que
      fazemos a saída da string: "Olá mundo". A essa altura, como já definimos o
      que é uma função, podemos também dividir também um grande segredo com você
      leitor. Os comandos <b>output</b> e <b>input</b> que você vem utilizando
      até aqui, na verdade, são apenas funções escritas por outras pessoas. As
      funções são uma invenção fantástica, que permitem com o código de diversas
      pessoas que nem conhecem possam trabalhar juntos. Não é maravilhoso?
      <p />
      Na linha 5 do nosso exemplo, nós fazemos a chamada da função. Para tanto,
      precisamos colocar o nome da função seguido dos parênteses. Antes dessa
      linha a função havia sido apenas declarada e não chamada. Se apenas
      declararmos uma função e não a chamarmos, nada acontece. Execute o código
      de exemplo e veja que a mensagem "Olá mundo" será exibida no terminal. Se
      você apagar apenas a linha 5 e tentar executar o código novamente, embora
      a função continue sendo declarada corretamente, ela não vai ser chamada e
      portanto o programa não irá fazer nada.
      <p />
      <ClassSectionTitle title="Funções Com Parâmetros e Argumentos" />A função
      chamada <b>minha_funcao</b> é bastante simples. Ela não tem a capacidade
      de ser "personalizada", isto é, de trabalhar com dados que podem ser
      alterados na hora em que ela é chamada. Vamos supor que quiséssemos que{" "}
      <b>minha_funcao</b> fosse capaz de produzir uma mensagem personalizada
      para cada pessoa. Ao invés de "Olá Mundo", ela pudesse emitir mensagens
      como: "Olá Maria" ou "Olá João".
      <p />
      Por sorte, existe um mecanismo que podemos utilizar para alcançar esse
      objetivo. O código que chama uma função consegue passar dados para uma
      função no momento de chamá-la. Tudo funciona com base em dois conceitos
      simples, os parâmetros e os argumentos. Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`function minha_funcao(nome){\n    output("Olá "+nome);\n}\n\nminha_funcao("Hermano");`}
        input={"{}"}
        height="100px"
      />
      <p />
      Durante a declaração de <b>minha_funcao</b>, nós podemos declarar
      parâmetros. Esses parêmtros são variáveis que podem ser acessadas dentro
      da função e cujo valor pode ser estabelecido quando a função é chamada,
      pelo código que a invoca. Se olharmos na linha 5 do exemplo acima, vamos
      ver que a função é chamada com um argumento, isto é, um valor atribuído a
      um parâmetro da função. Esse valor é uma string literal: "Hermano". Se
      você executar o código acima irá verificar que ele produz a mensagem: "Olá
      Hermano" no terminal.
      <p />
      Naturalmente, os argumentos não precisam ser literais. Podem muito bem ser
      variáveis, como por exemplo:
      <p />
      <ClassCodeEditor
        code={`function minha_funcao(nome){\n    output("Olá "+nome);\n}\n\nvar entrada = input("entrada");\nminha_funcao(entrada);`}
        input={'{\n    "entrada": "hermano"\n}'}
        height="120px"
      />
      <p />
      Neste exemplo, antes de realizarmos a chamada da função, fazemos a entrada
      de um dado para a variável <b>entrada</b>, e então passamos <b>entrada</b>{" "}
      como um argumento para a <b>minha_funcao</b>. O valor contido em
      <b>entrada</b> será copiado para o parâmetro <b>nome</b> e estará
      acessível dentro de <b>minha_funcao</b>. Um ponto que pode causar confusão
      é que a linha 5 é executada antes do bloco da função, embora a função
      tenha sido declarada nas linhas anteriores. Como explicamos, uma função só
      tem seu bloco executado quando ela é chamada (no caso, isto ocorre na
      linha 6) e não quando é declarada.
      <p />
      Experimente com o exemplo de código acima e veja os resultados.
      <ClassSectionTitle title="Funções Com Retornos" />
      Para que possámos utilizar todo o poder das funções, precisamos explorar
      mais um conceito importante, o valor de retorno. Muito comumente, as
      funções realizam algum tipo de processamento ou cálculo e produzem um
      resultado. Esse resultado pode ser acessado através do retorno de função e
      salvo em uma variável externa. Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`function obter_maior(numero1, numero2){\n\n    if(numero1 > numero2){\n        return numero1;\n    } else {\n        return numero2;\n    }\n\n}\n\nvar r = obter_maior(10, 20);\noutput(r);`}
        input={"{}"}
        height="220px"
      />
      <p />A função <b>obter_maior</b> tem o seguinte comportamento. Ela recebe
      como parâmetros dois valores, chamados de
      <b>numero1</b> e <b>numero2</b>. Internamente, a função possui um{" "}
      <b>if</b> com uma expressão lógica onde verificamos se <b>numero1</b> é
      maior que <b>numero2</b>. Caso isso seja verdade, nós iremos entrar no
      bloco de código associado ao <b>if</b> que contém apenas um comando, o{" "}
      <b>return</b>. Esse comando indica que a função deve ter sua execução
      interrompida, e que o controle da execução deve ser retornado ao código
      que a chamou (a palavra return em inglês significa retornar).
      <p />
      À direita da palavra return podemos colocar uma expressão, literal ou
      valor que será retornado ao código que chamou a função. Caso o código que
      chamou a função capture o valor de retorno, esse ficará acessível
      externamente à função.
      <p />
      Capturar o valor de retorno de uma função é bem simples, e vemos isso na
      linha 11. Nesse caso, ao chamarmos a função <b>obter_maior</b>, nós também
      criamos um comando de atribuição em que, à esquerda declaramos o nome de
      uma variável onde o valor de retorno deve ser salvo, e à direita temos a
      chamada da função cujo valor de retorno vamos capturar.
      <p />
      Na linha 11 também vemos que passamos dois valores numéricos literais como
      argumentos, o valor 10, por ser o primeiro será copiado para o parâmetro{" "}
      <b>numero1</b> e o valor 20, será copiado para o parâmetro <b>numero2</b>.
      Ao executarmos o código vemos que ele produz como saída o valor 20 que é o
      maior entre os dois. Execute essa função alterando os valores diretamente
      no código para testá-la.
      <ClassSectionTitle title="Funções Matemáticas em JavaScript" />O
      JavaScript possui diversas funções matemáticas prontas que podemos chamar
      a partir de nosso código. A sintaxe para chamá-las é simples, basta escrevermos{" "}
      <b>Math.[nome da função]</b>. Vamos a alguns exemplos de funções matemáticas disponiveis
      na linguagem JavaScript:
      <p />
      <ClassCodeEditor
        code={`//Exponenciação\nvar exp = Math.pow(2, 10);\noutput("2 elevado a 10 é igual a "+exp);\n\n//Raiz Quadrada\nvar raiz = Math.sqrt(4);\noutput("Raiz quadrada de 4 é "+raiz)\n\n//O logaritmo\nvar log = Math.log(64);\noutput("O log de 64 na base e é "+ log);\n\n//Valor absoluto ou módulo\nvar mod = Math.abs(-42);\noutput("O módulo de -42 é "+mod);\n\n//Função piso e teto\nvar piso = Math.floor(4.4);\nvar teto = Math.ceil(4.5);\noutput("O piso de 4,5 é "+piso+" e o teto é "+teto);\n\n//Funções trigonométricas (graus em radianos) \nvar cosseno = Math.cos(0);\nvar seno = Math.sin(0);\nvar tan = Math.tan(45*Math.PI/180.0);\noutput("O valor de PI é "+Math.PI);\noutput("O cosseno de 0 é "+cosseno);\noutput("O seno de 0 é "+seno);\noutput("A tangente de 45 é "+tan);`}
        input={"{}"}
        height="430px"
      />
      <p />
      Nota: as linhas de código que começam com // são chamadas de comentários.
      São linhas totalmente ignoradas pelo interpretador, onde é possível
      colocar mensagens e descrições para facilitar a leitura do código.
      <p />
    </ClassContainer>
  );
}

export default Content;
