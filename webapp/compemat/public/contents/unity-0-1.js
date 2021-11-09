import React from "react";
import {
  ClassContainer,
  ClassImage,
  ClassBox,
  ClassLink,
  ClassToolTip,
} from "../../components/ClassContent";

function Content() {
  return (
    <ClassContainer>
      <ClassImage
        src="/img/logo-header.svg"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "270px" }}
      />
      Em seu início, a computação e a programação foram utilizadas
      exclusivamente para automatizar a solução de problemas matemáticos. Desde
      à máquina analítica de{" "}
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
      , passando pelas contribuições de{" "}
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
      e chegando ao{" "}
      <ClassToolTip
        content={{
          title: "ENIAC",
          text: `
          Electronic Numerical Integrator and Computer (ENIAC - em português: computador integrador numérico eletrônico) foi o primeiro computador digital eletrônico de grande escala. Muitos comentam que o primeiro foi o Mark I, mas este era apenas eletromecânico. O ENIAC entrou em funcionamento em fevereiro de 1946[1][2] pelas mãos dos cientistas norte-americanos John Eckert e John Mauchly, da Electronic Control Company.
          `,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Two_women_operating_ENIAC.gif/330px-Two_women_operating_ENIAC.gif",
          link: "https://pt.wikipedia.org/wiki/ENIAC",
        }}
      >
        {" "}
        ENIAC{" "}
      </ClassToolTip>
      , um dos primeiros computadores eletrônico do mundo, a matemática permeia
      a computação, sendo a segunda uma filha prodigiosa da primeira.
      <p />
      Na prática, tudo que um computador faz é resolver problemas matemáticos.
      Se você consegue resolver um grande número de problemas matemáticos de
      forma rápida o suficiente, você se torna capaz de fazer coisas realmente
      maravilhosas. Jogos eletrônicos, realidade aumentada, bancos de dados,
      aplicativos, redes sociais, sistemas de informação e tantas outras
      construções incríveis que utilizamos diariamente são frutos da execução
      (por parte de um ou mais computadores se comunicando entre si) de um
      grande número de instruções. Essas instruções executadas pelo computador
      nada mais são do que mini problemas matemáticos, lógicos e aritméticos.
      <p />
      <ClassBox
        content={`Se você consegue resolver um grande número de problemas matemáticos de
      forma rápida o suficiente, você se torna capaz de fazer coisas realmente
      maravilhosas`}
        float="right"
      />
      Dada a relação íntima entre computação e matemática, parece natural unir o
      estudo de ambas as coisas em um exercício de{" "}
      <ClassToolTip
        content={{
          title: "Transdisciplinaridade",
          text: `
          A transdisciplinaridade é uma abordagem científica que visa à unidade do conhecimento. Desta forma, procura estimular uma nova compreensão da realidade articulando elementos que passam entre, além e através das disciplinas, numa busca de compreensão da complexidade do mundo real. Além disso, do ponto de vista humano, a transdisciplinaridade é uma atitude empática de abertura ao outro e seu conhecimento
          `,
          image:"",
          link: "https://pt.wikipedia.org/wiki/Interdisciplinaridade#Transdisciplinaridade",
        }}
      >
        {" "}
        transdisciplinaridade{" "}
      </ClassToolTip>
      . Por isso, neste curso, os tópicos básicos de programação são apenas um
      aperitivo.  O verdadeiro esforço estará em conectar os pontos para unir o
      código a sua aplicação na solução de problemas matemáticos.
      <p />
      É importante perceber que a computação não tem um fim em si própria. Na
      verdade, não existe nenhum campo de atividade humana que não se beneficie
      direta ou diretamente da computação. Mesmo que no futuro você não queira
      trabalhar como desenvolvedor ou desenvolvedora, ainda assim você irá se
      beneficiar do conhecimento adquirido em um curso como esse.
      <p />
      Tendo noções de programação você pode conseguir criar scripts para
      automatizar tarefas e coletar ou analisar dados. Ser minimamente versado
      em programação vai te ajudar a navegar em um mundo cheio de empresas que
      estão cada mais <i>“tech”</i>. São as <i>fintechs</i>, <i>govtechs</i>
      ,&nbsp;
      <i>edutechs</i>, <i>logtechs</i>, <i>agrotechs</i>&nbsp; e seja mais qual
      outra coisa tech você possa imaginar.
      <p />
      Aprender a programar não é uma tarefa simples. Você precisa querer
      aprender ativamente para ter sucesso. Deve ser uma decisão tomada de
      coração. São fatos óbvios, e também verdadeiros para basicamente qualquer
      outra atividade que não seja programação, mas precisam ser ditos. Você com
      certeza terá dificuldades enquanto estiver programando. Isso é normal, é
      esperado e faz parte do processo! Abrace a dificuldade como uma amiga, e
      entenda que só é possível ser uma versão melhor de si mesmo com alguma
      dose de desconforto.
      <p />
      Mas tome cuidado. Atualmente, vemos pessoas defendendo a ideia de que se
      você não souber programar nos próximos anos, você será equivalente a um
      analfabeto ou analfabeta. Acho esse discurso bastante forçado, e uma
      maneira de gerar{" "}
      <ClassToolTip
        content={{
          title: "FOMO",
          text: `
          Síndrome de FOMO (do inglês fear of missing out, «o medo de perder algo» ou «o medo de ficar de fora») é a patologia psicológica que se produz pelo medo a ficar fora do mundo tecnológico ou a não se desenvolver ao mesmo ritmo que a tecnologia.
          `,
          image:"",
          link: "https://pt.wikipedia.org/wiki/S%C3%ADndrome_de_FOMO",
        }}
      >
        {" "}
        FOMO
      </ClassToolTip>
      , criar ansiedade e fazer as pessoas investirem em cursos e materiais
      caros.
      <p />
      Eu acredito que qualquer um pode e deve desenvolver seu raciocínio lógico
      e matemático e que qualquer pessoa interessada em aprender a programar
      deveria ter uma oportunidade de fazê-lo. Não quer dizer que absolutamente
      todas as profissões irão exigir proficiência em codificação. É provável
      que o próprio ato de programar se torne cada vez mais simples no futuro.
      Entretanto, programar vai continuar sendo uma tarefa desafiadora, que
      exige criatividade, raciocínio e capacidade de resolver problemas. Isso
      faz com que esta seja uma atividade extremamente difícil de se
      automatizar.
      <p />
      Neste contexto, o curso Comp&amp;Mat pretende ajudar os alunos e alunas a
      desenvolver a tríade de habilidades essenciais: criatividade, raciocínio e
      capacidade de resolver problemas. Espero que com essas habilidades
      devidamente trabalhadas, você alcance sucesso, independente do caminho que
      você seguir, seja na programação, matemática ou outra área qualquer.
      <p />
      <ClassBox
        content={`Comp&Mat pretende ajudar os alunos e alunas a
      desenvolver a tríade de habilidades essenciais: criatividade, raciocínio e
      capacidade de resolver problemas`}
        float="left"
      />
      O curso está organizado em 11 unidades. As 4 primeiras são uma introdução
      à programação com base na linguagem JavaScript. Nessas unidades são
      apresentados os conceitos fundamentais da programação de computadores.
      Cada unidade apresenta um conjunto de exercícios que exigem a aplicação
      progressiva dos conceitos ensinados em cada etapa.
      <p />
      As unidades posteriores tratam de tópicos da matemática do ensino médio
      com ênfase nos temas mais cobrados no ENEM. São eles: aritmética,
      grandezas proporcionais, progressões, probabilidade, funções,
      trigonometria, matemática financeiras e análise combinatória. Cada tópico
      tem aplicações profundas no mundo de hoje. Estão presentes na engenharia,
      física, química, biologia, economia, negócios e até mesmo nas ciências
      humanas e sociais.
      <p />
      Os exercícios dessas unidades são em grande parte baseados em questões do
      ENEM. Como talvez você já saiba, as questões do ENEM contêm histórias bem
      elaboradas e contextos ricos. Ambas essas coisas são adornos em torno de
      algum problema ou conceito que está sendo avaliado através da questão.
      <p />
      No mundo real, infelizmente, os problemas que enfrentamos não vêm de forma
      clara, prontos para serem resolvidos. Os problemas estão envoltos da
      complexidade da realidade e sempre existirão detalhes que precisam ser
      abstraídos ou mesmo ignorados para que seja possível chegar a uma solução.
      As questões do ENEM são fantásticas em oferecer esse adorno complicador,
      que simula a complexidade do mundo real e “esconde” em parte qual o
      verdadeiro problema a ser resolvido.
      <p />
      É preciso que você se acostume a essa categoria de questões, pois é bem
      possível que além do ENEM, você seja submetido a diversas provas,
      processos, avaliações e mesmo situações reais, em que será necessário
      resolver um problema que nem sequer está posto de forma clara.
      <p />
      Contudo, espero que você tenha uma boa experiência com este curso, e que
      ele seja muito proveitoso. Aqui começa sua jornada no mundo da matemática
      e computação!
      <p />
      Bons estudos!
    </ClassContainer>
  );
}

export default Content;
