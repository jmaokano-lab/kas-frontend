export interface IUser {
 id: number;  
  name: string;
  email: string;    
  role: "user" | "admin";
  created_at?: Date;
  updated_at?: Date;
  
}