/* eslint-disable react/jsx-no-literals */
import { emit, listen } from "@tauri-apps/api/event";
import React, { useEffect, useState } from "react";
import { Tickets } from "./Types/Tickets";
import NumeralPad from "./Pages/TicketBooth/Atm/NumericPad/NumericPad";
import { LocaleProvider } from "./Providers/LocaleProvider";
import { TranslateProvider } from "./Providers/TranslateProvider";

export default function Screen2() {
  const [selectedTickets, setSelectedTickets] = useState<Tickets[]>([]);

  useEffect(() => {
    const listenSetup = async () => {
      await listen<Tickets[]>("selectedTickets", (event) => {
        setSelectedTickets(event.payload);
      });
    };
    listenSetup();
  }, []);

  const newTicketsHandler = (newTickets: Tickets[]) => {
    emit("newSelectedTickets", newTickets);
  };
  return (
    <LocaleProvider>
      <TranslateProvider>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <NumeralPad
            selectTickets={selectedTickets}
            setSelectedTickets={newTicketsHandler}
            displayPad={false}
            fullWidth={true}
          ></NumeralPad>
        </div>
      </TranslateProvider>
    </LocaleProvider>
  );
}
