import { Button, DropdownSelect, TextInput } from "components-gallery";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./Styles/styles.module.scss";

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
        <div>
          <FormattedMessage id="search.searchBy" defaultMessage="Buscar por*" />
        </div>
        <div className={styles.inputsContainer}>
          <DropdownSelect
            className={styles.searchSelect}
            optionList={optionList}
            customStyle={styles}
          />
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
