import { Star } from "lucide-react";

export default function RatingStars({
  rating,
  count,
}: {
  rating: number;
  count: number;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-500">({count})</span>
    </div>
  );
}
