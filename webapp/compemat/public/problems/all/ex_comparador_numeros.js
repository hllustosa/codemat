export default function Exercise() {
  return (
    <div>
      Neste problema, você deve criar um programa que tenha como entrada dois
      números <b>n1</b> e <b>n2</b>. O programa deve tratar três possibilidades
      distintas e emitir uma saída conforme cada caso. <p />
      <ul>
        {" "}
        <li>
          Caso <b>n1</b> seja maior que <b>n2</b>, o programa deve produzir a
          cadeia de caracteres "n1 é maior".{" "}
        </li>
        <li>
          Caso <b>n2</b> seja maior que <b>n1</b>, o programa deve produzir a
          cadeia de caracteres "n2 é maior".{" "}
        </li>
        <li>
          {" "}
          Caso <b>n1</b> seja igual a <b>n2</b>, o programa deve produzir a
          cadeia "iguais".{" "}
        </li>
      </ul>
      <h3>Entradas</h3>
      Dois números <b>n1</b> e <b>n2</b> que devem ser comparados. <p />
      <h3>Saída</h3>
      Uma cadeia de caracteres contendo a mensagem adequada. <p />
    </div>
  );
}
