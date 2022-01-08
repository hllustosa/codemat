import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Em fevereiro, o governo da Cidade do México, metrópole com uma das maiores
      frotas de automóveis do mundo, passou a oferecer à população bicicletas
      como opção de transporte. Por uma anuidade de <b>D</b> dólares, os
      usuários têm direito a 30 minutos de uso livre por dia. O ciclista pode
      retirar em uma estação e devolver em qualquer outra e, se quiser estender
      a pedalada, paga <b>E</b> dólares por hora extra.
      <p />
      Neste problema você deve produzir um programa que receba como entrada os
      valores <b>D</b> e <b>E</b> e produza como saída uma string contendo a
      expressão algébrica da função que relaciona o valor f pago pela utilização
      da bicicleta por um ano, quando se utilizam x horas extras nesse período.
      <h3>Entradas</h3>
      Dois números <b>D</b> e <b>E</b> contento o valor máximo que Alex pode
      pagar. <p />
      <h3>Saída</h3>
      Um string contendo a expressãoalgébrica da função que
      relaciona o valor f pago pela utilização da bicicleta por um ano, quando
      se utilizam x horas extras nesse período.
      <p />
    </div>
  );
}
