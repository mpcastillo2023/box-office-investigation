/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import SimpleArrowLeftIcon from "@icons/simple-arrow-left.svg";
import { useState } from "react";
import Sales from "./Sales/Sales";
import List from "./List/List";
import Search from "./Search/Search";
import React from "react";

const History = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: (
        <FormattedMessage id="history.lastSales" defaultMessage="ULT.VENTAS" />
      ),
      content: <Sales />
    },
    {
      id: 1,
      label: <FormattedMessage id="history.search" defaultMessage="BUSCAR" />,
      content: <Search />
    },
    {
      id: 2,
      label: <FormattedMessage id="history.list" defaultMessage="LISTA" />,
      content: <List />
    }
  ];

  return (
    <>
      <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
          <Link to="/ticket-booth">
            <SimpleArrowLeftIcon />
          </Link>
          <FormattedMessage
            id="history.reservations"
            defaultMessage="Reservas"
          />
        </div>
        <div className={styles.historyBody}>
          <div className={styles.tabsContainer}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.isActive : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default History;
