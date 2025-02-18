import styles from "./Styles/styles.module.scss";
import HashTagIcon from "@icons/hashtag.svg";
import Card from "./Cards/Cards";
import TagIcon from "@icons/tag.svg";
import PercentICon from "@icons/percent.svg";
import ChatBubbleIcon from "@icons/chat-bubble.svg";
import ShoppingCarIcon from "@icons/shopping-cart.svg";
import XCircleIcon from "@icons/x-circle.svg";
import { Accordion, UseIsDesktop } from "components-gallery";
import { getQuery } from "../../../../Api/getQuery";
import { useQuery } from "@tanstack/react-query";
import QueryWrapper from "../../../../Components/Hoc/QueryWrapper/QueryWrapper";
import { Pricing } from "../../../../Types/Pricing";

export default function Tickets() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };

  const { isDesktop } = UseIsDesktop();

  const query = useQuery({
    queryFn: getQuery<Pricing[]>,
    queryKey: ["pricings"],
  });
  return (
    <>
      <div className={styles.ticketsContainer}>
        {isDesktop ? (
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
        ) : (
          <div className={styles.aforosSelectContainer}>
            <Accordion
              variant="simple"
              expanded={isDesktop}
              shouldDisplayIcon={false}
              title={<div className={styles.aforosSubTitle}>Servicios</div>}
              customStyleClasses={styles}
            >
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
            </Accordion>
          </div>
        )}
        <div className={styles.aforostitle}>Colectivos</div>
        <div className={styles.aforosSelectContainer}>
          <Accordion
            variant="simple"
            expanded={isDesktop}
            shouldDisplayIcon={false}
            title={<div className={styles.aforosSubTitle}>MIN 1 - MAX 20</div>}
            customStyleClasses={styles}
          >
            <div className={styles.aforosContainer}>
              <div className={styles.aforosCards}>
                <QueryWrapper
                  {...query}
                  render={pricings => {
                    return pricings.map(pricing => {
                      return (
                        <Card name={pricing.name} price={pricing.price} key={pricing.productId} />
                      );
                    });
                  }}
                />
              </div>
            </div>
          </Accordion>
        </div>

        <div className={styles.promotionsContainer}>
          <Accordion
            variant="simple"
            expanded={isDesktop}
            shouldDisplayIcon={false}
            title={
              <div className={styles.promotionsTitle}>
                <TagIcon />
                Convenios
              </div>
            }
            customStyleClasses={styles}
          >
            <div className={styles.promotionsCards}>
              {["CONVENIO 15%", "2x1 FINES DE SEMANA"].map((text, index) => (
                <div key={index} className={styles.card} onClick={handleClick}>
                  {text}
                </div>
              ))}
            </div>
          </Accordion>
        </div>
        {isDesktop ? (
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
        ) : (
          <div className={styles.promotionsContainer}>
            <Accordion
              variant="simple"
              expanded={isDesktop}
              shouldDisplayIcon={false}
              title={<div className={styles.promotionsTitle}>Promo</div>}
              customStyleClasses={styles}
            >
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
            </Accordion>
          </div>
        )}
      </div>
    </>
  );
}
