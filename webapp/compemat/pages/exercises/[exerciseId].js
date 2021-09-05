import Page from "../../components/Page";
import React from "react";
import Axios from "axios";
import CodeRunner, {CodeRunnerStates} from "../../runner/CodeRunner";


import dynamic from 'next/dynamic'
const TextEditor = dynamic(import('../../components/CodeEditor'), {
  ssr: false
})


function Exercises(props) {
  const [data, setData] = React.useState({});
  const [code, setCode] = React.useState("");

  const runner = new CodeRunner({x: 10, y: 22 }, code, (status, r) => {
    console.log(`status changed to ${status}`);
    console.log(r);
  }, (data) => {
    console.log(data);
  });

  React.useEffect(async () => {
    const result = await Axios.get("https://gorest.co.in/public/v1/users");
    setData(result);
  }, []);

  return (
    <div>
       <TextEditor code={code} setCode={setCode}/>
      <button
        onClick={() => {
          runner.runCode();
        }}
      >
        Executar
      </button>
      <button
        onClick={() => {
          runner.changeStatusTo(CodeRunnerStates.STOPPED);
        }}
      >
        Parar
      </button>
    </div>
  );
}

export default Page(Exercises);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          exerciseId: "ex_Frf432D34ss",
        },
      },
      {
        params: {
          exerciseId: "ex_D4fd34D234d",
        },
      },
      {
        params: {
          exerciseId: "ex_G3Fer3rDS432",
        },
      },
      {
        params: {
          exerciseId: "ex_Plo43jjrR3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const exerciseId = context.params.exerciseId;
  return {
    props: {
      data: {
        id: exerciseId,
        name: "Exercício de Teste",
        content: "",
        category: "programming",
        labels: ["aritmética", "básico"],
        similar: ["ex_G3Fer3rDS432", "ex_Plo43jjrR3"],
        entries: [
          { x: 10, y: 12 },
          { x: 3, y: 45 },
          { x: 1203, y: 32 },
          { x: 1, y: 55 },
        ],
        outputs: [22, 48, 1235, 56],
      },
    },
  };
}
