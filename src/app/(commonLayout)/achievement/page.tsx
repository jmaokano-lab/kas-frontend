"use client";
import React, { JSX, useState } from "react";
import {
  Calendar,
  Users,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
} from "lucide-react";

interface Achievement {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export default function AchievementTimeline() {
  const [achievements] = useState<Achievement[]>([
    {
      time: "2020",
      title: "Company Foundation",
      description:
        "Started our journey in the fish trading industry with a small local market",
      icon: "users",
    },
    {
      time: "2021",
      title: "First Major Contract",
      description: "Secured partnership with leading restaurants and hotels",
      icon: "award",
    },
    {
      time: "2022",
      title: "Record Export Achievement",
      description:
        "Exported 50,000+ tons of fish annually to international markets",
      icon: "trending",
    },
    {
      time: "2023",
      title: "1000+ Satisfied Customers",
      description: "Expanded customer service nationwide with trusted delivery",
      icon: "check",
    },
    {
      time: "2024",
      title: "International Market Expansion",
      description:
        "Started exporting fish to 15 countries across Asia and Europe",
      icon: "globe",
    },
    {
      time: "2025",
      title: "Organic Fish Farming Award",
      description: "Received National Agriculture Excellence Award 2024",
      icon: "award",
    },
  ]);

  const getIcon = (iconName: string): JSX.Element => {
    const iconProps = { size: 24, strokeWidth: 2 };
    switch (iconName) {
      case "users":
        return <Users {...iconProps} />;
      case "award":
        return <Award {...iconProps} />;
      case "trending":
        return <TrendingUp {...iconProps} />;
      case "check":
        return <CheckCircle {...iconProps} />;
      case "globe":
        return <Globe {...iconProps} />;
      default:
        return <Calendar {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h1>
          <p className="text-lg text-gray-600">
            Our Glorious Journey in the Fish Industry
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 via-green-400 to-green-200"></div>

          {/* Achievement items */}
          {achievements.map((achievement: Achievement, index: number) => (
            <div key={index} className="relative mb-8 md:mb-10">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-green-500 border-green-300 border-4 border-white shadow-lg"></div>
              </div>

              {/* Content card - alternating sides */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-6/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 border-green-300 p-3 rounded-xl text-white flex-shrink-0">
                        {getIcon(achievement.icon)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-sm font-semibold text-gray-500">
                            {achievement.time}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-relaxed">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Export Countries</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">National Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
}
