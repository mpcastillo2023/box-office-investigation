import styles from "../Styles/styles.module.scss";
import BarsIcon from "@icons/bars-3.svg";
import { Accordion, UseIsDesktop } from "components-gallery";

export default function VenuesCatalog() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };
  const { isDesktop } = UseIsDesktop();
  return (
    <div className={styles.aforosSelectContainer}>
      <Accordion
        variant="simple"
        expanded={isDesktop}
        shouldDisplayIcon={false}
        title={
          <div className={styles.aforosSubTitle}>
            <BarsIcon /> AFOROS
          </div>
        }
        customStyleClasses={styles}
      >
        <div className={styles.aforoCards}>
          {["MUSEO", "EXPO", "MUSEO"].map((text, index) => (
            <div key={index} className={styles.card} onClick={handleClick}>
              {text}
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
