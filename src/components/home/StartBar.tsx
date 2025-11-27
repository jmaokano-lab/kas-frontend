"use client";

import {
  Briefcase,
  LocateIcon,
  ShoppingBasket,
  Users,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function CountUp({
  target,
  duration = 2000,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-[#02282f] text-white">
      <div className=" flex flex-col lg:flex-row ">
        {/* LEFT GREEN PANEL */}
        <div className="bg-[#22c55e] w-full lg:w-1/3 px-8 py-8 flex items-center gap-4 ">
          <Link
            href={"/gallary/videos"}
            className="flex  h-16 w-16 items-center justify-center rounded-full bg-[#02282f] hover:bg-white/80 shadow-lg"
          >
            <PlayCircle className="text-white hover:text-[#02282f]" size={34} />
          </Link>
          <div className="text-white item right">
            <p className="text-xs font-semibold tracking-[0.2em]">
              ABOUT SERVICE
            </p>
            <p className="mt-2 text-lg font-extrabold leading-tight">
              QUCK DELIVERY <br /> IN YOUR CITY
            </p>
          </div>
        </div>

        {/* RIGHT DARK PANEL */}
        <div className="w-full  bg-[#02282f] border-b-4 border-[#22c55e] pl-10">
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-6 lg:gap-12 px-6 py-6">
            {/* Item 1 */}
            <div className="flex items-center gap-2">
              <Users className="size-10 lg:size-14  text-white" />
              <div>
                <div className="text-2xl lg:text-4xl font-extrabold text-emerald-400">
                  <CountUp target={950} suffix="+" />
                </div>
                <div className="text-xs text-white/70 mt-1">Happy Client</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <Briefcase className="size-10 lg:size-14 text-white" />
              <div>
                <div className="text-2xl lg:text-4xl font-extrabold text-emerald-400">
                  <CountUp target={45} suffix="+" />
                </div>
                <div className="text-xs text-white/70 mt-1">Award Winner</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <ShoppingBasket className="size-10 lg:size-12 text-white" />
              <div>
                <div className="text-2xl lg:text-4xl font-extrabold text-emerald-400">
                  <CountUp target={400} suffix="+" />
                </div>
                <div className="text-xs text-white/70 mt-1">Order Done</div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4">
              <LocateIcon className="size-10 lg:size-12 text-white" />
              <div>
                <div className="text-2xl lg:text-4xl font-extrabold text-emerald-400">
                  <CountUp target={100} suffix="+" />
                </div>
                <div className="text-xs text-white/70 mt-1">Team Member</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
