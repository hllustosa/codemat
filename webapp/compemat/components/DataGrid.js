import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "../public/theme";
import { DataGrid, ptBR } from "@material-ui/data-grid";



export default function CustomDataGrid(props) {
  const { rows, columns, pageSize } = props;

  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize ? pageSize : 10}
        disableSelectionOnClick={true}
      />
    </ThemeProvider>
  );
}
