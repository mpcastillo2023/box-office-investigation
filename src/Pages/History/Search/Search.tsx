import { Button, DropdownSelect, TextInput } from "components-gallery";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./Styles/styles.module.scss";
import utilStyles from "../../../Utils/utils.module.scss";
import React from "react";

const Search = () => {
  const { formatMessage } = useIntl();
  const optionList = [
    {
      optionText: formatMessage({ id: "search.reservationLocator" }),
      optionValue: "localizador"
    }
  ];

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.inputsContainer}>
          <div>
            <span className={utilStyles.inputLabel}>
              <FormattedMessage
                id="search.searchBy"
                defaultMessage="Buscar por*"
              />
            </span>
            <DropdownSelect
              className={styles.searchSelect}
              optionList={optionList}
              customStyle={styles}
            />
          </div>

          <TextInput
            className={styles.searchInput}
            placeholder={formatMessage({ id: "search.enterNumber" })}
          />
        </div>
        <div className={styles.searchButtonContainer}>
          <Button
            className={styles.searchButton}
            size="full"
            type="submit"
            variant="primary"
          >
            <FormattedMessage id="search.search" defaultMessage="Buscar" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Search;
