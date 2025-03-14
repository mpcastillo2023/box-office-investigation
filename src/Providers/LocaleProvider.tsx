import { getCookie } from "components-gallery";
import React, { createContext, useState } from "react";

const getLocale = () => {
  const locale = getCookie("locale") || "en";
  // Split locales with a region code
  const languageWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];
  return languageWithoutRegionCode;
};
type LocaleProviderValue = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleProviderValue>(
  {} as LocaleProviderValue
);

type Props = {
  children: React.ReactNode;
};

export const LocaleProvider = ({ children }: Props) => {
  const localeCookie = getLocale();
  const [locale, setLocale] = useState<string>(localeCookie);

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
