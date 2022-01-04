export default function Exercise() {
  return (
    <div>
      Um clube deseja produzir miniaturas em escala do troféu que ganhou no
      último campeonato. O troféu está representado na Figura 1 e é composto por
      uma base em formato de um paralelepípedo reto-retângulo de madeira, sobre
      a qual estão fixadas três hastes verticais que sustentam uma esfera de{" "}
      <b>E</b> cm de diâmetro, que fica centralizada sobre a base de madeira. O
      troféu tem <b>H</b> cm de altura, incluída sua base.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/ex_miniatura_trofeu.png"} width="90%" />
        <p />
      </div>
      A miniatura desse troféu deverá ser instalada no interior de uma caixa de
      vidro, em formato de paralelepípedo reto-retângulo, cujas dimensões
      internas de sua base estão indicadas na Figura 2, de modo que a base do
      troféu seja colada na base da caixa e distante das paredes laterais da
      caixa de vidro em pelo menos 1 cm. Deve ainda haver uma distância de
      exatos 2 cm entre o topo da esfera e a tampa dessa caixa de vidro. Nessas
      condições deseja-se fazer a maior miniatura possível.
      <p />
      Neste problema você de calcular a altura que a caixa deve ter, em cm, em
      função do tamanho do troféu.
      <h3>Entradas</h3>
      Dois números inteiros <b>E</b> contendo o diâmetro da esfera no topo do
      troféu e <b>H</b> contendo a altura do troféu em cm.
      <h3>Saída</h3>
      Um número contendo a altura da caixa em cm. <p />
    </div>
  );
}
