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
    fontSize: "16px",
  }
}));

function About() {
  const classes = styles();
  return (
    <main className={classes.root}>
      <img
        style={{ float: "right", marginLeft: "15px", marginBottom: "15px" }}
        src=""
        width="245px"
        height="330px"
      ></img>
      <p style={{fontSize: "20px"}}> Saudações </p>
      Eu sou o prof. Hermano Lustosa! Sou nascido e criado em Teresópolis no
      estado do Rio de Janeiro. Filho de uma costureira e dona de casa e de um
      mecânico. Sou (quase) casado com uma professora, e irmão de outras duas. 
      Minha vida inteira sempre gostei de entender como as coisas
      funcionavam. Adoro ciências, tecnologia, matemática 
      e uma ou outra viagem filosófica e espiritualista. <p />
      Sou do mundo das exatas. Formado em Ciência da Computação pela minha
      querida faculdade UNIFESO, mestre e doutor em Gerenciamento de Dados
      Científicos pelo LNCC. Passei minha vida em sala de aula, seja como aluno ou
      professor. Depois dos últimos 6 anos trabalhando como professor
      universitário, me senti esmagado com o cenário devastador da educação ao meu redor e em
      nosso país. <p />
      Vi muitos alunos e alunas empurrarem a faculdade com a barriga, passando
      anos de suas vidas em um curso universitário caro, mas sem ter nenhuma
      paixão, gosto ou motivação pelo conteúdo que lhes era passado. Vi alunos e
      alunas pobres que assistiam às aulas à noite após as 8h horas de trabalho
      diário e cuja capacidade de ter atenção e aprender um tema novo e denso
      era seriamente prejudicada. Vi a instituição onde trabalhava tomar uma
      série de medidas questionáveis para não ficar para trás na competição
      agressiva com as grandes franquias de EaD. E vejo hoje, a uma certa distância,
      o deficitário ensino público da minha comunidade ficar ainda pior. <p />
      Por outro lado, também atuo como desenvolvedor há alguns anos, tendo
      trabalhado em empresas na área de automação comercial, saúde e pagamentos.
      Vejo o mundo das techs, big techs, fintechs, edutechs, logtechs, govtechs
      e qualquer outra coisa tech que se possa imaginar. Nesse mundo, saber
      programar e criar soluções computacionais é um privilégio! No momento
      temos pleno emprego, oportunidades e bons salários. <p />
      Este novo curso de matemática, computação e programação,
      é o resultado da minha insatisfação como professor, meu amor
      pela ciência e tecnologia, e minha esperança no mercado de desenvolvimento de softwares.  
      O curso é voltado para alunas e alunos do ensino médio que 
      queiram dar os primeiros passos no mundo da programação.
      <p />
      Espero que o conteúdo passado no curso ajude os jovens a recuperar (mesmo
      que em pequena parte) o tempo perdido com a falta das aulas durante a
      pandemia. Também desejo que, mesmo diante das dificuldades e limitações impostas pelo
      momento atual, os estudantes não percam a esperança e a aspiração de
      uma vida um pouco melhor no futuro! <p />

      Um abraço, <br/>
      Prof. Hermano Lustosa
    </main>
  );
}

export default withBaseContentPage(About, "Sobre o autor", "Egotrip", "180px");
