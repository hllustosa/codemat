export default function Exercise() {
  return (
    <div>
      O proprietário de um apartamento decidiu instalar porcelanato no piso da
      sala. Essa sala tem formato retangular com 3,2 m de largura e 3,6 m de
      comprimento. As peças do porcelanato têm formato de um quadrado com lado
      medindo 80 cm.
      <p />
      Esse porcelanato é vendido em dois tipos de caixas, com os preços
      indicados a seguir:
      <ul>
        <li>
          Caixas do tipo A: <b>A_unidades</b> unidades de piso, R${" "}
          <b>A_preco</b>;
        </li>
        <li>
          Caixas do tipo B: <b>B_unidades</b> unidades de piso, R${" "}
          <b>B_preco</b>;
        </li>
      </ul>
      <p />
      Na instalação do porcelanato, as peças podem ser recortadas e devem ser
      assentadas sem espaçamento entre elas, aproveitando-se ao máximo os
      recortes feitos.
      <p />
      Neste problema você deve determinar quantas caixas do tipo A e do tipo B o
      proprietário deve comprar de forma a obter o menor preço. Você deve
      considerar o preço e o número de unidades contidas em cada caixa. <p />
      <h3>Entradas</h3>
      Quatro números, <b>A_unidades</b>, <b>A_preco</b> indicando
      respectivamente o número de peças e o preço da caixa do piso do tipo A, e{" "}
      <b>B_unidades</b>, <b>B_preco</b> indicando respectivamente o número de
      peças e o preço da caixa de piso do tipo B.
      <h3>Saída</h3>
      Dois números, o primeiro contendo o número de caixas que devem ser
      compradas de piso do tipo A e o segundo contendo o número de caixas que
      devem ser compradas de piso do tipo B. <p />
    </div>
  );
}
