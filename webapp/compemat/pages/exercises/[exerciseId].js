import Page from "../../components/Page";
import React from "react";
import Axios from "axios";
import CodeRunner from "../../runner/CodeRunner";

function Exercises(props) {
  const [data, setData] = React.useState({});

  React.useEffect(async () => {
    const result = await Axios.get("https://gorest.co.in/public/v1/users");
    setData(result);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          const test = "try{ var a = 10 a.test.a} catch(e){}";
          const runner = new CodeRunner(props.data, test, (r) => {
            console.log(r);
          });
          runner.runCode();
        }}
      >
        Executar
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
