import react from "react";
import Grid from "@material-ui/core/Grid";
import { OutlinedButton, StyledLink } from "./Styled";
import Exercises from "../public/exercises/index.json";
import { useRouter } from "next/router";

const ProblemsList = (props) => {
  const { unity } = props;
  const router = useRouter();
  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  const keys = Object.keys(Exercises);
  const exercisesData = keys
    .map((key) => Exercises[key])
    .filter((exercise) => exercise.labels.includes(`unidade ${unity}`));

  return (
    <div>
      {exercisesData.map((exercise) => (
        <Grid style={{ margin: "15px" }} container direction="column">
          <Grid item>
            <StyledLink href={`/exercises/${exercise.id}`}>
              {exercise.name}
            </StyledLink>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            spacing={1}
          >
            <Grid item>
              <OutlinedButton
                disabled={exercise.mathSolve ? false : true}
                onClick={goTo(exercise.mathSolve)}
              >
                Solução Matemática Comentada
              </OutlinedButton>
            </Grid>
            <Grid item>
              <OutlinedButton
                disabled={exercise.compSolve ? false : true}
                onClick={goTo(exercise.compSolve)}
              >
                Solução Computacional Comentada
              </OutlinedButton>
            </Grid>
            <Grid item>
              <OutlinedButton
                onClick={goTo(
                  `https://github.com/hllustosa/compemat-exercicios/blob/master/unidade%20${unity}/${exercise.id}.js`
                )}
              >
                Gabarito
              </OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ProblemsList;
