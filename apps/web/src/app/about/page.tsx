import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Sobre o ${siteConfig.name} — matemática, programação e computação.`,
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <p className="lead">Bem-vindos ao {siteConfig.name}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="about-logo"
        src="/img/logo-header.svg"
        alt={siteConfig.name}
        width={320}
        height={130}
      />

      <p>
        Vivemos um momento de grandes mudanças. A inteligência artificial está
        transformando rapidamente a forma como estudamos, trabalhamos e criamos
        tecnologia. E, como acontece com praticamente toda grande mudança,
        muitos estudantes podem acabar se perguntando se ainda vale a pena
        aprender determinadas habilidades.
      </p>
      <p>
        Nesse cenário, vai ser preciso muita paciência e determinação para
        entender que ferramentas novas não substituem a necessidade de aprender.
        A inteligência artificial pode ajudar a escrever código, resolver
        problemas e explicar conceitos, mas saber utilizar essas ferramentas de
        verdade depende, justamente, de compreender aquilo que estamos tentando
        fazer.
      </p>
      <p>
        Este curso é uma pequena iniciativa individual cujo objetivo é fornecer
        um conteúdo de qualidade e estruturado para os estudantes que querem
        aprimorar seu conhecimento matemático enquanto aprendem uma nova
        habilidade, a programação.
      </p>
      <p>
        Este curso une o útil ao mais útil ainda, permitindo que os alunos façam
        uma revisão do conteúdo de matemática do ensino médio, com foco nos
        principais tópicos cobrados na prova ENEM, enquanto aprendem e praticam
        programação.
      </p>
      <p>
        Muitos podem questionar: &ldquo;Para que aprender a resolver as questões
        do ENEM utilizando programação, se não vou poder usar um computador
        durante a prova?&rdquo; A resposta para isso é simples: se você consegue
        criar uma solução computacional reproduzível para uma questão do ENEM,
        você facilmente seria capaz de manualmente resolver uma instância desse
        mesmo problema.
      </p>
      <p>
        Hoje, talvez muitos também questionem: &ldquo;Para que aprender a
        programar se uma inteligência artificial consegue escrever código para
        mim?&rdquo; A resposta para isso também é simples: porque pedir uma
        solução não é o mesmo que entender um problema. A inteligência
        artificial pode gerar uma resposta, mas é você quem precisa saber se ela
        está correta. Pode escrever um programa, mas é você quem precisa
        entender o que aquele programa faz, identificar seus erros e decidir
        como utilizá-lo.
      </p>
      <p>
        De qualquer forma, vale ressaltar que este curso não é uma bala de prata
        para todas as necessidades de aprendizado em matemática ou programação,
        e os estudantes devem buscar fontes complementares de estudo e exercícios
        para se desenvolverem. A inteligência artificial também pode ser uma
        dessas ferramentas, desde que seja utilizada para ajudar no aprendizado,
        e não simplesmente para evitar o esforço de aprender.
      </p>
      <p>
        A internet está cheia de recursos parecidos e bastante valiosos. E isto
        é ótimo! Hoje existem cursos, vídeos, comunidades, ferramentas
        interativas e inteligências artificiais capazes de ajudar estudantes a
        aprender praticamente qualquer coisa. Esse curso se apresenta como mais
        um recurso disponível aos estudantes. Espero que um bom número deles se
        beneficie e aprenda coisas novas.
      </p>
      <p>
        O curso está dividido em algumas unidades temáticas. Programação,
        Aritmética, Funções, Progressões, Trigonometria, Matemática Financeira,
        entre outros temas. O principal diferencial do curso é o aspecto
        computacional e prático. Por exemplo, esta página disponibiliza um
        ambiente com vários exercícios de programação e matemática, muitos deles
        baseados em questões do ENEM. O ideal é que os alunos pratiquem
        resolvendo os exercícios enquanto avançam no curso.
      </p>
      <p>
        Nesta página, os estudantes conseguem não apenas programar as soluções
        dos exercícios na linguagem JavaScript, como também obter uma resposta
        automática em tempo real sobre a corretude do código criado. O ambiente
        também mostra mensagens amigáveis para os usuários em caso de erro, e se
        o estudante estiver logado, é possível registrar o progresso e as
        soluções enviadas para conferência posterior.
      </p>
      <p>
        A necessidade de ter um computador ou celular e acesso à internet ainda
        é uma barreira grande. Mesmo assim, cada vez mais ferramentas e recursos
        educacionais estão disponíveis para quem deseja aprender. O importante é
        não deixar que a existência de tecnologias cada vez mais poderosas seja
        motivo para desistir de aprender. Pelo contrário: quanto mais você
        entende, melhor consegue utilizar essas tecnologias.
      </p>
      <p>
        A inteligência artificial não acabou com a necessidade de aprender a
        programar. Ela tornou ainda mais importante saber pensar, resolver
        problemas, fazer perguntas e entender respostas. Quem apenas copia uma
        solução continua dependente da ferramenta. Quem entende a solução
        consegue utilizar a ferramenta para ir muito mais longe.
      </p>
      <p>O tempo está passando, para que esperar mais? Bora aprender?</p>
      <p>
        Bons Estudos
        <br />
        Prof. Hermano Lustosa
      </p>
      <p>
        <a
          href="https://linkedin.com/in/hlustosa"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        {" · "}
        <a
          href={siteConfig.githubRepo}
          rel="noreferrer"
          target="_blank"
        >
          GitHub ({siteConfig.projectName})
        </a>
        {" · "}
        MIT
      </p>
      <p>
        Gabaritos dos exercícios (código de referência):{" "}
        <a
          href={`${siteConfig.githubRepo}/tree/main/${siteConfig.exerciseSolutionsPath}`}
          rel="noreferrer"
          target="_blank"
        >
          {siteConfig.exerciseSolutionsPath}
        </a>
      </p>
    </main>
  );
}
