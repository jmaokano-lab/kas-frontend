export type Product = {
  id:number;
  name: string;
  description: string;
  main_price: number;
  thumbnail_image: string;
  alt: string;
  links: {
    details: string;
  };
  slug: string;
  user_id?: number;
};
export type ProductDetails = {
  id: number;
  user_id: number;
  name: string;
  added_by: string;
  seller_id: number;
  shop_id: number;
  shop_slug: string;
  shop_name: string;
  shop_logo: string;
  photos: {
    variant: string;
    path: string;
  }[];
  thumbnail_image: string;
  tags: string[];
  price_high_low: string;
  choice_options: any[]; // can replace with more specific type if needed
  colors: any[]; // can replace with string[] or color type
  has_discount: boolean;
  discount: string;
  stroked_price: string;
  main_price: string;
  calculable_price: number;
  currency_symbol: string;
  current_stock: number;
  unit: string;
  rating: number;
  rating_count: number;
  earn_point: number;
  description: string;
  downloads: any | null;
  video_link: string[];
  brand: {
    id: number;
    name: string;
    slug: string;
    logo: string;
  };
  link: string;
  wholesale: any[];
  est_shipping_time: number;
  videos: any[];
};
