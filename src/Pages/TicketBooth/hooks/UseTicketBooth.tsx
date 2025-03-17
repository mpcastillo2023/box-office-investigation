import { useState, useEffect } from "react";
import useNetworkStatus from "../../../Hooks/useNetworkStatus";
import {
  initDB,
  getStoreData,
  Stores,
  deleteStore,
  addData
} from "../../../Utils/OfflineDb/db";

export default function UseTicketBooth() {
  const [name, setName] = useState("");
  const { isOnline } = useNetworkStatus();
  const [isDbOn, setIsDbOn] = useState(false);
  const [hasDataToSync, setHasDataToSync] = useState(false);

  useEffect(() => {
    const turnOnDb = async () => {
      const dbIsOn = await initDB();
      setIsDbOn(dbIsOn);
    };
    turnOnDb();
  }, [isOnline]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getStoreData<{ message: string }>(Stores.Messages);
      console.log("request message sent: ", messages);
      deleteStore(Stores.Messages);
      setHasDataToSync(false);
    };
    if (isOnline && isDbOn && hasDataToSync) {
      fetchMessages();
    }
  }, [isOnline]);

  async function greet() {
    if (isOnline) {
      console.log("request message sent: ", name);
    } else {
      try {
        await addData(Stores.Messages, { name });
        setHasDataToSync(true);
      } catch (err: unknown) {
        console.log(err, "there has been an error");
      }
    }
  }

  return { setName, greet, isOnline };
}
