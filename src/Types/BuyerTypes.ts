export type BuyerTypes = {
  buyerTypeId: number;
  shortName: string;
  clientId: number;
  name: string;
  description: string;
  displayOrder: number;
  enabled: boolean;
  requiresPdaAlert: boolean;
  alertColor: string | null;
  noHandleAvailability: boolean;
  status: "enabled" | "disabled";
};
