export interface IEnterpriseClient {
  _id: string;
  name: string;
  image_src: string;
  realties_amount: string;
}

export default interface IEnterprise extends IEnterpriseClient {
  client_name: string;
}

