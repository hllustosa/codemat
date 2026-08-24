export default function Exercise() {
  return (
    <div>
      Para chegar à universidade, um estudante utiliza um metrô e, depois, tem
      duas opções:
      <p />
      <ul>
        <li>Seguir num ônibus, percorrendo 2,0 km;</li>
        <li>
          Alugar uma bicicleta, ao lado da estação do metrô, seguindo 3,0 km
          pela ciclovia.
        </li>
      </ul>
      <p />
      Suponha que você tenha acesso as velocidades médias do ônibus e da
      bicicleta, em km/h, no trajeto metrô-universidade para cada dia da semana.
      Como no exemplo da imagem:
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2020q146.svg"} width="70%" />
        <p />
      </div>
      <p />
      Você deve estabelecer em quais dias da semana é mais vantajoso para o
      estudante ir de bicicleta para à universidade.
      <p />
      Neste problema você precisa realizar a entrada de 3 listas, cada uma
      contendo 6 elementos. A entrada <b>onibus</b> irá conter as médias de
      velocidades do ônibus em cada dia da semana. A entrada <b>bicicleta</b>{" "}
      irá conter as médias de velocidade da bicicleta também em cada dia da
      semana.  A entrada <b>dia</b> irá conter os nomes dos dias da semana. 
      <p />
      As 3
      entradas possuem listas coalescentes. Isto significa que o elementos em
      uma mesma das três listas se referem ao mesmo dia. Isto é, a posição 0 das
      listas, por exemplo, indica as médias das velocidades na segunda. O mesmo
      é válido para as outras posições.
      <p />A saída do seu programa também é uma lista contendo os dias da
      semana, como escritos na na entrada <b>dia</b>.
      <p />
      <h3>Entradas</h3>
      Três listas coalescentes <b>onibus</b>, <b>bicicleta</b> e <b>dia</b>,
      contendo respectivamente a média das velocidades do ônibus, da bicicleta e
      em qual dia essa média se aplica.
      <h3>Saída</h3>
      Uma lista cujos elementos sejam strings contendo os dias da semana em que
      é mais vantajoso andar de bicicleta. <p />
    </div>
  );
}
