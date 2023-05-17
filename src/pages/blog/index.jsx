import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import NewsletterCTA from "@/components/NewsletterCTA";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const blogs = [
  {
    blog_image: "blog-1",
    blog_title: "Read all about our interview with Private Internet Access",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    blog_image: "blog-2",
    blog_title:
      "For a second year Mrrobot  is ranked as Top Software Company in South Africa",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    blog_image: "blog-hero",
    blog_title:
      "What services should truly versatile Software Developers offer?",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    blog_image: "blog-1",
    blog_title: "Read all about our interview with Safety Detectives",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    blog_image: "blog-2",
    blog_title: "4 steps to a seamless software solution",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    blog_image: "blog-hero",
    blog_title: "What is software development?",
    blog_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export default function Blog() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <h1 className="text-center  font-bold lg:text-6xl text-3xl">
          <span>
            <Image
              src={"/images/commons/bars.svg"}
              height={50}
              width={50}
              alt="bars"
              className="hidden lg:inline"
            />
          </span>
          <span className="text-primary-red">Welcome </span>
          to our
          <span className="text-primary-red"> Blog </span>
        </h1>
        <p className="desktop:max-w-2xl max-w-xl text-center my-6 mx-auto">
          {` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
        </p>
        <Image
          src="/images/commons/blog-hero.png"
          width={500}
          height={500}
          alt="Blog hero img"
          className="mx-auto"
        />
        <hr className="border-t-4 border-primary-red mx-auto desktop:w-96 lg:w-72 md:w-60 sm:w-48 w-36 mt-10 " />
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 ">
        <h1 className="desktop:text-4xl text-2xl text-center font-semibold mb-16">
          Latest
          <span className="text-primary-red"> Articles</span>
        </h1>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.blog_image}
              title={blog.blog_title}
              desc={blog.blog_desc}
            />
          ))}
        </div>
      </div>
      <NewsletterCTA />
      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
