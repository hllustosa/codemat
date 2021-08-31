import BasePage from "../../components/BasePage";
import React from "react";
import Axios from "axios";

function Exercises(props) {

  const [data, setData] = React.useState({});

  React.useEffect(async () => {
    const result = await Axios.get("https://gorest.co.in/public/v1/users");
    setData(result);
  }, []);

  return <div> {props.id + " " + props.name+ " "+JSON.stringify(data.data)} </div>;
}

export default BasePage(Exercises);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          exerciseId: "1",
        },
      },
      {
        params: {
          exerciseId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const exerciseId = context.params.exerciseId;
  return {
    props: {
      id: exerciseId,
      name: "test",
    },
  };
}
