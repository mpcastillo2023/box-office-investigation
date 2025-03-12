import { getVersion } from "@tauri-apps/api/app";
import { useEffect, useState } from "react";

export default function useGetAppVersion() {
  const [appVersion, setAppVersion] = useState("");
  useEffect(() => {
    async function getAppVersion() {
      const version = await getVersion();
      setAppVersion(version);
    }
    getAppVersion();
  }, []);
  return { appVersion };
}
