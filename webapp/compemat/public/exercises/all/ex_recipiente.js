export default function Exercise() {
  return (
    <div>
      Num recipiente com a forma de paralelepípedo reto-retângulo, colocou-se
      água até a altura de 8 cm e um objeto, que ficou flutuando na superfície
      da água. Para retirar o objeto de dentro do recipiente, a altura da coluna
      de água deve ser de, pelo menos, 15 cm. Para a coluna de água chegar até
      essa altura, é necessário colocar dentro do recipiente bolinhas de volume
      igual a <b>V</b> cm³ cada, que ficarão totalmente submersas.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2020q175.svg"} width="30%" />
        <p />
      </div>
      <p />
      Neste problema você deve calcular a quantidade mínima de bolinhas de
      volume <b>V</b> necessárias para que se possa retirar o objeto que flutua
      na água.
      <h3>Entradas</h3>
      Um número <b>V</b> contendo o volume em m3 de uma bolinha.
      <h3>Saída</h3>
      Um número inteiro contendo a quantidade de bolinhas necessárias para retirar o
      objeto do recipiente. <p />
    </div>
  );
}
