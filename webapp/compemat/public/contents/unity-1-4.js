import React from "react";
import {
  ClassContainer,
  ClassBox,
  ClassLink,
  ClassEquation,
  ClassSectionTitle,
  ClassImage,
  ClassToolTip,
} from "../../components/ClassContent";
import CodeEditor from "../../components/CodeEditor";

function Content() {
  return (
    <ClassContainer>
      <ClassImage
        src="/img/variables.svg"
        pos="center"
        style={{
          marginTop: "35px",
          marginBottom: "35px",
          width: "400px",
          maxWidth: "80%",
        }}
      />
      <CodeEditor border code="teste" readOnly height="400px" width="320px"/>
      <p/>
      Existem linguagens que funcionam em um modelo híbrido (compilação e
      interpretação) e mais complexo, cujos detalhes fogem do nosso escopo. O
      que é importante que você absorva desse é que, o código que iremos criar
      durante o curso será transformado em algo que o processador conseguirá
      executar através de um interpretador. Para nossa sorte, esse interpretador
      está no próprio navegador que você utiliza para visualizar essa página,
      portanto você não vai precisar instalar nada em seu dispositivo para
      começar a programar, todas as ferramentas necessárias estarão à sua
      disposição através da página. 
      
      <p/>
    </ClassContainer>
  );
}

export default Content;
