import React from "react";
import styles from "./Styles/styles.module.scss";
import TableRowData from "../SalesData";
import ChevronDownIcon from "@icons/chevron-down.svg";
import ChevronLeftIcon from "@icons/chevron-left.svg";
import ChevronRightIcon from "@icons/chevron-right.svg";
import { Checkbox, ServerTable } from "components-gallery";

const SalesTable: React.FC = () => {
  const columns = [
    {
      name: "checkbox",
      label: <Checkbox />,
      cellType: "string" as const,
    },
    {
      name: "cloud",
      label: "",
      cellType: "string" as const,
    },
    {
      name: "local",
      label: "Localizador",
      cellType: "string" as const,
    },
    {
      name: "state",
      label: "Estado",
      cellType: "string" as const,
    },
    {
      name: "product",
      label: "Producto",
      cellType: "string" as const,
    },
    {
      name: "client",
      label: "Cliente",
      cellType: "string" as const,
    },
    {
      name: "ref",
      label: "Ref/Email",
      cellType: "string" as const,
    },
    {
      name: "quantity",
      label: "#",
      cellType: "string" as const,
    },
    {
      name: "value",
      label: "Importe",
      cellType: "string" as const,
    },
    {
      name: "sessionDate",
      label: "Fecha de sesion",
      cellType: "string" as const,
    },
    {
      name: "salesDate",
      label: "Fecha de compra",
      cellType: "string" as const,
    },
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
