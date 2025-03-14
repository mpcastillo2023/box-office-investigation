import { relaunch } from "@tauri-apps/plugin-process";
import { check, Update } from "@tauri-apps/plugin-updater";
import { Button, Modal, Portal } from "components-gallery";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import useGetAppVersion from "../../Hooks/useGetAppVersion";
import styles from "./Styles/styles.module.scss";

type Props = {
  shouldDisplayCheckingUpdateInfo?: boolean;
  onCloseHandler?: () => void;
};

export default function UpdateModal({
  shouldDisplayCheckingUpdateInfo = false,
  onCloseHandler
}: Props) {
  const [update, setUpdate] = useState<Update | null>(null);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);
  const [hasCheckedUpdate, setHasCheckedUpdate] = useState(false);
  const [downloadedPercent, setDownloadedPercent] = useState(0);
  const [shouldDisplayDownloadPercent, setShouldDisplayDownloadPercent] =
    useState(false);
  const { appVersion } = useGetAppVersion();
  const [isModalOpen, setIsModalOpen] = useState(
    shouldDisplayCheckingUpdateInfo
  );
  const [dots, setDots] = useState("");

  const updateApp = async () => {
    if (update) {
      let downloaded = 0;
      let contentLength = 0;
      try {
        await update.downloadAndInstall((event) => {
          switch (event.event) {
            case "Started":
              contentLength = event.data.contentLength || 0;
              setDownloadedPercent((downloaded / contentLength) * 100);
              break;
            case "Progress":
              downloaded += event.data.chunkLength;
              setDownloadedPercent((downloaded / contentLength) * 100);
              break;
            case "Finished":
              setShouldDisplayDownloadPercent(true);
              break;
          }
        });
      } catch {
        setShouldDisplayDownloadPercent(true);
      }
      await relaunch();
    }
  };

  useEffect(() => {
    if (update) {
      setIsModalOpen(true);
    }
  }, [update]);

  useEffect(() => {
    if (!isModalOpen && onCloseHandler) {
      onCloseHandler();
    }
  }, [isModalOpen]);

  useEffect(() => {
    async function checkUpdate() {
      try {
        setIsCheckingUpdate(true);
        const update = await check();
        setUpdate(update);
      } catch (e) {
        console.log(e);
      }
      setHasCheckedUpdate(true);
      setIsCheckingUpdate(false);
    }
    checkUpdate();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Modal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        variant="success"
        customStyle={styles}
        modalTitle={
          <FormattedMessage
            id="updateModal.newVersion"
            defaultMessage="Nueva versión"
          />
        }
      >
        {!update &&
        shouldDisplayCheckingUpdateInfo &&
        !hasCheckedUpdate &&
        isCheckingUpdate ? (
          <span>
            <FormattedMessage
              id="updateModal.checking"
              defaultMessage="Chequeando si hay nueva versión disponible para actualizar"
            />
            {dots}
          </span>
        ) : null}
        {!update &&
        shouldDisplayCheckingUpdateInfo &&
        hasCheckedUpdate &&
        !isCheckingUpdate ? (
          <span>
            <FormattedMessage
              id="updateModal.noUpdate"
              defaultMessage="No hay actualización disponible"
            />
          </span>
        ) : null}
        {update ? (
          <>
            <span>
              <FormattedMessage
                id="updateModal.currentVersion"
                defaultMessage="Actualmente estás usando la versión {appVersion}, ¿quieres actualizar a la versión {updateVersion}?"
                values={{ appVersion, updateVersion: update?.version }}
              />
            </span>
            <div className={styles.buttonsWrapper}>
              <Button
                variant="secondary"
                className={styles.cancelButton}
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <FormattedMessage
                  id="updateModal.cancel"
                  defaultMessage="Cancelar"
                />
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  updateApp();
                  setDots("");
                  setShouldDisplayDownloadPercent(true);
                }}
              >
                <FormattedMessage
                  id="updateModal.confirm"
                  defaultMessage="Confirmar"
                />
              </Button>
            </div>
          </>
        ) : null}
      </Modal>
      {shouldDisplayDownloadPercent ? (
        <Portal>
          <div className={styles.blackDrop}></div>
          <div className={styles.downloadPercentage}>
            <FormattedMessage
              id="updateModal.updating"
              defaultMessage="Actualizando aplicación"
            />
            {dots}
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{ width: downloadedPercent + "%" }}
              ></div>
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
}
