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
      Agora que sabemos como acessar à memória através de variáveis, e
      entendemos como podemos criar expressões para realizar operações diversas,
      vamos aprender a fazer com que o nosso código se comunique com o mundo
      exterior.
      <ClassImage
        src="/img/io.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Entrada e Saída" />
      Na arquitetura de von Neumann, os dispositivos de entrada e saída se
      mostram como uma abstração importante para todo e qualquer componente que
      permita com que dados entrem e saiam do computador. Essa abstração
      necessita de algum tipo de contrapartida nas linguagens de programação,
      para permitir com que dados sejam inseridos e produzidos pelos programas
      que criamos.
      <p />
      Existem incontáveis maneiras através das quais nossos softwares executam
      entrada e saída. Uma maneira bastante rudimentar de interagir com software
      é através dos terminais e linhas de comando. Você já deve ter aberto as
      ferramentas de linha de comando de sistemas operacionais como o Windows ou
      Linux. Nessas ferramentas, não temos interfaces gráficas. Sem janelas,
      botões, ponteiros de mouse e figuras bonitas. Nessas interfaces, digitamos
      texto em uma tela de fundo escuro para executar nossos programas e
      recebemos como saída também texto.
      <p />
      <ClassImage
        src="/img/command-line.png"
        pos="center"
        legend="Exemplo de Interface Textual em um Sistema Linux(Terminal)"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      Os softwares que vamos criar nesse curso se assemelham aos softwares que
      utilizam apenas a linha de comando. Quando estamos aprendendo a programar,
      geralmente ficamos um tempo apenas criando programas mais simples que não
      utilizam interfaces gráficas ou tecnologias mais modernas. Nos preocupamos
      com a lógica da programação e com a capacidade de interpretar as entradas
      de dados e produzir as saídas corretas e deixamos as interfaces gráficas
      de lado. Isto é necessário para diminuir a complexidade dos exemplos
      iniciais. Vale a máxima: é preciso engatinhar antes de andar, e andar
      antes de correr.
      <p />
      Mas temos algo para te deixar um pouco mais feliz. No Comp&Mat você terá
      acesso a uma ferramenta que vai simplificar o processo de entrada e saída
      de dados. Nossa ferramenta online vai simular um simples terminal e linha
      de comando e os dados que seus programas emitirem vão aparecer nesse
      terminal. Além disso, as entradas para os problemas são automatizadas, de
      forma que você irá apertar um botão e seu código será testado
      automaticamente com as entradas corretas de acordo com cada problema.
      <p />
      Essa facilidade vai fazer com que você não tenha que executar seu código
      manualmente, nem ficar digitando a mesma entrada dezenas de vezes até seu
      programa estar correto. Se você pretende continuar no caminho para se
      tornar um desenvolvedor ou desenvolvedora, em algum momento você vai ter
      que abrir mão desse conforto e colocar a mão na massa. Mas não há mal de
      facilitar a nossa vida enquanto estamos aprendendo, não é mesmo?
      <p />
      <ClassSectionTitle title="Comandos Input e Output" />
      No Comp&amp;Mat você poderá programar em dois ambientes distintos. Nós
      temos nossas páginas de exercícios que são o ambiente onde você pode
      programar e testar se seu código está de correto, e a IDE, um ambiente em
      que você pode fazer uma programação estilo livre e testar qualquer código
      que quiser. Uma IDE ou (Integrated Development Environment ou ambiente
      integrado de desenvolvimento) é um software que agrupa várias ferramentas
      que programadores utilizam para desenvolver seus programas.
      <p />
      As IDEs contém um editor de texto onde um dev (developer, desenvolvedor ou
      desenvolvedora de software) pode digitar código. Um conjunto de
      ferramentas que automatizam o processo de executar, testar e depurar o
      código-fonte. A título de curiosidade, depuração é um processo que
      consiste em executar o software de forma controlada e examinar seu
      comportamento e variáveis à medida que ele executa. Além disso, as IDEs
      oferecem ferramentas para análise de código, de desempenho, segurança,
      controle de versões. IDEs são softwares altamente especializados que
      programadores utilizam diariamente.
      <p />
      Você pode acessar a nossa{" "}
      <ClassLink href="/ide">IDE embutida no site Comp&amp;Mat</ClassLink>. Na
      verdade, é um exagero chamar o que temos de IDE. Trata-se apenas de uma
      página onde você consegue digitar o seu código, determinar as entradas,
      executar e verificar as saídas. Existe a possibilidade também de você
      compartilhar um link com seu código para que outra pessoa possa ver o que
      você está fazendo. É bem legal, mas não chega aos pés do que uma IDE
      profissional consegue fazer. Porém, para os propósitos do nosso curso, é
      uma ferramenta que irá nos ajudar bastante.
      <p />
      <ClassImage
        src="/img/ide.png"
        pos="center"
        legend="IDE Comp&Mat"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p />
      Dentro da nossa IDE, você conseguirá executar dois comandos especiais.
      Esses comandos não fazem parte da linguagem JavaScript, são funções
      personalizadas que estarão disponíveis a partir do código na IDE. Quando
      programamos, sempre utilizamos em nossos programas, códigos criados por
      outras pessoas. Muitos devs empacotam seus códigos na forma de
      bibliotecas, que são importadas em códigos de outros softwares. Você não
      vai ter que fazer nada especial para ter acesso aos comandos que fazem
      entrada e saída de dados, eles já vão estar automaticamente disponíveis
      para você no site. Em um ambiente real de desenvolvimento, é sempre
      necessário fazer com que o seu código utilize uma biblioteca para realizar
      entrada e saída de dados.
      <p />
      Os dois comandos que utilizamos são o input (entrada) e o ouput (saída).
      Para fazer o input dos dados você vai precisar utilizar uma linha de
      código com esse formato:
      <p />
      <ClassCodeEditor
        code={`var nome = input("nome");`}
        input={'{\n   "nome":"Hermano"\n}'}
        height="55px"
      />
      <p />
      Antes de explicarmos em detalhes essa linha, vamos atentar para um detalhe
      da IDE. Perceba que temos à direita um pequeno editor de texto onde
      poderemos colocar as entradas para o nosso programa. Nessa caixa, podemos
      colocar dados em um formato conhecido como JSON. O JSON é um formato muito
      utilizado para representar dados de uma maneira compátivel com o
      JavaScript. Nesse caso teremos um JSON com algumas chaves de entrada
      nomeadas seguidos de valores. Exemplo:
      <p />
      <ClassCodeEditor
        code={`{\n   "nome":"Hermano"\n}`}
        input={`{\n   "nome":"Hermano"\n}`}
        height="65px"
      />
      <p />
      Todo JSON começa e termina com chaves. Nas chaves podemos colocar uma
      lista de pares no formato: "chave":"valor". Dessa maneira é possível
      especificar entradas para o nosso código. No exemplo, temos um JSON com
      uma única chave chamada <b>nome</b> e cujo <b>valor</b> é Hermano. Note
      que tanto o nome da chave quanto o valor são strings (cadeias de
      caracteres), por isso precisam estar entre aspas, neste caso duplas.
      <p />
      Agora voltamos ao nosso exemplo:
      <p />
      <ClassCodeEditor
        code={`var nome = input("nome");`}
        input={'{\n   "nome":"Hermano"\n}'}
        height="55px"
      />
      <p />O comando de input terá o seguinte forma. Você usará sempre um
      comando de atribuição com declaração de variável. Você pode dar qualquer
      nome para a variável, contanto que o nome esteja de acordo com as regras.
      Entretanto, será mais fácil se o nome da variável for igual ao nome da
      entrada que você especificou no JSON. Após o sinal de igual (=) você irá
      colocar o nome input, e entre parênteses e aspas, você irá colocar o nome
      da entrada cujo valor você quer obter. Se você executar o código acima
      (clicando clicando no botão <b>Executar</b> para abrir a IDE e depois
      clicando no botão com símbolo de <b>Play</b>), você não verá nenhum
      resultado, pois seu programa apenas faz a entrada e não faz nenhuma saída.
      Para ver o comportamento completo, é necessário completar nosso código.
      <p />
      <ClassCodeEditor
        code={`var nome = input("nome");\nvar mensagem = "Olá "+ nome;\noutput(mensagem);`}
        input={'{\n   "nome":"Hermano"\n}'}
        height="75px"
      />
      <p />
      Agora sim, temos um exemplo completo que faz as três coisas que um
      programa precisa fazer. A primeira é a entrada de dados, no caso o input
      <b>nome</b> armazenado em uma variável. Após isso, criamos uma nova
      variável chamada <b>mensagem</b>. Essa variável é atribuída ao resultado
      de uma expressão. Essa é uma expressão muito interessante, pois ela
      realiza a concatenação de strings. Concatenar envolve combinar duas
      cadeias de caracteres e dar origem a uma nova que possui o texto das
      outras duas. Nós utilizamos o operador +, que, em geral, serve para somar
      números. Porém, em JavaScript, e em diversas outras linguagens, esse
      operador também pode ser utilizados em pares de cadeias de caracteres para
      dar origem a strings concatenadas.
      <p />
      Finalmente, na terceira linha temos o comando output. O comando output
      permitirá que façamos a saída de dados permitindo a visualização dos dados
      gerados. Colocaremos entre parênteses uma variável ou literal ou expressão
      que contenha o dado que queremos visualizar na saída.
      <p />
      No caso do nosso programa, a saída do mesmo será:
      <p />
      Olá Hermano
      <p />
      Sugiro que experimente executar o código para verificar os resultado. Faça
      alterações na entrada no painel à direita da IDE. Você pode colocar seu
      nome, ou de um amigo ou amiga. Você também pode mudar a mensagem, ao invés
      de "olá", coloque um "bom dia", ou "boa noite", ou mesmo uma mensagem
      engraçada.
    </ClassContainer>
  );
}

export default Content;
