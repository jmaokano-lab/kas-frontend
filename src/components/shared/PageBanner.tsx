// components/AboutBanner.js
import Image from "next/image";

export interface PageBanner {
  title: string;
  pagePath: string;
}

const PageBanner = ({ title, pagePath }: PageBanner) => {
  return (
    <section className="h-[250px] relative   text-white  overflow-hidden object-cover">
      <img
        src={"/multi2.png"}
        alt="About Us Image"
        className=" h-[250px] object-cover w-full "
      />
      <div className="absolute  w-full  h-full left-0 top-0  bg-gradient-to-r from-[#151515a9]   to-[#15151554]">
        <div className="absolute top-1/4 lg:top-1/3 left-3/12 lg:left-1/12">
          <h1 className="text-2xl lg:text-5xl font-bold">
            <span className="text-green-400 uppercase">{title}</span>
          </h1>
          <p className="text-lg mt-2">{pagePath}</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
