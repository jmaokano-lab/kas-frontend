"use client";
import { useUser } from "@/context/UserContext";
import { Edit } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    id: user?.id,
    name: user?.name ?? "",
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    city: user?.city,
    state: user?.state,
    country: user?.country,
    postal_code: user?.postal_code,
    balance: user?.balance,
    user_type: user?.user_type,
    banned: user?.banned,
    created_at: user?.created_at,
    avatar: user?.avatar,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    console.log("Saving profile:", profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#119d3e] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0d7d31] transition-colors"
          >
            <Edit size={20} />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-[#119d3e] text-white px-4 py-2 rounded-lg hover:bg-[#0d7d31] transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Avatar and Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#119d3e] rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                ) : (
                  profile.name.charAt(0).toUpperCase()
                )}
              </div>
              {isEditing && (
                <button className="text-[#119d3e] text-sm font-medium hover:underline mb-4">
                  Change Avatar
                </button>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{profile.email}</p>
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">User Type</span>
                  <span className="text-sm font-medium text-gray-800 capitalize">
                    {profile.user_type}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Balance</span>
                  <span className="text-sm font-medium text-gray-800">
                    ${profile.balance}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Status</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      profile.banned === 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {profile.banned === 0 ? "Active" : "Banned"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm font-medium text-gray-800">
                    {formatDate(profile.created_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter phone number"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User ID
                </label>
                <input
                  type="text"
                  value={profile.id}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter address"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={profile.city || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter city"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={profile.state || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter state"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={profile.country || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter country"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postal_code"
                  value={profile.postal_code || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Enter postal code"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#119d3e] ${
                    !isEditing ? "bg-gray-50 text-gray-600" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
