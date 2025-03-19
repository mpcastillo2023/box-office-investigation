import React, { createContext, useEffect, useState } from "react";

const getDefaultLocale = () => {
  const locale = localStorage.getItem("locale") || "es";
  return locale;
};
type LocaleProviderValue = {
  locale: string;
  setLocale: (locale: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LocaleContext = createContext<LocaleProviderValue>(
  {} as LocaleProviderValue
);

type Props = {
  children: React.ReactNode;
};

export const LocaleProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<string>(getDefaultLocale());

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        setLocale: setLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
