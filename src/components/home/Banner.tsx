"use client"
import Image from "next/image";
// import bannerImg from "./multiple.jpg";
import bgImg from "../../assets/img/bg/hero-bg-1.jpg";
import "./banner.css";
import { ImageSlider } from "./ImageSLider";

export default function Banner() {

    return (
        <div className="relative bg-[#02282f27] h-full">


            <section className="relative overflow-hidden bg-[#02282f27] text-white">
                {/* Animated bubbles + rotating circle */}
                <div className="pointer-events-none absolute inset-0 -top-9 z-30 right-80">
                    <span className="bubble bubble-1" />
                    <span className="bubble bubble-2" />
                    <span className="bubble bubble-3" />
                    <span className="bubble bubble-4" />
                    <span className="rotating-circle" />
                </div>
                <Image
                    src={bgImg}
                    alt="Hero"
                    width={1400}
                    height={800}
                    className="absolute -z-10  h-full "
                />

                <div className="relative  max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-8 py-12 lg:py-16 gap-10">
                    {/* LEFT SIDE */}

                    <div className="relative w-full border-l-8 border-[#119d3e] lg:w-1/2 space-y-6 ">
                        <div className="absolute top-[0.1px] flex gap-2">
                            <div className="bg-[#119d3e] p-1 w-60 "></div>

                        </div>
                        <div className="space-y-6 ml-8 py-12">

                            <div className="inline-flex items-center gap-3 pl-4 py-2 pr-2 rounded-full bg-[#03363f] border border-[#17c964]">
                                <span className="text-[#119d3e] text-lg">🫧</span>
                                <span className="text-xs sm:text-sm font-medium tracking-wide text-[#65B748]">
                                    100% SATISFACTION
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                                Fresh Fish Delivered to Your Doorstep <br />
                                {/* <span className="text-[#119d3e]">FOR</span> YOUR CITY */}
                            </h1>

                            <p className="max-w-md text-sm sm:text-base text-white/70">
                                Hygienic handling, expert preparation, and reliable home delivery service.
                                Eco-friendly packaging, trained processing staff, and fast delivery to your doorstep.
                            </p>

                            <button className="inline-flex items-center gap-6 px-2 py-2 rounded-full bg-gradient-to-r from-[#1EA9B6] to-[#65B748] text-sm sm:text-base font-semibold shadow-lg shadow-black/40 hover:scale-105 transition-transform">
                                GET PRICING
                                <span className="flex p-1 h-10 w-10 items-center justify-center rounded-full bg-[#03363f]">
                                    →
                                </span>
                            </button>
                        </div>
                        <div className="absolute bottom-[0.1px] flex gap-2">
                            <div className="bg-[#119d3e] p-1 w-80 "></div>
                            <span className="bg-[#119d3e] p-1 w-10 rounded-2xl"></span>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full lg:w-1/2  h-full ">
                        <div className="relative overflow-hidden rounded-l-[80px] rounded-r-3xl lg:rounded-l-[140px] border border-white/10 bg-[#03363f] mb-4">
                            {/* angled mask style */}
                            <div className="absolute inset-0 " />
                            <ImageSlider
                                images={[
                                    { src: "/multiple.jpg", alt: "Fresh fish 1" },
                                    { src: "/dried.jpg", alt: "Fresh fish 2" },
                                    { src: "/multi2.png", alt: "Fresh fish 3" },
                                   
                                ]}
                                interval={3000}
                            />
                            {/* <Image
                                src={'/multiple.jpg'}
                                height={550}
                                width={400}
                                alt="Cleaning services"
                                className="w-full h-full object-cover"
                                priority
                            /> */}
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}
