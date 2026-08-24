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
} from "@codemat/lesson-kit";

function Content() {
  return (
    <ClassContainer>
      Vamos aprender a lidar com alguns erros no código na página do Compemat.
      <ClassImage
        src="/img/programming.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />{" "}
      <ClassSectionTitle title="Lidando com Erros" />
      Quando falamos de maneira informal sobre erro em programação, podemos
      estar nos referindo a um conjunto de coisas semelhantes, porém distintas.
      Existem erros em nossos programas que fazem com que estes produzam saídas
      ou tenham comportamentos diferentes do desejado. Estes erros, às vezes
      chamados de <b>bugs</b> são problemas na lógica do nosso software.
      <p />
      Devs utilizam várias ferramentas complexas para analisar a resolver{" "}
      <b>bugs</b>. Garantir que um programa faça aquilo que deve é uma tarefa
      árdua, e mesmo programas desenvolvidos por grandes empresas e por
      excelentes profissionais irão apresentar esses erros de lógica de tempos
      em tempos. Criar softwares é algo muito complexo, e é muito difícil
      antever todos os cenários possíveis de execução. Por esse motivo, os
      softwares estão sempre evoluindo e sendo atualizados, para que suas falhas
      internas sejam corrigidas e que novas melhorias sejam adicionadas.
      <p />
      Além desses, temos erros que impedem que nossos programas executem de
      forma total ou parcial. Não erros de lógica, pois são casos em o programa
      nem sequer executa. Esses são erros são causados por termos escrito nosso
      código de maneira incorreta, isto é, sem respeitar todas as regras da
      linguagem de programação.
      <p />
      Esses erros, quando cometidos por alguém com experiência na linguagem, são
      rapidamente resolvidos, pois os interpretadores e compiladores os apontam.
      Porém, quando estamos aprendendo uma nova linguagem, e não dominamos sua
      sintaxe, é muito comum gastar bastante tempo apenas para fazer com o que o
      programa esteja correto sintaticamente e consiga executar (mesmo que cheio
      de bugs ou falhas lógicas).
      <p />
      Vamos enumerar alguns desses erros para tentar facilitar sua vida à medida
      em que você ganha experiência com programação.
      <ClassSectionTitle title="Erro de Sintaxe" />
      Um erro de sintaxe quer dizer que seu código nem consegue ser executado
      pois está escrito de forma incorreta, violando algumas regras de linguagem
      JavaScript. Diversas coisas podem levar a um erro de sintaxe. Você pode
      ter formado uma expressão de maneira incorreta, pode ter esquecido de
      fechar um parênteses ou chaves, pode até mesmo estar usando um nome
      incorreto de variável. <p />
      Vamos a alguns exemplos: <p />
      <ul>
        <li>
          {" "}
          Neste caso temos uma aspas faltando, dando origem a uma expressão mal
          formada.
          <p />
          <ClassCodeEditor code={`var resultado = (2 + 2/6;`} height="50px" />
          <p />
        </li>
        <li>
          {" "}
          Neste caso temos a tentativa de criação de uma variável com nome
          inválido (contendo espaços).
          <p />
          <ClassCodeEditor
            code={`var variavel estranha = 2 + 2;`}
            height="50px"
          />
          <p />
        </li>
      </ul>
      Algumas coisas que você pode verificar quando receber esse erro:
      <br />
      <ul>
        <li>
          {" "}
          Se tiver um comando de atribuição, veja se a expressão à direita do
          operador está correta e se você não está usando algum operador
          inexistente ou de forma inválida.
        </li>
        <li>Verifique se não existem parênteses faltando ou sobrando.</li>
        <li>Verifique se não existem chaves sobrando ou faltando.</li>
        <li>
          Verifique se os delimitadores de cadeira de caracteres " ou ' estão
          corretos.
        </li>
        <li>
          Tente dividir a linha, separando a lógica do que você está fazendo
          nesta linha em mais de uma, de maneira a isolar o erro.
        </li>
        <li>
          Compare seu código com um código similar, que você saiba que está
          funcionando, para tentar identificar as diferenças significativas onde
          podem estar os erros.{" "}
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Erro de Referência" />
      Esse erro é bem simples de compreender e resolver. Ele ocorre quando
      tentamos usar uma variável ou função antes de termos declarado a mesma. A
      solução nesse caso e rever nosso lógica, pois estamos claramente tentado
      utilizar uma variável ou função que não existe.
      <p />
      Vamos a um exemplo: <p />
      Neste caso, a variável <b>outra</b> não está declarada e mesmo assim
      estamos tentando utilizá-la.
      <p />
      <ClassCodeEditor code={`var minha_var = 2 * outra;`} height="50px" />
      <p />
      <ClassSectionTitle title="Erro de Tipo" />
      O JavaScript é linguagem fracamente tipada. Isso quer dizer que ela é
      bastante flexível em relação aos tipos das variáveis, permitindo com que
      certas conversões de tipos de ajustes ocorram de forma automática. Existem
      situações, entretanto, em que tentamos executar operações específicas
      sobre tipos que não as suportam. Neste caso, acabamos com um erro de tipo.
      <p />
      Vamos a alguns exemplos: <p />
      <ul>
        <li>
          {" "}
          Neste caso bastante estranho, estamos tentando tratar uma variável do
          tipo string como se ela fosse uma função.
          <p />
          <ClassCodeEditor
            code={`var texto = "meu texto";\nvar r = texto();`}
            height="50px"
          />
          <p />
        </li>
      </ul>
      Algumas coisas que você pode verificar quando receber esse erro:
      <br />
      <ul>
        <li>
          É possível que você esteja usando uma string em uma operação numérica
          ou vice-versa. Também é possível que você esteja tentando acessar um
          elemento de uma variável que não é uma lista, ou uma referência a um
          objeto como se fosse uma função. Verifique se os valores guardados em
          cada variável da linha indicada estão de acordo com o esperado.
        </li>
      </ul>
      <p />
      <ClassSectionTitle title="Erro de Timeout (Tempo Esgotado)" />
      Este erro não é nativo da linguagem JavaScript, mas pode ocorrer,
      sobretudo se você estiver utilizando laços de repetição. Atualmente existe
      um limite para quanto tempo seu código pode ficar em execução na página.
      Caso o código execute por mais de 30 segundos sem terminar, por questões
      de segurança, ele é interrompido e esse erro gerado. Neste exemplo temos
      um laço de repetição construído de maneira incorreta, que nunca termina, e
      por isso o programa também nunca para de executar. Para ver o erro é
      necessário executar e esperar por 30 segundos.
      <p />
      <ClassCodeEditor
        code={`var cont = 0;\nwhile(cont < 10){\n    output("Fazendo algo");\n}`}
        height="80px"
      />
      <p />
      Algumas coisas que você pode verificar quando receber esse erro:
      <br />
      <ul>
        <li>
          O seu código deve conter algum tipo de laço de repetição (while ou
          for) sem uma condição de parada adequada (loop infinito). É possível
          também que seu código esteja executando uma tarefa muito complexa
          (mais do que o necessário) com valores muito grades e que isto esteja
          dando origem a um problema de desempenho. É provável que seu código
          esteja incorreto e que esteja fazendo muito mais que o necessário para
          resolver o problema.
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
