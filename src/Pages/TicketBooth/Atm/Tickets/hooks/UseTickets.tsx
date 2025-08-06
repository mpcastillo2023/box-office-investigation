import { UseIsDesktop } from "components-gallery";
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
