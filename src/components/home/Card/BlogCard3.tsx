import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  link: string;
  comments: number;
};

const BlogCard3 = ({ post }: { post: BlogPost }) => {
  return (
    <div>
      <Link href="/">
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white p-3 group grid grid-cols-3 gap-5 hover:scale-105 duration-500">
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden w-full  col-span-1">
            <Image
              src={post.image}
              alt={post.title}
              layout="intrinsic"
              width={150}
              height={100}
              className="object-cover w-full h-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute left-0 bottom-0">
              {/* Category Badge */}
              <div className="relative bg-[#119d3e] w-28 text-white text-sm font-semibold py-1 px-2 rounded-bl-xl">
                {post.category}
                <div className="absolute -right-[29px] top-0 w-0 h-0 border-t-[44.5px] border-t-transparent border-l-[30px] border-l-[#119d3e]"></div>
              </div>
            </div>
          </div>

          {/* Post Content Section */}
          <div className=" col-span-2">
            <div className="flex justify-start gap-2">
              {/* Date and Comments */}
              <div className="flex justify-center gap-1">
                <Calendar size={18} className="text-[#119d3e]" />
                <p className="text-md text-gray-500">{post.date}</p>
              </div>
            </div>
            <h3 className="text-sm text-gray-800 font-medium ">{post.title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard3;
