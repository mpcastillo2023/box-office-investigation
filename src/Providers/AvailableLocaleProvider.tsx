import { createContext, useEffect, useState } from "react";
import React from "react";

const getAvailableLocales = () => {
  const availableLocales = localStorage.getItem("locales");
  if (!availableLocales) {
    return ["es", "en", "ca", "eu", "fr", "it", "es-MX", "pt"];
  } else {
    const parsedAvailableLocales: string[] = JSON.parse(availableLocales);
    return parsedAvailableLocales;
  }
};

type LocaleProviderValue = {
  locales: string[];
  setLocales: (locales: string[]) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AvailableLocalesContext = createContext<LocaleProviderValue>(
  {} as LocaleProviderValue
);

type Props = {
  children: React.ReactNode;
};

export const AvailableContextProvider = ({ children }: Props) => {
  const [locales, setLocales] = useState<string[]>(getAvailableLocales());
  useEffect(() => {
    localStorage.setItem("locales", JSON.stringify(locales));
  }, [locales]);
  return (
    <AvailableLocalesContext.Provider
      value={{
        locales: locales,
        setLocales: setLocales
      }}
    >
      {children}
    </AvailableLocalesContext.Provider>
  );
};
