import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import PostItem from "./PostItem";
import { getPosts } from "../api";
import { Post } from "../types";
import Pagination from "./Pagination";
import {
  Stack,
  styled,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
type Props = {};

const headers = ["Title", "Number of comments", "Date"];
const PostsList = (props: Props) => {
  const [posts, setPosts] = React.useState<any>([]);

  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    getPosts(page).then((res) => {
      setPosts(res);
    });
  }, [page]);

  const handleChangePage = React.useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
      newPage: any
    ) => {
      if (newPage) setPage(newPage);
    },
    []
  );

  return (
    <Paper sx={{ padding: "40px" }}>
      <Stack>
        <Typography variant="h5">Posts</Typography>
      </Stack>
      <TableWrapper>
        <TableHead sx={{ width: "100%" }}>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            {headers.map((item) => {
              const sx =
                item === "Title" ? { minWidth: 650, textAlign: "center" } : {};
              return (
                <TableCell
                  key={item}
                  sx={{ fontWeight: "bold", width: "180px", ...sx }}
                  {...props}
                  align="center"
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <Table aria-label="simple table">
          <TableBody>
            {posts.map((post: Post) => (
              <PostItem key={post.text} item={post} />
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <Pagination page={page} handleChangePage={handleChangePage} count={22} />
    </Paper>
  );
};

const TableWrapper = styled(TableContainer)(() => ({
  marginBottom: "10px",
  border: "2px solid #E6552D",
  borderRadius: "15px",
}));
export default PostsList;
