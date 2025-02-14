import styles from "./Styles/styles.module.scss";
import Calendar from "@icons/calendar.svg";
import TicketIcon from "@icons/ticket.svg";
import ListBulletIcon from "@icons/list-bullet.svg";
import BarsIcon from "@icons/bars-3.svg";
import ClockIcon from "@icons/clock.svg";
import PercentIcon from "@icons/percent.svg";
import { useState } from "react";
import { Accordion, UseIsDesktop } from "components-gallery";

export default function Products() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleClickProduct = (index: number) => {
    setSelectedCard(index);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };
  const { isDesktop } = UseIsDesktop();
  return (
    <>
      <div className={styles.productsContainer}>
        <div className={styles.calendarContainer}>
          <div className={styles.calendarIcon}>
            <Calendar />
            08/02/2025
          </div>
          <div className={styles.daysContainer}>
            <div className={styles.day}>HOY</div>
            <div>MAÑANA</div>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.productsTitle}>
            <TicketIcon />
            Products
          </div>
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

          <div className={styles.sessionsSelectContainer}>
            <Accordion
              variant="simple"
              expanded={isDesktop}
              shouldDisplayIcon={false}
              title={
                <div className={styles.sessionsSubTitle}>
                  <ClockIcon /> SESIONES 1/1
                </div>
              }
              customStyleClasses={styles}
            >
              <div className={styles.sessionsCards}>
                <div className={styles.card} onClick={handleClick}>
                  <div className={styles.sessionCardText}>
                    <PercentIcon />
                    <div style={{ whiteSpace: "nowrap" }}>
                      10:00 - 11:00
                      <div className={styles.sessionCardDispobility}>
                        <TicketIcon />
                        200/200
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
