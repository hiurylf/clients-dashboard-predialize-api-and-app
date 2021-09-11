export interface IClientDetails {
  _id: string;
  name: string;
  image_src: string;
}

export default interface IClient extends IClientDetails {
  enterprises_amount: number;
  realties_amount: number;
}
