export interface Order {
  id: string;
  customer: string;
  amount: string;
  status: "Completed" | "Processing" | "Shipped" | "Pending";
  date: string;
  hasReview?: boolean;
}

export interface Review {
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
