import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Uma locadora possui disponíveis 120 veículos da categoria que um cliente
      pretende locar. Desses, <b>B</b>% são da cor branca, <b>C</b>% são da cor
      cinza, e <b>V</b>% dos veículos são da cor vermelha.
      <p />
      O cliente não gosta da cor vermelha e ficaria contente com qualquer outra
      cor, mas o sistema de controle disponibiliza os veículos sem levar em
      conta a escolha da cor pelo cliente.
      <p />
      Neste problema você deve criar um programa que receba como entrada as
      porcentagens dos carros disponíveis nas cores branca, cinza e vermelha e
      deve produzir como saída a probabilidade do cliente ficar feliz com o
      carro que ele receber.
      <p />
      <h3>Entrada</h3>
      Três números inteiros, <b>B</b>, <b>C</b>, <b>V</b> contendo as
      porcentagens de carros nas cores branca, ciza e vermelha respectivamente.
      <h3>Saída</h3>
      Um número real contendo a probabilidade do cliente ficar satisfeito com o
      carro.
      <p />
    </div>
  );
}
