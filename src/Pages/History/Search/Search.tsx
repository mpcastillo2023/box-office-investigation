import { Button, DropdownSelect, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";

const Search = () => {
  const optionList = [
    {
      optionText: "Localizador de reservas",
      optionValue: "localizador",
    },
  ];
  return (
    <>
      <div className={styles.searchContainer}>
        <div>Buscar por:</div>
        <div className={styles.inputsContainer}>
          <DropdownSelect
            className={styles.searchSelect}
            optionList={optionList}
            customStyle={styles}
          />
          <TextInput
            placeholder="Introducir numero"
            className={styles.searchInput}
          />
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

export default Search;
