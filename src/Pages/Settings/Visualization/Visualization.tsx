/* eslint-disable react/jsx-no-literals */
import {
  Button,
  DropdownMultipleSelect,
  DropdownSelect,
  Switch,
  TextInput
} from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React, { useContext, useEffect } from "react";
import { AvailableLocalesContext } from "../../../Providers/AvailableLocaleProvider";
import { LocaleContext } from "../../../Providers/LocaleProvider";

const Visualization = () => {
  const { locales, setLocales } = useContext(AvailableLocalesContext);
  const { locale, setLocale } = useContext(LocaleContext);
  const optionsList = [
    {
      optionText: "CA-Català",
      optionValue: "ca"
    },
    {
      optionText: "ES-Español",
      optionValue: "es"
    },
    {
      optionText: "EN-English",
      optionValue: "en"
    },
    {
      optionText: "EU-Euskara",
      optionValue: "eu"
    },
    {
      optionText: "FR-Français",
      optionValue: "fr"
    },
    {
      optionText: "IT-Italiano",
      optionValue: "it"
    },
    {
      optionText: "MX-Español (México)",
      optionValue: "es-MX"
    },
    {
      optionText: "PT-Português",
      optionValue: "pt"
    }
  ];
  const filteredOptionList = optionsList.filter((option) => {
    return locales.includes(option.optionValue);
  });
  let localesText = "Escoge un idioma";
  locales.forEach((locale, index) => {
    if (index === 0) {
      localesText = `${locale}`;
    } else {
      localesText += `, ${locale}`;
    }
  });

  useEffect(() => {
    if (locales.length > 0 && !locales.includes(locale)) {
      setLocale(locales[0]);
    } else if (locales.length === 0) {
      setLocale("es");
    }
  }, [locales]);

  return (
    <>
      <div className={styles.visualizationContainer}>
        <div className={styles.visualizationTitle}>Visualización</div>
        <div className={styles.visualizationBody}>
          <Switch
            size="extraSmall"
            textBeside={"Mostrar solo eventos disponibles"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Seleccionar producto principal al iniciar"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Mostrar hora de finalización del evento"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Ofrecer siguiente sesión disponible"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Mostrar disponibilidad máxima (ej:15/100)"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Agrupar productos por categoría"}
          />

          <Switch
            size="extraSmall"
            textBeside={"Marcar salto de evento en búsqueda de reservas"}
          />

          <div>
            <Button className={styles.button} size="medium" variant="primary">
              MENSAJES DEL DISPLAY
            </Button>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Formulario de compra*
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "Nunca",
                    optionValue: "nunca"
                  }
                ]}
                value={"nunca"}
              />
            </div>
            <div className={styles.column}>
              Cada X compras*
              <TextInput className={styles.input} placeholder="0" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Productos/pag*
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Sesiones/pag*
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Promociones/pag*
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Zoom de aplicación
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Idioma de datos por defecto*
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "CA-Català",
                    optionValue: "catalan"
                  },
                  {
                    optionText: "ES-Español",
                    optionValue: "spanish"
                  }
                ]}
                value={"catalan"}
              />
            </div>
            <div>
              Idioma aplicación actual
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={filteredOptionList}
                value={locale}
                onChange={(option) => {
                  const { optionValue } = option;
                  if (typeof optionValue === "string") {
                    setLocale(optionValue);
                  }
                }}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Idiomas de tickets
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Idiomas de aplicación
              <DropdownMultipleSelect
                value={locales}
                optionList={optionsList}
                label={localesText}
                customStyle={styles}
                onChange={(optionsList) => {
                  const values: string[] = optionsList.map((option) => {
                    return typeof option.optionValue === "string"
                      ? option.optionValue
                      : option.optionValue.toString();
                  });
                  if (values.length > 0) {
                    setLocales(values);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualization;
