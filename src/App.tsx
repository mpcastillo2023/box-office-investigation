import "./globalCSS/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketBooth from "./Pages/TicketBooth/TicketBooth";
import Layout from "./Components/Hoc/Layout/Layout";
import History from "./Pages/History/History";
import Login from "./Pages/Login/Login";
import { QueryClient } from "@tanstack/react-query";
import { createIDBPersister } from "./Utils/OfflineDb/createIdbPersister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import useCheckUpdate from "./Hooks/useCheckUpdate";
import useGetAppVersion from "./Hooks/useGetAppVersion";
import Settings from "./Pages/Settings/Settings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 1000 * 60 * 60 * 12,
    },
  },
});

const persister = createIDBPersister();

function App() {
  useCheckUpdate();
  const { appVersion } = useGetAppVersion();
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <BrowserRouter>
        {appVersion}
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="ticketbooth" element={<TicketBooth />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
}

export default App;
