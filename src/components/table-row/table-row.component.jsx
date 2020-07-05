import React from "react";

import { StyledTableRowComponent } from "./table-row.styles";

/**
 * React Functional Component to display the row
 * component for the data.
 *
 * @param {Object} rowData - The row data for display.
 */
function TableRowComponent({ rowData, ...stylingProps }) {
  return (
    <StyledTableRowComponent {...stylingProps}>
      {Object.entries(rowData).map((element) => {
        return <div data-label={element[0]}>{element[1]}</div>;
      })}
    </StyledTableRowComponent>
  );
}

export default TableRowComponent;
