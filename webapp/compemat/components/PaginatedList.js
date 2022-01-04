import { useEffect, useState } from "react";
import {
  Grid,
  List,
} from "@material-ui/core";
import { OutlinedButton } from "./Styled";

export default function PaginatedList(props) {
  let { data, listStyles, listItem } = props;
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setPageNumber(
      data.length % 10 === 0
        ?  Math.floor(data.length / pageSize)
        :  Math.floor(data.length / pageSize) + 1
    );
  }, [data.length]);

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < pageNumber) {
      setPage(page + 1);
    }
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <List style={listStyles}>
          {data
            .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
            .map((item, index) => {
              return listItem(item, index);
            })}
        </List>
      </Grid>
      <Grid container item direction="row" justifyContent="space-between">
        <Grid item>
          <OutlinedButton disabled={page === 1} onClick={prev}>
            Anterior
          </OutlinedButton>
        </Grid>
        <Grid item>
          {page ? page.toString() : 1} de{" "}
          {pageNumber ? pageNumber.toString() : 1}
        </Grid>
        <Grid item>
          <OutlinedButton disabled={page >= pageNumber} onClick={next}>
            Próximo
          </OutlinedButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
