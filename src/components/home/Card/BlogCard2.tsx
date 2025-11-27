import { ArrowRight, Calendar, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; //

type BlogPost = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  comments: number;
};

const BlogCard2 = ({ post }: { post: BlogPost }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white p-3 group grid grid-cols-3 gap-5">
      {/* Image Section */}
      <div className="relative rounded-2xl overflow-hidden w-full h-44 col-span-1">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="object-cover w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-0 bottom-0">
          {/* Category Badge */}
          <div className="relative bg-[#119d3e] w-32 text-white text-lg font-semibold py-2 px-4 rounded-bl-xl">
            {post.category}
            <div className="absolute -right-[29px] top-0 w-0 h-0 border-t-[44.5px] border-t-transparent border-l-[30px] border-l-[#119d3e]"></div>
          </div>
        </div>
      </div>

      {/* Post Content Section */}
      <div className="p-4 col-span-2">
        <div className="flex justify-start gap-4">
          <div className="flex justify-center gap-1">
            <Calendar size={18} className="text-[#119d3e]" />
            <p className="text-md text-gray-500">{post.date}</p>
          </div>
          <div className="flex justify-center gap-1">
            <MessageCircleMore size={18} className="text-[#119d3e]" />
            <p className="text-md text-gray-500">{post.comments}</p>
          </div>
        </div>

        <h3 className="text-lg text-gray-800 font-bold mt-1">{post.title}</h3>

        <div className="flex justify-between items-center mt-4">
          {/* Read More Button Section */}
          <Link
            href={`/blog/${post.id}`}
            className="flex items-center gap-3 group/link"
          >
            <div className="flex justify-center items-center hover:border-[#052F35] border-dashed border-2 rounded-full size-10 border-[#119d3e] p-2">
              <div className="size-8 rounded-full bg-[#119d3e] group-hover/link:bg-[#052F35] m-1 flex justify-center items-center p-2">
                <ArrowRight className="text-white" />
              </div>
            </div>
            <p className="text-gray-800 font-semibold group-hover/link:text-[#119d3e] inline-block">
              Read More
            </p>
          </Link>

          <div className="w-32 border-1 border-[#a8dfb9] group-hover:border-[#119d3e]"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
