import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import { Button, ButtonGroup } from "@material-ui/core";
import Search from "./components/Search";
import { TableStyle as S } from "./Table.style";
import { EmptyState } from "../EmptyState/EmptyState";

export const CustomTable = ({
  data = [],
  handleDelete = () => {},
  handleEdit = () => {},
  metadata = [],
  searchCondition = () => true,
  rightComponent = () => <></>,
  emptyStateMessage = "",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    setInputValue("");
  }, [data]);

  useEffect(() => {
    const v = new RegExp(inputValue, "gi");
    setFilteredList(data.filter((item) => searchCondition(item, v)));
  }, [inputValue, data, searchCondition]);

  return (
    <>
      <S.TableBar>
        <Search
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {rightComponent()}
      </S.TableBar>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {metadata.map((m, i) => (
                <TableCell key={i}>{m.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredList.map((row, j) => (
              <TableRow key={j}>
                {metadata.map((m, k) => (
                  <TableCell key={k} component="th" scope="row">
                    {row[m.key]}
                  </TableCell>
                ))}
                <TableCell component="th" scope="row">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button variant="contained" onClick={() => handleEdit(row)}>
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EmptyState
        data={filteredList}
        text={inputValue ? "No results for the search." : emptyStateMessage}
      />
    </>
  );
};
