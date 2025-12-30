export interface IUser {
  id?: number | string;
  name?: string | undefined;
  email?: string | undefined;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  balance?: number;
  user_type?: string;
  banned?: number;
  created_at?: string; // or Date
  avatar?: string;
}

export type PayloadData = {
  name: string | null;
  email_or_phone: "email" | "phone"; // tighter type, optional
  phone: string | null;
  email: string | null;
  password: string | null;
  password_confirmation: string | null;
  acceptTerms: boolean;
};
export type LoginPayload = {
  email_or_phone: "email" | "phone";
  user_type: string | null;
  email: string | null;
  phone: string | null;
  password: string | null;
  remember: boolean;
};
