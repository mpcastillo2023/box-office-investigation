import styles from "../Styles/styles.module.scss";
import ListBulletIcon from "@icons/list-bullet.svg";
import { useState } from "react";
import { Accordion, UseIsDesktop } from "components-gallery";
import { useQuery } from "@tanstack/react-query";
import QueryWrapper from "../../../../../Components/Hoc/QueryWrapper/QueryWrapper";
import { getQuery } from "../../../../../Api";
import { BuyerTypes } from "../../../../../Types/BuyerTypes";

export default function ProductsCatalog() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClickProduct = (index: number) => {
    setSelectedCard(index);
  };

  const { isDesktop } = UseIsDesktop();

  const query = useQuery({
    queryFn: getQuery<BuyerTypes[]>,
    queryKey: ["buyerTypes"],
  });
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
          <QueryWrapper
            {...query}
            render={data => {
              return data.map((buyerType, index) => {
                return (
                  <div
                    key={buyerType.buyerTypeId}
                    className={`${styles.card} ${selectedCard === index ? styles.selected : ""}`}
                    onClick={() => handleClickProduct(index)}
                  >
                    {buyerType.name}
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
