import { Modal, Tabs } from "components-gallery";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import Resume from "./Resume/Resume";

export default function SaleItem() {
  const [isSaleDataModalOpen, setSaleDataModalOpen] = useState(false);

  const list = [
    {
      tabTitle: (
        <FormattedMessage id="saleDataModal.tab1" defaultMessage="RESUMEN" />
      ),
      tabView: <Resume />
    },
    {
      tabTitle: (
        <FormattedMessage id="saleDataModal.tab2" defaultMessage="DETALLES" />
      ),
      tabView: <div>AAA</div>
    },
    {
      tabTitle: (
        <FormattedMessage id="saleDataModal.tab3" defaultMessage="PAGOS" />
      ),
      tabView: <div>AAA</div>
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab4"
          defaultMessage="FORMULARIOS"
        />
      ),
      tabView: <div>AAA</div>
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab5"
          defaultMessage="VALIDACIONES"
        />
      ),
      tabView: <div>AAA</div>
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab6"
          defaultMessage="DEVOLUCIONES"
        />
      ),
      tabView: <div>AAA</div>
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab7"
          defaultMessage="INCIDENCIAS"
        />
      ),
      tabView: <div>AAA</div>
    }
  ];
  return (
    <>
      <Modal
        withCloseButton={false}
        setIsModalOpen={setSaleDataModalOpen}
        isModalOpen={isSaleDataModalOpen}
        variant="success"
        customStyle={styles}
        modalTitle={
          <FormattedMessage
            id="saleDataModal.title"
            defaultMessage="Reserva - La Pedrera Essencial"
          />
        }
      >
        <div>
          <Tabs customStyle={styles} tabList={list} />
        </div>
      </Modal>
    </>
  );
}
