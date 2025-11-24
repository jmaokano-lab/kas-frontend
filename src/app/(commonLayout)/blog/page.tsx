import { BlogCard } from "@/components/home/Blog";
import BlogCard1 from "@/components/home/Card/BlogCard1";
import BlogCard3 from "@/components/home/Card/BlogCard3";
import PageBanner from "@/components/shared/PageBanner";

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
      "Discover the amazing health benefits of including fresh fish in your diet, from improving heart health to boosting brain function.",
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
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.",
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
      "Omega-3 fatty acids are essential for maintaining a healthy heart and mind. Learn more about how fish can benefit your health.",
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
      "Looking for new ways to enjoy fish? Here are 10 mouth-watering recipes that will elevate your culinary skills.",
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
      "Sustainable fishing is essential to maintaining healthy oceans and fish populations. Learn why it matters and how you can make a difference.",
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
      "Discover the amazing health benefits of including fresh fish in your diet, from improving heart health to boosting brain function.",
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
      "Learn how to choose the best quality salmon for your meals, whether you're buying fresh or frozen fish.",
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
      "Omega-3 fatty acids are essential for maintaining a healthy heart and mind. Learn more about how fish can benefit your health.",
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
      "Looking for new ways to enjoy fish? Here are 10 mouth-watering recipes that will elevate your culinary skills.",
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
      "Sustainable fishing is essential to maintaining healthy oceans and fish populations. Learn why it matters and how you can make a difference.",
    category: "Sustainability",
    date: "May 1, 2024",
    image: "/tona.jpg",
    link: "/blog/importance-of-sustainable-fishing",
    comments: 21,
  },
];

const BlogPage = () => {
  // Sample data for blog posts

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
            <div className="space-y-8">
              {blogPosts?.slice(0, 3).map((post, index) => (
                <BlogCard1 key={index} post={post} />
              ))}
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
