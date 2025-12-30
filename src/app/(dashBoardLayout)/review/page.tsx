"use client";

import React, { JSX, useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export interface Review {
  orderId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  createdAt: string;
}

type FilterType = "all" | 1 | 2 | 3 | 4 | 5;

const ReviewsPage = () => {
  const [reviews] = useState<Review[]>([
    {
      orderId: "#ORD-001",
      rating: 5,
      comment:
        "Excellent service! The product arrived on time and was exactly as described.",
      createdAt: "2024-12-28T10:30:00.000Z",
    },
    {
      orderId: "#ORD-005",
      rating: 4,
      comment: "Good quality product. Fast delivery. Would recommend!",
      createdAt: "2024-12-26T14:20:00.000Z",
    },
    {
      orderId: "#ORD-008",
      rating: 5,
      comment: "Amazing experience! Will definitely order again.",
      createdAt: "2024-12-24T09:15:00.000Z",
    },
    {
      orderId: "#ORD-012",
      rating: 3,
      comment: "Product is okay, but delivery was a bit slow.",
      createdAt: "2024-12-20T16:45:00.000Z",
    },
    {
      orderId: "#ORD-015",
      rating: 4,
      comment: "Very satisfied with my purchase. Good customer service.",
      createdAt: "2024-12-18T11:00:00.000Z",
    },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderStars = (rating: number): JSX.Element => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  //  Derived State

  const filteredReviews: Review[] =
    filter === "all"
      ? reviews
      : reviews.filter((review) => review.rating === filter);

  const averageRating: string =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const ratingCounts = ([5, 4, 3, 2, 1] as const).map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
  }));

  //  Render=======================

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Reviews</h2>

      {/* Stats + Filter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Stats Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(Number(averageRating)))}
            </div>
            <p className="text-sm text-gray-600">
              Based on {reviews.length} reviews
            </p>
          </div>

          <div className="mt-6 space-y-2">
            {ratingCounts.map(({ rating, count }) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm text-gray-600 w-12">
                  {rating} star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#119d3e] h-2 rounded-full"
                    style={{
                      width: `${
                        reviews.length > 0 ? (count / reviews.length) * 100 : 0
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Filter Reviews
          </h3>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-[#119d3e] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Reviews ({reviews.length})
            </button>

            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setFilter(rating as FilterType)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  filter === rating
                    ? "bg-[#119d3e] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {rating} ★ ({reviews.filter((r) => r.rating === rating).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-gray-800">
                    {review.orderId}
                  </span>
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-gray-500">
                  {formatDate(review.createdAt)}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit size={18} />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {review.comment && (
              <p className="text-gray-700">{review.comment}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewsPage;
