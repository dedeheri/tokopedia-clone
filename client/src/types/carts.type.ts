// Interface for the product
export interface Product {
  _id: string;
  handle: string;
  name: string;
  description: string | null;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  rating: number;
  image: string[];
  color: string[];
  storage: string[];
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
  storeId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Interface for cart item
export interface CartItem {
  product: Product;
  color: string;
  storage: string | null;
  totalProduct: number;
  _id: string;
}

// Interface for the store
export interface Store {
  _id: string;
  handle: string;
  name: string;
  image: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Interface for the order result
export interface CartResult {
  _id: string;
  userId: string;
  store: Store;
  cart: CartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Interface for the overall response
export interface ICart {
  message: string;
  data: {
    result: CartResult[];
    totalCount: number;
  };
}
