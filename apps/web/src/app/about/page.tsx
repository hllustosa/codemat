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
        Milhões de estudantes do país inteiro ficaram sem aulas devido à
        pandemia, e como sempre, os mais pobres foram os mais prejudicados. As
        escolas públicas fecharam primeiro, abriram depois e praticamente não
        funcionaram durante este difícil momento pelo qual passamos.
      </p>
      <p>
        Nesse cenário desolador, vai ser preciso muita paciência e determinação
        para minimizar o impacto negativo do tempo passado fora da sala de aula
        por milhões de jovens em todo o país.
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
        mesmo problema. De qualquer forma, vale ressaltar que este curso não é
        uma bala de prata para todas as necessidades de aprendizado em
        matemática, e os estudantes devem buscar fontes complementares de estudo
        e exercícios para se desenvolverem.
      </p>
      <p>
        A internet está cheia de recursos parecidos e bastante valiosos. E isto
        é ótimo! Esse curso se apresenta como mais um recurso disponível aos
        estudantes. Espero que um bom número deles se beneficie e aprenda coisas
        novas.
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
        A necessidade de ter um computador ou celular e acesso à internet é uma
        barreira grande. Como medida individual, o autor do curso planeja
        oferecer aulas e oficinas presenciais baseadas no curso em um ambiente
        físico, quando isto for possível no futuro.
      </p>
      <p>
        O tempo está passando, para que esperar mais? Bora aprender?
      </p>
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
