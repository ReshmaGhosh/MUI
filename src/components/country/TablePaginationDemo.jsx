import React from "react";
import TablePagination from "@mui/material/TablePagination";

function TablePaginationDemo({
  count,
  page,
  onChangePage,
  rowsPerPage,
  onChangeRowsPerPage,
}) {
  return (
    <div>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={onChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </div>
  );
}

export default TablePaginationDemo;
