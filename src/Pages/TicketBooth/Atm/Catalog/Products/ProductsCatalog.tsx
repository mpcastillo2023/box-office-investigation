/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from "../Styles/styles.module.scss";
import ListBulletIcon from "@icons/list-bullet.svg";
import { useState } from "react";
import { Accordion, UseIsDesktop } from "components-gallery";
import { FormattedMessage } from "react-intl";
import { useQuery } from "@tanstack/react-query";
import QueryWrapper from "../../../../../Components/Hoc/QueryWrapper/QueryWrapper";
import { getQuery } from "../../../../../Api";
import { Product } from "../../../../../Types/Product";

export default function ProductsCatalog() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClickProduct = (index: number) => {
    setSelectedCard(index);
  };

  const { isDesktop } = UseIsDesktop();

  const query = useQuery({
    queryFn: getQuery<Product[]>,
    queryKey: ["products"]
  });

  return (
    <div className={styles.productsSelectContainer}>
      <Accordion
        variant="simple"
        expanded={isDesktop}
        shouldDisplayIcon={false}
        title={
          <div className={styles.productsSubTitle}>
            <ListBulletIcon />
            <FormattedMessage
              id="productsCatalog.simpleVisits"
              defaultMessage="VISITAS SENCILLAS CLORIAN"
            />
          </div>
        }
        customStyleClasses={styles}
      >
        <div className={styles.productsCards}>
          <QueryWrapper
            {...query}
            render={(data) => {
              return data.map((product, index) => {
                return (
                  <div
                    key={product.productId}
                    className={`${styles.card} ${selectedCard === index ? styles.selected : ""}`}
                    onClick={() => handleClickProduct(index)}
                  >
                    {product.name}
                  </div>
                );
              });
            }}
          />
        </div>
      </Accordion>
    </div>
  );
}
