import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import PropTypes from "prop-types";
import {
  DeleteOutline,
  ChevronRight,
  ChevronLeft,
  Edit,
  FirstPage,
  LastPage,
  Clear,
  Search,
  ArrowDownward,
} from "@material-ui/icons";

DataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  deleteButton: PropTypes.bool,
  deleteFunction: PropTypes.func,
  editButton: PropTypes.bool,
  editFunction: PropTypes.func,
  expandPanel: PropTypes.bool,
  panelFunction: PropTypes.func,
};

export default function DataTable({
  columns,
  data,
  editButton,
  editFunction,
  deleteButton,
  deleteFunction,
  expandPanel,
  panelFunction,
}) {
  const tableIcons = {
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
  };

  const actions = [];

  if (editButton) {
    actions.push({
      icon: tableIcons.Edit,
      onClick: editFunction,
    });
  }

  if (deleteButton) {
    actions.push({
      icon: tableIcons.Delete,
      onClick: deleteFunction,
    });
  }

  const options = {
    actionsColumnIndex: -1,
    pageSize: 4,
    pageSizeOptions: [4, 8, 16, 32],
    search: true,
    paging: true,
    draggable: false,
    showTitle: false,
    showFirstLastPageButtons: false,
    emptyRowsWhenPaging: false,
    headerStyle: {
      backgroundColor: "rgba(249, 248, 245, 0.62)",
      fontWeight: 500,
      color: "#3d3d3d",
      borderTop: 0,
      cursor: "pointer",
      lineHeight: 1.42857143,
      textAlign: "left",
    },
  };

  const localization = {
    header: {
      actions: "Acciones",
    },
    body: {
      emptyDataSourceMessage: "Ningún dato disponible en esta tabla",
    },
    pagination: {
      labelRowsSelect: "registros",
      labelDisplayedRows: "{to} - {count} productos mostrados",
      previousTooltip: "Página anterior",
      nextTooltip: "Página siguiente",
    },
    toolbar: {
      searchTooltip: "",
      searchPlaceholder: "",
    },
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        detailPanel={expandPanel ? panelFunction : null}
        localization={localization}
        actions={actions}
        options={options}
        columns={columns}
        data={data}
      />
    </div>
  );
}

DataTable.defaultProps = {
  columns: [],
  data: [],
  expandPanel: false,
  panelFunction: (rowData) => <div>Panel content</div>,
  editButton: false,
  editFunction: (event, rowData) => console.log("Edit button clicked"),
  deleteButton: false,
  deleteFunction: (event, rowData) => console.log("Delete button clicked"),
};
