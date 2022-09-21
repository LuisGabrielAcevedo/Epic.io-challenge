import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function Search({ value = "", onChange = () => {} }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginBottom: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        {...{ value, onChange }}
      />
      <IconButton type="button">
        <SearchIcon sx={{ p: "10px" }} />
      </IconButton>
    </Paper>
  );
}
