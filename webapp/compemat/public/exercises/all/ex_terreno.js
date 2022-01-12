import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Ao morrer, o pai de João, Pedro e José deixou como herança um terreno
      retangular de <b>c</b> km x <b>l</b> km que contém uma área de extração de
      ouro delimitada por um quarto de círculo de raio de 1 km a partir do canto
      inferior esquerdo da propriedade. Dado o maior valor da área de extração
      de ouro, os irmãos acordaram em repartir a propriedade de modo que cada um
      ficasse com a terça parte da área de extração, conforme mostra a figura.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2009q164.svg"} width="50%" />
        <p />
      </div>
      <p />
      Nessas circustâncias, deseja-se saber qual o percentual da área do terreno
      que foi alocada a João. Portanto, neste problema, você deve criar um
      programa que receba como entrada o comprimento <b>c</b> e a largura{" "}
      <b>l</b> do terreno e produza como saída a porcentagem da área do terreno
      alocada a João.
      <p />
      Dica: Utilize as funções trigonométricas <b>Math.sin</b> ou{" "}
      <b>Math.cos</b>. Lembrando que o ângulo de entrada dessas funções deve
      estar em radianos. Você também pode usar <b>Math.PI</b> para ter acesso ao
      valor de <Eq s="\pi" />.
      <p />
      <h3>Entradas</h3>
      Dois números, o comprimento <b>c</b> e a largura <b>l</b> do terreno.
      <h3>Saída</h3>
      Um número que contenha a porcentagem da área do terreno alocada a João.
      <p />
    </div>
  );
}
