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
      Iterar significa executar um procedimento que acessa cada um dos elementos
      de uma lista (ou alguma outra coleção, ou estrutura de dados). Cada acesso
      é ou execução do laço de repetição que realiza esse acesso é chamado de
      iteração. Vamos ver um exemplo de código em que emitidos como saída cada
      um dos elementos da lista:
      <p />
      <ClassCodeEditor
        code={`var nomes = ["João", "Maria", "Pedro", "Ana"];\n\nfor(var i = 0; i < nomes.length; i++){\n    output(nomes[i]);\n}`}
        input={"{}"}
        height="105px"
      />
      <p />
      Nesse exemplo de código estamos fazendo algo bastante interessante.
      Primeiramente criamos uma lista de cadeias de caracteres chamada nomes.
      Uma lista pode ser composta por elementos de diversos tipos, inclusive é
      possível que uma lista tenha até mesmo valores de tipos diferentes em
      posições diferentes.
      <p />
      Temos também um laço de repetição controlado por variável i, inicializada
      com 0. O teste lógico desse laço de repetição tem uma particularidade,
      onde fazemos algo inédito até o momento. Nós utilizamos nomes.length para
      obter o tamanho da lista, isto é, seu número de elementos. Essa sintaxe
      com o nome da lista seguido de um ponto e a palavra length (que significa
      comprimento em inglês) é a maneira usual para verificar quantos elementos
      existem em uma lista.
      <p />
      No nosso exemplo temos uma lista literal, com todos os elementos definidos
      no momento em que criamos o código, mas como veremos a seguir, podemos
      adicionar o remove elementos da lista de maneira dinâmica durante a
      execução do nosso programa. Por isso, precisamos de uma forma também
      dinâmica de saber quantos elementos ainda existem na lista.
      <p />
      Se verificamos o que ocorre no laço de repetição vamos ver que estamos
      acessando posições na lista utilizando a variável de controle. Isso também
      é uma novidade, pois até o momento só utilizamos literais para acessar as
      posições de uma lista. Podemos e geralmente acessamos posições de listas
      utilizando variáveis numéricas (inteiras).
      <p />
      O que esperamos desse código? Inicialmente temos uma lista com 4
      elementos, de forma que quando começarmos o nosso laço de repetição, a
      expressão lógica utilizada no controle desse laço será i &lt; nomes.length
      ou i &lt; 4. A variável i é iniciada com o valor 0 e então executamos o
      laço pela primeira vez, pois 0 é menor que 4. Nesse caso iremos acessar a
      posição 0, ou seja, a primeira posição da lista e iremos emitir como saída
      o valor "João". Logo em seguida o incremento será executado
      <p />
    </ClassContainer>
  );
}

export default Content;
