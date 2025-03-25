/* eslint-disable react/jsx-no-literals */
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import { Button, Checkbox, DropdownSelect } from "components-gallery";
import PencilIcon from "@icons/pencil.svg";
import UserIcon from "@icons/user.svg";
import UsersIcon from "@icons/users.svg";
import PrinterIcon from "@icons/printer.svg";

const Resume = () => {
  const list = [
    {
      optionValue: "1",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <PencilIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.edit.form.option"
              defaultMessage="Editar formularios"
            />
          </div>
        </>
      )
    },
    {
      optionValue: "2",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <PencilIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.edit.sellData.option"
              defaultMessage="Editar datos de compra"
            />
          </div>
        </>
      )
    },
    {
      optionValue: "3",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <PencilIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.edit.refData.option"
              defaultMessage="Editar referencia / observaciones"
            />
          </div>
        </>
      )
    },
    {
      optionValue: "4",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <UserIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.assign.seller.option"
              defaultMessage="Asignar distribuidor, vendedor o agencia"
            />
          </div>
        </>
      )
    },
    {
      optionValue: "5",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <UsersIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.change.group.option"
              defaultMessage="Cambiar agrupacion de entradas"
            />
          </div>
        </>
      )
    },
    {
      optionValue: "6",
      optionText: (
        <>
          <div className={styles.editOption}>
            <div className={styles.editIcon}>
              <PrinterIcon />
            </div>
            <FormattedMessage
              id="saleDataModal.resume.pdf.option"
              defaultMessage="Ver PDF (Print At Home)"
            />
          </div>
        </>
      )
    }
  ];
  return (
    <>
      <div className={styles.resumeContainer}>
        <div className={styles.ticketList}>
          <div className={styles.ticketListTitle}>
            <FormattedMessage
              id="saleDataModal.resume.title"
              defaultMessage="Lista de entradas "
            />
            <div style={{ fontWeight: "bold" }}>
              <FormattedMessage
                id="saleDataModal.resume.ticket.title"
                defaultMessage=" Individual"
              />
            </div>
          </div>
          <div className={styles.ticketListSubTitle}>
            <FormattedMessage
              id="saleDataModal.resume.ticket.subtitle"
              defaultMessage="Seleccione entradas individuales para imprimir o devolverlas"
            />
          </div>
          <div className={styles.ticketListData}>
            <div className={styles.ticketListCheckbox}>
              <div className={styles.ticketListCheck}>
                <Checkbox />
                <FormattedMessage
                  id="saleDataModal.resume.ticket.all"
                  defaultMessage="TODAS"
                />
              </div>
              <div className={styles.ticketListHideText}>
                <FormattedMessage
                  id="saleDataModal.resume.ticket.hideText"
                  defaultMessage="Ocultar Tickets"
                />
              </div>
            </div>
            <div className={styles.ticketListCheckbox}>
              <div className={styles.ticketListCheck}>
                <Checkbox />
                <div className={styles.ticketListTexts}>
                  <div>
                    <FormattedMessage
                      id="saleDataModal.resume.ticket.text"
                      defaultMessage="Nen (menor 12 anys)"
                    />
                  </div>
                  <div className={styles.ticketListSubText}>
                    <FormattedMessage
                      id="saleDataModal.resume.ticket.text2"
                      defaultMessage="Localizador 221764709"
                    />
                  </div>
                  <div className={styles.ticketListSubText}>
                    <FormattedMessage
                      id="saleDataModal.resume.ticket.text3"
                      defaultMessage="0.00€"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.resumeData}>
          <div className={styles.resumeDataTitle}>
            <FormattedMessage
              id="saleDataModal.resume.data.title"
              defaultMessage="Resumen de la reserva"
            />
          </div>
          <div className={styles.ticketResumeData}>
            <div className={styles.resumeDataTitles}>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.locator"
                  defaultMessage="Localizador"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.state"
                  defaultMessage="Estado"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.product"
                  defaultMessage="Producto"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.eventDate"
                  defaultMessage="Fecha del evento"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.buyDate"
                  defaultMessage="Fecha de Compra"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.total"
                  defaultMessage="Total"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.refBill"
                  defaultMessage="Localizador"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.sellChanel"
                  defaultMessage="Canal de venta"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.paymentMethod"
                  defaultMessage="Forma de pago"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.vaucher"
                  defaultMessage="Vaucher partner"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.client"
                  defaultMessage="Distrib./Cliente"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.namedata"
                  defaultMessage="Nombre y apellidos"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.email"
                  defaultMessage="Email"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.tlf"
                  defaultMessage="Teléfono"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.ref"
                  defaultMessage="Referencia"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.observation"
                  defaultMessage="Observaciones"
                />
              </div>
            </div>
            <div className={styles.resumeDataValues}>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.locator.text"
                  defaultMessage="71307306"
                />
              </div>
              <div className={styles.confirmed}>
                <FormattedMessage
                  id="saleDataModal.resume.state.text"
                  defaultMessage="Confirmada"
                />
              </div>

              <div>
                <FormattedMessage
                  id="saleDataModal.resume.product.text"
                  defaultMessage="La Pedrera Esencial"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.eventDate.text"
                  defaultMessage="12/03/2025 17:45"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.buyDate.text"
                  defaultMessage="12/03/2025 17:57"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.total.text"
                  defaultMessage="0,00€"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.refBill.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.sellChanel.text"
                  defaultMessage="Taquilla individual"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.paymentMethod.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.vaucher.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.client.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.namedata.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.email.text"
                  defaultMessage="71307306"
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.tlf.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.ref.text"
                  defaultMessage=""
                />
              </div>
              <div>
                <FormattedMessage
                  id="saleDataModal.resume.observation.text"
                  defaultMessage=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.resumeFooter}>
        <div className={styles.resumeFooterOptions}>
          <DropdownSelect
            iconOnLeft={true}
            placeholder="Otros"
            className={styles.select}
            customStyle={styles}
            optionList={list}
            size="full"
          />
        </div>
        <div className={styles.resumeFooterPrintButtons}>
          <Button variant="primary" className={styles.printButton}>
            <FormattedMessage
              id="saleDataModal.resume.ticketPrint"
              defaultMessage="RECIBO"
            />
          </Button>
          <Button variant="primary" className={styles.printButton}>
            <FormattedMessage
              id="saleDataModal.resume.entrPrint"
              defaultMessage="ENTR"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Resume;
