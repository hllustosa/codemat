import { Eq } from "../../../components/ClassContent";

export default function Exercise() {
  return (
    <div>
      Uma empresa sorteia prêmios entre os funcionários como reconhecimento pelo
      tempo trabalhado. A empresa sorteou, entre seus empregados, uma viagem de
      uma semana, sendo dois deles escolhidos.
      <p />
      Considere que a empresa possui a seguinte distribuição de funcionários por
      tempo de serviço:
      <p />
      <ul>
        <li>
          {" "}
          Existem <b>N30</b> funcionários com 30 anos de serviço.{" "}
        </li>
        <li>
          {" "}
          Existem <b>N31</b> funcionários com 31 anos de serviço.{" "}
        </li>
        <li>
          {" "}
          Existem <b>N32</b> funcionários com 32 anos de serviço.{" "}
        </li>
        <li>
          {" "}
          Existem <b>N33</b> funcionários com 33 anos de serviço.{" "}
        </li>
        <li>
          {" "}
          Existem <b>N34</b> funcionários com 34 anos de serviço.{" "}
        </li>
        <li>
          {" "}
          Existem <b>N35</b> funcionários com 35 anos de serviço.{" "}
        </li>
      </ul>
      <p />
      Neste problema, você deve criar um programa que receba como entrada a
      distribuição de funcionários por tempo de serviço na empresa, isto é, os
      valores <b>N30</b>, <b>N31</b>, <b>N32</b>,<b>N33</b>, <b>N34</b> e{" "}
      <b>N35</b>. O programa deve produzir como saída a probabilidade dos dois funcionários 
      sorteados terem ambos 34 anos de trabalho na empresa.
      <h3>Entrada</h3>
      Seis números, <b>N30</b>, <b>N31</b>, <b>N32</b>,<b>N33</b>, <b>N34</b> e{" "}
      <b>N35</b> contendo o número de funcionários que trabalham na empresa por 30,
      31, 32, 33, 34 e 35 anos.
      <h3>Saída</h3>
      Um único número real contendo a probabilidade dos dois funcionários sorteados estarem 
      trabalhando na empresa há 34 anos.
      <p />
    </div>
  );
}
