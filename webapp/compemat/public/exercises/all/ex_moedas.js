import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Um apostador deve escolher uma entre cinco moedas ao acaso e lançá-la
      sobre uma mesa, tentando acertar qual resultado (cara ou coroa) sairá na
      face superior da moeda.
      <p />
      Suponha que as moedas que ele pode escolher sejam diferentes:
      <p />
      <ul>
        <li>
          Um número <b>H</b> dessas moedas têm 'cara' nas duas faces.
        </li>
        <li>
          Um número <b>T</b> dessas moedas têm 'coroa' nas duas faces.
        </li>
        <li>
          Um número <b>N</b> dessas moedas são normais, (cara em uma face e
          coroa na outra).
        </li>
      </ul>
      <p />
      Neste problema, você deve criar um programa que receba como entrada o
      número a quantidade de moedas de cada tipo e produza como saída a
      probabilidade de o apostador obter uma face "cara" no lado superior da
      moeda lançada por ele.
      <p />
      <h3>Entrada</h3>
      Três números, <b>H</b>, <b>T</b>, <b>N</b> contendo o número de moedas com
      duas caras, duas coroas e normais respectivamente.
      <h3>Saída</h3>
      Um número real contendo a probabilidade de o apostador obter uma face
      "cara" no lado superior da moeda lançada por ele.
      <p />
    </div>
  );
}
