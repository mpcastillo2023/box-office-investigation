/* eslint-disable react/jsx-no-literals */
import { listen } from "@tauri-apps/api/event";
import React, { useEffect, useState } from "react";
import { Tickets } from "./Types/Tickets";
import { LocaleProvider } from "./Providers/LocaleProvider";
import { TranslateProvider } from "./Providers/TranslateProvider";
import FooterScreen2 from "./Components/FooterScreen2/FooterScreen2";
import ShoppingCart from "./Components/ShoopingCart/ShoppingCart";

export default function Screen2() {
  const [selectedTickets, setSelectedTickets] = useState<Tickets[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  useEffect(() => {
    const listenSetup = async () => {
      await listen<Tickets[]>("selectedTickets", (event) => {
        setSelectedTickets(event.payload);
      });
      await listen<boolean>("isConfirmModalOpen", (event) => {
        setIsConfirmModalOpen(event.payload);
      });
    };
    listenSetup();
  }, []);

  return (
    <LocaleProvider>
      <TranslateProvider>
        <ShoppingCart
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          isConfirmModalOpen={isConfirmModalOpen}
          selectTickets={selectedTickets}
        />
        <FooterScreen2 />
      </TranslateProvider>
    </LocaleProvider>
  );
}
