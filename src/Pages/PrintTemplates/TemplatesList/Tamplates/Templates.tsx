/* eslint-disable react/jsx-no-literals */
import React from "react";
import styles from "./Styles/styles.module.scss";
import TemplatesListData from "../../../../Utils/TemplatesListData/TemplatesListData";

const Templates = () => {
  const files = TemplatesListData;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {files.map((file, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.fileName}>{file.name}</div>
            <div className={styles.fileDetails}>
              {file.date} - {file.size}
            </div>
            <div className={styles.fileStatus}>{file.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Templates;
