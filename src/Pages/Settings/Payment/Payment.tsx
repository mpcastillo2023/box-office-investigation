import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
const Payment = () => {
  return (
    <>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentTitle}>Validacion</div>
        <div className={styles.paymentBody}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Glory / CashLogy"
                />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Cajon (efectivo)"
                />
              </div>
              <div>
                Comando apertura Cajon <TextInput className={styles.input} />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="CashKeeper"
                />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Importe de cambio obligatorio"
                />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Habilitar pago diferido"
                />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Habilitar Calculadora de Dominaciones"
                />
              </div>
              <div>
                Calculadora de cambio*
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "Mostar siempre (tablet/escritorio)",
                      optionValue: "mostrar",
                    },
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="mostrar"
                />
              </div>
            </div>
            <div className={styles.column}>
              <div>
                Tipo terminal
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "Redsys",
                      optionValue: "redsys",
                    },
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="redsys"
                />
              </div>
              <div style={{ display: "flex", gap: "7px" }}>
                <div>
                  Numero de terminal
                  <TextInput className={styles.input} />
                </div>
                <div>
                  Numero de comercio <TextInput className={styles.input} />
                </div>
              </div>
              <div>
                Clave de firma
                <TextInput className={styles.input} />
              </div>
              <div>
                Integracion pago movil*
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "NO APLICA",
                      optionValue: "noAplica",
                    },
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="noAplica"
                />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside="Devoluviones Webservice RedSyS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
