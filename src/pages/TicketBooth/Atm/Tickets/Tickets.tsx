import styles from "./Styles/styles.module.scss";
import HashTagIcon from "@icons/hashtag.svg";
import Card from "./Cards/Cards";
import TagIcon from "@icons/tag.svg";
import PercentICon from "@icons/percent.svg";
import ChatBubbleIcon from "@icons/chat-bubble.svg";
import ShoppingCarIcon from "@icons/shopping-cart.svg";
import XCircleIcon from "@icons/x-circle.svg";
export default function Tickets() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };
  return (
    <>
      <div className={styles.ticketsContainer}>
        <div className={styles.sellerContainer}>
          <div className={styles.seller}>
            <div className={styles.sellerName}>Distribuidor</div>
            <input type="text" placeholder="Buscar distribuidor" />
          </div>
          <div className={styles.seller}>
            <div className={styles.sellerName}>
              <HashTagIcon />
              Referencia
            </div>
            <input type="text" placeholder="Referencia" />
          </div>
        </div>
        <div className={styles.aforostitle}>Colectivos</div>
        <div className={styles.aforosSelectContainer}>
          <div className={styles.aforosSubTitle}>MIN 1 - MAX 20</div>
          <div className={styles.aforosCards}>
            <Card name="General" price={20.0} />
            <Card name="Reducida" price={11.9} />
          </div>
        </div>
        <div className={styles.promotionsContainer}>
          <div className={styles.promotionsTitle}>
            <TagIcon />
            Convenios
          </div>
          <div className={styles.promotionsCards}>
            {["CONVENIO 15%", "2x1 FINES DE SEMANA"].map((text, index) => (
              <div key={index} className={styles.card} onClick={handleClick}>
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.promotionCodeContainer}>
          <div className={styles.promotionCode}>
            <div className={styles.promotionCodeName}>
              <PercentICon />
            </div>
            <input type="text" placeholder="Código Promocional" />
            <ShoppingCarIcon />
            <XCircleIcon />
          </div>
          <div className={styles.promotionCode}>
            <div className={styles.promotionCodeName}>
              <ChatBubbleIcon />
            </div>
            <input type="text" placeholder="Observaciones" />
          </div>
        </div>
      </div>
    </>
  );
}
