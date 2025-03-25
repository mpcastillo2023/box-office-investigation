import { Modal, Tabs } from "components-gallery";
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import Resume from "./Resume/Resume";
import Details from "./Details/Details";
import Payments from "./Payments/Payments";
import Forms from "./Forms/Forms";
import Refunds from "./Refunds/Refunds";
import Validation from "./Validation/Validation";
import Issues from "./Issues/Issues";

type Props = {
  isSaleDataModalOpen: boolean;
  setSaleDataModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SaleItem({
  isSaleDataModalOpen,
  setSaleDataModalOpen
}: Props) {
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
      tabView: <Details />
    },
    {
      tabTitle: (
        <FormattedMessage id="saleDataModal.tab3" defaultMessage="PAGOS" />
      ),
      tabView: <Payments />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab4"
          defaultMessage="FORMULARIOS"
        />
      ),
      tabView: <Forms />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab5"
          defaultMessage="VALIDACIONES"
        />
      ),
      tabView: <Validation />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab6"
          defaultMessage="DEVOLUCIONES"
        />
      ),
      tabView: <Refunds />
    },
    {
      tabTitle: (
        <FormattedMessage
          id="saleDataModal.tab7"
          defaultMessage="INCIDENCIAS"
        />
      ),
      tabView: <Issues />
    }
  ];
  return (
    <>
      <Modal
        withCloseButton={true}
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
