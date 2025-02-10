import styles from "./Styles/styles.module.scss";
import Calendar from "./../../assets/icons/calendar.svg";
import TicketIcon from "./../../assets/icons/ticket.svg";
import ListBulletIcon from "./../../assets/icons/list-bullet.svg";
import BarsIcon from "./../../assets/icons/bars-3.svg";
import ClockIcon from "./../../assets/icons/clock.svg";
import PercentIcon from "./../../assets/icons/percent.svg";
import { useState } from "react";

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
            <div className={styles.productsSubTitle}>
              <ListBulletIcon /> VISITAS SENCILLAS CLORIAN
            </div>
            <div className={styles.productsCards}>
              {[
                "TESTING PROMO SIN COMISION",
                "PROMO CON COMISION",
                "2 VENUES DEPENDIENTES",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${
                    selectedCard === index ? styles.selected : ""
                  }`}
                  onClick={() => handleClickProduct(index)}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.aforosSelectContainer}>
            <div className={styles.aforosSubTitle}>
              <BarsIcon /> AFOROS
            </div>
            <div className={styles.aforoCards}>
              {["MUSEO", "EXPO", "MUSEO"].map((text, index) => (
                <div key={index} className={styles.card} onClick={handleClick}>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sessionsSelectContainer}>
            <div className={styles.sessionsSubTitle}>
              <ClockIcon /> SESIONES 1/1
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
