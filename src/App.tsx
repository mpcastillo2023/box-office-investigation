import "./globalCSS/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketBooth from "./pages/TicketBooth/TicketBooth";
import Layout from "./components/Layout/Layout";
import History from "./pages/History/History";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TicketBooth />} />
          <Route path="/ticketbooth" element={<TicketBooth />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
