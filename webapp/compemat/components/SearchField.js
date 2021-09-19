import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%"
  },
}));

export default function SearchField(props) {
  const { value, onChange, onClick, onKeyPress } = props;
  const classes = useStyles();

  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-search">Buscar</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="buscar" onClick={onClick} edge="end">
              <Search />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={50}
      />
    </FormControl>
  );
}
