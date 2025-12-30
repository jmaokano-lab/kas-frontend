"use client";
import { Order, Review } from "@/types/Order";
import { Edit, Eye, Plus } from "lucide-react";
import React, { useState } from "react";
import ReviewModal from "../Modal/ReviewModal";

const OrderComponent = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "#ORD-001",
      customer: "John Doe",
      amount: "$125.00",
      status: "Completed",
      date: "2024-12-28",
      hasReview: false,
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      amount: "$89.50",
      status: "Processing",
      date: "2024-12-28",
      hasReview: false,
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      amount: "$250.00",
      status: "Shipped",
      date: "2024-12-27",
      hasReview: false,
    },
    {
      id: "#ORD-004",
      customer: "Sarah Williams",
      amount: "$67.00",
      status: "Pending",
      date: "2024-12-27",
      hasReview: false,
    },
    {
      id: "#ORD-005",
      customer: "David Brown",
      amount: "$145.00",
      status: "Completed",
      date: "2024-12-26",
      hasReview: false,
    },
    {
      id: "#ORD-006",
      customer: "Emily Davis",
      amount: "$320.00",
      status: "Shipped",
      date: "2024-12-26",
      hasReview: false,
    },
    {
      id: "#ORD-007",
      customer: "Chris Wilson",
      amount: "$95.00",
      status: "Processing",
      date: "2024-12-25",
      hasReview: false,
    },
  ]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);

  const handleReviewClick = (order: Order) => {
    setSelectedOrder(order);
    setShowReviewModal(true);
  };

  const handleReviewSubmit = (review: Omit<Review, "createdAt">) => {
    const newReview: Review = {
      ...review,
      createdAt: new Date().toISOString(),
    };
    setReviews([...reviews, newReview]);

    // Update order to mark it as reviewed
    setOrders(
      orders.map((order) =>
        order.id === review.orderId ? { ...order, hasReview: true } : order
      )
    );

    console.log("Review submitted:", newReview);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Orders Management</h2>
        <button className="bg-[#119d3e] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0d7d31] transition-colors">
          <Plus size={20} />
          New Order
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Shipped"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                        <Edit size={16} />
                      </button>
                      {order.status === "Completed" && (
                        <button
                          onClick={() => handleReviewClick(order)}
                          disabled={order.hasReview}
                          className={`px-3 py-1 text-xs rounded-lg flex items-center gap-1 ${
                            order.hasReview
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-[#119d3e] text-white hover:bg-[#0d7d31]"
                          }`}
                          title={
                            order.hasReview
                              ? "Review already submitted"
                              : "Write a review"
                          }
                        >
                          {order.hasReview ? (
                            <>
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              Reviewed
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                              </svg>
                              Review
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showReviewModal && selectedOrder && (
        <ReviewModal
          order={selectedOrder}
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleReviewSubmit}
        />
      )}
    </div>
  );
};

export default OrderComponent;
