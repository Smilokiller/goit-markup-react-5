import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "400px",
      display: "flex",
    },
  },
}));
export function FindInput(prop) {
  const classes = useStyles();

  return (
    <>
      <TextField
        className={classes.root}
        id="outlined-basic"
        label="filter"
        variant="outlined"
        name="filter"
        onChange={prop.onChange}
      />
    </>
  );
}
