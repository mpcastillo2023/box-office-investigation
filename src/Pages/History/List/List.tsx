import { Button, DropdownSelect, TextInput } from "components-gallery";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./Styles/styles.module.scss";
import UserIcon from "@icons/user.svg";
import React from "react";
import OptionDateList from "./Options/OptionDateList";
import utilsStyles from "../../../Utils/utils.module.scss";

const List = () => {
  const { formatMessage } = useIntl();

  const optionDateList = OptionDateList;

  const optionList = OptionDateList;

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
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.dateView"
                defaultMessage="Fecha Vista*"
              />
            </span>

            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionDateList}
              customStyle={styles}
              value="date1"
            />
          </div>
          <div className={styles.row50}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.dateViewUntil"
                defaultMessage="Fecha Vista hasta*"
              />
            </span>

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
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage id="list.product" defaultMessage="Producto" />
            </span>

            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.subproduct"
                defaultMessage="Subproducto/Aforo"
              />
            </span>
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage id="list.session" defaultMessage="Sesión" />
            </span>
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
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.salesChannel"
                defaultMessage="Canal de venta"
              />
            </span>
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row50}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage id="list.status" defaultMessage="Estado" />
            </span>
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
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.reference"
                defaultMessage="Referencia"
              />
            </span>
            <TextInput className={styles.searchInput} />
          </div>
          <div className={styles.row33}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.printStatus"
                defaultMessage="Estado de impresión"
              />
            </span>
            <DropdownSelect
              className={styles.dateSelect}
              optionList={optionList}
              customStyle={styles}
              value="todos"
            />
          </div>
          <div className={styles.row33}>
            <span className={utilsStyles.inputLabel}>
              <FormattedMessage
                id="list.ticketBooth"
                defaultMessage="Taquilla"
              />
            </span>
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
