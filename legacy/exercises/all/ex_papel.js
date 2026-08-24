import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      O padrão internacional ISO 216 define os tamanhos de papel utilizados em
      quase todos os países, com exceção dos EUA e Canadá. O formato-base é uma
      folha retangular de papel, chamada de A0, cujas dimensões são 84,1 cm x
      118,9 cm. A partir de então, dobra-se a folha ao meio, sempre no lado
      maior, obtendo os demais formatos, conforme o número de dobraduras.
      Observe a figura: A1 tem o formato da folha A0 dobrada ao meio uma vez, A2
      tem o formato da folha A0 dobrada ao meio duas vezes, e assim
      sucessivamente.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2016q163.svg"} width="80%" />
        <p />
      </div>
      <p />
      Neste problema, você deve produzir um programa que receba como entrada um
      inteiro <b>s</b> representando o tamanho da folha no padrão ISO 216. Por
      exemplo, <Eq s="s=2" /> representa a folha de tamanho A1, <Eq s="s=2" /> por sua
      vez representa a folha de tamanho A2, e assim sucessivamente.
      <p />O seu programa deve produzir como saída a quantidade de folhas de
      papel de tamanho <d>s</d> que cabem em uma folha de papel A0.
      <p />
      Dica: Utilize a função <b>Math.pow(base, expoente)</b> para o cálculo de potências.
      <p />
      <h3>Entradas</h3>
      Um número <b>s</b> (<Eq s="1 \leq s \leq 8 " />) contendo um tamanho de
      papel. <p />
      <h3>Saída</h3>
      Um número contendo a quantidade de folhas de tamanho <b>s</b> que cabem em
      uma folha de papel A0.
      <p />
    </div>
  );
}
