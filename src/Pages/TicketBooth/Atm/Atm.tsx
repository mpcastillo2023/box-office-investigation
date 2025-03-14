import NumericPad from "./NumericPad/NumericPad";
import Catalog from "./Catalog/Catalog";
import styles from "./Styles/styles.module.scss";
import Tickets from "./Tickets/Tickets";
import { useState } from "react";
import { Tickets as TicketsType } from "../../../Types/Tickets";

export default function Atm() {
  const [selectedTickets, setSelectedTickets] = useState<TicketsType[]>([]);
  return (
    <>
      <div className={styles.atmContainer}>
        <Catalog />
        <Tickets
          setSelectedTickets={setSelectedTickets}
          selectedTickets={selectedTickets}
        />
        <NumericPad
          setSelectedTickets={setSelectedTickets}
          selectTickets={selectedTickets}
        />
      </div>
    </>
  );
}
