import React, { useState } from "react";
import TableRowData from "../SalesData/SalesData";
import { Checkbox, ServerTable } from "components-gallery";
import SaleDataModal from "../SaleDataModal/SaleDataModal";
import styles from "./Styles/styles.module.scss";

const SalesTable: React.FC = () => {
  const [isSaleDataModalOpen, setSaleDataModalOpen] = useState(false);

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
        onClickCellHandler={() => {
          setSaleDataModalOpen(true);
        }}
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
        customStyles={styles}
      />
      <SaleDataModal
        isSaleDataModalOpen={isSaleDataModalOpen}
        setSaleDataModalOpen={setSaleDataModalOpen}
      />
    </>
  );
};

export default SalesTable;
