"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowBigRight,
  ArrowRight,
  Calendar,
  MessageCircle,
  MessageCircleMore,
} from "lucide-react";
import BlogCard2 from "./Card/BlogCard2";
import "./BlogSlide.css";
import { BlogData, BlogPost } from "@/types/Blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Benefits of Eating Fresh Fish in your diet ",
    description:
      "Discover the amazing health benefits of including fresh fish in your diet, from improving heart health to boosting brain function.Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Health",
    date: "April 27, 2024",
    image: "/fresh-fish.jpg", // Make sure this image exists in the public folder
    link: "/blog/benefits-of-eating-fresh-fish",
    comments: 52,
  },
  {
    id: "2",
    title: "How to Choose the Best Salmon",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Salmon",
    date: "April 28, 2024",
    image: "/bream.jpg",
    link: "/blog/how-to-choose-the-best-salmon",
    comments: 25,
  },
  {
    id: "3",
    title: "The Health Benefits of Omega-3 Fatty Acids from Fish",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Omega-3",
    date: "April 29, 2024",
    image: "/bream2.jpg",
    link: "/blog/omega-3-fatty-acids-from-fish",
    comments: 45,
  },
  {
    id: "4",
    title: "Top 10 Fish Recipes You Should Try",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Recipes",
    date: "April 30, 2024",
    image: "/bream4.jpg",
    link: "/blog/top-10-fish-recipes",
    comments: 20,
  },
  {
    id: "5",
    title: "The Importance of Sustainable Fishing",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Sustainability",
    date: "May 1, 2024",
    image: "/tona.jpg",
    link: "/blog/importance-of-sustainable-fishing",
    comments: 21,
  },
  {
    id: "6",
    title: "Benefits of Eating Fresh Fish in your diet ",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Health",
    date: "April 27, 2024",
    image: "/fresh-fish.jpg", // Make sure this image exists in the public folder
    link: "/blog/benefits-of-eating-fresh-fish",
    comments: 52,
  },
  {
    id: "7",
    title: "How to Choose the Best Salmon",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Salmon",
    date: "April 28, 2024",
    image: "/bream.jpg",
    link: "/blog/how-to-choose-the-best-salmon",
    comments: 25,
  },
  {
    id: "8",
    title: "The Health Benefits of Omega-3 Fatty Acids from Fish",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Omega-3",
    date: "April 29, 2024",
    image: "/bream2.jpg",
    link: "/blog/omega-3-fatty-acids-from-fish",
    comments: 45,
  },
  {
    id: "10",
    title: "Top 10 Fish Recipes You Should Try",
    description:
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Recipes",
    date: "April 30, 2024",
    image: "/bream4.jpg",
    link: "/blog/top-10-fish-recipes",
    comments: 20,
  },
  {
    id: "9",
    title: "The Importance of Sustainable Fishing",
    description:
      "Sustainable fishing is essential to maintaining healthy oceans and fish populations. Learn why it matters and how you can make a difference.Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.Fish are a rich source of protein, omega-3 fatty acids, and essential vitamins and minerals, making them an excellent food choice for maintaining good health. Their diverse forms and tastes, ranging from salmon and tuna to tilapia and cod, provide a variety of options for seafood lovers worldwide. Fish like salmon are particularly known for their high content of omega-3 fatty acids, which promote heart health and improve brain function.Apart from their dietary value, fish also contribute to the balance of marine ecosystems. As predators and prey, they regulate the populations of smaller marine organisms and help maintain the health of coral reefs and other underwater habitats. Fish like anchovies and sardines are particularly vital in sustaining the marine food chain, serving as food for larger predators, such as whales and seabirds.",
    category: "Sustainability",
    date: "May 1, 2024",
    image: "/tona.jpg",
    link: "/blog/importance-of-sustainable-fishing",
    comments: 21,
  },
];

export const BlogCard: FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white p-3 group max-h-[500px]  ">
      <div className="relative rounded-2xl overflow-hidden max-h-80">
        <Image
          src={post.image}
          alt={post.title}
          layout="responsive"
          width={400}
          height={150}
          className="object-cover w-full rounded-2xl transition-transform duration-300 group-hover:scale-105 "
        />
        <div className="absolute left-0 bottom-0">
          <div className="relative bg-[#119d3e] w-32 text-white text-lg font-semibold py-2 px-4 rounded-bl-xl">
            {post.category}
            <div className="absolute -right-[29px] top-0 w-0 h-0 border-t-[44.5px] border-t-transparent border-l-[30px] border-l-[#119d3e]"></div>
          </div>
        </div>
        {/* <div className="absolute bottom-4 left-4 bg-[#119d3e] text-white px-4 py-1 rounded-full">
                    {post.category}
                </div> */}
      </div>
      <div className="p-4">
        <div className="flex justify-start gap-4">
          <div className="flex justify-center gap-1">
            <Calendar size={18} className="text-[#119d3e]"></Calendar>
            <p className="text-md text-gray-500"> {post.date}</p>
          </div>
          <div className="flex justify-center gap-1">
            <MessageCircleMore
              size={18}
              className="text-[#119d3e]"
            ></MessageCircleMore>
            <p className="text-md text-gray-500"> {post.comments}</p>
          </div>
        </div>
        <h3 className="text-lg text-gray-800 font-bold mt-1">{post.title}</h3>
        {/* <p className="text-gray-600 mt-2">{post.description}</p> */}
        <div className=" flex justify-between items-center mt-4">
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center hover:border-[#052F35] border-dashed border-2 rounded-full size-10 border-[#119d3e] p-2">
              <div className="size-8 rounded-full  bg-[#119d3e] hover:bg-[#052F35] m-1 flex justify-center items-center p-2">
                <ArrowRight className="hover:text-white"></ArrowRight>
              </div>
            </div>
            <Link href={`/blog/${post.id}`}>
              <p className="text-gray-800 font-semibold hover:text-[#119d3e]  inline-block">
                Read More
              </p>
            </Link>
          </div>
          <div className="w-32 border-1 border-[#a8dfb9]  group-hover:border-[#119d3e] "></div>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ blogs }: { blogs: BlogData[] }) => {
  // console.log("Blog data", blogs);
  return (
    <section
      className="bg-gray-100 bg-cover bg-center bg-no-repeat max-h-[850px] max-w-7xl mx-auto px-4 lg:pb-72"
      style={{ backgroundImage: "url('/about-shape-1-2.png')" }}
    >
      <div className="py-12 px-4">
        <div className="flex justify-center items-center gap-1">
          <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

          <p className="text-md  text-center items-center text-[#119d3e]  px-2">
            OUR UPDATE BLOG
          </p>
          <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 px-2 mt-2">
          Update Latest News
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <BlogCard post={blogPosts[0]} />
          </div>
          <div className="scroll-container md:h-[400px]">
            <div className="scroll-content gap-5">
              {/* First set of content */}
              {blogPosts.map((post, index) => (
                <BlogCard2 key={`post-${index}`} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
