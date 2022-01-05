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
      Até o momento, todas as variáveis que utilizamos conseguem armazenar um
      único valor. Quando temos uma variável numérica, ela contém um único
      número, quando temos uma variável booleana ou lógica, esta contém um único
      valor verdade. Porém, existem situações em que precisamos lidar com grupos
      de valores fortemente relacionados. Nestas situações, utilizamos as
      chamadas estruturas de dados, como as listas, para armazenar conjuntos de
      dados relacionados em uma única variável.
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
      <ClassSectionTitle title="Listas" />
      Em JavaScript, podemos facilmente criar uma lista através da seguinte
      sintaxe:
      <p />
      <ClassCodeEditor
        code={`var minha_lista = [1, 2, 3, 4];`}
        input={"{}"}
        height="50px"
      />
      <p />
      Essa lista contém 4 valores inteiros. Neste exemplo definimos uma lista
      literal, isto é, colocamos um conjunto de elementos entre colchetes e
      separados por vírgula. Estamos armazenando essa lista em uma variável
      chamada de <b>minha_lista</b>. Essa variável difere de todas que vimos até
      o momento, ela NÃO contém apenas um valor, e sim 4 valores diferentes: 1,
      2, 3, 4.
      <p />
      Existem algumas sintaxes diferentes que devemos seguir para acessar e ler
      o valor dos variáveis nessa lista. Por exemplo, vamos supor que queremos
      acessar o primeiro elemento de <b>minha_lista</b>:
      <p />
      <ClassCodeEditor
        code={`var minha_lista = [1, 2, 3, 4];\noutput(minha_lista[0]);`}
        input={"{}"}
        height="50px"
      />
      <p />
      Sempre que quisermos ler ou escrever um valor em uma determinada posição
      de uma lista usamos a sintaxe descrita acima. Colocamos o valor 0 entre
      chaves após o nome da variável. Se você executar o código acima irá
      perceber que ele emite como saída o valor 0. Não é coincidência que 1 é o
      primeiro valor armazenado na lista.
      <p />
      Quando queremos acessar uma posição de uma lista nós utilizamos um número
      entre chaves, esse número é chamado de índice. Os índices para acessar as
      posições da lista são baseados em zero. Isto quer dizer que se quisermos
      acessar o primeiro elemento de uma lista devemos usar o índice 0 (zero).
      <p />
      Se quisermos acessar o último elemento, devemos acessar uma posição é
      igual ao número total de elementos na lista menos um. Como temos 4
      elementos nessa lista, devemos acessar a posição 3 (4 - 1). Faça o teste e
      troque o valor por 0 por 3 no código acima e veja que o valor a ser
      impresso será o 4, isto é, o último elemento da lista.
      <p />
      O mesmo mecanismo pode ser utilizado para escrever valores em posições
      específicas da lista:
      <p />
      <ClassCodeEditor
        code={`var minha_lista = [1, 2, 3, 4];\nminha_lista[0] = 10;\noutput(minha_lista[0]);`}
        input={"{}"}
        height="65px"
      />
      <p />
      Veja que nesse caso, colocamos o acesso à lista à esquerda do operador de
      atribuição. Isso significa que você está escrevendo ou armazenando o valor
      em uma determinada posição. Execute o trecho de código acima e verifique
      que valor 10 será produzido como saída. Fique a vontade para alterar os
      valores (índices da lista, valores armazenado na variável, etc) e veja os
      resultados.
      <p />
      <ClassSectionTitle title="Iterar uma Lista" />
      Iterar significa fazer algo de forma repetida. Utilizamos esse termo para
      falar de situações na programação em que utilizamos laços de repetição
      para fazer algo mais de uma vez. Em geral, podemos dizer que iterar por
      uma lista é executar algum código que acessa cada um dos seus elementos.
      Cada execução de um laço de repetição que realiza esse acesso é chamado de
      iteração. Vamos ver um exemplo de código em que iteramos por uma lista
      para imprimir cada um dos seus elementos:
      <p />
      <ClassCodeEditor
        code={`var nomes = ["João", "Maria", "Pedro", "Ana"];\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="105px"
      />
      <p />
      Nesse exemplo de código estamos fazendo algo bastante interessante.
      Primeiramente criamos uma lista de cadeias de caracteres chamada{" "}
      <b>nomes</b>. Uma lista pode ser composta por elementos de diversos tipos,
      inclusive é possível que uma lista tenha até mesmo valores de tipos
      diferentes.
      <p />
      Temos também um laço de repetição controlado por variável i, inicializada
      com 0. O teste lógico desse laço de repetição tem uma particularidade,
      onde fazemos algo inédito. Nós utilizamos a sintaxe: <b>
        nomes.length
      </b>{" "}
      para obter o tamanho da lista, isto é, seu número de elementos. Essa
      sintaxe com o nome da variável onde temos nossa lista, seguido de um ponto
      e a palavra length (que significa comprimento em inglês) é a maneira usual
      para verificar quantos elementos existem em uma lista.
      <p />
      No nosso exemplo, temos uma lista literal, com todos os elementos
      definidos no momento em que criamos o código, mas como veremos a seguir,
      podemos adicionar o remover elementos de uma lista de maneira dinâmica
      durante a execução do nosso programa. Por isso, precisamos de uma forma,
      também dinâmica, de saber quantos elementos existem.
      <p />
      Se analisarmos o que ocorre no laço de repetição, vamos perceber que
      estamos acessando posições na lista utilizando a variável de controle. Ou
      seja, podemos usar variáveis com valores inteiros além de literais
      numéricos para acessar as posições de uma lista. Podemos e geralmente
      acessamos posições de listas utilizando variáveis.
      <p />O que esperamos desse código? Inicialmente temos uma lista com 4
      elementos, de forma que quando começarmos o nosso laço de repetição, a
      expressão lógica utilizada no controle desse laço será i &lt; nomes.length
      ou i &lt; 4. A variável <b>i</b> é iniciada com o valor 0 e então
      executamos o laço pela primeira vez, pois 0 é menor que 4. Nesse caso
      iremos acessar a posição 0, ou seja, a primeira posição da lista e iremos
      emitir como saída o valor "João".
      <p />
      Logo em seguida o incremento será executado, o valor de <b>i</b> será 1, e
      como 1 é menor do que 4 (tamanho da lista acessível através de{" "}
      <b>nomes.length</b>), iremos executar a próxima iteração. Vamos acessar o
      elemento da lista contido na posição 1, que no caso é a string "Maria".
      Esse processo vai se repetir até iterarmos pelos dois elementos seguintes.
      Ao final, nosso programa terá emitido como saída 4 strings: "João",
      "Maria", "Pedro" e "Ana".
      <p />
      <ClassSectionTitle title="Listas Dinâmicas" />
      Todas as listas que criamos até o momento foram definidas de maneira
      estática, com uma inicialização feita com um conjunto de literais. Porém,
      na maioria das vezes, nós queremos que nossas listas tenham conteúdo
      inserido dinamicamente.
      <p />
      Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var nomes = [];\nnomes.push("João");\nnomes.push("Maria");\nnomes.push("Ana");\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="150px"
      />
      <p />
      Neste exemplo, nós criamos uma lista vazia, apenas atribuindo um conjunto
      vazio de elementos entre colchetes: []. Após isso, nós utilizamos a
      sintaxe: <b>[nome da lista].push([elemento])</b> para inserir
      dinamicamente os elementos. O <b>push</b> é uma função que permite a
      inserção de um elemento no final de uma lista.
      <p />
      Nesse exemplo nós iremos adicionar dois elementos na lista, mais
      precisamente três cadeias de caracteres. Quando entrarmos no laço de
      repetição, podemos perceber que os nomes serão impressos na ordem em que
      foram inseridos na lista.
      <p />
      Além de inserções, podemos também remover o último elemento da lista
      dinamicamente:
      <p />
      <ClassCodeEditor
        code={`var nomes = [];\nnomes.push("João");\nnomes.push("“Maria”");\nnomes.push("“Ana”");\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}\n\noutput("Removendo último elemento");\nnomes.pop();\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="280px"
      />
      <p />
      Neste exemplo de código, após inserirmos os três elementos e imprimimos
      todo o conteúdo da lista, nós usamos a função <b>pop</b>.
      Consequentemente, o último elemento da lista é removido. Podemos perceber
      que ao iterar pela lista pela segunda vez, imprimimos apenas dois
      elementos: João e Maria. A cadeia de caracteres Ana foi removida pelo
      comando <b>pop</b>.
      <p />
      <ClassSectionTitle title="Entrada e Saída com Listas" />
      Em alguns exercícios, será necessário realizar a entrada e saída de
      variáveis que contém listas. Tanto o comando input como output podem
      produzir ou emitir variáveis contendo uma lista de valores.
      <p />
      Vamos dar uma olhada nesse exemplo de código:
      <p />
      <ClassCodeEditor
        code={`var numeros = input("numeros");\nvar dobros = [];\n\nfor(var i = 0; i < numeros.length; i++){\n    var dobro = numeros[i] * 2;\n    dobros.push(dobro);\n}\n\noutput(dobros);`}
        input={`{\n  "numeros": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n}`}
        height="175px"
      />
      <p />
      Neste exemplo, temos como entrada uma lista de números salva em uma
      variável chamada <b>numeros</b>. Criamos uma lista vazia chamada de{" "}
      <b>dobros</b>. Após a leitura e a declaração das listas, nós iteramos pela
      lista <b>numeros</b>, e criamos uma nova variável chamada <b>dobro</b> que
      receberá o resultado de uma expressão em que acessamos um valor em{" "}
      <b>numeros</b> e o multiplicamos por dois. Após isso, adicionamos o valor
      contido em <b>dobro</b> na lista <b>dobros</b>.
      <p />
      Ao final, realizamos a saída da lista <b>dobros</b> como todo, ao invés de
      cada elemento. Vamos ver uma única saída em nosso terminal, contendo uma
      lista cujos elementos são o dobro do valor de cada elemento na lista{" "}
      <b>numeros</b>.
      <p />
      Nos exercícios em será necessário realizar a leitura de listas ou produzir
      listas como saída, teremos alguma indicação no enunciado avisando ao
      estudante dessa particularidade.
      <p />
      <ClassSectionTitle title="Strings como Listas" />
      Uma curiosidade sobre strings (cadeias de caracteres) em JavaScript: você
      pode pensar nelas como uma lista de caracteres. Você pode acessar uma
      posição de uma string da mesma forma que acessa uma posição de uma lista,
      e obter um caractere. Vamos a um exemplo:
      <p />
      <ClassCodeEditor
        code={`var cadeia = "JavaScript";\noutput(cadeia[4]);`}
        input={"{}"}
        height="50px"
      />
      <p />
      Não deveria ser surpresa que o código acima produz como saída o caractere{" "}
      <b>S</b>. Ele é o caractere na posição 4 da lista (ele é o quinto
      caractere da esquerda para a direita, mas lembre-se de que a contagem
      começa em zero).
      <p />
      Você pode iterar por uma string, caractere a caractere, assim como fazemos
      com lista. Podemos usar a mesma sintaxe que utilizamos para obter o número
      de elementos em uma lista para determinar quantos caracteres uma string
      tem. Vejamos:<p />
      <ClassCodeEditor
        code={`var cadeia = "JavaScript";\n\nfor(var i = 0; i < cadeia.length; i++){\n    output(cadeia[i]);\n}`}
        input={"{}"}
        height="105px"
      />
      <p />
      O código acima irá iterar pela string armazenada na variável <b>cadeia</b> e irá emitir como saída,
      cada um dos caracteres contidos na string "JavaScript".
    </ClassContainer>
  );
}

export default Content;
