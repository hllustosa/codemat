import React from "react";
import {
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
} from "../../../components/ClassContent";

function Content() {
  return (
    <ClassContainer>
      A partir dessa unidade iremos nos dedicar ao estudo da matemática.
      Começaremos fazendo uma revisão dos conceitos mais básicos da aritmética.
      <ClassImage
        src="/img/arithmetic.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <p />
      <ClassSectionTitle title="Razões Proporcionais" />
      Dizemos que duas razões são <b>proporcionais</b> quando possuem o mesmo
      resultado:
      <p />
      <Eq block s="\frac{a}{b} = \frac{c}{d}" />
      Lê-se: <i>a está para b assim como c está para d</i> <p />
      De acordo com a relação entre as medidas envolvidas, a proporção pode ser{" "}
      <b>direta</b> ou <b>inversa</b>.
      <ul>
        <li>
          {" "}
          Grandezas diretamente proporcionais: A variação de uma grandeza afeta
          a segunda na mesma razão (se uma dobrar, a outra também dobra; se uma
          for divida por três, a outra também é dividida por três).
          <ClassImage
            src="/img/classes/Diretam.Prop.2.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "400px",
            }}
          />
        </li>
        <li>
          {" "}
          Grandezas inversamente proporcionais: A variação de uma grandeza afeta
          a segunda na razão inversa (se uma for dividida por dois, a outra
          dobra; se uma for multiplicada por quatro, a outra é dividida por
          quatro).
          <ClassImage
            src="/img/classes/Invers.Prop.2.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "400px",
            }}
          />
          <p />
          Considere uma distância fixa de 100km.
        </li>
      </ul>
      <ClassSectionTitle title="Regra de Três" />
      No estudo de proporções, nem sempre todos os valores são conhecidos. Nas
      situações a seguir, vamos explorar grandezas proporcionais em que três
      medidas são dadas e uma é desconhecida (chamada de <i>incógnita</i> e
      representada por uma letra). Para resolver problemas desse tipo, adotamos
      um procedimento matemático chamado <b>Regra de Três Simples</b>, que
      determina a{" "}
      <b>
        igualdade entre produtos do numerador de uma fração pelo denominador da
        outra
      </b>
      :
      <p />
      <Eq block s="\frac{a}{b}=\frac{c}{d} \Rightarrow a \cdot d = b\cdot c" />
      <p />
      Vejamos dois exemplos:
      <ol>
        <li>
          {" "}
          Uma motorista deseja realizar uma viagem de 150km gastando o mínimo
          possível com gasolina. Sabendo que seu carro realiza 10km por litro,
          quantos litros ela deve abastecer para completar a viagem?
          <p />
          Como são duas grandezas (distância em Km e litros de gasolina),
          montamos uma tabela com duas colunas.
          <ClassImage
            src="/img/classes/Regrade3DP.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "250px",
            }}
          />
          Depois verificamos se as grandezas são inversa ou diretamente
          proporcionais. Neste caso, observe que a distância percorrida e a
          quantidade de litros necessária são grandezas diretamente
          proporcionais (quanto mais quilômetros rodados, mais litros de
          gasolina serão consumidos). Assim, montamos a proporção:
          <Eq s="\frac{10}{150} = \frac{1}{x}" />
          <p />
          Por fim, aplicamos a Regra de Três propriamente dita: <p />
          <p />
          <Eq s="10\cdot x = 150 \cdot 1" />
          <p />
          <Eq s="x = \frac{150}{10}" />
          <p />
          <Eq s="x = 15" />
          <p />
          <p />
          Serão necessários, no mínimo, 15L de gasolina para completar a viagem.
        </li>
        <li>
          {" "}
          Para a construção de um prédio em 20 meses, foram necessários 50
          trabalhadores. Se houvessem 150 operários a mais, em quanto tempo o
          edifício seria concluído?
          <p />
          Novamente, o enunciado indica duas grandezas (número de operários e
          tempo em meses). Organizando a tabela:
          <ClassImage
            src="/img/classes/Regrade3IP.png"
            pos="center"
            style={{
              marginTop: "35px",
              marginBottom: "35px",
              width: "80%",
              maxWidth: "250px",
            }}
          />
          Perceba que desta vez as grandezas são inversamente proporcionais
          (quanto mais funcionários, menor é o tempo para a conclusão da obra).
          Logo, precisamos <b>inverter</b> uma das frações na montagem da
          proporção:
          <p />
          <Eq s="\frac{50}{200}=\frac{y}{20}" />
          <p />
          Efetuando a Regra de Três:
          <p />
          <Eq s="50\cdot 20 = 200 \cdot y" />
          <p />
          <Eq s="y = \frac{1000}{200}" />
          <p />
          <Eq s="y = 5" />
          <p />
          Assim, se houvessem 200 trabalhadores, o prédio seria terminado em 5
          meses.
        </li>
      </ol>
    </ClassContainer>
  );
}

export default Content;
