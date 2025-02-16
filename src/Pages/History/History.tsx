import { Link } from "react-router";
import styles from "./Styles/styles.module.scss";
import ArrowLeftIcon from "@icons/arrow-left.svg";
import { useState } from "react";
import Sales from "./Sales/Sales";
import List from "./List/List";
import Search from "./Search/Search";

const History = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "ULT.VENTAS", content: <Sales /> },
    { id: 1, label: "BUSCAR", content: <Search /> },
    { id: 2, label: "LISTA", content: <List /> },
  ];
  return (
    <>
      <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
          <Link to="/ticketbooth">
            <ArrowLeftIcon />
          </Link>
          Reservas
        </div>
        <div className={styles.historyBody}>
          <div className={styles.tabsContainer}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.isActive : ""
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div>{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default History;
