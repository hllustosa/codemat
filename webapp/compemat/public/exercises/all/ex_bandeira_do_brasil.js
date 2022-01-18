export default function Exercise() {
  return (
    <div>
      A fabricação da Bandeira Nacional deve obedecer ao descrito na Lei n.
      5.700, de 1º de setembro de 1971, que trata dos Símbolos Nacionais. No
      artigo que se refere às dimensões da Bandeira, observa-se:
      <p />
      <i style={{ marginLeft: "25px" }}>
        Para cálculos das dimensões, será tomada por base a largura, dividindo-a
        em 14 (quatorze) partes iguais, sendo que cada uma das partes será
        considerada uma medida ou um módulo (M). Os demais requisitos
        dimensionais seguem o critério abaixo:
        <ol type="I">
          <li>Comprimento será de vinte módulos (20 M);</li>
          <li>
            A distância dos vértices do losango amarelo ao quadro externo será
            de um módulo e sete décimos (1,7 M);
          </li>
          <li>
            {" "}
            O raio do círculo azul no meio do losango amarelo será de três
            módulos e meio (3,5 M).
          </li>
        </ol>
      </i>
      <p />
      <i style={{ marginLeft: "25px", fontSize: "7px" }}>
        BRASIL, Lei n. 5.700, de 1° de setembro de 1971. Disponível em:
        www.planalto.gov.br. Acesso em: 15 set. 2015.
      </i>
      <p />
      A figura indica as cores da bandeira do Brasil e localiza o quadro externo
      a que se refere a Lei n. 5.700.
      <p />
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2020q136.svg"} width="60%" />
        <p />
      </div>
      <p />
      Um torcedor, preparando-se para a Copa do Mundo e dispondo de cortes de
      tecidos verde (<b>C</b> cm x <b>L</b> cm) e amarelo (o quanto baste),
      deseja confeccionar a maior Bandeira Nacional possível a partir das
      medidas do tecido verde.
      <p />
      Neste problema você deve determinar qual a medida, em centímetro, do lado
      do menor quadrado de tecido azul que deverá ser comprado para confecção do
      círculo da bandeira desejada. Você deve se basear nas entradas <b>
        C
      </b> e <b>L</b>, que representam respectivamente o comprimento e a largura
      do tecido verde disponível.
      <h3>Entradas</h3>
      Dois inteiros, <b>C</b> e <b>L</b>, que representam respectivamente a o
      comprimento e a largura do tecido verde disponível.
      <h3>Saída</h3>
      Uma número contendo o tamanho do lado do tecido azul necessário para
      confeccionar a maior bandeira possível com o tecido verde disponível. <p />
    </div>
  );
}
