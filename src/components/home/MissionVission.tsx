import { EyeIcon } from "@heroicons/react/24/solid"; // Using RocketIcon for Mission
import { RocketIcon } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="py-12 bg-white rounded-2xl shadow-2xl shadow-emerald-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mt-2">
            We aim to build a better future with our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-105 duration-700 ease-in-out">
            <div className="flex items-center space-x-4 mb-4">
              <RocketIcon className="h-8 w-8 text-yellow-500" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-lg">
              Our mission is to deliver the freshest and most sustainable fish
              products to our customers, ensuring that they enjoy the highest
              quality seafood while contributing to the well-being of our
              oceans.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 hover:scale-105 duration-700 ease-in-out">
            <div className="flex items-center space-x-4 mb-4">
              <EyeIcon className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-lg">
              We envision a world where sustainable fishing practices are the
              norm, and people everywhere can enjoy nutritious and delicious
              seafood that supports both their health and the health of the
              planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
