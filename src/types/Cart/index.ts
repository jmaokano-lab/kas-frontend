export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ShippingAddress {
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
}
