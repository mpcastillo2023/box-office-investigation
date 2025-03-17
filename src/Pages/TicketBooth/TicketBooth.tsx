import { useEffect, useState } from "react";
import useNetworkStatus from "../../Hooks/useNetworkStatus";
import {
  addData,
  deleteStore,
  getStoreData,
  initDB,
  Stores
} from "../../Utils/OfflineDb/db";
import Atm from "./Atm/Atm";
import React from "react";
import UseTicketBooth from "./hooks/UseTicketBooth";

const TicketBooth = () => {
  const { isOnline, greet, setName } = UseTicketBooth();

  return (
    <>
      <main className="container" style={{ display: "none" }}>
        {isOnline ? "Has connection" : "Offline"}
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          {/* eslint-disable-next-line react/jsx-no-literals */}
          <button type="submit">Greet</button>
        </form>
      </main>
      <Atm />
    </>
  );
};

export default TicketBooth;
