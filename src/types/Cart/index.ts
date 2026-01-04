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

  country_id: string;
  country_name: string;

  state_id: number;
  state_name: string;

  city_id: number;
  city_name: string;

  area_id: number;
  area_name: string;

  postal_code: number;
}
