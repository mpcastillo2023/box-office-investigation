/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from "../Styles/styles.module.scss";
import BarsIcon from "@icons/bars-3.svg";
import { Accordion, UseIsDesktop } from "components-gallery";
import { FormattedMessage } from "react-intl";
import React from "react";

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
            <BarsIcon />
            <FormattedMessage
              id="venuesCatalog.title"
              defaultMessage="AFOROS"
            />
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
