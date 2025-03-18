import { Modal, Tabs } from "components-gallery";
import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import Tickets from "./Tickets/Tickets";
import Receipt from "./Receipt/Receipt";
import OtherProducts from "./OtherProducts/OtherProducts";

type Props = {
  isPrintersTemplatesModalOpen: boolean;
  setIPrintersTemplatesModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrintersTemplatesModal = ({
  isPrintersTemplatesModalOpen,
  setIPrintersTemplatesModalOpen
}: Props) => {
  const list = [
    {
      tabTitle: (
        <FormattedMessage
          id="printersTemplatesModal.tab1"
          defaultMessage="ENTRADAS"
        />
      ),
      tabView: <Tickets />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="printersTemplatesModal.tab2"
          defaultMessage="RECIBOS"
        />
      ),
      tabView: <Receipt />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="printersTemplatesModal.tab3"
          defaultMessage="OTROS PRODUCTOS"
        />
      ),
      tabView: <OtherProducts />
    }
  ];
  return (
    <>
      <Modal
        customStyle={styles}
        isConfirmModal
        withCloseButton
        variant="success"
        isModalOpen={isPrintersTemplatesModalOpen}
        setIsModalOpen={setIPrintersTemplatesModalOpen}
        modalTitle={
          <>
            <FormattedMessage
              id="printersTemplatesModal.title"
              defaultMessage="Seleccion de impresora y plantillas"
            />
          </>
        }
      >
        <Tabs customStyle={styles} tabList={list} />
      </Modal>
    </>
  );
};

export default PrintersTemplatesModal;
