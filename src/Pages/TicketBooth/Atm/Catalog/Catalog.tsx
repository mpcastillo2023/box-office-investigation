import styles from "./Styles/styles.module.scss";
import TicketIcon from "@icons/ticket.svg";
import { FormattedMessage } from "react-intl";
import CatalogsCalendar from "./Calendar/CatalogCalendar";
import VenuesCatalog from "./Venues/VenuesCatalog";
import SessionsCatalog from "./Sessions/CatalogSessions";
import ProductsCatalog from "./Products/ProductsCatalog";

export default function Products() {
  return (
    <>
      <div className={styles.productsContainer}>
        <CatalogsCalendar />
        <div className={styles.products}>
          <div className={styles.productsTitle}>
            <TicketIcon />
            <FormattedMessage id="products.title" defaultMessage="Productos" />
          </div>
          <ProductsCatalog />
          <VenuesCatalog />
          <SessionsCatalog />
        </div>
      </div>
    </>
  );
}
