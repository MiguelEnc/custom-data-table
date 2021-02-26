import React from "react";
import ReactDOM from "react-dom";
import DataTable from "./DataTable";
import dummyData from "./dummyData";

let { data, columns, expandPanelFunc } = dummyData;

ReactDOM.render(
  <React.StrictMode>
    <DataTable
      data={data}
      columns={columns}
      editButton={true}
      deleteButton={true}
      expandPanel={true}
      panelFunction={expandPanelFunc}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
