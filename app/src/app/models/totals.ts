export interface ITotalsClient {
  enterprises: number;
  realties: number;
}

export default interface ITotals extends ITotalsClient {
  clients: number;
}
