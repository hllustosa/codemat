import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  Eq,
  ClassSectionTitle,
  ClassSubSectionTitle,
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
      <ClassSectionTitle title="Conjuntos Numéricos" />
      Na Matemática, os números são classificados em cinco tipos diferentes:
      Naturais, Inteiros, Racionais, Irracionais e Reais. Cada tipo é retratado
      por um letra maiúscula.
      <p />
      <b>Naturais</b> (<Eq s="\mathbb{N}" />) são os números que mais utilizamos
      para contar: 1, 2, 3, 4, 5 e assim por diante. Eles foram criados há
      milhares de anos para representar quantidades de objetos, de animais,
      períodos de tempo (dias, meses, anos), etc.
      <p />
      <b>Inteiros</b> (<Eq s="\mathbb{Z}" />) são os números positivos e
      negativos que <b>não</b> possuem parte decimal, ou seja, que <b>não</b>{" "}
      são ``quebrados''. Exemplos de inteiros são -3, -2, -1, 0, 1, 2, entre
      outros. Os negativos são usados para indicar dívidas ou temperaturas
      abaixo de 0 ºC, por exemplo.
      <p />
      <b>Racionais</b> (<Eq s="\mathbb{Q}" />) são os números que podem ser
      escritos na forma de uma fração irredutível, como <Eq s="-\frac{2}{5}" />,{" "}
      <Eq s="-\frac{1}{2}" />, <Eq s="\frac{1}{3}" />, <Eq s="\frac{4}{1}" />
      ... A partir deles podemos expressar a divisão de um todo em partes
      iguais.
      <p />
      <b>Irracionais</b> (<Eq s="\mathbb{I}" />) são os números que <b>não</b>{" "}
      são racionais, isto é, que <b>não</b> podem ser escritos na forma de
      fração irredutível. São números que possuem infinitos algarismos não
      periódicos (que não se repetem em padrões) após a vírgula. Entre eles
      temos a <Eq s="\sqrt{2}" /> (que vale aproximadamente 1,41) e{" "}
      <Eq s="\pi" /> (que é a razão entre comprimento de uma circunferência e
      seu diâmetro e vale aproximadamente 3,14).
      <p />
      <b>Reais</b> (<Eq s="\mathbb{R}" />) é a união de todos os números
      Racionais e Irracionais. Normalmente, representamos os reais por uma reta
      horizontal contínua, com o 0 na posição central e os números positivos à
      direita e os negativos à esquerda em ordem crescente:
      <ClassImage
        src="/img/classes/1.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <b>Observação 1</b>: Note que, por exemplo, o -3 é menor que o -2. Isso
      acontece pois -3 é mais negativo que o -2.
      <p />
      <b>Observação 2</b>: Na reta acima destacamos alguns números reais, mas
      existem infinitos, inclusive à esquerda do -3 e à direita do 3. As setas e
      as reticências nas extremidades da reta indicam exatamente isso: números
      intermináveis.
      <ClassSectionTitle title="Operações" />
      A partir dos diferentes tipos de números, podemos estabelecer quatro
      operações: Adição, Subtração, Multiplicação e Divisão.
      <ClassSubSectionTitle title="Adição e Subtração" />
      <Eq s="Termo + Termo = Soma" block></Eq>
      <Eq s="Termo - Termo = Diferenca " block></Eq>
      <p />A <b>soma</b> entre dois números não fracionários é obtida pela reta
      real, considerando o deslocamento à direita como o sentido positivo e o
      deslocamento à esquerda como o sentido negativo:
      <ul>
        <li>
          {" "}
          <span>a)</span> <Eq s="2 + 3 = 5" /> (a partir do 2, realizamos 3
          deslocamentos para a direita).{" "}
        </li>

        <li>
          {" "}
          <span>b)</span>
          <Eq s="-7 + (-1) = -8" /> (a partir do -7, realizamos 1 deslocamento
          para a esquerda).{" "}
        </li>
      </ul>
      A <b>diferença</b> entre dois números não fracionários é obtida pela soma
      do primeiro com o <b>oposto</b> do segundo. (O oposto de um número é
      aquele que está à mesma distância do 0 na reta numérica. Em outras
      palavras, corresponde ao mesmo valor numérico com sinal invertido).
      <ul>
        <li>
          <span>a)</span> <Eq s="-2-(+4)=-2+(-4)=-6" /> (a partir do -2,
          realizamos 4 deslocamentos para a esquerda).
        </li>
        <li>
          <span>b)</span> <Eq s="-5-(-8)=-5+8=3" /> (a partir do -5, realizamos
          8 deslocamentos para a direita).
        </li>
      </ul>
      Tanto a adição quanto a subtração de dois números fracionários resultam em
      um número fracionário, como indicado na relação abaixo, em que{" "}
      <Eq s="a" />, <Eq s="b" />, <Eq s="c" /> e <Eq s="d" /> representam
      números inteiros, com <Eq s="b" />, <Eq s="d \neq 0" />.
      <p />
      <Eq block s="\frac{a}{b} \pm \frac{c}{d} = \frac{ad\pm cb}{bd}" />
      <p />
      <ul>
        <li>
          <span>a)</span>{" "}
          <Eq s="\frac{4}{3} + \frac{5}{2} = \frac{4.2 + 5.3}{3.2} = \frac{23}{6}" />
        </li>
        <li>
          <span>b)</span>{" "}
          <Eq s="\frac{1}{7} - \frac{6}{11} = \frac{1.11 - 6.7}{7.11} = \frac{-31}{77}" />
        </li>
      </ul>
      <ClassSubSectionTitle title="Multiplicação" />
      <p />
      <Eq block s="Fator \cdot Fator = Produto" />
      <p />
      <b>Observação</b>: Antes de compreender o funcionamento da multiplicação e
      divisão, precisamos conhecer a lei Matemática chamada{" "}
      <b>Regra de Sinais</b>:
      <ul>
        <li>
          <span>
            <Eq s="\rightarrow" />
          </span>{" "}
          A multiplicação ou divisão entre dois termos positivos resulta em um
          termo positivo.
        </li>
        <li>
          <Eq s="\rightarrow" /> A multiplicação ou divisão entre dois termos
          negativos resulta em um termo positivo.
        </li>
        <li>
          <Eq s="\rightarrow" /> A multiplicação ou divisão entre um termo
          positivo e um negativo (em qualquer ordem) resulta em um termo
          negativo.
        </li>
      </ul>
      <ClassImage
        src="/img/classes/regra-de-sinais.png"
        pos="center"
        style={{ marginTop: "35px", marginBottom: "35px", maxWidth: "80%" }}
      />
      <p /> A Regra de Sinais define o sinal do resultado
      <p /> a partir dos sinais dos números a ser multiplicados (ou divididos).
      Na multiplicação entre números não fracionários, aplicamos diretamente a
      Regra de Sinais:
      <ul>
        <li>
          <span>a)</span> <Eq s="2\cdot9 = 18" />
        </li>
        <li>
          <span>b)</span> <Eq s="(-5)\cdot(-12)=60" />
        </li>
        <li>
          <span>c)</span> <Eq s="(-3)\cdot(+10)=-30" />
        </li>
      </ul>
      No caso da multiplicação entre números fracionários, a solução é uma
      fração em que o numerador corresponde ao produto entre os numeradores de
      cada termo e o denominador corresponde ao produto entre os denominadores
      de cada termo:
      <Eq s="\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}" />
      <ul>
        <li>
          <span>a)</span>{" "}
          <Eq s="\frac{2}{7} \cdot \frac{6}{5} = \frac{2\cdot6}{7\cdot5} = \frac{12}{35}" />
        </li>
        <li>
          <span>b)</span>{" "}
          <Eq s="-\frac{5}{3} \cdot \frac{1}{9} = \frac{-5\cdot1}{3\cdot9} =- \frac{5}{27}" />
        </li>
      </ul>
      <ClassSubSectionTitle title="Divisão" />
      <p />
      <Eq block s="Dividendo \div Divisor = Quociente " /> <p />
      Ao dividir números não fracionários, utilizamos novamente a Regra de
      Sinais:
      <ul>
        <li>
          <span>a)</span> <Eq s="6 \div 3 = 2" />
        </li>
        <li>
          <span>b)</span> <Eq s="(-45) \div (-5) = 9" />
        </li>
        <li>
          <span>c)</span> <Eq s="56 \div (-8) = - 7" />
        </li>
      </ul>
      Para a divisão entre números fracionários, a ideia é <b>inverter</b> a
      segunda fração (trocando o numerador pelo denominador) e transformar a
      operação em uma multiplicação de frações:
      <Eq s="\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c} = \frac{ad}{bc}" />
      <ul>
        <li>
          <span>a)</span>{" "}
          <Eq s="- \frac{9}{4} \div \frac{7}{2} = - \frac{9}{4} \cdot \frac{2}{7} = \frac{- 9\cdot2}{4\cdot7} = - \frac{18}{28}" />
        </li>
        <li>
          <span>b)</span>{" "}
          <Eq s="- \frac{13}{5} \div -\frac{1}{6} = - \frac{13}{5} \cdot -\frac{6}{1} = \frac{(- 13)\cdot(-6)}{5\cdot1} = \frac{78}{5}" />
        </li>
      </ul>
    </ClassContainer>
  );
}

export default Content;
