export interface IProducts {
  message: string;
  data: Array<Products>;
}

interface IStore {
  _id: string;
  handle: string;
  name: string;
  image: string;
  description: null;
  createdAt: string;
  updatedAt: string;
}

export interface Products {
  _id: string;
  handle: string;
  name: string;
  description: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  rating: number;
  image: any;
  color: any;
  storage: any;
  sold: number;
  minimumOrder: number;
  brand: string;
  shipping: string;
  model: string;
  warranty: string;
  signalStatus: string;
  warrantyType: string;
  releaseYear: number;
  condition: string;
  categories: string;
  storeId: IStore;
  discussionId: null;
  createdAt: string;
  updatedAt: string;
}
