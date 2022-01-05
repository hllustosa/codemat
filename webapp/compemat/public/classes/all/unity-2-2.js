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
      Nesta seção vamos finalmente aprender a utilizar a estrutura de controle{" "}
      <b>if</b> (se). Com ela, poderemos criar softwares mais poderosos, capazes
      de ter comportamentos completamente diferentes dependendo do estado de
      suas variáveis.
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
      <ClassSectionTitle title="A estrutura de Controle If" />A estrutura{" "}
      <b>if</b> é comum na maioria das linguagens de programação. A palavra{" "}
      <b>if</b> é equivalente à conjunção <b>Se</b> na língua portuguesa. O{" "}
      <b>if</b> é utilizado para criar programas que tenham um comportamento
      variável, isto é, que façam ou não algo em particular dependendo do
      resultado de uma expressão lógica.
      <p />
      As expressões lógicas que aprendemos na seção anterior vão se mostrar
      úteis agora. Vamos a um exemplo de programa utilizando a estrutura de
      controle <b>if</b>:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("numero é maior que 10");\n}`}
        input={`{\n    "numero":11\n}`}
        height="105px"
      />
      <p />
      Vejamos como este código funciona. Na primeira linha temos um comando já
      conhecido. Estamos realizando uma entrada de dados e armazenando o
      resultado na variável <b>numero</b>. A partir da linha 3, temos a
      estrutura de controle <b>if</b>.
      <p />O <b>if</b> indica que existirá código que deve ser executado de
      forma condicional, isto é, se e somente se uma determinada condição for
      satisfeita. Que condição é essa? Bem, ai entra a expressão lógica:{" "}
      <b>numero &gt; 10</b>. Essa expressão será avaliada como verdadeira ou
      falsa dependendo do valor contido na variável numero. Se o valor em{" "}
      <b>numero</b> for maior que 10, a expressão lógica será avaliada como
      verdadeira e portanto o código entre chaves será executado.
      <p />
      Caso contrário, isto é, se o valor contido em numero for menor ou igual a
      10, a expressão lógica será avaliada como falsa e o código entre chaves
      será ignorado. Aproveite para testar o código (clicando no botão
      Executar), altere o valor da entrada e veja a saída produzida nos casos em
      que numero é maior ou menor que 10.
      <p />
      <ClassSectionTitle title="Blocos de código e indentação" />
      <p />
      Perceba que pela primeira vez estamos lidando com os chamados blocos de
      código. Os blocos de código são um conjunto de comandos colocados entre
      &#123; &#125; (chaves). Dentro deles podemos ter várias linhas de código.
      Os blocos de código são muito úteis para determinar o escopo da aplicação
      de uma estrutura de controle, como o <b>if</b>. Para entender melhor vamos
      olhar este exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("Esta linha é executada caso numero > 10");\n    output("Esta linha também é executada caso numero > 10");\n}\n\noutput("Essa linha é sempre executada ");`}
        input={`{\n    "numero":11\n}`}
        height="150px"
      />
      <p />
      Neste exemplo, temos a mesma estrutura de controle que no anterior, mas
      note que colocamos duas linhas de código entre as chaves. Perceba também
      que as linhas de código que estão entre as chaves têm um recuo maior a
      partir da direita. Esse recuo é chamado de indentação. Sempre que temos um
      bloco de código, devemos indentar as linhas dentro desse bloco.
      <p />
      Essa é uma prática absolutamente necessária para manter o código limpo e
      legível. O código irá funcionar mesmo sem a indentação, pois o espaçamento
      é ignorado pelo interpretador. Porém, para que outros devs consigam
      entender seu código de forma correta, é fundamental indentá-lo. Você deve
      colocar alguns espaços (ou tabulações) antes das linhas dentro do bloco de
      forma que as linhas do bloco fiquem alinhadas.
      <p />
      Agora perceba outra coisa em relação a esse código. Temos uma linha após o
      fechamento das chaves. Essa linha está fora do bloco de código, e
      portanto, não está indentada. Como ela está fora do bloco associado ao
      <b>if</b>, isso significa que ela sempre será executada. Apenas as linhas
      dentro do bloco de código abaixo do <b>if</b> têm sua execução
      condicionada à avaliação da expressão lógica. As linhas externas ao bloco
      não estão sobre a influência do <b>if</b>. Execute o código variando o
      valor de entrada e observe como a última linha sempre é executada
      independente do valor de <b>numero</b>.
      <p />
      Na próxima seção vamos expandir nosso conhecimento sobre a estrutura{" "}
      <b>if</b> e entender como funcionam os comandos <b>if</b> com <b>else</b>.
      <p />
    </ClassContainer>
  );
}

export default Content;
