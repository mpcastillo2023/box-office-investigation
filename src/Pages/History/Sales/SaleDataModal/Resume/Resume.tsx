/* eslint-disable react/jsx-no-literals */
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";

const Resume = () => {
  return (
    <>
      <div className={styles.resumeContainer}>
        <div className={styles.resumeHeader}>
          <div>
            <FormattedMessage
              id="saleDataModal.resume.title"
              defaultMessage="Lista de entradas"
            />
            {"-"}
            <div>
              <FormattedMessage
                id="saleDataModal.resume.ticket.individual"
                defaultMessage="Individual"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
