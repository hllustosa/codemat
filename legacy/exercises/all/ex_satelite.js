import { Eq } from "@codemat/lesson-kit";

export default function Exercise() {
  return (
    <div>
      Um satélite de telecomunicações, t minutos após ter atingido sua órbita,
      está a r quilômetros de distância do centro da Terra. Quando r assume seus
      valores máximo e mínimo, diz-se que o satélite atingiu o apogeu e o
      perigeu, respectivamente. Suponha que, para esse satélite, o valor de r em
      função de t seja dado por. <p />
      <Eq s="r(t) = \frac{a}{1 + b \times cos(0.006t)}" block></Eq>
      <p />
      Um cientista monitora o movimento desse satélite para controlar o seu
      afastamento do centro da Terra. Para isso, ele precisa calcular a soma dos
      valores de r, no apogeu e no perigeu, representada por S.
      <p />
      Neste problema, você deve criar um programa que tenha como entrada os valores <b>a</b>
      e <b>b</b> da fórmula e que produza como saída o valor S, isto é a soma do 
      perigue e do apogeu do satélite. <p />
      <h3>Entradas</h3>
      Dois números <b>a</b> e <b>b</b> que são parâmetros da fórmula. <p />
      <h3>Saída</h3>
      Um número contendo a soma do perigeu e do apogeu do satélite. <p />
    </div>
  );
}
