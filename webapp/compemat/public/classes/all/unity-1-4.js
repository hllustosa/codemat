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
      Após intermináveis parágrafos com bastante discussão conceitual, vamos
      ficar um pouco mais práticos! Nesta seção, vamos ver nossos primeiros
      exemplos de códigos. Você também será apresentado a um dos conceitos mais
      fundamentais na programação, as variáveis.
      <ClassImage
        src="/img/variables.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Estrutura do Código" />
      As linguagens de programação têm uma sintaxe, isto é, o conjunto de regras
      de como se formam as expressões, bastante rígida. Ao contrário da
      linguagem natural, em que mesmo se você cometer um erro ou outro, ainda
      assim é possível se comunicar de maneira satisfatória, nas linguagens de
      programação, um único erro faz com que todo o programa não consiga ser
      executado.
      <p />
      Usamos vários símbolos, caracteres e palavras específicas em um
      código-fonte. Não podemos errar na hora de digitarmos essas palavras,
      senão, nosso programa não irá funcionar. Para nossa sorte, o interpretador
      irá nos avisar caso encontre um erro em uma linha de código específica, e
      nós poderemos analisá-la para poder corrigir esse erro.
      <p />
      Vamos explorar algumas ideias importantes para entender como o
      código-fonte de uma aplicação funciona. Mais especificamente, um código em
      JavaScript. Um programa em JavaScript vai ser composto por um conjunto de
      linhas. Você pode pensar que cada linha do programa representa um comando
      que será executado pelo computador.
      <p />
      O código é executado na ordem em que as instruções serão escritas no
      texto, de cima para baixo. Isto é, a primeira linha de código será
      executada, depois a segunda e assim sucessivamente. Existem situações em
      que conjuntos de linhas são pulados ou mesmo executados múltiplas vezes,
      mas para os nossos primeiros exemplos, podemos assumir que cada linha será
      executada uma única vez e todas serão executadas em ordem.
      <p />
      <ClassSectionTitle title="Variáveis" />
      Uma das primeiras coisas que precisamos entender para conseguirmos
      programar em JavaScript é o conceito de variável. Se recordamos a
      arquitetura de von Neumann, vamos notar que ela contém um componente
      presente em todos os computadores, a memória. O hardware da memória do
      computador é composto pelos chamados{" "}
      <ClassToolTip
        content={{
          title: "Pente de Memória",
          text: `
          A Memória de acesso randômico (português brasileiro) ou Memória de acesso aleatório (português europeu) (do inglês Random Access Memory, frequentemente abreviado para RAM) é um tipo de memória que permite a leitura e a escrita, utilizada como memória primária em sistemas eletrônicos digitais.
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/RAM_n.jpg/330px-RAM_n.jpg",
          link: "https://pt.wikipedia.org/wiki/Mem%C3%B3ria_de_acesso_aleat%C3%B3rio",
        }}
      >
        pentes de memória
      </ClassToolTip>
      , compostos por módulos com um grande número de capacitores microscópicos
      capazes de armazenar carga. A existência ou não da carga em um desses
      capacitores representa um bit de informação. 
      <p />
      Na prática, a memória do computador é um grande armazém desses bits em
      posições numeradas. Os números que indicam a posição dos bits e bytes na
      memória são chamados endereços. Quando o processador do computador quer
      acessar à memória, ele precisa ter em seus registradores internos um
      número que identifica o endereço ou posição na memória em que o dado está.
      <p />
      Todo esse processo de se preocupar com a memória e endereços de memória é
      bastante complicado. Por isso, as linguagens de programação oferecem uma
      abstração que facilita a vida dos programadores. Ao invés de nos
      preocuparmos com endereços de memória diretamente, nós utilizamos o
      conceito de variável para escrever e ler dados na memória do computador.
      <p />
      Uma variável é como uma “caixa” que existe na memória do computador. Essa
      caixa tem um nome dado pelos programadores. É como se colocássemos um
      rótulo em uma parte da memória do computador para nos lembrarmos do que
      estamos armazenando ali. Umas das tarefas mais fundamentais que fazemos ao
      programar é estabelecer quais variáveis precisamos em nosso código e quais
      serão seus nomes.
      <p />
      As variáveis têm um formato. Por este motivo você pode expandir nossa
      metáfora e pensar na memória do computador como uma caixa de brinquedo com
      buracos feitos com bases em formas geométricas. Para encaixar um dado (que
      seria como uma peça com uma forma geométrica) você precisa encaixá-lo numa
      entrada com o formato correto. Essas formas são chamadas de tipos, e cada
      variável em JavaScript tem um tipo que depende do dado que foi armazenado
      nela.
      <p />
      Os três principais tipos de variáveis com os quais iremos lidar no curso
      são:
      <p />
      <ul>
        <li>
          <b>Numéricas:</b> Variáveis utilizadas para armazenar números inteiros
          e reais.
        </li>
        <li>
          <b>Cadeias de Caracteres ou Strings:</b> São variáveis utilizadas para
          armazenar textos. O termo string é bastante utilizado no mundo da
          programação para se referir às variáveis que armazenam textos, por
          este motivo é importante se familiarizar com ele.
        </li>
        <li>
          <b>Lógicas ou booleanas:</b> Uma variável lógica consegue armazenar o
          resultado de uma operação lógica cujo valor pode ser verdadeiro ou
          falso. Essas variáveis podem ter armazenadas o valor true (verdadeiro)
          ou false (falso). A utilidade desse tipo de variável ficará mais
          evidente à medida que avançamos no curso.
        </li>
      </ul>
      Variáveis precisam de um nome, esse nome é dado pelo programador sendo
      utilizado no código toda vez que queremos acessar a variável para leitura
      ou escrita de dados. Existe um conjunto de regras que precisamos seguir
      para dar nome a uma variável em JavaScript.
      <p />
      <ul>
        <li> Nomes de variáveis são uma sequência de letras e números.</li>
        <li>
          {" "}
          Nomes de variáveis em JavaScript não podem conter espaços ou letras
          acentuadas.
        </li>
        <li>
          {" "}
          Nomes de variáveis não podem conter caracteres especiais como: , . *
          &amp;. As exceções são _ (underscore) e $ (cifrão).
        </li>
        <li>
          Nomes de variáveis não podem começar com números, apenas letras, _ e
          $.
        </li>
        <li>
          Existe um conjunto de nomes proibidos, pois são as chamadas palavras
          reservadas da linguagem. As palavras reservadas são termos específicos
          utilizados nas estruturas de controle da linguagem, por isso não
          devemos dar nomes às nossas variáveis que conflitem com esses termos.
          Você pode consultar a lista completa desses termos{" "}
          <b>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.w3schools.com/js/js_reserved.asp"
            >
              neste link
            </a>
          </b>
          .
        </li>
      </ul>
      <p />
      Vamos a alguns exemplos, o nome: "valor" é válido, assim como os nomes:
      "entrada", "numero", "Teste", "numeroDeDivisores". Valores como:
      "numero_de_divisores" ou "_valor1" também são nomes válidos. Entretanto,
      "numero de divisores" é inválido, pois contém espaços. Assim como "1valor"
      é inválido, pois começa com um número e não com uma letra, _ ou $.
      <p />
      Os nomes de variáveis em JavaScript são sensíveis às maiúsculas e
      minúsculas. Dessa forma, os nomes "valor" e "Valor" ou mesmo "vAlOr"
      representam variáveis completamente diferentes.
      <p />
      <ClassSectionTitle title="Literais e Constantes" />
      Como explicado anteriormente, o nome variável é utilizado para representar
      uma parte da memória do computador onde colocamos um valor. A palavra
      variável não foi escolhida à toa, pois o valor contido nessa região de
      memória poderá ser alterado a cada execução do programa, ou mesmo várias
      vezes durante uma mesma execução. Damos esse nome às variáveis, pois seus
      valores podem variar, simples assim.
      <p />
      Existem situações em que nós precisamos colocar valores fixos em nosso
      código. Valores que irão ficar na memória do computador, porém não serão
      alterados durante a execução do programa. A esses valores damos os nomes
      de constantes. As constantes podem ser dos mesmos tipos das variáveis,
      numéricas, cadeias de caracteres e lógicas. Para criar uma constante, nós
      colocamos em um nosso código aquilo que chamamos de literal, isto é, um
      texto que representa o dado que queremos representar.
      <p />
      Os literais numéricos são fáceis de identificar. São simplesmente números
      que escrevemos no código. Os literais booleanos ou lógicos são as palavras
      true, ou false que iremos utilizar em alguns momentos específicos. Já as
      cadeias de caracteres literais ou strings, por serem muito flexíveis (uma
      cadeia de caracteres pode possuir qualquer texto), precisam estar
      delimitadas por aspas simples ou aspas duplas. As literais de cadeia de
      caracteres precisam ser limitadas para que o interpretador saiba onde elas
      começam e onde elas terminam.
      <p />
      <ClassSectionTitle title="Comando de Atribuição" />
      Agora que entendemos o que é uma variável e o que um é literal, podemos
      aprender a executar nosso primeiro comando em JavaScript, o chamado
      comando de atribuição. Os comandos de atribuição são utilizados para
      armazenar um valor em uma variável.
      <p />
      Vamos a um comando de exemplo:
      <p />
      <ClassCodeEditor
        code={`var nome_da_variavel = "string literal";`}
        height="55px"
      />
      <p />
      Um comando de atribuição pode começar, ou não, com a palavra reservada{" "}
      <b>var</b>. Essa palavra é utilizada para indicar que estamos declarando a
      variável, isto é, utilizando ela pela primeira vez. Podemos colocar em
      nosso código quantos comandos de atribuição quisermos, porém, o primeiro
      comando de atribuição para cada variável deve obrigatoriamente conter a
      palavra <b>var</b> no começo.
      <p />
      Na sequência teremos o nome da variável. Entre a palavra <b>var</b> e o
      nome da variável deve obrigatoriamente existir um espaço em branco. Após o
      nome da variável iremos utilizar o sinal de igual (=), que nesse caso é
      chamado de <b>operador de atribuição</b>. Esse sinal de igual é utilizado
      para indicar que algum valor deve ser armazenado na variável.
      <p />
      À direita do sinal de igual podemos ter várias estruturas. Podemos colocar
      um literal numérico, uma string (cadeia de caracteres) ou um valor lógico.
      Também podemos colocar expressões, algo que vamos explorar na próxima
      seção. Ao final do comando de atribuição colocamos o ponto e vírgula (;).
      Em geral, é recomendável que cada comando de atribuição no código fique em
      uma linha separada, embora seja possível colocar vários comandos juntos em
      uma mesma linha, pois isso não fere as regras da sintaxe do JavaScript.
      Entretanto, isso fere aquilo que chamamos de boas práticas de programação,
      pois deixa o código mais difícil de ler e entender.
      <p />
      Existe um conjunto de regras que programadores devem seguir que vão muito
      além das regras da linguagem, é aquilo que definimos como boas práticas.
      As boas práticas são um conjuntos de regras que variam conforme a
      linguagem de programação, ambiente e mesmo organizações diferentes. Muitas
      vezes, essas regras são subjetivas ou mesmo arbitrárias. Porém, algumas
      práticas mais básicas são amplamente aceitas.
      <p />
      Uma das boas práticas ais aceitas diz respeito ao nome de variáveis.
      Sempre pense com carinho no nome da variável ao criá-la. Dê às suas
      variáveis <b>nomes significativos</b>, que façam menção a qual dado ela
      está armazenando. Isso vai fazer com que o seu código fique mais legível e
      fácil de entender por parte de outros programadores e por você mesmo no
      futuro.
      <p />
      Vamos a alguns exemplos de comandos de atribuição válidos que podemos ter
      em nosso código:
      <p />
      <ClassCodeEditor
        code={`var variavelAindaNaoDeclarada = 42;`}
        height="55px"
      />
      <p />
      Esse exemplo contém um comando de atribuição cujo nome da variável é
      variavelAindaNaoDeclarada e que terá o valor 42. Esse comando irá falhar
      se em uma linha de código anterior, você já tiver declarado uma variável
      cujo nome seja variavelAindaNaoDeclarada. Vamos a um outro exemplo:
      <p />
      <ClassCodeEditor code={`variavelJaDeclarada = 42;`} height="55px" />
      <p />
      Esse exemplo contém um comando de atribuição de uma variável chamada
      variavelJaDeclarada. Por não conter a palavra a <b>var</b>, esse comando
      só pode ser utilizado se em alguma linha de código anterior a variável
      tiver sido declarada com a palavra <b>var</b> na frente.
      <p />
      <ClassCodeEditor
        code={`var variavelComTexto = "Texto Literal";`}
        height="55px"
      />
      <p />
      Esse comando declara uma nova variável chamada variavelComTexto. Esta será
      uma variável do tipo string e conterá o valor: "Texto Literal".
      <ClassSectionTitle title="Expressões" />
      Podemos utilizar expressões em diversas partes do nosso código, talvez a
      situação mais comum em que utilizamos expressões sejam os comandos de
      atribuição. As expressões serão avaliadas pelo interpretador, que irá dar
      origem a um valor a partir da resolução da expressão. Se colocarmos essa
      expressão à direita do sinal de igual em um comando de atribuição, o
      resultado dessa expressão será armazenado na variável.
      <p />
      Expressões podem ser simples operações aritméticas, como a soma de dois
      valores:
      <p />
      <ClassCodeEditor code={`var resultado = 2 + 2;`} height="55px" />
      <p />
      Nessa expressão temos a soma de dois valores numéricos literais. Essa
      expressão será avaliada durante a execução do código e o valor 4 será
      armazenado na variável resultado. No lugar do sinal de mais podemos
      utilizar diversos operadores aritméticos presentes em JavaScript, tais
      como:
      <p />
      <ul>
        <li>
          <b>+</b> soma
        </li>
        <li>
          <b>-</b> subtração
        </li>
        <li>
          <b>*</b> multiplicação
        </li>
        <li>
          <b>/</b> divisão
        </li>
        <li>
          <b>% </b> resto de divisão inteira
        </li>
        <li>
          <b>**</b> exponenciação
        </li>
        <li>
          <b>++</b> incremento em 1
        </li>
        <li>
          <b>--</b> decremento em 1
        </li>
      </ul>
      A maioria desses operadores é aplicado a pares de números, porém temos
      operadores chamados de unários, como o ++ e o – que são aplicados sobre
      apenas um valor e incrementam o mesmo em 1 ou decrementam em 1
      respectivamente.
      <p />
      Perceba que na expressão anterior utilizamos apenas literais. No lugar de
      literais podemos utilizar variáveis. Por exemplo:
      <p />
      <ClassCodeEditor
        code={`var resultado = 2 + 2;\nvar valor2 = 10 * valor1;`}
        height="90px"
      />
      <p />
      Neste exemplo, primeiramente declaramos uma variável chamada valor1 cujo
      valor armazenado é 10. Na segunda linha a variável valor2 irá receber o
      resultado da multiplicação do valor 10 (literal) com o conteúdo armazenado
      em valor1. Como atribuímos 10 à valor1, o resultado será 10 * 10 ou 100.
      <p />
      Podemos encadear diversos operadores e criar uma expressão tão complicada
      o quanto quisermos, por exemplo:
      <p />
      <ClassCodeEditor
        code={`var valor1 = 10;\nvar valor2 = 9;\nvar resultado = valor1 + valor2/2.0;`}
        height="90px"
      />
      <p />
      Esse trecho de código tem uma expressão com dois operadores, o de soma e
      de divisão. E aqui começam os problemas que muitas pessoas têm com
      precedência de operadores. A convenção matemática utilizada nas linguagens
      de programação é a seguinte. A ordem em que as operações são resolvidas
      dependem da precedência dos operadores. Para os operadores aritméticos a
      ordem de precedência é: primeiro *, / e % (multiplicação, divisão e resto
      de divisão) e em seguida os operadores + e - (soma e subtração). Se os
      operadores em sequência tiverem a mesma precedência, então eles são
      resolvidos da esquerda para direita.
      <p />
      No exemplo de código, mesmo com operador de soma estando mais à esquerda
      que o operador de divisão, pelo fato do operador de divisão possuir maior
      precedência, ele será executado primeiro. Por este motivo, o conteúdo de
      valor2 será dividido por 2.0, o que irá resultado em 4,5 e só em seguida
      4,5 será adicionado à valor1 resultando em 14,5, que será armazenado na
      variável resultado.
      <p />
      Caso precisemos alterar a precedência da avaliação das operações, podemos
      utilizar parênteses. As operações contidas entre parênteses têm maior
      precedência do que as contidas fora. Por este motivo, caso queiramos somar
      antes de dividir, devemos alterar o código para o seguinte:
      <p />
      <ClassCodeEditor
        code={`var valor1 = 10;\nvar valor2 = 9;\nvar resultado = (valor1 + valor2)/2.0;`}
        height="90px"
      />
      <p />
      Neste caso, primeiramente são somados valor1 e valor2, obtendo-se como
      resultado o 19, e depois dividimos este valor por 2,0, obtendo o resultado
      9,5.
      <p />
      Note que no código estamos utilizando uma notação em que os números
      possuem pontos ao invés de vírgulas. Escrevemos 2.0 ao invés de 2,0. Isto
      ocorre, pois, as linguagens de programação foram desenvolvidas com base na
      língua inglesa. Em inglês utilizamos o ponto(.) ao invés da vírgula para
      separar a parte inteira da parte fracionária de um número. Portanto,
      sempre que ver um ponto (.) em um número no código, saiba que este é o
      separador de casas decimais.
      <p />
      Por padrão os números que escrevemos estão na base 10. A base com a qual
      estamos mais acostumados. Podemos utilizar a base 10 sem problemas em
      nosso código, pois o interpretador irá transformar nosso texto em uma
      representação binária utilizada pelo computador automaticamente. Existem
      maneiras de especificar literais em outras bases numéricas, mas este é um
      tópico que foge do escopo do nosso curso.
    </ClassContainer>
  );
}

export default Content;
