/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-literals */
import React from "react";
import styles from "./Styles/styles.module.scss";
import TemplatesListData, {
  Template
} from "../../../../Utils/TemplatesListData/TemplatesListData";

type Props = {
  activeTemplate: Template | null;
  setActiveTemplate: React.Dispatch<React.SetStateAction<Template | null>>;
};

const Templates = ({ activeTemplate, setActiveTemplate }: Props) => {
  const files = TemplatesListData;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {files.map((file, index) => {
          const isActive = activeTemplate?.id === file.id;
          return (
            <li
              key={index}
              className={`${styles.item} ${isActive ? styles.isActive : ""}`}
              onClick={() => {
                setActiveTemplate(file);
              }}
            >
              <div className={styles.fileName}>{file.name}</div>
              <div className={styles.fileDetails}>
                {file.date} - {file.size}
              </div>
              <div className={styles.fileStatus}>{file.status}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Templates;
