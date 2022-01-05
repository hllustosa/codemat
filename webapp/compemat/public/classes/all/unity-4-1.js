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
      Até o momento, todas as variáveis que utilizamos conseguem armazenar um
      único valor. Quando temos uma variável numérica, ela contém um único
      número, quando temos uma variável booleana ou lógica, esta contém um único
      valor verdade. Porém, existem situações em que precisamos lidar com grupos
      de valores fortemente relacionados. Nestas situações utilizamos as
      chamadas estruturas de dados, como listas, para armazenar conjuntos de
      dados relacionados em uma única variável.
      <p />
      <ClassSectionTitle title="Listas" />
      Em JavaScript, podemos facilmente criar uma lista através da seguinte
      sintaxe:
      <p />
      <ClassCodeEditor
        code={`var lista = [1, 2, 3, 4];`}
        input={'{}'}
        height="55px"
      />
      <p />
      Essa lista contém 4 valores inteiros. Definimos uma lista literal dessa
      forma, colocamos um conjunto de elementos entre colchetes e separados por
      vírgula. Estamos armazenando a lista em uma variável chamada lista. Essa
      variável difere de todas que vimos até o momento, ela contém um valor só e
      sim 4 valores diferentes: 1, 2, 3, 4.
      <p />
      Existem algumas sintaxes diferentes que devemos seguir para acessar e ler
      o valor dos variáveis nessa lista. Por exemplo, vamos supor que queremos
      acessar realizar a saída do primeiro elemento das listas:
      <p />
      <ClassCodeEditor
        code={`var lista = [1, 2, 3, 4];\noutput(lista[0]);`}
        input={'{}'}
        height="55px"
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
      acessar o primeiro elemento de uma lista devemos usar o índice zero. Se
      quisermos acessar o último elemento, devemos acessar uma posição é igual
      ao número total de elementos na lista menos um, como temos 4 elementos
      nessa lista, devemos acessar a posição 3 (4 – 1). Faça o teste e troque o
      valor por 0 por 3 no código acima e veja que o valor a ser impresso será o
      4, isto é, o último elemento da lista.
      <p />
      O mesmo mecanismo pode ser utilizado para escrever valores em posições
      específicas da lista.
      <p />
      <ClassCodeEditor
        code={`var lista = [1, 2, 3, 4];\nlista[0] = 10;\noutput(lista[0]);`}
        input={'{}'}
        height="75px"
      />
      <p />
      Veja que nesse caso colocamos o acesso à lista do lado esquerdo ao sinal
      de atribuição. Isso significa que você está escrevendo ou armazenando o
      valor em uma determinada posição da lista. Execute o trecho de código
      acima e verifique o valor 10 será emitido como saída. Fique a vontade para
      alterar os valores (índice da lista, valor armazenado na variável) e ver
      os resultados.
      <p />
    </ClassContainer>
  );
}

export default Content;
