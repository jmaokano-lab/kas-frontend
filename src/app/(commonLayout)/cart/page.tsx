import CartSection from "@/components/home/Cart/CartSection";

import {
  getAllAreas,
  getAllCities,
  getAllCountries,
  getAllState,
  getUserShippingAddress,
} from "@/services/Checkout";
import { Area, City, Country, Option, State } from "@/types/Address";
import { ShippingAddress } from "@/types/Cart";

const CartPage = async () => {
  let countries: Country[] = [];
  let states: State[] = [];
  let cities: City[] = [];
  let areas: Area[] = [];
  let shipAddress: ShippingAddress[] = [];

  try {
    const res = await getAllCountries();
    countries = Array.isArray(res?.data) ? res.data : res;
  } catch (e) {
    console.error("countries failed", e);
  }

  try {
    const res = await getAllState();
    states = Array.isArray(res?.data) ? res.data : res;
  } catch (e) {
    console.error("states failed", e);
  }

  try {
    const res = await getAllCities();
    cities = Array.isArray(res?.data) ? res.data : res;
  } catch (e) {
    console.error("cities failed", e);
  }
  try {
    const res = await getAllAreas();
    areas = Array.isArray(res?.data) ? res.data : res;
  } catch (e) {
    console.error("cities failed", e);
  }
  try {
    const res = await getUserShippingAddress();
    shipAddress = Array.isArray(res?.data) ? res.data : res;
  } catch (e) {
    console.error("cities failed", e);
  }

  return (
    <CartSection
      countries={countries}
      states={states}
      cities={cities}
      areas={areas}
      shipAddress={shipAddress}
    />
  );
};

export default CartPage;
