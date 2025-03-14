import { Button, DropdownSelect, TextInput } from "components-gallery";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./Styles/styles.module.scss";
import UserIcon from "@icons/user.svg";

const List = () => {
  const { formatMessage } = useIntl();
  const optionDateList = [
    {
      optionText: "11/11/2025",
      optionValue: "date1"
    },
    {
      optionText: "12/11/2025",
      optionValue: "date2"
    }
  ];

  const optionList = [
    {
      optionText: formatMessage({ id: "list.allMale" }),
      optionValue: "todos"
    },
    {
      optionText: formatMessage({ id: "list.allFemale" }),
      optionValue: "todas"
    }
  ];
  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.sellerContainer}>
          <div className={styles.sellerName}>
            <UserIcon />
            <FormattedMessage
              id="list.distributor"
              defaultMessage="Distribuidor"
            />
          </div>
          <TextInput
            className={styles.searchInput}
            placeholder={formatMessage({ id: "list.searchDistributor" })}
          />
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.row50}>
            <FormattedMessage
              id="list.dateView"
              defaultMessage="Fecha Vista*"
            />
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionDateList}
              customStyle={styles}
              value="date1"
            />
          </div>
          <div className={styles.row50}>
            <FormattedMessage
              id="list.dateViewUntil"
              defaultMessage="Fecha Vista hasta*"
            />
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
            <FormattedMessage id="list.product" defaultMessage="Producto" />
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <FormattedMessage
              id="list.subproduct"
              defaultMessage="Subproducto/Aforo"
            />
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <FormattedMessage id="list.session" defaultMessage="Sesión" />
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
            <FormattedMessage
              id="list.salesChannel"
              defaultMessage="Canal de venta"
            />
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row50}>
            <FormattedMessage id="list.status" defaultMessage="Estado" />
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
            <FormattedMessage id="list.reference" defaultMessage="Referencia" />
            <TextInput className={styles.searchInput} />
          </div>
          <div className={styles.row33}>
            <FormattedMessage
              id="list.printStatus"
              defaultMessage="Estado de impresión"
            />
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <FormattedMessage id="list.ticketBooth" defaultMessage="Taquilla" />
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
            <FormattedMessage id="list.search" defaultMessage="Buscar" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default List;
