import styles from "../Styles/styles.module.scss";

import ListBulletIcon from "@icons/list-bullet.svg";
import { useState } from "react";
import { Accordion, UseIsDesktop } from "components-gallery";

export default function ProductsCatalog() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClickProduct = (index: number) => {
    setSelectedCard(index);
  };

  const { isDesktop } = UseIsDesktop();
  return (
    <div className={styles.productsSelectContainer}>
      <Accordion
        variant="simple"
        expanded={isDesktop}
        shouldDisplayIcon={false}
        title={
          <div className={styles.productsSubTitle}>
            <ListBulletIcon /> VISITAS SENCILLAS CLORIAN
          </div>
        }
        customStyleClasses={styles}
      >
        <div className={styles.productsCards}>
          {["TESTING PROMO SIN COMISION", "PROMO CON COMISION", "2 VENUES DEPENDIENTES"].map(
            (text, index) => (
              <div
                key={index}
                className={`${styles.card} ${selectedCard === index ? styles.selected : ""}`}
                onClick={() => handleClickProduct(index)}
              >
                {text}
              </div>
            )
          )}
        </div>
      </Accordion>
    </div>
  );
}
