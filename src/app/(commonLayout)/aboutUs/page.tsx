import EmployeeCard from "@/components/home/Card/EmplyeCard";
import MissionVision from "@/components/home/MissionVission";
import PageBanner from "@/components/shared/PageBanner";
import {
  Fish,
  Waves,
  Heart,
  Shield,
  Truck,
  Award,
  Users,
  Leaf,
} from "lucide-react";
import Link from "next/link";

const employes = [
  {
    name: "Tonoy Rahoman",
    position: "Supervisor",
    image: "/employe/emp1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Riya Ahmed",
    position: "Manager",
    image: "/employe/emp3.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Kamal Uddin",
    position: "Incharge",
    image: "/employe/emp1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Kamal Uddin",
    position: "Genaral Manager",
    image: "/employe/emp2.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

interface StatProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ number, label, icon }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#119d3e] to-[#0d7a30] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-center mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#119d3e] to-[#0d7a30] rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-bold bg-gradient-to-r from-[#119d3e] to-[#0d7a30] bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  </div>
);

const Value: React.FC<ValueProps> = ({ icon, title, description }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-[#119d3e] to-[#0d7a30] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="w-16 h-16 bg-gradient-to-br from-[#119d3e] to-[#0d7a30] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const AboutUs = () => {
  const stats: StatProps[] = [
    {
      number: "10K+",
      label: "Fresh Fish Delivered",
      icon: <Fish className="w-6 h-6 text-white" />,
    },
    {
      number: "2K+",
      label: "Happy Customers",
      icon: <Heart className="w-6 h-6 text-white" />,
    },
    {
      number: "100%",
      label: "Fresh Guarantee",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      number: "24hrs",
      label: "Fast Delivery",
      icon: <Truck className="w-6 h-6 text-white" />,
    },
  ];

  const values: ValueProps[] = [
    {
      icon: <Fish className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      description:
        "We source only the freshest, highest-quality fish directly from trusted fishermen and sustainable farms.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Sustainable Fishing",
      description:
        "Committed to eco-friendly practices that protect our oceans and ensure fish populations for future generations.",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Freshness Guaranteed",
      description:
        "Every fish is carefully inspected and delivered fresh to your door with our 100% freshness guarantee.",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Fast Delivery",
      description:
        "Temperature-controlled delivery ensures your seafood arrives in perfect condition, fresh as the ocean.",
    },
  ];
  return (
    <div className="bg-[#FCFDFD] pb-6 relative">
      <PageBanner title="ABOUT US" pagePath="Home // About Us"></PageBanner>

      <section className="relative py-20 px-7 max-w-7xl mx-auto overflow-hidden ">
        {/* Animated Background with Wave Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

        {/* Floating Fish Bubbles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#119d3e] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#0d7a30] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>

        {/* Wave Decoration */}
        <div className="absolute top-0 left-0 w-full opacity-5">
          <svg viewBox="0 0 1200 120" className="w-full h-32">
            <path
              d="M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z"
              fill="#119d3e"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#119d3e] to-[#0d7a30] text-white text-sm font-semibold shadow-lg">
                <Waves className="w-4 h-4 mr-2" />
                About Our Fish Market
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ocean Fresh{" "}
              <span className="bg-gradient-to-r from-[#119d3e] to-blue-600 bg-clip-text text-transparent">
                Delivered
              </span>{" "}
              to Your Door
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing the freshest seafood from the
              ocean to your table. With a commitment to quality, sustainability,
              and customer satisfaction, we've become the trusted choice for
              seafood lovers everywhere.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          {/* Story with Fish Imagery */}
          <div
            className="relative mb-20 h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/service-shape-1.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#119d3e] to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-gray-100">
              <div className="flex justify-center items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#119d3e] to-[#0d7a30] rounded-2xl flex items-center justify-center mr-4">
                  <Fish className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl text-center font-bold text-gray-900">
                  Our Story
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Born from a love of the sea and fresh seafood, we started
                    our journey as a small family business at the local harbor.
                    What began with a simple boat and a passion for quality fish
                    has grown into a thriving e-commerce platform serving
                    thousands of happy customers.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Every morning, we work directly with local fishermen and
                    sustainable farms to handpick the finest catch. Our
                    commitment to freshness means your fish goes from ocean to
                    table in record time.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We believe everyone deserves access to premium, fresh
                    seafood without the hassle of visiting the fish market.
                    That's why we've invested in state-of-the-art cold-chain
                    logistics and quality control to ensure every order arrives
                    perfect.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#119d3e]" />
                      <span className="text-sm text-gray-700 font-medium">
                        Certified Fresh
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-[#119d3e]" />
                      <span className="text-sm text-gray-700 font-medium">
                        Eco-Friendly
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MissionVision></MissionVision>

          {/* Values */}
          <div>
            <div className="text-center mb-12 mt-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're more than just a fish store. We're your partners in
                bringing the best of the ocean to your kitchen with care,
                quality, and sustainability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Value key={index} {...value} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-gradient-to-r from-[#119d3e] to-[#0d7a30] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Shop Fresh Fish Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#119d3e] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-[#119d3e]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto  mt-6 px-7">
        <div className="flex justify-center items-center gap-1">
          <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

          <p className="text-md font-medium text-center items-center text-[#119d3e]  px-2">
            MEET OUR TEAM
          </p>
          <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 px-2 mt-2">
          We Have a Expert Employe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {employes.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
