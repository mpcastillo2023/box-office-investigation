import { createContext, ReactNode, useContext } from "react";
import { IntlProvider, useIntl } from "react-intl";
import es from "../../locales/es.json";
import ca from "../../locales/ca.json";
import en from "../../locales/en.json";
import eu from "../../locales/eu.json";
import mx from "../../locales/es-mx.json";
import it from "../../locales/it.json";
import fr from "../../locales/fr.json";
import pt from "../../locales/pt.json";
import { LocaleContext } from "./LocaleProvider";
import React from "react";

const messages = {
  es: es,
  ca: ca,
  en: en,
  eu: eu,
  "es-MX": mx,
  it: it,
  fr: fr,
  pt: pt
};

// eslint-disable-next-line react-refresh/only-export-components
export const TranslateContext = createContext({});

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <TranslateContext.Provider value={{ useIntl }}>
      <IntlProvider
        messages={messages[locale as keyof typeof messages]}
        locale={locale}
        defaultLocale={"es"}
      >
        {children}
      </IntlProvider>
    </TranslateContext.Provider>
  );
};
