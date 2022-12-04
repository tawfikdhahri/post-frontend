import { TableRow, TableCell } from "@mui/material";
import React from "react";
import { Post } from "../types";

type Props = {
  item: Post;
};

function PostItem({ item }: Props) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={{ width: "600px" }} component="th" scope="row">
        {item.text}
      </TableCell>
      <TableCell align="right">{item.postComments.length}</TableCell>
      <TableCell align="center">{item.date}</TableCell>
    </TableRow>
  );
}

export default React.memo(PostItem);
