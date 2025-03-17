import { useQuery } from "@tanstack/react-query";
import { getQuery, UseIsDesktop } from "components-gallery";
import { Pricing } from "src/Types/Pricing";
import styles from "./../Styles/styles.module.scss";

export default function UseTickets() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target) {
      target.classList.toggle(styles.selected);
    }
  };

  const { isDesktop } = UseIsDesktop();

  return {
    handleClick,
    isDesktop
  };
}
