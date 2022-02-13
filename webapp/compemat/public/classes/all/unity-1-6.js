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
      Vamos aprender a resolver problemas na página do Compemat.
      <ClassImage
        src="/img/programming.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />{" "}
      <ClassSectionTitle title="Resolução de Problemas" />
      A página do Compemat contém dezenas de problemas de programação para que
      você possa praticar e se desenvolver. A página oferece um ambiente em que
      você consegue testar e submeter seu código em processo de correção
      automático, de maneira a fornecer mais independência aos alunos e alunas.
      <p />
      Vamos dar uma olhada em uma típica{" "}
      <ClassLink href={"exercises/ex_ola_mundo"}>
        página de exercícios
      </ClassLink>{" "}
      do site. Essa página contém, a seguinte estrutura, como podemos ver na
      imagem:
      <p />
      <ClassImage
        src="/img/classes/prob-ex.png"
        pos="center"
        legend="Exemplo de página de Exercícios"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "600px",
          maxWidth: "80%",
        }}
      />
      <p />
      À esquerda temos o enunciado do problema. Você deve ler com calma e
      atenção o enunciado, afim de compreender o problema proposto e conseguir
      desenvolver a solução. Alguns problemas são de programação, e exploram
      aspectos comuns do desenvolvimento de algoritmos. Outros problemas terão
      um enfoque matemático, e muitos deles serão adaptados de questões do ENEM.
      <p />
      À direita temos a nossa mini IDE (ambiente integrado de desenvolvimento).
      Na parte superior temos um editor de texto que nos ajuda a desenvolver
      nossos códigos e que automaticamente colore o texto de trechos de código,
      aumentando a legibilidade do código. Abaixo, temos um terminal, onde as
      saídas dos nossos programas aparecem. No terminal também aparecem as
      mensagens de correção ou erro que vão nos ajudar a verificar se o código
      está correto ou não.
      <p />
      Para se beneficiar do modelo de auto correção da página, é necessário
      sempre codificar suas soluções utilizando as funções <b>input</b> para
      realizar as entradas e <b>output</b> para realizar a saída dos dados.
      Utilizando essas funções, seu código pode ser executado e testado
      automaticamente. Sua solução ser executada várias vezes, em cada um delas
      ele será submetido a um conjunto de entradas, e ele deve produzir como
      resposta um conjunto de saídas iguais ou muito próximas às esperadas.
      <p />
      Todo exercício ou problema na página possui um conjunto de casos de teste.
      Cada caso de teste contém um conjunto de entradas nomeadas. Essas entradas
      serão acessadas em seu código através da função <b>input</b>. No
      enunciado, sempre são fornecidas ao menos duas entradas de exemplo e o
      conjunto de saídas que seu programa deve produzir para cada caso de teste.
      O código será considerado correto se emitir as saídas, como específicas no
      final do enunciado do exercício.
      <p />
      Seu código será testado automaticamente com outras entradas que não
      necessariamente aparecem no enunciado. Para que seu código seja
      considerado correto, ele deve funcionar em todos os casos de teste, mesmo
      os que não estão aparecendo.
      <p />
      Para identificar os nomes das entradas, basta ler com calma o enunciado.
      Os nomes das entradas estão escritos em negrito. Toda descrição de
      problema também possui tres seções, a saber:
      <ul>
        <li>
          <b>Entradas</b>: Onde cada entrada do problema, junto com seu nome é
          especificada.{" "}
        </li>
        <li>
          <b>Saída</b>: Onde o conjunto de saídas que seu programa deve emitir
          para cada caso de teste é especificado.{" "}
        </li>
        <li>
          <b>Exemplos</b>: Seção que contém um conjunto de geralmente 2 exemplos
          de casos de teste, com exemplos de entradas e as suas respectivas
          saídas esperadas.{" "}
        </li>
      </ul>
      <p />
      Nó código, para realizar a entrada dos dados basta utilizar a função{" "}
      <b>input</b>. Entre parenteses e aspas (simples ou duplas) deve estar o
      nome da entrada. O comandos de entrada devem estar sempre em uma estrutura
      de associação. Isto é, você deve declarar uma variável e imediatamente
      atribuir a ela o valor da entrada. Dessa forma você será capaz de utilizar
      o dado da entrada em seu código.
      <p />
      Seu programa deve realizar algum processamento e produzir uma saída.
      Usualmente, você irá armazenar o resultado do seu processamento em uma
      variável de saída e irá chamar a função <b>output</b> seguida do nome da
      sua variável de saída entre parênteses. Os nomes das variáveis de entrada
      e saída são totalmente livre e de escolha do aluno ou aluna, contanto que
      sigam as regras para nomes de variáveis.
      <p />
      Acima do editor de texto, do lado direito, temos dois botões. O botão
      testar (com o símbolo de uma seta) permite com que você execute seu
      programa uma vez, com o primeiro caso de teste (aquele que aparece em
      primeiro lugar no exemplo do enunciado). O botão de teste permite com que
      você verifique se seu código está executando (isto é, se não possui nenhum
      erro de sintaxe), e se é capaz de dar uma resposta correta a pelo menos um
      dos casos de teste.
      <p />
      O segundo botão (Enviar Para Correção) permite o envio do seu código para
      correção. Esse botão irá realizar várias coisas. A primeira delas será
      executar seu código com todos os casos de teste cadastrados na página.
      Eles variam entre 4 e em alguns casos 10. Para cada um deles,
      registraremos o que seu programa emitiu e qual era o resultado esperado.
      Ao final, uma janela contendo o relatório de execução, mostrando os casos
      testados, em quais o seu programa acertou e quais errou. Um exemplo de
      relatório é exibido abaixo:
      <p />
      <ClassImage
        src="/img/classes/prob-correcao.png"
        pos="center"
        legend="Exemplo de relatório de correção"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "600px",
          maxWidth: "80%",
        }}
      />
      <p />
      Outro aspecto importante é que realizamos o registro do envio do seu
      código e você pode acessar estatísticas de uso da página no seu perfil de
      usuário. Naturalmente, esse registro só é realizado para usuários
      cadastrados e logados na página.
      <p />
      <ClassSectionTitle title="Exemplo" />
      Vamos a um exemplo de como resolver um problema. Tomemos o primeiro
      problema que você irá encontrar no Compemat, o{" "}
      <ClassLink href={"/exercises/ex_ola_mundo"}>Olá, Mundo.</ClassLink>. Neste
      problema, temos uma única entrada chamada <b>nome</b>. O seu objetivo aqui
      é, dado a entrada <b>nome</b>, produzir uma mensagem personalizada dando
      um Olá bastante amigável. Vejamos a solução:
      <p />
      <ClassCodeEditor
        code={`var nome = input("nome");\nvar saida = "Olá, " + nome;\noutput(saida);`}
        height="90px"
      />
      <p />
      Na linha 1 temos a entrada da de <b>nome</b> sendo feita. Veja que
      armazenamos a entrada em uma variável de mesmo nome. Isso é aconselhável,
      pois irá simplificar seu entendimento, já que as entradas do problema
      serão acessadas por variáveis de mesmo nome. Porém, isso não se trata de
      obrigação. Lembre-se de que o nome das variáveis é livre e pode ser
      determinado a gosto do aluno ou aluna.
      <p />
      Na segunda linha realizamos uma concatenação de strings. O operador +,
      quando aplicados a variáveis do tipo string, cria um novo texto que contém
      os dois textos combinados. No caso, estamos combinando uma string literal
      (constante) "Olá, ", com uma parte variável, que veio diretamente de nossa
      entrada. O resultado é salvo na variável chamada de saída. Veja que esse
      nome também é arbitrário, e pode ser definido de acordo com sua vontade.
      Mesmo assim procure sempre dar nomes significativos para suas variáveis.
      Isso fará com que seu programa seja mais legível.
      <p />A terceira e última linha contém a saída, feita com a função{" "}
      <b>output</b>. Nós passamos entre parênteses a nossa variável <b>saida</b>{" "}
      que contém a string com a mensagem desejada. Devemos emitir a saída para
      que o programa consiga ser corrigido automaticamente. Ao testar o programa
      você verá que ele irá emitir as saída: "Olá, Maria" no terminal. Essa
      mensagem será seguida por uma mensagem indicando que a saída está correta.
      <p />
      Perceba que isso não significa necessariamente que seu código está correto
      e que irá dar respostas corretas em todos os casos de teste, a única coisa
      que sabemos ao testar o código como uma entrada e receber a indicação de
      que o resultado está correto, e de que o programa consegue ser executado
      em parte e que emitiu a saída correta para o primeiro caso de testes.
      <p />
      Sugerimos que você copie o código apresentado e o teste na página do
      problema{" "}
      <ClassLink href={"/exercises/ex_ola_mundo"}>Olá, Mundo.</ClassLink>. Teste
      o programa e o submeta para a correção e veja a saída do relatório. Você
      também pode editar o código, fazendo com que ele produza resultados
      errados. Submeta o código errado e verifique como é saída do teste e da
      correção para ir se habituando.
      <p />
      Agora que somos capazes de enviar problemas para a correção na página.
      Vamos aprender um pouco mais sobre como resolver os possíveis erros que
      podemos cometer enquanto estamos desenvolvendo nosso código. Até a próxima
      seção.
    </ClassContainer>
  );
}

export default Content;
