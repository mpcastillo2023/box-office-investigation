import React from "react";
import TableRowData from "../SalesData";
import { Checkbox, ServerTable } from "components-gallery";

const SalesTable: React.FC = () => {
  const columns = [
    {
      name: "checkbox",
      label: <Checkbox />
    },
    {
      name: "cloud",
      label: ""
    },
    {
      name: "local",
      label: "Localizador"
    },
    {
      name: "state",
      label: "Estado"
    },
    {
      name: "product",
      label: "Producto"
    },
    {
      name: "client",
      label: "Cliente"
    },
    {
      name: "ref",
      label: "Ref/Email"
    },
    {
      name: "quantity",
      label: "#"
    },
    {
      name: "value",
      label: "Importe"
    },
    {
      name: "sessionDate",
      label: "Fecha de sesion"
    },
    {
      name: "salesDate",
      label: "Fecha de compra"
    }
  ];
  return (
    <>
      <ServerTable
        page={1}
        mobileAccordionColumnKey={""}
        rowsPerPage={10}
        setQueryParams={() => {}}
        queryParams={{}}
        totalPages={1}
        isFetching={false}
        totalItems={7}
        displayData={TableRowData}
        columns={columns}
      />
    </>
  );
};

export default SalesTable;
