import { withBaseContentPage } from "../../components/Page";
import { makeStyles } from "@material-ui/core";
import { CONTENT_BG, PRIMARY } from "../../public/colors";
const styles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
    width: "100%",
    padding: "25px",
    minHeight: "calc(100vh - 230px)",
    background: CONTENT_BG,
    margin: "auto",
  },
  blockQuote: {
    borderLeft: `7px solid ${PRIMARY}`,
    background: "#ebebeb",
    padding: "15px 10px",
    margin: "25px",
    fontStyle: "italic",
  },
}));

function Course() {
  const classes = styles();
  return (
    <main className={classes.root}>
      <p style={{ fontSize: "20px" }}> Bem vindos ao Comp & Mat </p>
      <img
        style={{ margin: "auto",  display: "block" }}
        src=""
        width="320px"
        height="130px"
      ></img>{" "}
      <p />
      Milhões de estudantes do país inteiro ficaram sem aulas devido à
      pandemia, e como sempre, os mais pobres foram os mais prejudicados. 
      As escolas públicas fecharam primeiro, abriram depois e
      praticamente não funcionaram durante este difícil momento pelo qual
      passamos. <p />
      Nesse cenário desolador, vai ser preciso muita paciência e determinação
      para minimizar o impacto negativo do tempo passado fora da sala de aula
      por milhões de jovens em todo o país.
      <p />
      Este curso é uma pequena iniciativa individual cujo objetivo é
      fornecer um conteúdo de qualidade e estruturado para os estudantes que
      querem aprimorar seu conhecimento matemático enquanto aprendem uma nova
      habilidade, a programação.
      <p />
      Este curso une o útil ao mais útil ainda, permitindo que os alunos façam
      uma revisão do conteúdo de matemática do ensino médio, com foco nos
      principais tópicos cobrados na prova ENEM, enquanto aprendem e
      praticam programação.
      <p />
      Muitos podem questionar: &ldquo;Para que aprender a resolver as questões do ENEM
      utilizando programação, se não vou poder usar um computador durante a
      prova?&rdquo;. A resposta para isso é simples, se você consegue criar uma
      solução computacional reproduzível para uma questão do ENEM, você
      facilmente seria capaz de manualmente resolver uma instância desse mesmo
      problema. De qualquer forma, vale ressaltar que este curso não é uma bala
      de prata para todas as necessidades de aprendizado em matemática, e os
      estudantes devem buscar fontes complementares de estudo e exercícios para
      se desenvolverem.
      <p />
      A internet está cheia de recursos parecidos e bastante
      valiosos. E isto é ótimo! Esse curso se apresenta como mais um recurso
      disponível aos estudantes. Espero que um bom número deles se beneficie e
      aprenda coisas novas.
      <p />
      O curso está divido em algumas unidades temáticas.
      Programação, Aritmética, Funções, Progressões, Trigonometria, Matemática
      Financeira, entre outros temas. O principal diferencial do curso é o
      aspecto computacional e prático. Por exemplo, esta página disponibiliza um ambiente com 
      vários exercícios de programação e matemática, muitos deles baseados em questões
      do ENEM. O ideal é que os alunos pratiquem resolvendo os exercícios enquanto avançam no curso.
      <p />
      Nesta página, os estudantes conseguem não apenas programar as soluções dos
      exercícios na linguagem JavaScript, como também obter uma resposta
      automática em tempo real sobre a corretude do código criado. O ambiente
      também mostra mensagens amigáveis para os usuários em caso de erro, e se o
      estudante estiver logado, é possível registrar o progresso e as soluções
      enviadas para conferência posterior.
      <p />
      A necessidade de um ter um computador ou celular e acesso a internet
      é uma barreira grande. Como medida individual, o autor do curso planeja oferecer aulas e oficinas
      presenciais baseadas no curso em um ambiente físico, quando isto for possível no futuro.  
      <p />
      O tempo está passando, para que esperar mais? Bora aprender?
      <p />
      Bons Estudos <br />
      Prof. Hermano Lustosa
    </main>
  );
}

export default withBaseContentPage(
  Course,
  "O Curso",
  "Matemática, Programação e Computação",
  "180px"
);
