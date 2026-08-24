import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassSectionTitle,
  ClassImage,
} from "@codemat/lesson-kit";

function Content() {
  return (
    <ClassContainer>

      Se fôssemos responder de forma rápida a pergunta: “O que é programar?”,
      poderíamos dizer que se trata do ato de criar <i>softwares</i>.  Portanto,
      antes de entrar em detalhes de como se faz para programar, é necessário
      entender o que a palavra <i>software</i> significa.

      <ClassImage
        src="/img/programming.svg"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", width: "400px", maxWidth: "80%" }}
      />{" "}

      <p />
      <ClassSectionTitle title="Soft vs. Hard" />
      <i>Software</i> é mais uma palavra estrangeira adotada na nossa língua. Na
      verdade, essa palavra foi inventada para servir de antônimo (oposto) de
      outra palavra mais comum e mais antiga na língua inglesa, o{" "}
      <i>hardware</i>.
      <p />
      <i>Hardware</i> é uma palavra com vários significados. A minha tradução
      preferida para esta palavra é o termo “ferragens”.  Isso é, coisas feitas
      de ferro ou metal. Na prática, o significado é mais profundo que isso,
      pois o termo é utilizado para se referir a toda categoria de equipamentos,
      maquinário e eletrônicos. De fato, todas essas coisas levam vários tipos
      de metais em sua fabricação.
      <p />
      Na computação, este termo se refere a todo e qualquer equipamento, em sua
      maioria baseado em circuitos eletrônicos, que fazem parte daquilo que nós
      convencionamos chamar de computador. Mas calma, você só vai entender o que
      é um computador quando eu terminar de explicar o que o termo{" "}
      <i>software</i> significa. Então segure as pontas por mais alguns
      parágrafos.
      <p />O prefixo hard da palavra <i>hardware</i> em inglês pode ser
      traduzido como “duro” ou “sólido”. Trata-se de algo tangível, concreto,
      que podemos pegar em nossas mãos e ver com nossos olhos. Porém, existe uma
      parte do maquinário que não tem essas propriedades. Uma parte abstrata,
      que não podemos pegar em nossas mãos, mas que é real e extremamente
      importante. A esta parte damos o nome de <i>software</i>. O prefixo{" "}
      <i>soft</i> em inglês é justamente o oposto <i>hard</i>, e se refere a
      algo macio, suave ou leve.
      <p />
      <ClassSectionTitle title="Máquinas" />
      Afinal de contas, do que consiste esta parte abstrata, intangível do
      maquinário e dos eletrônicos que utilizamos diariamente? Vamos nos
      aprofundar no conceito de máquina para conseguir responder a essa
      pergunta.
      <p />
      Máquinas são projetadas e construídas com um propósito. Em geral, as
      máquinas servem para resolver algum problema ou permitir a execução de
      alguma tarefa de maneira mais eficiente. Hoje utilizamos máquinas
      automáticas, que fazem boa parte do seu trabalho com o mínimo de
      intervenção de seres humanos.
      <p />
      Para completar tais tarefas e cumprir seu propósito, as máquinas
      automatizadas precisam executar uma série de passos. Tarefas grandes e
      complexas são divididas em tarefas menores e mais simples. Quando esse
      conjunto de tarefas menores é completado com sucesso, temos também o
      resultado satisfatório da conclusão da tarefa maior.
      <p />
      Vamos pegar um exemplo cotidiano, uma máquina de lavar! Todos nós queremos
      automatizar a tarefa cansativa e repetitiva de deixar nossas roupas
      limpas. A tarefa maior e mais complexa de deixar as roupas limpas pode ser
      dividida em tarefas menores, como: lavar, enxaguar, centrifugar e secar as
      roupas.
      <p />
      Cada uma dessas tarefas vai ser quebrada em tarefas ainda menores. Para a
      lavagem, a máquina primeiro precisa ser enchida com água e sabão e depois
      começar a bater. Para enxaguar será preciso jogar fora a água com sabão e
      deixar entrar no tamborete mais água. O mesmo pode ser dito para as
      tarefas de centrifugar e secar as roupas, que terão suas próprias
      peculiaridades. Sem contar que cada uma dessas tarefas complexas ainda
      pode ter diversas variações de tempo e intensidade dependendo de qual tipo
      de roupa estiver na máquina e mesmo da quantidade de roupas.
      <p />
      A lição que tiramos deste exemplo é que à medida que as máquinas ficam
      mais complexas e conseguem automatizar tarefas com bastante sofisticação,
      mais complicado também fica o roteiro, script ou passo-a-passo que estas
      máquinas têm que “seguir” para executar sua função.
      <p />
      <ClassSectionTitle title="Computador: Máquinas Programáveis" />
      Porém, por mais sofisticada que seja uma máquina de lavar, ela ainda é
      construída para uma tarefa específica, conhecida e determinada antes mesmo
      de sua fabricação. Atualmente, existem máquinas incríveis, capazes de
      executar tarefas para as quais seus fabricantes nem sequer imaginavam, e
      que podem ter sido estabelecidas muito tempo depois da máquina ter sido
      projetada ou mesmo construída.
      <p />
      Quer um exemplo? O mais óbvio é um smartphone moderno. Nem a Apple, nem a
      Samsung ou Motorola sabem exatamente quais aplicativos você irá instalar
      no seu celular após tirá-lo da caixa. Óbvio que existem aplicativos que a
      maioria das pessoas usa, mas o próximo aplicativo da moda pode surgir
      meses depois do seu aparelho ter sido fabricado, e ainda assim seu celular
      conseguirá executá-lo sem problemas. Como essa mágica é possível? Como uma
      máquina pode ser tão flexível a ponto de fazer algo específico que nem
      sequer sabia-se que era possível ou interessante de ser feito no momento
      de sua fabricação?
      <p />
      Finalmente chegamos ao momento de ouro dessa bela linha de raciocínio.  O
      que faz com que a máquina seja tão flexível e poderosa não é seu{" "}
      <i>hardware</i> apenas, mas sim o conjunto de instruções, passos ou
      tarefas que esse <i>hardware</i> consegue executar. A esse conjunto de
      passos que o <i>hardware</i> executa para cumprir com uma tarefa, damos o
      nome de <i>software</i>.
      <p />O <i>software</i> é um conjunto de passos, instruções ou comandos que
      determinam o que o <i>hardware</i> deve fazer em um determinado instante.
      Esses comandos ou passos são uma especificação muito abstrata (soft), em
      contrapartida às partes físicas, duras e concretas (hard) que compõem o
      equipamento físico que os executam.
      <ClassBox
        content={`O que faz com que a máquina seja tão flexível e poderosa não é seu hardware apenas,
        mas sim o conjunto de instruções, passos ou tarefas que esse
        hardware consegue executar. A esse conjunto de passos que o
        hardware executa para cumprir com uma tarefa, damos o nome de software`}
        float="right"
      />
      <p />O celular é um <i>hardware</i> que tem a capacidade de executar{" "}
      <i>software</i>, e o<i>software</i> pode ser criado de forma isolada e
      independente do <i>hardware</i> que irá executá-lo.  Quando um{" "}
      <i>hardware</i> é tão flexível que seu conjunto de instruções pode ser
      alterado, configurado ou melhor ainda, PROGRAMADO, para realizar uma
      tarefa para a qual ele não necessariamente foi construído, temos em nossas
      mãos aquilo que costumamos chamar de COMPUTADOR.
      <p />
      Chamamos de computador uma máquina que é programável e que pode executar
      uma sequência de instruções lógicas e aritméticas (iremos entender o que
      elas são em breve).  Este é o caso do <i>hardware</i> de um celular, mas
      também de um notebook, de um relógio inteligente, de uma TV inteligente,
      de uma geladeira inteligente, de uma torradeira inteligente, ou de
      qualquer outra coisa inteligente que você possa imaginar.
      <p />
      Na verdade, mesmo equipamentos cujo comportamento não precisa ser tão
      flexível e programável ainda assim usam um tipo especial de{" "}
      <i>software</i> bastante conectado ao <i>hardware</i> para o qual ele foi
      produzido. Micro-ondas, máquinas de lavar, rádios automotivos e uma série
      de outras máquinas domésticas e industriais vêm de fábrica com esses{" "}
      <i>software</i>s embutidos dentro de seu <i>hardware</i>. Temos um nome
      para esse tipo de <i>software</i>: firmware. Ele é menos flexível e
      manipulável que o <i>software</i> tradicional executado em um notebook ou
      PC, por exemplo. Ele é mais <i>firm</i> (firme) e menos <i>soft</i>.
      <p />
      <ClassSectionTitle title="Softwares" />
      Existem vários tipos de <i>software</i>s. Há <i>software</i>s que fazem o
      trabalho duro de manter o <i>hardware</i> em ordem e acessível a outros{" "}
      <i>software</i>s. Esses são chamados de Sistemas Operacionais. São um tipo
      de <i>software</i> de base que gerencia o computador para permitir que um
      outros <i>software</i> executem corretamente.
      <p />
      Outra classe importante de <i>software</i> são os aplicativos. Aplicativos
      são o motivo pelo qual você utiliza um computador ou smartphone. Ninguém
      compra um computador ou celular para executar o Windows, Android, Linux,
      IOS (são nomes de sistemas operacionais famosos dos quais você já deve ter
      ouvido falar). As pessoas precisam utilizar navegadores web, aplicativos
      de mensagem instantânea, redes sociais, email, visualização, criação e
      edição de documentos, entre outros.
      <p />
      Para cada tarefa do tipo, diversos aplicativos existem. Esses são{" "}
      <i>softwares</i> bem flexíveis e criados para funcionar em um grande
      número diferente de dispositivos. São <i>software</i>s que estão “mais
      distantes” do <i>hardware</i> e são construídos sobre muitas camadas de
      abstração (um termo que também vamos explorar mais no futuro).
      <p />
      Você pode estranhar o conceito de que, os aplicativos que você utiliza
      todo dia em diversos equipamentos, nada mais são do que conjuntos de
      instruções. Você pode pensar em todas as coisas interessantes que esses
      aplicativos fazem, como salvar, editar e transmitir informações. Você pode
      pensar nas belas telas, imagens, vídeos e áudios (multimídia) sendo
      reproduzidos nesses aplicativos. Pode pensar nas coisas assustadoras que
      alguns desses aplicativos fazem, como pegar uma foto sua e transformá-la
      numa versão mais velha ou mais nova do seu rosto. Porém, posso afirmar sem
      medo de errar, que todas essas tarefas super complexas podem ser quebradas
      em um grande (enorme, na verdade) conjunto de pequenas e simples
      instruções lógicas e aritméticas que boa parte dos computadores atuais
      pode executar.
      <p />
      De qualquer forma, espero que o objetivo da unidade tenha sido atingido.
      Espero que você entenda que programar é o ato de criar <i>softwares</i> e
      que <i>softwares</i> são apenas conjuntos de instruções que uma
      determinada classe de máquinas (os computadores) conseguem executar para
      realizar uma tarefa.
      <p />
      Nas próximas seções, vamos começar a entender como podemos criar{" "}
      <i>software</i>s, e quais ferramentas utilizamos para tal.
    </ClassContainer>
  );
}

export default Content;
