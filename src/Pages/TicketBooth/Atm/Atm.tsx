import NumericPad from "./NumericPad/NumericPad";
import Catalog from "./Catalog/Catalog";
import styles from "./Styles/styles.module.scss";
import Tickets from "./Tickets/Tickets";
import { useEffect, useState } from "react";
import { Tickets as TicketsType } from "../../../Types/Tickets";
import React from "react";
import { emit, listen } from "@tauri-apps/api/event";

export default function Atm() {
  const [selectedTickets, setSelectedTickets] = useState<TicketsType[]>([]);
  useEffect(() => {
    emit("selectedTickets", selectedTickets);
  }, [selectedTickets]);
  useEffect(() => {
    const listenSetup = async () => {
      await listen<TicketsType[]>("newSelectedTickets", (event) => {
        setSelectedTickets(event.payload);
      });
    };
    listenSetup();
  }, []);
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
