import { useEffect, useState } from "react";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

export default function useCheckUpdate() {
  const [message, setMessage] = useState("");
  const [hasRun, setHasRun] = useState(false);
  useEffect(() => {
    async function checkUpdate() {
      try {
        setMessage("Checking update");
        const update = await check();
        console.log(update);
        if (update) {
          setMessage(
            `found update ${update.version} from ${update.date} with notes ${update.body}`
          );
          let downloaded = 0;
          let contentLength = 0;
          // alternatively we could also call update.download() and update.install() separately
          try {
            await update.downloadAndInstall(event => {
              switch (event.event) {
                case "Started":
                  contentLength = event.data.contentLength || 0;
                  console.log(`started downloading ${event.data.contentLength} bytes`);
                  setMessage(`started downloading ${event.data.contentLength} bytes`);
                  break;
                case "Progress":
                  downloaded += event.data.chunkLength;
                  setMessage(`downloaded ${downloaded} from ${contentLength}`);
                  break;
                case "Finished":
                  setMessage("download finished");
                  console.log("download finished");
                  break;
              }
            });
          } catch (e) {
            setMessage("Error");
          }
          setMessage("update installed");
          console.log("update installed");
          await relaunch();
        }
      } catch (e) {
        console.log(e);
        setMessage("Error while checking update");
      }
    }
    if (!hasRun) {
      setHasRun(true);
      checkUpdate();
    }
  }, []);
  return { message };
}
