"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { TestType } from "@/types/testimonials";

interface Props {
  data: TestType[];
}

const Testimonial = ({ data }: Props) => {
  const [testDatas, setTestDatas] = useState<TestType[]>([]);
  console.log(testDatas);

  useEffect(() => {
    if (data) {
      setTestDatas(data);
    }
  }, [data]);

  return (
    <section
      className="py-16 px-6 bg-[#052F35] text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/map-shape-1.png')" }}
    >
      <div className="flex justify-center items-center gap-1">
        <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>
        <p className="text-md text-center text-[#119d3e] px-2">
          WHAT OUR CLIENT SAY
        </p>
        <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
      </div>

      <h2 className="text-4xl font-extrabold text-center mb-8 mt-2">
        Testimonials
      </h2>

      <Marquee gradient={false} speed={30} pauseOnHover>
        {testDatas?.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#083a3f] p-6 rounded-lg shadow-xl mx-6 max-w-80 h-[400px]"
            style={{ backgroundImage: "url('/map-shape-2.png')" }}
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${testimonial.testimonial_image?.file_name}`}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <p className="text-lg text-center italic">
                “{testimonial.description.slice(0, 150)}
                {testimonial.description.length > 150 ? "..." : ""}”
              </p>

              <div className="mt-4 text-center">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-[#27c36e]">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonial;
