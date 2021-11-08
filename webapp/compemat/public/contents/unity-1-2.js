import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassSectionTitle,
  ClassLink,
} from "../../components/ClassContent";

function Content() {
  return (
    <ClassContainer>
      Vamos conversar sobre um conceito bastante importante no mundo da
      programação, a abstração. Na filosofia, entende-se que há uma distinção
      entre objetos ou coisas ditas concretas e abstratas. Não é muito simples
      determinar o que faz algo ser concreto ou abstrato. De forma simplista,
      costumamos dizer que coisas que possuem uma existência física, que podem
      ser tocadas, vistas e medidas de alguma forma são concretas, enquanto
      coisas que existem apenas como conceitos ou ideias são abstratas. Por essa
      definição, um cachorro é algo concreto, que podemos ver, sentir, tocar e
      medir. Agora, números são algo abstrato. Existem em um mundo de ideias,
      mas não têm uma existência física palpável. <p />
      <ClassSectionTitle title="O Poder da Abstração" />
      Quando pegamos algo que é concreto e removemos ou desconsideramos uma
      série de características, geralmente para poder estudar, representar e
      categorizar este algo, estamos realizando um processo conhecido como
      abstração. Imagine, por exemplo, um cachorro chamado Tobi.
      Tobi tem um determinado tipo de pelo, está numa determinada faixa de
      tamanho e peso, tem um formato específico de focinho, orelha, etc. 
      Nós podemos abstrair ou ignorar todas as outras características específicas de Tobi
      que o fazem único, como seu nome, horário e local de nascimento, gostos, 
      personalidade, comportamento, etc.
      <p />
      Para criar a abstração, vamos pensar apenas num subconjunto das 
      características que tornam Tobi parecido com diversos outros cachorros,
      tais como seu pelo, formato da cabeça, focinho, orelhas, entre outras coisas. 
      Agora vamos dar um nome para essa categoria de cachorros que tem um conjunto específico de
      características similares as de Tobi. Vamos supor que essa classe de cachorros
      similares vai ser chamada de Labrador.
      <p />
      Esse conceito de labrador que estabelecemos é uma abstração. No mundo
      físico existem milhões e milhões de cachorros com várias propriedades. Nós
      simplesmente pegamos um conjunto de características que são comuns a um
      grupo desses cachorros e colocamos um rótulo nela. Não existe um labrador
      como um objeto único e concreto no mundo físico, o que existe é uma ideia
      do que é um labrador e instâncias de cachorros que se encaixam em
      diferentes graus nessa ideia. Sem muito esforço você pode perceber que 
      até a própria definição do que é um cachorro é um tipo de abstração. 
      De fato, os conceitos e ideias com os quais lidamos diariamente
      são abstrações que nos ajudam a entender o mundo a nossa volta.
      <p />
      <ClassSectionTitle title="Computador Abstrato" />
      Saindo um pouco da nossa filosofia de botequim. Vamos para a aplicação do
      conceito de abstração no mundo da computação. Todos os computadores que
      existem no mundo diferem entre si. Cada um tem um conjunto de equipamentos
      eletrônicos diferentes, de fabricantes diferentes. Mas todos esses
      computadores têm coisas em comum. Eles têm o mesmo potencial de executar
      um conjunto específico de tarefas.
      <p />
      Quais tarefas específicas são essas? Os computadores conseguem resolver
      pequenos problemas lógicos e aritméticos. Um problema aritmético é algo
      como somar, subtrair, multiplicar ou dividir pares de números. Um problema
      lógico tem a ver com estabelecer se certas afirmações sobre valores
      numéricos são verdadeiras ou falsas. Por exemplo, determinar se dois
      números são iguais ou se um é maior que o outro e tomar uma decisão com
      base na veracidade (ou inveracidade) do resultado. Os computadores
      atualmente utilizam-se da eletrônica para conseguir resolver bilhões (ou
      mesmo trilhões, quatrilhões e até quintilhões) de operações matemáticas e
      lógicas em apenas um segundo.
      <p />
      Todas as coisas incríveis que os computadores fazem podem ser quebradas em
      pequenas instruções simples deste tipo. A computação e a programação
      evoluíram com as abstrações criadas sobres os computadores. Os primeiros
      computadores eletrônicos eram muito difíceis de serem programados. Era
      necessário entender profundamente o <i>hardware</i> e até mesmo
      modificá-lo para programar.
      <p />
      Atualmente, nós conseguimos criar <i><i>softwares</i></i> que executam em diverso
      computadores, sem ser necessário entender como a eletrônica funciona.
      Entretanto, existe um mínimo que precisamos saber sobre computadores para
      conseguir programá-los. Precisamos ter em nossa mente o conjunto certo de
      abstrações para compreender como um computador consegue executar seu{" "}
      <i><i>software</i></i>.
      <p />
      Felizmente para nós, um matemático genial chamado{" "}
      <ClassLink href="https://pt.wikipedia.org/wiki/John_von_Neumann">
        {" "}
        John von Neumann{" "}
      </ClassLink>{" "}
      estabeleceu uma abstração fundamental do que é um computador, ou de como
      deveríamos pensar em um computador. Como uma parte significativa dos
      computadores modernos está de acordo com essa abstração, podemos
      utilizá-la como base do nosso entendimento.
      <p />
      Com essa abstração podemos ignorar detalhes do <i>hardware</i>, como
      fabricante, modelo, funcionamento interno, e podemos focar nas partes
      principais que compõe o computador. Essa abstração é chamada arquitetura
      de von Neumann, e estabelece detalhes de como os principais componentes de
      um computador devem funcionar. Vamos eles:
      <p />
      Um computador possui dispositivos de entrada e saída de dados. Esses
      dispositivos funcionam como uma interface de comunicação com o resto do
      computador e através deles conseguimo passar dados para o computador e
      obter dados como resposta. Você provavelmente está interagindo com alguns
      desses dispositivos neste exato momento. A tela do computador ou celular é
      um dispositivo de saída onde dados são desenhados constantemente, o
      touchscreen do celular tem uma função dupla, de realizar a saída dos dados
      e a entrada através de toque. Os tradicionais: mouse, teclado, touchpad,
      trackpad, câmera, microfone e scanner são dispositivos de entrada. Os
      alto-falantes, impressoras e monitores. Debaixo do capô, temos dois
      componentes principais que formam o computador.
      <p />A UCP (ou CPU em inglês), a unidade central de processamento. A CPU é
      aquilo que chamamos de processador ou o cérebro do computador. Do ponto de
      vista do <i>hardware</i>, trata-se é um circuito eletrônico ultra
      complexo, com bilhões de transistores, que são como interruptores
      microscópicos capazes de ligar e desligar sinais elétricos. A CPU pode ser
      dividida ainda em duas partes, a unidade lógica e aritmética (ULA) e a
      unidade de controle.
      <p />
      Para entender o que cada uma dessas partes faz, precisamos explicar um
      fato importante sobre a arquitetura de von Neunman. Nesta arquitetura, o{" "}
      <i><i>software</i></i> do computador precisa ser transformado em dados
      (codificado) e colocados na memória do mesmo. A memória é um componente
      fundamental, responsável por armazenar o <i><i>software</i></i> e todos os dados
      que esse <i><i>software</i></i> irá manipular durante a sua execução.
      <p />A unidade de controle lê a memória do computador e carrega cada
      instrução do <i><i>software</i></i> individualmente. Essas instruções são
      interpretadas pela unidade de controle, que em seguida aciona a ULA,
      informando a esta qual operação lógica ou aritmética deve ser executada. A
      ULA é o componente que executa efetivamente as operações lógicas e
      aritméticas, lendo e escrevendo valores na memória do computador.
      <p />A ULA é um circuito eletrônico capaz de executar somas, subtrações,
      comparações e transformações. Ela funciona como o motor que move a
      computação e permite com que a execução do programa avance passo a passo.
      Como veremos nas próximas seções, o <i><i>software</i></i> que produzimos precisa
      ser, primeiramente, transformado em algo que CPU consiga e executar, e em
      seguida, deve ser carregado na memória do computador. Nas próximas seções
      vamos entender quais ferramentas são utilizadas para permitir a criação do{" "}
      <i><i>software</i></i> e como este pode ser carregado na CPU.
      <p />
      A título de curiosidade vale a pena citar que a contribuição de von
      Neumann se deu com base nas abstrações ainda mais fundamentais
      estabelecidas por pessoas também brilhantes que vieram antes.
      <p />
      <ClassLink href="https://pt.wikipedia.org/wiki/Ada_Lovelace">
        {" "}
        Ada Lovelace{" "}
      </ClassLink>
      , que viveu no século XIX, é considerada a primeira pessoa no mundo a
      programar. Ela previu os conceitos básicos de programação de computadores
      muito antes de um computador sequer ter sido construído. Ela era
      correspondente de{" "}
      <ClassLink href="https://pt.wikipedia.org/wiki/Charles_Babbage">
        {" "}
        Charles Babbage{" "}
      </ClassLink>
      , um inventor prodigioso cujo objetivo era construir a incrível máquina
      analítica, um computador que funcionaria com peças mecânicas e que não
      pode ser finalizado devido às limitações tecnológicas da época.
      <p />
      No século XX, o brilhante matemático inglês{" "}
      <ClassLink href="https://pt.wikipedia.org/wiki/Alan_Turing">
        {" "}
        Alan Turing{" "}
      </ClassLink>{" "}
      criou os fundamentos matemáticos da computação. Antes de termos um
      computador eletrônico funcional, Turing já havia estabelecido a abstração
      matemática mais fundamental de uma máquina que automatizasse cálculos, a
      chamada{" "}
      <ClassLink href="https://pt.wikipedia.org/wiki/Alan_Turing">
        Máquina de Turing{" "}
      </ClassLink>
      
      <ClassSectionTitle title="Uns e Zeros" />

      Se lhe perguntasse quantos números diferentes existem, a sua resposta
      natural seria: existem infinitos números. E você estaria correto, os
      conjuntos numéricos (naturais, inteiros, reais, etc.) todos têm infinitos
      elementos. Porém, se eu lhe perguntasse, quantos símbolos diferentes
      precisamos para representar esses infinitos números? Depois de uma
      cuidadosa avaliação, você poderia responder que com dez símbolos ou
      caracteres diferentes, nós conseguimos representar qualquer número.  
      <p/>
      Se combinarmos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9 de forma repetida podemos
      representar qualquer número que quisermos, correto? Porém, será que existe
      a obrigatoriedade de serem 10 símbolos ou caracteres diferentes para
      representar os números? E se mais dígitos ou menos dígitos fossem
      utilizados? Na verdade, o chamado sistema numérico decimal é uma convenção
      que utilizamos para representar números. Este sistema provavelmente surgiu
      por termos dez dedos em nossas mãos. É totalmente possível, e até
      conveniente em alguns casos, utilizar outros sistemas numéricos para
      representar números. 
      <p/>
      Os computadores representam os dados de forma digital
      (ou seja, baseada em dígitos ou números). Devido à maneira como
      construímos circuitos eletrônicos, é mais fácil, barato e conveniente
      utilizar apenas dois sinais ou estados possíveis para representar valores
      numéricos. O estado em que há tensão ou corrente elétrica representa o
      valor 1, e o estado em que não há tensão ou corrente elétrica representa o
      valor 0. Dessa forma, se quisermos representar um número dentro do
      circuito eletrônico, vamos utilizar o chamado sistema numérico binário.
      Com apenas dois valores diferentes, o 0 e 1, conseguimos representar
      números da mesma forma que com 10, observe:  
      <p/>

      Quando chegamos ao nove no sistema decimal, precisamos utilizar dois 
      dígitos para representa o próximo valor, o dez. O mesmo ocorre no sistema binário 
      quando chegamos ao 1 (um) e precisamos representar o próximo valor, o dois, 
      representado por 10b. Quando esgotamos o número de símbolos utilizados, adicionamos um
      novo digito à esquerda representando valores de maior magnitude. Perceba
      que 10d em decimal e 10b em binário são números completamente diferentes.
      <p />
       Ambos os sistemas são posicionais, isto significa que o valor que um
      determinado dígito representa depende de sua posição. Quanto mais à
      esquerda, mais significativo é o número, e maior o valor que ele
      representa. A diferença entre os sistemas numéricos é sua base, isto é, o
      valor que cada dígito representa em cada posição. No sistema decimal a
      base é 10, e portanto cada posição representa uma potência de 10, e o
      mesmo é válido para números binários em relação à base 2. Como a base
      decimal é maior, menos dígitos são necessários para representar um mesmo
      número em comparação com a base binária.
      <p />
      Vamos utilizar como exemplo o número 238 em decimal que tem sua
      equivalência no valor 11101110 em binário.  
      <p />
       Perceba que para chegarmos ao valor que o número representa, nós
      simplesmente somamos os produtos de cada digito pela base elevado um
      expoente que depende da posição do digito dentro do número. Esta é a
      maneira através da qual podemos estabelecer o valor em decimal de qualquer
      número na base binária.
      <p />
      Acredite se quiser, para um computador só existem uns e zeros.
      Quando eu digo tudo é realmente tudo! O <i>software</i> que executa em um
      computador é convertido em código binário e representado como uns e zeros.
      Todos os arquivos, textos, imagens, vídeos, documentos, gráficos são
      codificados como grandes sequências numéricas. Dentro de um computador
      tudo é representado com números, e todos esses números estão
      no sistema numérico binário.
      <p />
      A primeira vez que eu fui apresentado a esta ideia, eu fiquei bastante
      tempo para conseguir digeri-la. Eu pensei nos documentos de texto que eu
      utilizava para fazer meus trabalhos de escola, como eles são apenas números
      se eles na verdade contém diversas letras? Apenas muito tempo depois
      que eu entendi que cada caractere em um texto é representado como um
      número, e que existem tabelas de referência, como tabela ASCII que
      estabelecem um padrão de valor numérico para cada caractere.
      <p />
      Eu também pensava nas cores que eu via no meu monitor e nos gráficos. 
      Como é possível que todos aqueles pixels que formam as imagens na minha
      tela fossem apenas numéros? Apenas depois de bastante estudo 
      que eu fui capaz de entender como funcionam os espaços de cor,
      como RGB, e os formatos de arquivo como JPG e PNG. O mesmo vale para
      vídeos e áudios. Arquivos de computador são apenas dados brutos
      representados como sequências numéricas. São apenas
      números binários que precisam ser interpretados pelo <i>software</i> e
      transformados em sinais enviados para os dispositivos de saída do
      computador.
      <p />
      Um digito binário qualquer em um desses arquivos é chamado de bit (<i>binary digit</i>). 
      O átomo da informação digital em nossa era. Se pegarmos um conjunto de 8 bits, temos
      um byte. Um byte é uma quantidade significativa de dados. A partir daí,
      valem os prefixos do Sistema Internacional de Médidas (SI). Mil bytes
      equivalem a 1 kilobyte, 1 milhão de bytes equivalem a um megabyte, 1
      bilhão equivalem a 1 gigabyte, 1 trilhão equivalem a 1 terabyte. Existe
      uma longa lista de prefixos que você pode consultar.
      <p />
      Até aqui apresentamos um vasta teoria e gama de conceitos que nos ajudam a
      entender mais sobre computação. Nós ainda nem sequer chegamos a falar de
      linguagens de programação e código, pois este é o tema da próxima seção.
      Por favor, respire fundo e não desanime!
      <p />
    </ClassContainer>
  );
}

export default Content;
