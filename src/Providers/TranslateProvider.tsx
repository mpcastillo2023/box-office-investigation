import { createContext, ReactNode, useContext } from "react";
import { IntlProvider, useIntl } from "react-intl";
import es from "../../locales/es.json";
import { LocaleContext } from "./LocaleProvider";

const messages = {
  es: es
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
