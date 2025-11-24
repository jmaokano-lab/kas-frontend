import { ArrowRight, Calendar, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogPost = {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  comments: number;
};
const BlogDetailscard = ({ post }: { post: BlogPost }) => {
  return (
    <div>
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white p-3 group   ">
        <div className="relative rounded-2xl overflow-hidden max-h-80">
          <Image
            src={post?.image}
            alt={post?.title}
            layout="responsive"
            width={380}
            height={130}
            className="object-cover w-full rounded-2xl transition-transform duration-300 group-hover:scale-105 "
          />
          <div className="absolute left-0 bottom-0">
            <div className="relative bg-[#119d3e] w-32 text-white text-lg font-semibold py-2 px-4 rounded-bl-xl">
              {post.category}
              <div className="absolute -right-[29px] top-0 w-0 h-0 border-t-[44.5px] border-t-transparent border-l-[30px] border-l-[#119d3e]"></div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-start gap-4">
            <div className="flex justify-center gap-1">
              <Calendar size={18} className="text-[#119d3e]"></Calendar>
              <p className="text-md text-gray-500"> {post?.date}</p>
            </div>
            <div className="flex justify-center gap-1">
              <MessageCircleMore
                size={18}
                className="text-[#119d3e]"
              ></MessageCircleMore>
              <p className="text-md text-gray-500"> {post?.comments}</p>
            </div>
          </div>
          <h3 className="text-lg text-gray-800 font-bold mt-1">
            {post?.title}
          </h3>
          <p className="text-gray-500 text-sm  "> {post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailscard;
