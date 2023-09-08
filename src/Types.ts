export interface CartItem {
  name: string;
  price: number;
  original_price: number;
  image_url: string;
  type: string;
  quantity: number;
  text: string;
  id: string;
  url: string;
  item_id: string;
}

export interface ProductItem {
  name: string;
  price: number;
  original_price: number;
  image_url: string;
  type: string;
  text: string;
  id: string;
  description: string;
  options: { type: string; image_urls: string[]; item_id: string }[];
}

export interface CartObject {
  cart: any[];
  addToCart: (input: any) => void;
  removeFromCart: (input: number) => void;
  setQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
}
