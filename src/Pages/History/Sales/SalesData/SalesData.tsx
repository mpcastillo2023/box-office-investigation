import { Checkbox } from "components-gallery";
import CloudIcon from "@icons/cloud.svg";
import { FormattedMessage } from "react-intl";
import React from "react";

export type Sales = {
  checkbox: string | React.ReactNode;
  cloud: React.ReactNode;
  local: string;
  state: string | React.ReactNode;
  product: string;
  client: string;
  ref: string;
  quantity: number;
  value: string;
  sessionDate: string;
  salesDate: string;
};

const Cloud = () => {
  return (
    <div style={{ width: "30px", height: "30px", fill: "black" }}>
      <CloudIcon />
    </div>
  );
};

const Confirmed = () => {
  return (
    <div style={{ color: "#66a75a" }}>
      <FormattedMessage id="sales.confirmed" defaultMessage="Confirmada" />
    </div>
  );
};

const TableRowData: Sales[] = [
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308485",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 0,
    value: "30,00 €",
    sessionDate: "11/02/25 09:45",
    salesDate: "11/02/25 09:52:32"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308483",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 1,
    value: "30,00 €",
    sessionDate: "11/02/25 09:45",
    salesDate: "11/02/25 09:50:03"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308473",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 1,
    value: "30,00 €",
    sessionDate: "11/02/25 09:15",
    salesDate: "11/02/25 09:22:12"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308470",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 1,
    value: "30,00 €",
    sessionDate: "11/02/25 09:15",
    salesDate: "11/02/25 09:16:04"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308463",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 3,
    value: "72,50 €",
    sessionDate: "10/02/25 18:00",
    salesDate: "10/02/25 17:54:21"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "8415808",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 1,
    value: "30,00 €",
    sessionDate: "10/02/25 17:30",
    salesDate: "10/02/25 17:30:39"
  },
  {
    checkbox: <Checkbox />,
    cloud: <Cloud />,
    local: "71308450",
    state: <Confirmed />,
    product: "La Pedrera Essencial",
    client: "",
    ref: "",
    quantity: 2,
    value: "60,00 €",
    sessionDate: "10/02/25 16:30",
    salesDate: "10/02/25 16:36:34"
  }
];

export default TableRowData;
