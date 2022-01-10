import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      A prefeitura de um pequeno município do interior decide colocar postes
      para iluminação ao longo de uma estrada retilínea, que inicia em uma praça
      central e termina numa fazenda na zona rural. Como a praça já possui
      iluminação, o primeiro poste será colocado a 80 metros da praça, os
      próximos postes serão instalandos mantendo-se sempre uma distância de{" "}
      <b>m</b> metros entre si, até que o último poste seja colocado a uma
      distância de <d>d</d> metros da praça.
      <p />
      A prefeitura pode pagar, no máximo, R$ 8 000,00 por poste colocado. De
      maneira que, deseja-se saber i maior valor que poderá gastar com a
      colocação desses postes.
      <p />
      Neste problema, você deve produzir um programa que receba como entrada os
      valores <b>m</b> e <b>d</b>, e o programa deve produzir como saída um
      número contendo o valor que será gasto com a instalação de todos os
      postes.
      <h3>Entradas</h3>
      Dois números <b>m</b>, <b>d</b> contendo a distância entre os postes e a
      distância que o último poste estará da praça. <p />
      <h3>Saída</h3>
      Um número contendo o valor pago pela prefeitura para a instalação dos
      postes.
      <p />
    </div>
  );
}
