import { Button, DropdownSelect, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import UserIcon from "@icons/user.svg";

const List = () => {
  const optionDateList = [
    {
      optionText: "11/11/2025",
      optionValue: "date1",
    },
    {
      optionText: "12/11/2025",
      optionValue: "date2",
    },
  ];

  const optionList = [
    {
      optionText: "TODOS",
      optionValue: "todos",
    },
    {
      optionText: "TODAS",
      optionValue: "todas",
    },
  ];
  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.sellerContainer}>
          <div className={styles.sellerName}>
            <UserIcon />
            Distribuidor
          </div>
          <TextInput placeholder="Buscar distribuidor..." />
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.row50}>
            Fecha Vista*
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionDateList}
              customStyle={styles}
              value="date1"
            />
          </div>
          <div className={styles.row50}>
            Fecha Vista hasta*
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionDateList}
              customStyle={styles}
              value="date2"
            />
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.row33}>
            Producto
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            Subproducto/Aforo
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            Sesión
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.row50}>
            Canal de venta
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row50}>
            Estado
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.row33}>
            <TextInput
              placeholder="Referencia"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.row33}>
            Estado de impresion
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            Taquilla
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todas"
            />
          </div>
        </div>
        <div className={styles.searchButton}>
          <Button size="full" type="submit" variant="primary">
            Buscar
          </Button>
        </div>
      </div>
    </>
  );
};

export default List;
