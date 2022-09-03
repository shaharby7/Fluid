export interface IBlockData {
  id: string;
  name: string;
  type: string;
  paremeters: object;
  actions: object[];
  uiProperties: {
    x: number;
    y: number;
  };
}
