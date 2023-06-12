export interface ProductContainer {
  id: number;
  sku: string;
  inStock: boolean;
  sizeInStock: Size[] | null;
  availableSizes: AvailableSize[];
  handle: string;
  title: string;
  description: string;
  type: string;
  gender: string;
  fit: null | string;
  labels: string[] | null;
  colour: string;
  price: number;
  compareAtPrice: null;
  discountPercentage: null;
  featuredMedia: Media;
  media: Media[];
  objectID: string;
}
export interface ProductAttributes {
  productAttributes?: ProductContainer;
}

export interface Media {
  admin_graphql_api_id: string;
  alt: null;
  created_at: Date;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: Date;
  variant_ids: any[];
  width: number;
}

export interface AvailableSize {
  id: number;
  inStock: boolean;
  inventoryQuantity: number;
  price: number;
  size: Size;
  sku: string;
}

export enum Size {
  L = "l",
  M = "m",
  S = "s",
  Xl = "xl",
  Xs = "xs",
  Xxl = "xxl",
}

export interface ContextProps {
  productDataContext?: ProductContainer[];
  productDataContextSetter: (data: any) => void;
}
