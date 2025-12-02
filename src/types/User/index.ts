export interface IUser {
 id: number;  
  name: string;
  email: string;    
  role: "user" | "admin";
  created_at?: Date;
  updated_at?: Date;
  
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