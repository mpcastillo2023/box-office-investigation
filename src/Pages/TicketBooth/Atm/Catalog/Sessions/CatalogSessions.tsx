/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from "../Styles/styles.module.scss";
import TicketIcon from "@icons/ticket.svg";
import ClockIcon from "@icons/clock.svg";
import PercentIcon from "@icons/percent.svg";
import { Accordion, UseIsDesktop } from "components-gallery";
import { FormattedMessage } from "react-intl";
import React from "react";

export default function SessionsCatalog() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };

  const { isDesktop } = UseIsDesktop();

  return (
    <div className={styles.sessionsSelectContainer}>
      <Accordion
        variant="simple"
        expanded={isDesktop}
        shouldDisplayIcon={false}
        title={
          <div className={styles.sessionsSubTitle}>
            <ClockIcon />
            <FormattedMessage
              id="sessionsCatalog.title"
              defaultMessage="SESIONES 1/1"
            />
          </div>
        }
        customStyleClasses={styles}
      >
        <div className={styles.sessionsCards}>
          <div className={styles.card} onClick={handleClick}>
            <div className={styles.sessionCardText}>
              <PercentIcon />
              {/* eslint-disable-next-line react/jsx-no-literals*/}
              <div style={{ whiteSpace: "nowrap" }}>
                10:00 - 11:00
                <div className={styles.sessionCardDispobility}>
                  {/* eslint-disable-next-line react/jsx-no-literals*/}
                  <TicketIcon />
                  200/200
                </div>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
