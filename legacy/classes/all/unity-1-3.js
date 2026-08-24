import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSectionTitle,
  ClassImage,
  ClassToolTip,
} from "@codemat/lesson-kit";

function Content() {
  return (
    <ClassContainer>
      Agora que temos um bom entendimento do que é <i>software</i>, chegou o
      momento de começarmos a entender como <i>softwares</i> são desenvolvidos.
      Vamos explorar o conceito de algoritmo e como eles podem ser implementados
      através de linguagens de programação, e enfim transformados em{" "}
      <i>software</i> executável por um computador.

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
      <ClassSectionTitle title="O Mundo Dominado Por Algoritmos" />
      Você já deve ter ouvido o termo algoritmo em algum lugar nos últimos anos.
      O algoritmo para diagnosticar uma doença através de imagens, o algoritmo
      de reconhecimento facial para detectar rostos de criminosos, o algoritmo
      que o Facebook, o YouTube ou o mesmo o Netflix utilizam para recomendar
      conteúdo. De uma palavra restrita ao mundo da matemática e computação, o
      termo algoritmo se tornou uma palavra popular na mídia, na cultura
      popular, e sobretudo entre os “especialistas” da tecnologia (muitos que
      talvez nunca tenham criado ou implementado um algoritmo).
      <p />
      Existem algoritmos para prever o tempo, para saber se sua transação de
      cartão de crédito vai ser aprovada ou não, para precificar o valor do
      seguro a ser pago. Temos também o algoritmo que estabelece quanto aquela
      corrida entre dois bairros vai custar através do motorista de aplicativo. 
      O algoritmo que calcula o preço do quarto de hotel, ou melhor, o algoritmo
      que opera por trás das lojas virtuais e faz ajustes em tempo real no preço
      conforme a demanda. Não se esqueça dos algoritmos que compram e vendem
      ações, e fazem verdadeiras fortunas trocarem de mão a cada minuto.
      <p />
      Parece que de uma hora para outra, esses tais algoritmos começaram a
      dominar o mundo e influenciar enormemente a nossa vida. Não vou comentar
      sobre os potenciais impactos positivos ou negativos dessa influência, mas
      vamos apenas tentar entender afinal de contas o que é um algoritmo e como
      parece que eles surgiram do nada para dominar o mundo.
      <p />
      Talvez você fique surpreso em saber que você lida com algoritmos desde que
      você era uma criança. No primário, muito provavelmente, te ensinaram a
      fazer coisas como: obter o MDC ou MMC de dois números, ou mesmo a fazer
      divisões longas entre números reais. Você pode lembrar da sua educadora ou
      educador mostrando uma série de passos que você precisava executar com
      precisão para chegar no resultado correto.
      <p />
      Por exemplo, para calcular o MDC, primeiro você deveria realizar a
      decomposição dos números em fatores primos, o que é um termo bonito para
      criar uma lista de números primos que quando multiplicados fosse igual ao
      número. Depois você deveria olhar a interseção dessas listas de fatores
      primos, e ao calcular o produto de todos os números na lista, você
      terminava com o MDC.
      <p />
      Nas aulas de matemática você deve ter cansado de executar esses conjuntos
      de passos que te davam a solução desejava. Um algoritmo nada mais é do que
      essas pequenas receitas de bolo que utilizamos para resolver problemas. A
      definição mais precisa de algoritmo seria: uma sequência finita e bem
      definida de passos utilizada para resolver um problema ou realizar uma
      computação.
      <p />
      Você deve ter percebido que o conceito de algoritmo não parece tão
      diferente do conceito de <i>software</i>. Inclusive você pode estar se
      questionando qual a diferença entre as duas coisas? Bem, a diferença
      reside no nível de abstração e talvez no escopo de aplicação. Enquanto o
      algoritmo é uma sequência de passos para resolver um problema qualquer, o
      <i>software</i> é aa implementação de um ou vários algoritmos. O algoritmo
      pode ser representado de diversas formas, o <i>software</i> é uma forma de
      representar o algoritmo que permite sua execução por um computador. Um{" "}
      <i>software</i> é um conjunto de algoritmos traduzidos para a linguagem
      que os computadores “entendem”.
      <ClassBox
        content={`A definição mais precisa de algoritmo seria: uma sequência finita e bem 
        definida de passos utilizada para resolver um problema ou realizar uma computação`}
        float="left"
      />
      <p />
      Algoritmos não precisam de computadores para existir. Sabemos da
      existência de algoritmos há milênios. Nós os utilizamos para resolver
      problemas sem a necessidade de uma máquina. Os algoritmos que dominam o
      mundo hoje, só conseguem fazê-lo, pois foram implementados como{" "}
      <i>softwares</i>, sendo assim capazes de serem executados de forma
      automatizada sobre grandes volumes de dados.
      <p />
      Poderíamos muito bem chama-los de <i>softwares</i>, aplicativos, sistemas
      informatizados ou programas ao invés de algoritmos. Eu acredito que esses
      termos referentes à informática e computação tenham ficado datados e
      perderam apelo. Talvez há 30 ou 40 anos, uma empresa dizer que utilizava
      <i>softwares</i> ou sistemas informatizados fosse algo atraente. Hoje em
      dia, basicamente tudo está informatizado de uma forma ou outra, e o
      marketing das empresas precisou de um novo termo mais atraente para fazer
      com que todos os envolvidos pareçam mais inteligentes. A palavra algoritmo
      serve a esse proposito. Em algum momento no futuro, o próprio termo
      algoritmo vai ficar datado (assim como a discussão desse parágrafo), e o
      pessoal do marketing vai utilizar uma nova palavra da moda para fazer com
      que conceitos velhos pareçam ser algo novo.
      <ClassSectionTitle title="Representação de Algoritmos" />
      Um algoritmo pode ser presentado de diversas formas. Podemos pegar um
      pedaço de papel e escrever uma série de frases em português ou outro
      idioma, e se essas frases estabelecerem um conjunto finito de passos que
      podem ser utilizados para resolver um problema, teremos então uma
      descrição de um algoritmo.
      <p />
      O problema é que a linguagem utilizada por nós no dia a dia não é muito
      adequada para representar os algoritmos de maneira formal. O jeito como
      falamos é muito impreciso, cheio de figuras de linguagem, duplos sentidos,
      sarcasmos, ironias e palavrões. Nossa comunicação tem forte influência de
      nossas emoções e cultura. Nós não nos comunicamos de maneira clara, rápida
      e eficiente. Adoramos “enfeitar o pavão”, adicionamos adornos, somos
      prolixos (isto é, falamos demais). Ficamos dando voltas, somos
      repetitivos. Enfim, já deu para perceber que quero usar esse parágrafo
      para exemplificar as imprecisões presentes em nossa comunicação.
      <p />
      Se as nossas linguagens naturais (os idiomas e formas de comunicação que
      nós seres humanos desenvolvemos e utilizamos para nos comunicar no
      dia-a-dia) são muito imprecisas para expressar os algoritmos, quais seriam
      as alternativas? A primeira delas é a própria linguagem e notação
      matemática. A matemática é uma linguagem imune às paixões humanas. A
      linguagem matemática não aceita duplo sentido ou imprecisões. Tudo deve
      ter uma definição formal e clara, não há espaços para interpretações
      subjetivas ou opiniões fortes.  
      <p />
      Podemos escrever algoritmos com poucas palavras em linguagem natural e
      utilizando o máximo possível de símbolos e notações matemáticas. Essa
      abordagem é útil quando os matemáticos querem comunicar entre si suas
      ideais ou provas matemáticas, ou querem formalizar a solução algorítmica
      que encontraram para um problema. Esse formato não é adequado para a
      criação de <i>software</i>, pois ele ainda é muito complexo para poder ser
      “interpretado” por um computador.
      <p />
      Para especificar um algoritmo de maneira a ser possível que um computador
      consiga executá-lo, nós precisamos de linguagens artificias, extremamente
      formais e rígidas. Essas linguagens especiais, criadas apenas para o
      proposito de representar algoritmos, são chamadas de linguagens
      programação. As linguagens de programação são o meio através do qual uma
      pessoa consegue implementar um algoritmo, isto é, a linguagem de
      programação é uma ferramenta fundamental para a criação de{" "}
      <i>softwares</i>.
      <p />
      Existem centenas de linguagens de programação atualmente. Muitas dessas
      linguagens são de propósito geral e podem ser utilizadas para a criação de
      qualquer tipo de <i>software</i>. Há linguagem mais específicas utilizadas
      apenas para uma única classe de <i>softwares</i>. Algumas poucas dezenas
      dessas linguagens são extremamente populares e amplamente utilizadas.
      Podemos citar linguagens de programação populares como: C, C++, Java, C#,
      Python, Ruby, PHP, Go, Kotlin e Swift.
      <p />
      Os desenvolvedores têm discussões intermináveis sobre as linguagens de
      programação. Em geral, os programadores se especializam em um grupo
      pequeno de linguagens. Ao se tornarem especialistas em uma tecnologia,
      eles viram “evangelistas”, isto é, desejam “converter” outros
      programadores a sua linguagem de predileção. Para tal, esses
      “evangelistas” usarão todo tipo de ferramenta possível em seu arsenal.
      Desde perseguição, passando pela mentira, até mesmo memes e piadas
      jocosas. Tudo visando aumentar a popularidade de sua linguagem do coração
      e diminuir a reputação das linguagens concorrentes.
      <p />
      Brincadeiras à parte, eu sou a favor da máxima: a melhor linguagem de
      programação é aquela utilizada para criar um <i>software</i> de qualidade.
      Para mim, se a linguagem foi bem utilizada e deu origem a um{" "}
      <i>software</i> funcional, estável, fácil de manter, útil e gera valor,
      então esta linguagem também tem qualidade. Os desenvolvedores têm
      linguagens de preferência, mas todas as linguagens têm seu valor e merecem
      respeito. Não vale a pena entrar em longas discussões para determinar qual
      a melhor linguagem do universo, pois, em geral, cada uma tem suas
      vantagens e desvantagens.
      <p />
      Para os fins do Comp&amp;Mat, aprenderemos uma linguagem bastante popular
      chamada de JavaScript. O JavaScript é uma linguagem de programação usada
      inicialmente em navegadores web para dar mais dinamismo e permitir a
      criação de sites mais complexos. O JavaScript evoluiu, possuindo diversas
      versões e variações que permitem sua utilização em aplicações diversas,
      até mesmo e em aplicativos móveis.  A página que você está acessando agora
      foi construída em sua maioria com JavaScript. Tanto o comportamento que
      você vê em seu navegador, como uma parte do código mantida longe do
      usuário, em um servidor, (um computador usado para armazenar e permitir
      acesso às paginas web) foram totalmente desenvolvidos em JavaScript.
      <p />O JavaScript (JS para os íntimos) foi escolhido por algumas razões. A
      primeira é por possuir uma barreira de entrada pequena. Você não vai
      precisar instalar nenhum outro <i>software</i> diferente em seu computador
      ou celular para executar código em JavaScript. O próprio navegador
      (Chrome, Edge, Firefox, Opera ou outros) consegue interpretar código em
      JavaScript.
      <p />
      Além disso, é uma linguagem muito importante, com diversas aplicações e
      cuja popularidade vem aumentando. Você terá, ao final do curso, algum
      conhecimento em uma ferramenta bastante utilizada no mercado de trabalho.
      Finalmente, mesmo que você futuramente tenha interesse em outras
      linguagens, saiba que a maioria dos conceitos passados durantes as aulas
      também estão presentes em boa parte das linguagens de programação mais
      populares. Você vai ser capaz de aplicá-los quando estiver aprendendo
      Python, Ruby, Java ou PHP.
      <p />
      <ClassSectionTitle title="Do Alto ao Baixo Nível" />
      Como já discutimos, existem diversas formas de representar algoritmos. É
      mais fácil para nós seres humanos representarmos algoritmos em nossa
      linguagem natural, escrevendo sequenciais de passos que outro ser humano
      conseguiria compreender e interpretar. Podemos escrever os algoritmos como
      texto em português, ou inglês. Podemos, alternativamente, criar um
      diagrama com formas geométricas, os chamados fluxogramas. Ambas as formas
      são práticas e fáceis de compreender, se você for um ser humano.
      <p />
      Porém, na computação, queremos transformar algoritmos em <i>
        softwares
      </i>{" "}
      para que sua execução seja automatizada em um computador. As formas de
      representar algoritmos citadas no parágrafo anterior não são adequadas,
      pois, elas estão em um nível de abstração muito alto. Isso significa que
      não temos como, de forma confiável, criar <i>software</i> executável por
      um computador com base nelas.
      <p />
      Vamos lembrar da arquitetura de von Neumann, e de como um computador
      possui um processador capaz de executar instruções representadas em código
      binário na memória do computador. O <i>software</i>, neste estado
      executável, consiste em uma sequência de números (na base binária) que
      representam instruções lógicas e aritméticas simples.
      <p />
      Entretanto, é extremamente difícil criar <i>softwares</i> nesse formato.
      Caso esta fosse a única maneira de se programar, cada programador teria
      que conhecer os detalhes do computador para o qual está programando e
      seria impossível criar um mesmo <i>software</i> que funcionasse em
      dispositivos diferentes. Pprogramar desta forma seria um fardo enorme e
      muito pouco produtivo. Os programadores precisariam decorar uma grande
      lista de códigos numéricos de instruções de máquina.
      <p />
      Nós costumamos dizer que a linguagem da máquina, isto é, esse código
      binário diretamente executável por um computador, é de baixo nível de
      abstração. Isso faz com que seja muito difícil ou inconveniente para um
      ser humano desenvolver <i>softwares</i> neste formato.
      <p />
      Temos então um impasse na hora de nos “comunicarmos” com um computador.
      Nossa linguagem humana é de super alto nível de abstração e não temos como
      transformá-la em <i>software</i>, pois ela é cheia de imprecisões e sem os
      formalismos necessários. Por outro lado, o hardware é muito limitado e
      precisa das instruções codificadas em formato que é muito difícil para
      seres humanos entenderem.
      <p />
      A solução para tal problema foi justamente a criação de linguagens de
      programação de alto nível. Essas linguagens, como o JavaScript, são um
      meio-termo entre as linguagens naturais que utilizamos para nos
      comunicarmos no dia-a-dia e a linguagem de máquina que o computador
      “entende”. As linguagens de programação de alto nível têm aspectos
      parecidos com nossas linguagens naturais, porém elas são limitadas, com
      bastante formalismos e regras de sintaxe bem rígidas, de maneira que
      conseguimos de forma automática transformar o texto escrito nelas em um
      código binário executável por um computador.
      <p />
      Quando criamos código em uma linguagem de programação, uma vírgula, ponto
      ou um símbolo qualquer que não corresponda com as regras da linguagem é o
      suficiente para fazer com que o programa não funcione. Essa rigidez é
      necessária para garantir que o que está escrito no código possa ser
      transformado no conjunto de instruções lógicas e aritméticas que o
      hardware consegue obedecer. Vamos aprender mais como esse processo
      funciona na próxima seção.
      <ClassSectionTitle title="Algoritmo, Código e Software" />
      <p />
      Um desenvolvedor ou desenvolvedora utiliza uma linguagem de programação
      para criar <i>software</i>. Criar <i>software</i> consiste em escrever o
      que chamamos de código-fonte, isto é, um texto que corresponde com as
      regras de uma linguagem de programação. A programação exige que os devs
      (desenvolvedores ou desenvolvedoras) estabeleçam um conjunto de passos
      para que uma solução seja atingida (criar um algoritmo) e depois escrevam
      uma série de instruções na linguagem de programação de escolha que
      representam este conjunto de passos.
      <p />
      Chamamos de código, ou código-fonte, os arquivos gerados por pessoas (e às
      vezes automaticamente através de algumas ferramentas) que contém as
      instruções codificadas em uma linguagem de programação. Esse código-fonte
      está em uma linguagem de alto nível, mais próximo da linguagem natural
      humana, mas que tem certas limitações que permitem com que o texto escrito
      seja passível de ser transformado em <i>software</i> executável.
      <p />O código-fonte é transformado através de algumas ferramentas em
      código executável. Existe um conjunto complexo de outros <i>
        softwares
      </i>{" "}
      que os devs utilizam para tal tarefa. Em algumas linguagens, o
      código-fonte é submetido a um programa chamado de compilador, que
      transforma diretamente e de uma vez só todas as instruções na linguagem de
      alto nível em código de máquina, esse processo deve ser feito antes da
      execução do <i>software</i>.
      <p />
      Diferentemente, códigos desenvolvidos em linguagens como JavaScript são
      submetidas a um outro <i>software</i> chamado de interpretador. Esse{" "}
      <i>software</i> lê cada instrução do código-fonte durante a as executa uma
      a uma sem a necessidade de transformá-lo em sua totalidade em código de
      máquina. O interpretador funciona como intermediário entre o código-fonte
      e o processador do computador. Ao contrário da compilação, esse processo é
      realizado no momento da execução do <i>software</i> e não anteriormente.
      <p />
      <ClassImage
        src="/img/code-transform.svg"
        legend="Etapas para criação de software"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "700px",
          maxWidth: "80%",
        }}
      />
      Existem linguagens que funcionam em um modelo híbrido (compilação e
      interpretação) e mais complexo, cujos detalhes fogem do nosso escopo. O
      que é importante que você absorva desse é que, o código que iremos criar
      durante o curso será transformado em algo que o processador conseguirá
      executar através de um interpretador. Para nossa sorte, esse interpretador
      está no próprio navegador que você utiliza para visualizar essa página,
      portanto você não vai precisar instalar nada em seu dispositivo para
      começar a programar, todas as ferramentas necessárias estarão à sua
      disposição através da página. 
    </ClassContainer>
  );
}

export default Content;
