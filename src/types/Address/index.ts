import { ShippingAddress } from "../Cart";

export type Country = {
  id: number | string;
  name: string;
};

export type State = {
  id: number | string;
  name: string;
  country_id: number | string;
};

export type City = {
  id: number | string;
  name: string;
  state_id: number | string;
};

export type Area = {
  id: number | string;
  name: string;
  city_id: number | string;
  cost: number;
};

export type Option = {
  id: number;
  name: string;
  city_id: string;
  country_id: string;
  state_id: string;
  area_name: string;
  city_name: string;
  state_name: string;
  country_name: string;
  postal_code: string;
};

export type ShippingForm = {
  phone: string;
  address: string;
  country_id: string;
  state_id: string;
  city_id: string;
  area_id: string;
  postal_code: string;
  // area_name: string;
  // city_name: string;
  // state_name: string;
  // country_name: string;
};

export type Props = {
  countries: Country[];
  states: State[];
  cities: City[];
  areas: Area[];
  shipAddress?: ShippingAddress[] | null;
};
