"use client";
import BlogCard3 from "@/components/home/Card/BlogCard3";
import BlogDetailscard from "@/components/home/Card/BlogDetailsCard";
import CommentSection from "@/components/home/CommentSection";
import PageBanner from "@/components/shared/PageBanner";
import { useRouter } from "next/navigation";
import { use } from "react";
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

const blogPosts: BlogPost[] = [
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

const BlogPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const post = blogPosts.find((blog) => blog.id === id);
  if (!post) {
    return <div>Loading...</div>;
  }
  console.log(post);

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/client-bg1.jpg')" }}
    >
      <PageBanner title="BLOG" pagePath="Home // Our Blogs"></PageBanner>
      <div className="max-w-screen-xl mx-auto py-12 px-6 bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Section - Blog Cards */}
          <div className="lg:col-span-3">
            <BlogDetailscard post={post || {}} />
            <div className="mt-3">
              <CommentSection></CommentSection>
            </div>
          </div>

          {/* Right Section - Sidebar */}
          <div
            className="lg:col-span-2 bg-[#f7f7f7] p-6 rounded-lg shadow-xl h-[900px]"
            style={{ backgroundImage: "url('map-shape-2.png')" }}
          >
            <h3 className="text-xl font-semibold text-[#083a3f] mb-6">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {blogPosts?.slice(0, 4).map((post, index) => (
                <BlogCard3 key={index} post={post} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#083a3f] mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#083a3f] hover:text-[#27c36e]">
                    Pool Cleaning (09)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#083a3f] hover:text-[#27c36e]">
                    Pools Maintenance (02)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#083a3f] hover:text-[#27c36e]">
                    Sweep Home (08)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#083a3f] hover:text-[#27c36e]">
                    Window Cleaning (03)
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#083a3f] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-[#083a3f] bg-[#f1f1f1] px-3 py-1 rounded-full text-sm">
                  Cleaning
                </span>
                <span className="text-[#083a3f] bg-[#f1f1f1] px-3 py-1 rounded-full text-sm">
                  Home
                </span>
                <span className="text-[#083a3f] bg-[#f1f1f1] px-3 py-1 rounded-full text-sm">
                  Move-In
                </span>
                <span className="text-[#083a3f] bg-[#f1f1f1] px-3 py-1 rounded-full text-sm">
                  Window
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
