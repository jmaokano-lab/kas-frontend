"use client";
import {
  BarChart3,
  Bell,
  Home,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import DashboardPage from "./dashboard/page";
import ProfilePage from "./profile/page";
import { useState } from "react";
import OrderPage from "./order/page";
import AnalyticsPage from "./analytics/page";
import { useUser } from "@/context/UserContext";

export default function Dashboard() {
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "orders", icon: ShoppingCart, label: "Orders" },
    // { id: "products", icon: Package, label: "Products" },
    // { id: "customers", icon: Users, label: "Customers" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "profile", icon: Users, label: "Profile" },
  ];
  console.log(user);

  // Render the active page component
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "orders":
        return <OrderPage />;
      case "profile":
        return <ProfilePage />;
      //   case "products":
      //     return <ProductsPage />;
      //   case "customers":
      //     return <CustomersPage />;
      case "analytics":
        return <AnalyticsPage />;
      //   case "settings":
      //     return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-[#119d3e]">ShopDash</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activePage === item.id
                  ? "bg-[#119d3e] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md"></div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#119d3e] rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.user_type}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
