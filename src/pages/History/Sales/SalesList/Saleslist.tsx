import React from "react";
import styles from "./Styles/styles.module.scss";
import TableRowData from "./TableRow/TableRowData";
import CloudIcon from "@icons/cloud.svg";
import ChevronDownIcon from "@icons/chevron-down.svg";
import ChevronLeftIcon from "@icons/chevron-left.svg";
import ChevronRightIcon from "@icons/chevron-right.svg";

const SalesList: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <th>
              <input type="checkbox" id="customCheck" />
            </th>
            <th>{<CloudIcon />}</th>
            <th>Localiz.</th>
            <th>Estado</th>
            <th>Producto</th>
            <th>Dist./Clte</th>
            <th>Ref/Com/Email</th>
            <th>#</th>
            <th>Importe</th>
            <th>Fecha Sesion</th>
            <th>Fecha Compra</th>
          </thead>
          <tbody className={styles.tableBody}>
            {TableRowData.map((row, index) => (
              <tr
                key={index}
                className={
                  index === TableRowData.length - 1 ? styles.noBorder : ""
                }
              >
                <td>
                  <input type="checkbox" id="customCheck" />
                </td>
                <td>{<CloudIcon />}</td>
                <td>{row.local}</td>
                <td
                  className={
                    row.state === "Devuelta" ? styles.returned : styles.confirm
                  }
                >
                  {row.state}
                </td>
                <td>{row.product}</td>
                <td>{row.client}</td>
                <td>{row.ref}</td>
                <td>{row.quantity}</td>
                <td>{row.value}</td>
                <td>{row.sessionDate}</td>
                <td>{row.salesDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.tableFooter}>
        <div className={styles.rowsPage}>
          <div>
            Registros por Pagina
            <div className={styles.itemPerPage}>
              10
              <ChevronDownIcon />
            </div>
          </div>
          <div>Mostrando 1 a 7 de 7 resultados</div>
          <div>
            <ChevronLeftIcon />
            1
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesList;
