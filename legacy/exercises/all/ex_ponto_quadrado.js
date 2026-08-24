export default function Exercise() {
  return (
    <div>
      Considere um quadrado representado em um plano cartesiano através de 4
      valores. Os valores <b>x1</b> e <b>x2</b> representam a posição inicial e
      final do quadrado na horizontal e <b>y1</b> e <b>y2</b> representam a
      posição inicial e final do quadrado na vertical. <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/quad.svg"} height="260px" width="220px" />
        <p />
      </div>
      Agora considere o problema de determinar se um ponto neste plano
      cartesiano, representado pelas coordenadas <b>x</b> e <b>y</b> está
      contido ou não dentro deste quadrado. O ponto estará contido se suas
      coordenadas estiverem nos limites do quadrado, nas duas dimensões (x e y).{" "}
      <p />
      Neste problema você deve criar um programa que receba como entrada 6
      valores. As entradas <b>x1</b>, <b>x2</b>, <b>y1</b>, <b>y2</b> contendo
      os valores limites de um quadrado em um plano cartesiano. Além destas, as
      entradas <b>x</b> e <b>y</b> representam as coordenadas de um ponto no
      plano cartesiano, sendo necessário determinar se este ponto está dentro ou
      fora do quadrado. O programa deve produzir como saída a cadeia de
      caracteres "dentro" ou "fora" indicando se o ponto está contido ou não nos
      limites do quadrado respectivamente.
      <h3>Entradas</h3>
      Seis números reais <b>x1</b>, <b>x2</b>, <b>y1</b>, <b>y2</b> contendo a
      especificação do quadrado e <b>x</b> ou <b>y</b> contendo a especificação do
      ponto. <p />
      <h3>Saída</h3>
      Uma cadeia de caracteres contendo os valores "dentro" ou "fora". <p />
    </div>
  );
}
