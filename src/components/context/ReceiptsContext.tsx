import { createContext, useContext } from 'react';

export interface IReceipt {
  _id: string;
  product: string;
  dateOfPurchase: string;
  category: string;
  shop: string;
  fileUrl: string;
}

export interface IReceiptsContext {
  receipts: IReceipt[];
  setReceipts(receipts: IReceipt[]): void;
}

export const ReceiptsContext = createContext<IReceiptsContext>({
  receipts: [],
  setReceipts: () => {},
});

export function useReceiptsContext(): IReceiptsContext {
  return useContext(ReceiptsContext);
}
