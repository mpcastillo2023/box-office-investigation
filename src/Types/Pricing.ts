export type ProductVenueBuyerType = {
  productVenueBuyerTypeId: number;
  productId: number;
  venueId: number;
  buyerTypeId: number;
  pricingId: number;
  hasDiscount: boolean;
  startDatetime: string;
  endDatetime: string;
  price: number;
};

export type Pricing = {
  buyerTypeId: number;
  shortName: string;
  clientId: number;
  name: string;
  description: string;
  price: number;
  commission: number;
  displayOrder: number;
  productId: number;
  enabled: boolean;
  noHandleAvailability: boolean;
  productVenueBuyerTypeList: ProductVenueBuyerType[];
  authSalesGroups: unknown[]; // Assuming it's an array, but type could be refined further
  status: string;
  minTickets?: number;
  maxTickets?: number;
};
