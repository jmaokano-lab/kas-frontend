export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ShippingAddress {
 FullName: string;
    Phone: string;
    Address: string;
    City: string;
    PostalCode: string;
}