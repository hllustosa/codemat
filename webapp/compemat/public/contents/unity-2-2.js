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
      Nesta seção vamos finalmente aprender a utilizar a estrutura de controle
      If (se), com ela, poderemos criar softwares bem mais poderosos capazes de
      ter comportamentos completamente diferentes de uma execução para outra com
      base no estado de suas variáveis.
      <ClassSectionTitle title="A estrutura de Controle If" />
      A estrutura If é comum na maioria das linguagens de programação. A palavra
      If é equivalente à conjunção Se na língua portuguesa. O If é utilizado
      para criar programas que tenha um comportamento variável, isto é, que
      façam ou não algo em particular dependendo do resultado de uma expressão
      lógica.
      <p />
      As expressões lógicas que aprendemos na seção anterior vão se mostrar
      úteis agora, a maneira como a estrutura de controle If é a seguinte:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("numero é maior que 10");\n}`}
        input={`{\n    "numero":11\n}`}
        height="105px"
      />
      <p />
      Vejamos como este código funciona. Na primeira linha temos código já
      conhecido. Estamos realizando a entrada e armazenando o resultado na
      variável numero. A partir da linha 3 temos a estrutura de controle if.
      <p />
      O if indica que existirá código que deve ser executado de forma
      condiciona, isto é, se e somente se uma determinada condição for
      satisfeita. Que condição é essa? Bem, ai que entra a expressão lógica:
      numero &gt; 10. Essa expressão será avaliada como verdadeira ou falsa
      dependendo do valor contido na variável numero. Se o valor em numero for
      maior que 10, a expressão lógica será avaliada como verdade e portanto o
      código entre chaves será executado.
      <p />
      Caso contrário, e o valor contido em numero for menor ou igual a 10, a
      expressão lógica será avaliada como falso e o código entre chaves será
      ignorado. Clique aqui para testar esse código. Aproveite para testar o
      código, altere o valor da entrada e veja a saída produzida nos casos em
      que numero é maior ou menor que 10.
      <p />
      <ClassSectionTitle title="Blocos de código e indentação" />
      <p />
      Perceba que pela primeira vez estamos lidando com os chamados blocos de
      código. Os blocos de código são colocados entre as chaves. Dentro deles
      podemos ter várias linhas de código. Os blocos de código são muito úteis
      para determinar o escopo de aplicação de uma estrutura de controle, como o
      comando if. Para entender melhor vamos olhar este exemplo:
      <p />
      <ClassCodeEditor
        code={`var numero = input("numero");\n\nif(numero > 10) {\n    output("Esta linha é executada caso numero > 10");\n    output("Esta linha também é executada caso numero > 10");\n}\noutput("Essa linha é sempre executada ");`}
        input={`{\n    "numero":11\n}`}
        height="150px"
      />
      <p />
      Neste exemplo temos a mesma estrutura de controle que no anterior, mas
      note que colocamos duas linhas de código entre as chaves. Perceba também
      que as linhas de código que estão entre as chaves têm um recuo maior a
      partir da direita. Esse recuo é chamado de indentação. Sempre que temos um
      bloco de código devemo indentar as linhas dentro desse bloco. Essa é uma
      prática absolutamente necessária para manter o código limpo e legível. O
      código irá funcionar mesmo sem a indentação pois o espaçamento é ignorado
      pelo interpretador, mas para que outros devs consigam entender seu código
      de forma correta é fundamental indentá-lo. Você deve colocar alguns
      espaços (ou tabulações) antes das linhas dentro do bloco de forma com que
      as linhas do bloco fiquem alinhadas.
      <p />
      Agora perceba outra coisa em relação a esse código. Temos uma linha após o
      fechamento das chaves. Essa linha está fora do bloco de código, e
      portanto, não está indentada. Como ela está fora do bloco associado ao
      comando if, isso significa que ela sempre será executada. Apenas as linhas
      dentro do bloco de código abaixo do if têm sua execução condicionada à
      avaliação da expressão lógica. As linhas externas ao bloco não estão sobre
      a influência do if. Execute o código variando o valor de entrada e observe
      como a última linha sempre é executada independente do valor de numero.
      <p />
      Na próxima seção vamos expandir nosso conhecimento sobre a estrutura if e
      entender como funcionam os comandos if com else.
      <p />
    </ClassContainer>
  );
}

export default Content;
