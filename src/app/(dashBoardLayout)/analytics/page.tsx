import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

const AnalyticsPage = () => {
  const stats = [
    {
      label: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      icon: DollarSign,
      color: "bg-blue-500",
    },
    {
      label: "Orders",
      value: "2,345",
      change: "+12.5%",
      icon: ShoppingCart,
      color: "bg-[#119d3e]",
    },
    {
      label: "Products",
      value: "856",
      change: "+5.2%",
      icon: Package,
      color: "bg-purple-500",
    },
    {
      label: "Customers",
      value: "1,234",
      change: "+8.3%",
      icon: Users,
      color: "bg-orange-500",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <TrendingUp size={16} />
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sales Overview
        </h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <p>Chart visualization would go here</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
