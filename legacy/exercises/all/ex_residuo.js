import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      A tabela seguinte apresenta a média, em kg, de resíduos domiciliares
      produzidos anualmente por habitante, no período de 1995 a 2005.
      <p />
      <div style={{ textAlign: "center" }}>
        <img src={"/img/2012q136.svg"} width="230px" />
        <p />
      </div>
      <p />
      Deseja-se saber a previsão de produção de resíduos domiciliares no futuro,
      caso essa produção continue aumentando, mantendo o mesmo padrão observado
      na tabela.
      <p />
      Neste problema, você deve produzir um programa que receba como entrada um
      inteiro contendo um ano <b>a</b> (<Eq s="2015 \leq a \leq 2100 " />
      ), e o programa deve produzir como saída um número contendo a previsão de
      produção de resíduos para o ano.
      <h3>Entradas</h3>
      Um número <b>a</b> (<Eq s="2015 \leq a \leq 2100 " />) contendo um ano.{" "}
      <p />
      <h3>Saída</h3>
      Um número contendo a previsão de produção de resíduos para o ano <b>a</b>
      .
      <p />
    </div>
  );
}
