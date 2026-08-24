import React from "react";
import {
  Grid,
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSectionTitle,
  ClassSubSectionTitle,
  Eq,
  ClassImage,
  ClassToolTip,
  ClassCodeEditor,
} from "@codemat/lesson-kit";
import { PRIMARY, SECONDARY, CONSTRAST_LIGHT } from "@codemat/lesson-kit";

function Content() {
  return (
    <ClassContainer>
      Nesta unidade estudaremos as funções. Vimos anteriormente o conceito de função e sua aplicação na programação.
      Estudaremos agora o conceito matemático de função, que está presente em diversos ramos de atividade humana.
      <ClassImage
        src="/img/functions.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "250px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Conceitos e Estrutura" />
      <b>Função</b> é uma relação entre dois conjuntos em que <b>cada</b>{" "}
      elemento do primeiro conjunto é associado a um <b>único</b> elemento do
      segundo conjunto:
      <ClassImage
        src="/img/classes/listacompras.png"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "80%",
          maxWidth: "350px",
        }}
      />
      <p />
      Observe que nesta lista de compras cada produto está associado a um preço{" "}
      <b>diferente</b> e portanto temos uma função. Nem toda relação entre dois
      conjuntos é uma função. Vejamos alguns exemplos:
      <ul>
        <li>
          <span>a)</span> <p />
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/nf1.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              A relação ao lado <b>não é uma função</b>, pois um elemento do
              primeiro conjunto (Ana) está associado a dois elementos do segundo
              conjunto (Mercado e Farmácia).
              <p />
            </Grid>
          </Grid>
        </li>
        <li>
          <span>b)</span>
          <p />
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/nf2.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <p />A relação ao lado <b>não é uma função</b>, pois um elemento
              do primeiro conjunto (Isabela) não está associado a nenhum
              elemento do segundo conjunto.
            </Grid>
          </Grid>
        </li>
        <li>
          <span>c)</span>
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/f1.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <p />A relação ao lado <b>é uma função</b>. Diferentes elementos
              do primeiro conjunto podem estar associados ao mesmo elemento no
              segundo conjunto (observe a diferença entre este exemplo e o item
              a).
            </Grid>
          </Grid>
        </li>
        <li>
          <span>d)</span>
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/f2.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <p />A relação ao lado <b>é uma função</b>. Nem todos os elementos
              do segundo conjunto precisam ser associados, ou seja, receber
              flechas (observe a diferença entre este exemplo e o item b).
            </Grid>
          </Grid>
        </li>
      </ul>
      <p />
      Quando temos uma função (como nos exemplos <Eq s="c" /> e <Eq s="d" />
      ), cada conjunto recebe um nome específico.
      <ul>
        <li>
          {" "}
          O primeiro conjunto (do qual saem as flechas) é chamado de{" "}
          <b>Domínio</b>.
        </li>
        <li>
          {" "}
          O segundo conjunto é chamado de <b>Contradomínio</b>.
        </li>
        <li>
          {" "}
          Em uma função, nem todos os elementos do segundo conjunto precisam
          estar relacionados com alguém do primeiro. Aqueles que estão (ou seja,
          que recebem flechas) compõem um conjunto chamado <b>Imagem</b>.
        </li>
      </ul>
      Normalmente, funções são nomeadas a partir de letras e{" "}
      <b>associam números com números</b>. Observe as funções <Eq s="f" /> e{" "}
      <Eq s="g" /> indicadas abaixo e seus conjuntos Domínio, Contradomínio e
      Imagem:
      <ul>
        <li>
          <span>1</span> <p />
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/dci1.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <p />
              Domínio de <Eq s="f=D(f)=A=\{-2,0,4\}" />
              <p />
              Contradomínio de <Eq s="f=Cd(f)=B=\{-6,0,12\}" />
              <p />
              Imagem de <Eq s="f=Im(f)=\{-6,0,12\}" />
            </Grid>
          </Grid>
        </li>
        <li>
          <span>2</span> <p />
          <Grid container>
            <Grid item sm={12} md={6}>
              <ClassImage
                src="/img/classes/dci2.png"
                pos="center"
                style={{
                  marginTop: "35px",
                  marginBottom: "35px",
                  width: "80%",
                  maxWidth: "350px",
                }}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              Domínio de <Eq s="g=D(g)=A=\{\frac{-1}{2},\pi,10\}" />
              <p />
              Contradomínio de <Eq s="g=Cd(g)=B=\{-1,0,1\}" />
              <p />
              Imagem de <Eq s="g=Im(g)=\{-1,1\}" />
            </Grid>
          </Grid>
        </li>
      </ul>
      <ClassSubSectionTitle title="Importância das funções no meio científico" />
      O conhecimento sobre de funções é fundamental em diversas áreas da
      produção científica:
      <ul>
        <li>
          {" "}
          Na análise comportamental e busca por previsões de fenômenos da
          Natureza como abalos sísmicos, tempestades e furacões.
        </li>
        <li>
          {" "}
          Em pesquisas acerca do desenvolvimento de epidemias em uma população.
        </li>
        <li>
          {" "}
          Na descrição de operações financeiras como aplicações sob o regime de
          juros compostos.{" "}
        </li>
        <li> Na investigação de tópicos da Cinemática. </li>
      </ul>
      Em muitos casos, as funções participantes envolvem uma quantidade muito
      grande de números, até mesmo infinitos, tanto no Domínio como no
      Contradomínio. Por conta disso, o uso de diagramas para retratar funções
      se torna inviável. A solução é o uso do Plano Cartesiano.
      <ClassSectionTitle title="Plano cartesiano" />O <b>plano cartesiano</b>{" "}
      consiste em uma malha quadriculada com dois eixos, um vertical e um
      horizontal:
      <ul>
        <li>
          {" "}
          O eixo horizontal é chamado de eixo das abcissas (ou eixo <Eq s="x" />
          ). Nele estão contidos os elementos do primeiro conjunto (Domínio) de
          uma função.
        </li>
        <li>
          {" "}
          O eixo vertical é chamado de eixo das ordenadas (ou eixo <Eq s="y" />
          ). Nele estão contidos os elementos do segundo conjunto
          (Contradomínio) de uma função. Consequentemente, este eixo também
          contém os elementos da Imagem, uma vez que ela é uma parte do
          Contradomínio.
        </li>
      </ul>
      A numeração dos eixos segue a ordenação da reta real:
      <ClassImage
        src="/img/classes/cartesiano.png"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "80%",
          maxWidth: "350px",
        }}
      />
      No contexto de uma função, cada ponto no plano cartesiano representa a
      relação entre os valores correspondentes no eixo horizontal e vertical. A
      localização deste ponto é descrita entre parênteses por um par ordenado:
      Ponto = (valor no eixo x, valor no eixo y)
      <ul>
        <li>
          <span>a)</span>
          <ClassImage
            src="/img/classes/origem.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "350px",
            }}
          />
          <p />O ponto de encontro entre os dois eixos (indicado em azul) é
          chamado de <b>origem</b>.
        </li>{" "}
        <li>
          <span>b)</span>
          <ClassImage
            src="/img/classes/ponto.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "350px",
            }}
          />
          <p />
          Dizemos que <Eq s="-1" /> no eixo x e <Eq s="2" /> no eixo y são as{" "}
          <b>coordenadas</b> do ponto em verde.
        </li>
      </ul>
      A partir de uma função, podemos esboçar seu <b>gráfico</b> no Plano
      Cartesiano ao representar todos os pontos envolvidos, ou seja, todas as
      relações do primeiro com o segundo conjunto. Considere o exemplo:
      <ol>
        <li>
          <ClassImage
            src="/img/classes/discreta.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "350px",
            }}
          />

          <p />

          <ClassImage
            src="/img/classes/pontos.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "350px",
            }}
          />
        </li>{" "}
      </ol>
      A partir de agora, vamos considerar somente funções em que o Domínio e o
      Contradomínio são formados por todos os números reais. Como consequência,
      a quantidade de associações (flechas) é muito grande, o que exige outra
      maneira de descrevê-las. Para isso, utilizamos a Lei de uma Função.
      <ClassSectionTitle title="Lei de uma Função" />A <b>lei de uma função</b>{" "}
      determina uma <b>regra</b> para encontrar a imagem de cada elemento do
      Domínio. Os elementos do domínio normalmente são indicados pela letra x e
      seus correspondentes na imagem pela letra y. Observe o exemplo da função{" "}
      <Eq s="h" /> abaixo, em que cada valor do Domínio é associado ao seu
      dobro:
      <ClassImage
        src="/img/classes/diag.png"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "80%",
          maxWidth: "350px",
        }}
      />
      Assim, escolhendo valores para <Eq s="x" /> no Domínio, podemos obter suas
      imagens:
      <p />
      <table style={{ margin: "auto", textAlign: "center"}}>
        <thead style={{color: SECONDARY, backgroundColor: PRIMARY}}>
          <tr>
            <td width="50px">x</td>
            <td width="220px">y</td>
          </tr>
        </thead>
        <tbody style={{color: PRIMARY, backgroundColor: CONSTRAST_LIGHT}}>
          <tr>
            <td>-7</td>
            <td>2.(-7) = -14</td>
          </tr>
          <tr>
            <td>-1</td>
            <td>2.(-1) = - 2</td>
          </tr>
          <tr>
            <td>0</td>
            <td>2.(0) = 0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2.(3) = 6</td>
          </tr>
          <tr>
            <td>11</td>
            <td>2.(11) = 22</td>
          </tr>
        </tbody>
      </table>
      <p />
      Perceba que <Eq s="x" /> e <Eq s="y" /> assumem diferentes valores na
      função. Mais precisamente, para cada valor escolhido de <Eq s="x" />, há
      um valor de <Eq s="y" /> correspondente. Dizemos que uma função é,
      portanto, constituída por <b>variáveis</b>:
      <p />
      <ul>
        <li>
          {" "}
          Como o valor de <Eq s="x" /> é escolhido livremente, ele é chamado de{" "}
          <b>variável independente</b>.
        </li>
        <li>
          {" "}
          Como o valor de <Eq s="y" /> é obtido a partir da escolha de{" "}
          <Eq s="x" />, a variável <Eq s="y" /> é conhecida como{" "}
          <b>variável dependente</b>.
        </li>
      </ul>
      Com essas informações, podemos descrever a <b>lei da função</b>{" "}
      <Eq s="h" /> em que cada elemento do domínio é associado ao seu dobro:
      <p />
      <Eq block s="y = 2x" />
      <p />
      Como o valor de <Eq s="y" /> <b>depende</b> de <Eq s="x" />, também
      podemos escrever:
      <p />
      <Eq block s=" h(x) = 2x" />
      <p />
      Os números que aparecem na lei de uma função são chamados de{" "}
      <b>coeficientes</b>. No exemplo anterior, o único coeficiente é 2.
    </ClassContainer>
  );
}

export default Content;
