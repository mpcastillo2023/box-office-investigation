import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { addData, deleteStore, getStoreData, initDB, Stores } from "./offlineDb/db";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
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

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>
      {isOnline ? "Has connection" : "Offline"}
      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={e => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={e => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
