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
      Vamos conversar sobre um conceito bastante importante no mundo da
      programação, a abstração. Na filosofia, entende-se que há uma distinção
      entre objetos ou coisas ditas concretas e abstratas. Não é muito simples
      determinar o que faz algo ser concreto ou abstrato, mas de forma
      simplista, costumamos dizer que coisas que possuem uma existência física,
      que podem ser tocadas, vistas e medidas são concretas. Alternativamente,
      coisas que existem apenas como conceitos ou ideias são consideradas
      abstratas. Por essa definição, um cachorro é algo concreto, que podemos
      ver, sentir, tocar e medir. Agora, números são coisas abstratas. Existem
      em um mundo de ideias, mas não têm uma existência física palpável. <p />
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
      <ClassSectionTitle title="O Poder da Abstração" />
      Quando pegamos algo que é concreto e removemos ou desconsideramos uma
      série de características com intuito de estudar, representar ou
      categorizar este algo, estamos realizando um processo conhecido como
      abstração. Imagine, por exemplo, um cachorro chamado Tobi. Tobi tem um
      determinado tipo de pelo, está numa determinada faixa de tamanho e peso,
      tem um formato específico de focinho, orelha, etc. Nós podemos abstrair ou
      ignorar todas as características específicas de Tobi que o fazem único,
      como seu nome, local de nascimento, gostos, personalidade, comportamento,
      etc.
      <p />
      Para criar a abstração, vamos pensar apenas num subconjunto das
      características que tornam Tobi parecido com diversos outros cachorros,
      tais como seu pelo, formato da cabeça, focinho, orelhas, entre outras
      coisas. Agora vamos dar um nome para essa categoria de cachorros que tem
      um conjunto específico de características similares as de Tobi. Vamos
      supor que essa classe de cachorros similares vai ser chamada de labrador.
      <p />
      Este conceito de labrador que estabelecemos é uma abstração. No mundo
      físico existem milhões e milhões de cachorros com várias propriedades. Nós
      simplesmente pegamos um conjunto de características que são comuns a um
      grupo desses cachorros e colocamos um rótulo nela. Não existe um labrador
      como um objeto único e concreto no mundo físico, o que existe é uma ideia
      do que é um labrador e instâncias de cachorros que se encaixam em
      diferentes graus nessa ideia. Por este racicionío, concluímos que até a
      mesmo a definição do que é um cachorro é um tipo de abstração. De fato, os
      conceitos e ideias com os quais lidamos diariamente são abstrações que nos
      ajudam a entender o mundo a nossa volta.
      <p />
      <ClassSectionTitle title="Computador Abstrato" />
      Saindo um pouco da nossa filosofia de botequim, vamos discutir a aplicação
      do conceito de abstração no mundo da computação. Todos os computadores que
      existem no mundo diferem entre si. Cada um tem um conjunto de equipamentos
      eletrônicos diferentes produzidos por fabricantes diversos. Porém, todos
      esses computadores têm coisas em comum. Eles têm o mesmo potencial de
      executar um conjunto específico de tarefas.
      <p />
      <ClassBox
        content={` Os computadores conseguem resolver
        pequenos problemas lógicos e aritméticos`}
        float="left"
      />
      Quais tarefas específicas são essas? Os computadores conseguem resolver
      pequenos problemas lógicos e aritméticos. Exemplos de problemas
      aritméticos são: somar, subtrair, multiplicar ou dividir pares de números.
      Já um problema lógico tem a ver com estabelecer se certas afirmações sobre
      valores numéricos são verdadeiras ou falsas. Por exemplo, determinar se
      dois números são iguais ou se um é maior que o outro. A solução de um
      problema lógico permite que o computador tome decisões sobre como
      prosseguir a execução de seu <i>software</i>.
      <p />
      Todas as coisas incríveis que os computadores fazem podem ser quebradas em
      pequenas instruções simples deste tipo. Os computadores atualmente
      utilizam-se da eletrônica para conseguir resolver bilhões (ou mesmo
      trilhões, quatrilhões e até quintilhões) de operações matemáticas e
      lógicas deste tipo em apenas um segundo.
      <p />A computação e a programação evoluíram com as abstrações criadas
      sobres os computadores. Os primeiros computadores eletrônicos eram muito
      difíceis de serem programados. Era necessário entender profundamente o{" "}
      <i>hardware</i> e até mesmo modificá-lo para programar. Atualmente, nós
      conseguimos criar <i>softwares</i> que executam em diverso computadores,
      sem ser necessário entender a fundo como eles funcionam. Entretanto,
      existe um mínimo que precisamos saber sobre computadores para conseguir
      programá-los. Precisamos ter em nossa mente o conjunto certo de abstrações
      para compreender como um computador consegue executar seu <i>software</i>.
      <p />
      Felizmente para nós, um matemático genial chamado{" "}
      <ClassToolTip
        content={{
          title: "John von Neumann",
          text: `
          John von Neumann, nascido Margittai Neumann János Lajos (Budapeste, 28 de dezembro de 1903 — Washington, D.C., 8 de fevereiro de 1957) foi um matemático húngaro de origem judaica, naturalizado estadunidense.
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/JohnvonNeumann-LosAlamos.jpg/300px-JohnvonNeumann-LosAlamos.jpg",
          link: "https://pt.wikipedia.org/wiki/John_von_Neumann",
        }}
      >
        {" "}
        John von Neumann{" "}
      </ClassToolTip>
      estabeleceu uma abstração fundamental do que é um computador, ou de como
      deveríamos pensar em um computador. Como uma parte significativa dos
      computadores modernos está de acordo com esta abstração, podemos
      utilizá-la como base do nosso entendimento.
      <p />
      <ClassImage
        pos="center"
        src="/img/classes/von-neuman-arch.svg"
        style={{
          marginTop: "35px",
          width: "80%",
          maxWidth: "800px",
        }}
        legend="Diagrama da Arquitetura de von Neumann"
      />
      Com essa abstração podemos ignorar detalhes do <i>hardware</i>, como
      fabricante, modelo, funcionamento interno, e podemos focar nas partes
      principais que compõe o computador. Essa abstração é chamada arquitetura
      de von Neumann, e estabelece detalhes de como os principais componentes de
      um computador devem funcionar. Vamos a eles:
      <p />
      Um computador possui dispositivos de entrada e saída de dados. Esses
      dispositivos funcionam como uma interface de comunicação com o resto do
      computador e através deles conseguimos enviar dados para o computador e
      obter dados como resposta. Você provavelmente está interagindo com alguns
      desses dispositivos neste exato momento. A tela do computador ou celular é
      um dispositivo de saída onde dados são apresentados constantemente. O{" "}
      <i>touchscreen</i> do celular tem uma função dupla, de realizar a saída
      dos dados e a entrada através de toque simultaneamente. Os tradicionais:
      mouse, teclado, touchpad, trackpad, câmera, microfone e scanner são
      dispositivos de entrada. Os alto-falantes, impressoras e monitores são
      dispositivos de saída.
      <p />
      Debaixo do capô, temos dois componentes principais que formam o
      computador. A UCP (ou CPU em inglês), a unidade central de processamento e
      a memória. A CPU é aquilo que chamamos de processador ou o cérebro do
      computador. Do ponto de vista do <i>hardware</i>, trata-se é um circuito
      eletrônico ultra complexo, com bilhões de transistores, que são como
      interruptores microscópicos capazes de ligar e desligar sinais elétricos.
      A CPU pode ser dividida ainda em duas partes, a unidade lógica e
      aritmética (ULA) e a unidade de controle.
      <p />
      Para entender o que cada uma dessas partes faz, precisamos explicar um
      fato importante sobre a arquitetura de von Neunman. Nesta arquitetura, o{" "}
      <i>software</i> do computador precisa ser transformado em dados
      (codificado) e colocados na memória do computador. A memória é um
      componente fundamental, responsável por armazenar o <i>software</i> e
      todos os dados que esse <i>software</i> irá manipular durante a sua
      execução.
      <p />A unidade de controle lê a memória do computador e carrega cada
      instrução do <i>software</i> individualmente. Essas instruções são
      interpretadas pela unidade de controle, que em seguida aciona a ULA,
      informando a esta qual operação lógica ou aritmética deve ser executada. A
      ULA é o componente que executa efetivamente as operações lógicas e
      aritméticas, lendo e escrevendo valores na memória do computador.
      <p />A ULA é um circuito eletrônico capaz de executar somas, subtrações,
      comparações e transformações. Ela funciona como o motor que move a
      computação e permite com que a execução do programa avance passo a passo.
      Como veremos nas próximas seções, o <i>software</i> que produzimos precisa
      ser, primeiramente, transformado em algo que CPU consiga executar, e em
      seguida, deve ser carregado na memória do computador. Nas próximas seções
      vamos entender quais ferramentas são utilizadas para permitir a criação do{" "}
      <i>software</i> e como este pode ser carregado na CPU.
      <p />A título de curiosidade vale a pena citar que a contribuição de von
      Neumann se deu com base nas abstrações ainda mais fundamentais
      estabelecidas por pessoas também brilhantes que vieram antes.
      <ClassToolTip
        content={{
          title: "Ada Lovelace",
          text: `
          Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ada_lovelace.jpg/300px-Ada_lovelace.jpg",
          link: "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        }}
      >
        {" "}
        Ada Lovelace{" "}
      </ClassToolTip>
      , que viveu no século XIX, é considerada a primeira pessoa no mundo a
      programar. Ela previu os conceitos básicos de programação de computadores
      muito antes de um computador sequer ter sido construído. Ela era
      correspondente de{" "}
      <ClassToolTip
        content={{
          title: "Charles Babbage",
          text: `
          Charles Babbage (Londres, 26 de dezembro de 1791 — Londres, 18 de outubro de 1871) foi um cientista, matemático, filósofo, engenheiro mecânico e inventor inglês nascido em Teignmouth, Devon, que originou o conceito de um computador programável junto à condessa de Lovelace, Augusta Ada King
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/300px-Charles_Babbage_-_1860.jpg",
          link: "https://pt.wikipedia.org/wiki/Charles_Babbage",
        }}
      >
        {" "}
        Charles Babbage{" "}
      </ClassToolTip>
      , um inventor prodigioso cujo objetivo era construir a incrível máquina
      analítica, um computador que funcionaria com peças mecânicas e que não
      pôde ser finalizado devido às limitações tecnológicas da época.
      <p />
      No século XX, o brilhante matemático inglês{" "}
      <ClassToolTip
        content={{
          title: "Alan Turing",
          text: `
          Alan Mathison Turing (23 de junho de 1912 – 7 de junho de 1954) foi um matemático,[1] cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/300px-Alan_Turing_Aged_16.jpg",
          link: "https://pt.wikipedia.org/wiki/Alan_Turing",
        }}
      >
        {" "}
        Alan Turing{" "}
      </ClassToolTip>
      criou os fundamentos matemáticos da computação. Antes de termos um
      computador eletrônico funcional, Turing já havia estabelecido a abstração
      matemática mais fundamental para máquinas que automatizassem cálculos, a
      chamada{" "}
      <ClassToolTip
        content={{
          title: "Máquina Turing",
          text: `
          A Máquina de Turing é um dispositivo teórico conhecido como máquina universal, que foi concebido pelo matemático britânico Alan Turing (1912-1954), muitos anos antes de existirem os modernos computadores digitais 
          `,
          image: "",
          link: "https://pt.wikipedia.org/wiki/Alan_Turing",
        }}
      >
        {" "}
        Máquina de Turing.{" "}
      </ClassToolTip>
      <ClassSectionTitle title="Uns e Zeros" />
      Se lhe perguntasse quantos números diferentes existem, a sua resposta
      natural seria: existem infinitos números. E você estaria correto, os
      conjuntos numéricos (naturais, inteiros, reais, etc.) têm infinitos
      elementos. Porém, e se eu lhe perguntasse quantos símbolos diferentes
      precisamos para representar esses infinitos números? Depois de uma
      cuidadosa avaliação, você poderia responder que com dez símbolos ou
      algarismos diferentes, nós conseguimos representar qualquer número.  
      <p />
      Se combinarmos os algarismos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9 de forma
      repetida podemos representar qualquer número que quisermos. Porém, será
      que existe a obrigatoriedade de serem 10 algarismos diferentes para
      representar os números? E se mais algarismos ou menos algarismos fossem
      utilizados? Na verdade, o chamado sistema numérico decimal é uma convenção
      que utilizamos para representar números. Este sistema provavelmente surgiu
      por termos dez dedos em nossas mãos. É totalmente possível, e até
      conveniente em alguns casos, utilizar outros sistemas numéricos para
      representar números.
      <p />
      Os computadores representam os dados de forma digital (ou seja, dados
      baseados em dígitos ou números). Devido à maneira como construímos
      circuitos eletrônicos, é mais fácil, barato e conveniente utilizar apenas
      dois sinais ou estados possíveis para representar valores numéricos. O
      estado em que há tensão ou corrente elétrica representa o valor 1, e o
      estado em que não há tensão ou corrente elétrica representa o valor 0.
      Dessa forma, se quisermos representar um número dentro de um circuito
      eletrônico, vamos utilizar o chamado sistema numérico binário. Com apenas
      dois algarismos diferentes, o 0 e 1, conseguimos representar números da
      mesma forma que com 10, observe:  
      <p />
      <ClassImage
        pos="center"
        src="/img/classes/bin-dec-table.svg"
        style={{
          marginTop: "35px",
          width: "80%",
          maxWidth: "400px",
        }}
        legend="Números Decimais vs. Binários"
      />
      Quando chegamos ao nove no sistema decimal, precisamos utilizar dois
      algarismos para representar o próximo valor, o dez. O mesmo ocorre no
      sistema binário quando chegamos ao 1 (um) e precisamos representar o
      próximo valor, o dois, representado por 10b (vamos colocar o b ao lado dos
      números binários e d ao lado dos decimais para diferenciá-los). Quando
      esgotamos o número de algarimos diferentes em uma posição, adicionamos um
      novo digito à esquerda representando valores de maior magnitude. Perceba
      que 10d em decimal e 10b em binário são números completamente diferentes.
      <p />
      Ambos os sistemas são posicionais, isto significa que o valor de um
      determinado algarismo depende de sua posição. Quanto mais à esquerda, mais
      significativo é o algarismo, e maior o valor que ele representa. A
      diferença entre os sistemas numéricos reside em sua base, isto é, o valor
      que cada dígito representa em cada posição. No sistema decimal a base é
      10, e portanto cada posição representa um valor que é multiplicado por uma
      potência de 10. O mesmo é válido para números binários em relação à base
      2. Como a base decimal é maior, em geral, menos dígitos são necessários
      para representar um mesmo número em comparação com a base binária.
      <p />
      Vamos utilizar como exemplo o número 238d em decimal que tem sua
      equivalência no valor 11101110b em binário.  
      <ClassEquation
        equation={"2 . 10^{2} + 3 . 10^{1} + 8 . 10^{0} = 200 + 30 + 8 = 238"}
      />
      <ClassEquation
        equation={
          "1. 2^{7} + 1 . 2^{6} + 1 . 2^{5} + 0 . 2^{4} + 1 . 2^{3} + 1 . 2^{2} + 1 . 2^{1} + 0 . 2^{0} = 128 + 64 + 32 + 8 + 4 + 2 = 238"
        }
      />
      <p />
      Perceba que para determinarmos o valor que o número representa, nós
      simplesmente somamos os produtos de cada algarismo pelo valor da base
      elevado um expoente que depende da posição do algarismo. Esta é a maneira
      através da qual podemos estabelecer o valor em decimal de qualquer número
      na base binária.
      <p />
      Em suma, é necessário entender que para um computador apenas existem uns e
      zeros. O <i>software</i> que executa em um computador é convertido em
      código binário é representado como uns e zeros. Todos os arquivos, textos,
      imagens, vídeos, documentos, gráficos são codificados como grandes
      sequências numéricas. Um computador armazena tudo na forma de números, e
      todos esses números estão no sistema numérico binário.
      <p />
      A primeira vez em que fui apresentado a esta ideia, eu fiquei bastante
      tempo para conseguir digeri-la. Eu pensei nos documentos de texto que eu
      utilizava para fazer meus trabalhos de escola. Me perguntava como eles
      poderiam
      <ClassBox
        content={`Um computador armazena tudo na forma de
        números, e todos esses números estão no sistema numérico binário`}
        float="right"
      />
      ser apenas números, se os documentos apareciam para mim como um conjunto
      de palavras. Apenas muito tempo depois que eu entendi que cada caractere
      em um texto é representado como um número, e que existem tabelas de
      codificação, como tabela ASCII que estabelecem um numérico para cada
      caractere.
      <p />
      Eu também pensava nas cores que eu via no meu monitor e nos gráficos. Como
      era possível que todos aqueles pixels que formam as imagens na minha tela
      fossem apenas números, e pior, apenas uns e zeros? Apenas depois de
      bastante estudo que eu fui capaz de entender como funcionam os espaços de
      cor, como RGB, e os formatos de arquivo como JPG e PNG. O mesmo vale para
      vídeos e áudios. Arquivos de computador são apenas dados brutos
      representados como sequências numéricas. São números binários que precisam
      ser interpretados pelo <i>software</i> e transformados em sinais que só
      fazem sentido quando são enviados e processados nos dispostivos de saída
      do computador. O computador gera dados em forma numérico, e o{" "}
      <i>hardware</i> de entrada e saída transforma esses sinais em imagens,
      cores e sonos na tela do computador.
      <p />
      Sempre precisamos ter em mente a unidade utilizada para medir uma
      quantidade de dados. Um único digito binário é chamado de bit (
      <i>binary digit</i>). Trata-se de um átomo da informação digital. Se
      pegarmos um conjunto de 8 bits, temos um byte. A partir daí, valem os
      prefixos do{" "}
      <ClassToolTip
        content={{
          title: "Sistema Internacional de Unidades",
          text: `
          Sistema Internacional de Unidades[1] (sigla SI, do francês Système international d'unités)[2] é a forma moderna do sistema métrico e é geralmente um sistema de unidades de medida concebido em torno de sete unidades básicas e da conveniência do número dez.
          `,
          image: "",
          link: "https://pt.wikipedia.org/wiki/Sistema_Internacional_de_Unidades",
        }}
      >
        {" "}
        Sistema Internacional de Unidades (SI){" "}
      </ClassToolTip>{" "}
      . Mil bytes equivalem a 1 kilobyte, 1 milhão de bytes equivalem a um
      megabyte, 1 bilhão equivalem a 1 gigabyte, 1 trilhão equivalem a 1
      terabyte.{" "}
      <ClassLink href="https://pt.wikipedia.org/wiki/Prefixos_do_Sistema_Internacional_de_Unidades">
        {" "}
        Existe uma longa lista de prefixos que você pode consultar.{" "}
      </ClassLink>
      <p />
      Chegamos ao final de mais uma seção. Até aqui apresentamos um vasta teoria
      e gama de conceitos que nos ajudam a entender mais sobre computação e
      programação. Nós ainda nem sequer chegamos a falar sobre linguagens de
      programação e código fonte, pois este é o tema da próxima seção. Por
      favor, respire fundo e não desanime! Até a próxima seção.
      <p />
    </ClassContainer>
  );
}

export default Content;
