import { useEffect, useState } from "react";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

export default function useCheckUpdate() {
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    async function checkUpdate() {
      try {
        const update = await check();
        if (update) {
          // alternatively we could also call update.download() and update.install() separately
          try {
            await update.downloadAndInstall((event) => {
              switch (event.event) {
                case "Started":
                  console.log(
                    `started downloading ${event.data.contentLength} bytes`
                  );
                  break;
                case "Progress":
                  break;
                case "Finished":
                  console.log("download finished");
                  break;
              }
            });
          } catch (e) {
            console.log(e);
          }
          console.log("update installed");
          await relaunch();
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (!hasRun) {
      setHasRun(true);
      checkUpdate();
    }
  }, []);
}
