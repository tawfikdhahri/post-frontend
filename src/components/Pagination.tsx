import { TablePagination } from "@mui/material";
import React from "react";

type Props = {
  page: number;
  count: number;
  handleChangePage: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
};

function Pagination({ page, count, handleChangePage }: Props) {
  return (
    <div>
      <TablePagination
        component="div"
        count={count}
        rowsPerPage={6}
        page={page}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangePage}
      />
    </div>
  );
}

export default React.memo(Pagination);
