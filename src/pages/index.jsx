import { Index } from "./index";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HomeProvisionCard } from "@/components/HomeProvisionCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import MobileFooter from "@/components/MobileFooter";
import Link from "next/link";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  const styles = {
    process_name:
      "desktop:text-5xl text-3xl font-bold text-center desktop:my-10 my-6",
    process_desc:
      "desktop:text-lg desktop:leading-9 leading-7 text-center desktop:font-medium max-w-[400px] mx-auto",
    process_img: "mx-auto desktop:w-48 w-28",
  };
  const services = [
    {
      service_name: "Web Development",
      service_short_desc:
        "We convert your business ideas into a impressive web application to streamline your business productivity.",
      service_image: "web-development.png",
    },
    {
      service_name: "Game Development",
      service_short_desc:
        "Mr.Robot Dev creates visually stunning & immersive games that meet client preferences and attract a wider audience.",
      service_image: "game-development.png",
    },
    {
      service_name: "App Development",
      service_short_desc:
        "We make engaging apps for mobile & web using the latest tech. We keep clients updated, focus on interactivity to boost their brand .",
      service_image: "app-development.png",
    },
    {
      service_name: "Custom Software",
      service_short_desc:
        "We make engaging apps for mobile & web using the latest tech. We keep clients updated, focus on interactivity to boost their brand .",
      service_image: "custom-software.png",
    },
  ];

  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat">
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className="mx-auto desktop:px-36 lg:px-28 px-5">
        <div className="flex items-center">
          <div className="basis-7/12 desktop:py-52 py-40 hidden lg:block">
            <h1 className="text-white desktop:text-6xl lg:text-4xl font-bold desktop:leading-snug">
              <span className="text-primary-red-dark">Empowering </span>
              your business <br /> with leading-edge
              <span className="text-primary-red-dark">
                {" "}
                software solutions.
              </span>
            </h1>
            <p className="mt-5 mb-10 desktop:text-xl desktop:leading-relaxed text-base text-white  w-5/6 text-justify">
              {`We provide top-notch solutions that help businesses stay ahead in
              the today's rapidly evolving technology landscape.`}
            </p>
            <Link
              href={"/pricing"}
              className="desktop:px-5 desktop:py-4 px-8 py-3 text-lg font-semibold text-primary-red hover:text-white hover:bg-primary-red bg-white rounded-full transition duration-200"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:basis-5/12 basis-full">
            <Image
              src={"/images/commons/hero-img.svg"}
              width={796}
              height={739}
              alt="Hero Image"
              className=" mx-auto"
            />
          </div>
        </div>
        <div className="text-center text-white py-8 lg:hidden">
          <h4 className="text-xl font-semibold tracking-wide mb-4">
            Leading The Way In
          </h4>
          <h1 className="text-4xl font-bold leading-snug">
            <span className="text-primary-red-dark">Innovative</span> And{" "}
            <span className="text-primary-red-dark">Technology</span>
          </h1>
          <div className="mt-4">
            <button className=" px-8 py-3 text-xl font-bold text-primary-red hover:text-white hover:bg-primary-red bg-white rounded-full transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto desktop:px-36 lg:px-28 px-5 pt-32">
        <h4 className="desktop:text-xl text-lg font-medium text-white text-center">
          Popular Services
        </h4>
        <h1 className="text-center desktop:text-5xl lg:text-3xl text-2xl font-bold text-primary-red my-4">
          Do More With Mr. Robot Dev
        </h1>
        {isMobileScreen ? (
          <div className="flex flex-col items-center gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.service_name}
                image={service.service_image}
                desc={service.service_short_desc}
                smallScreen={isSmallScreen}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12">
            <Splide
              options={{
                perPage: 3,
                perMove: 1,
                arrows: false,
                rewind: true,
                autoplay: true,
                gap: 50,
                height: "700px",
                breakpoints: {
                  1280: {
                    perPage: 2,
                  },
                },
              }}
            >
              {services.map((service, index) => (
                <SplideSlide key={index}>
                  <ServiceCard
                    name={service.service_name}
                    image={service.service_image}
                    desc={service.service_short_desc}
                    smallScreen={isSmallScreen}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}

        <div className="flex flex-col lg:flex-row item-center justify-between">
          <div className="basis-1/2 desktop:py-52 py-40 lg:text-left text-center ">
            <h1 className="text-primary-red desktop:text-5xl lg:text-3xl text-2xl font-bold desktop:leading-snug">
              Build Your Brand With Us
            </h1>
            <p className="my-5 desktop:text-xl desktop:leading-relaxed text-base text-white tracking-wide lg:text-justify text-center">
              {`Building a strong brand is essential for success in today's competitive market. At our company, we understand the importance of brand building and are dedicated to helping our clients achieve their goals. Our team of experts will work closely with you to understand your vision and craft a branding strategy that effectively communicates your unique value proposition to your target audience. Whether it's through comprehensive market research, innovative design, or effective marketing campaigns, we have the tools and expertise to help you build a brand that resonates with your customers. `}
              <br />
            </p>
            <p className="mt-5 mb-10 desktop:text-xl desktop:leading-relaxed text-base text-white tracking-wide lg:text-justify text-center">
              {`
              We understand that a strong brand can lead to increased recognition, loyalty, and customer trust. By choosing to build your brand with us, you can be confident that you're making a strategic investment in your future success.`}
            </p>
            <Link
              href={"/about"}
              className="desktop:px-5 desktop:py-4 px-8 py-3 text-lg font-medium text-white bg-primary-red  rounded-full transition duration-200"
            >
              Read More
            </Link>
          </div>
          <div className="lg:basis-1/2 hidden lg:block basis-full self-center">
            <Image
              src={"/images/commons/build-your-brand.png"}
              alt="Hero Image"
              width={950}
              height={945}
              className=" mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto desktop:px-36 lg:px-28 px-5 flex lg:flex-row flex-col gap-8 justify-between desktop:h-[750px] lg:h-[550px] ">
        <div className="text-white desktop:w-[400px] lg:w-[350px]">
          <div>
            <Image
              src={"/images/commons/strategy.png"}
              width={200}
              height={200}
              alt="Planning"
              className={styles.process_img}
            />
          </div>
          <h1 className={styles.process_name}>Strategy</h1>
          <p className={styles.process_desc}>
            We have a strategic approach to client projects. We start by
            understanding their needs, goals, and constraints, and use this to
            analyze the market and industry. We work closely with clients to
            identify business drivers and success metrics.
          </p>
        </div>
        <div className="text-white desktop:w-[400px] lg:w-[350px] lg:self-end">
          <div>
            <Image
              src={"/images/commons/planning.png"}
              width={200}
              height={200}
              alt="Planning"
              className={styles.process_img}
            />
          </div>
          <h1 className={styles.process_name}>Planning</h1>
          <p className={styles.process_desc}>
            We plan client projects meticulously by analyzing requirements,
            collaborating with experts, and creating a detailed project plan
            aligned with client objectives. Our planning process delivers
            software solutions that exceed expectations and provide tangible
            business value.
          </p>
        </div>
        <div className="text-white desktop:w-[400px] lg:w-[350px]">
          <div>
            <Image
              src={"/images/commons/building.png"}
              width={200}
              height={200}
              alt="Planning"
              className={styles.process_img}
            />
          </div>
          <h1 className={styles.process_name}>Building</h1>
          <p className={styles.process_desc}>
            {`We build high-quality software solutions that meet our client's
            needs and deliver measurable business value. Our team of experts
            collaborates to ensure robust and scalable solutions using industry
            best practices and the latest technologies.`}
          </p>
        </div>
      </div>

      <div className="mx-auto desktop:px-36 lg:px-28 px-5 py-20">
        <div className="flex xl:flex-row flex-col items-center justify-between xl:gap-5">
          <div className=" md:flex lg:flex-row flex-col desktop:basis-7/12 desktop:gap-10 gap-5 lg:basis-1/2">
            <div className="flex xl:flex-col sm:flex-row flex-col desktop:gap-10 gap-5 md:mb-0 mb-5">
              <HomeProvisionCard
                name={"Analytics"}
                image={"analytics"}
                desc={
                  "We offers custom analytics and dashboards by utilizing user data to gain valuable insights which helps you to optimize your operations, improve customer experiences & drive growth."
                }
              />

              <HomeProvisionCard
                name={"Quality Products"}
                image={"good-quality"}
                desc={
                  "We ensure high-quality products through rigorous quality assurance processes to make ensure that our solution meets the highest standards of reliability, user experience & performance."
                }
              />
            </div>
            <div className="xl:self-center">
              <HomeProvisionCard
                name={"Latest Technology"}
                image={"technology"}
                desc={
                  "We leverage the most advanced and cutting-edge technologies to deliver innovative solutions that meet the unique needs of our clients."
                }
              />
            </div>
          </div>

          <div className="desktop:basis-5/12 lg:basis-1/2 desktop:py-52 lg:py-40 py-10 xl:text-left text-center">
            <h1 className="text-white desktop:text-5xl xl:text-4xl text-2xl font-bold mb-5 ">
              We Build Lasting <br />
              <span className="text-primary-red-dark">Relationship </span>
              With Our
              <span className="text-primary-red-dark"> Customers...</span>
            </h1>
            <p className="mb-10 desktop:text-xl text-base text-white lg:text-justify text-center ">
              {`At our company, we understand that building lasting relationships with our customers is a key factor in our success. That's why we make it a priority to create a positive and productive partnership with each and every one of our clients. From the start of a project, we take the time to fully understand the unique needs and goals of our customers. `}
              <br />
              <br />
              {`
             We provide personalized service, regular updates, and open communication to ensure that our clients are always informed and satisfied with the progress of their project. Our commitment to excellence extends beyond the delivery of the final product, as we work closely with our customers to ensure their long-term success. By establishing a strong and trusting relationship, we are able to consistently deliver exceptional software solutions that meet and exceed our customers' expectations.`}
            </p>
            <Link
              href={"/about#ourWork"}
              className="desktop:px-5 desktop:py-4 px-8 py-3 text-lg font-medium text-white bg-primary-red  rounded-full transition duration-200"
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>
      <Statistics isSmallScreen={isMobileScreen} />
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 py-24">
        <h1 className="text-center desktop:text-5xl lg:text-3xl text-xl font-bold text-white mb-10">
          What Our <span className="text-primary-red">Clients</span> Say
        </h1>
        <div className="flex items-center justify-between">
          <div className="basis-1/2 lg:block hidden">
            <Image
              src={`/images/desktop/testimonials-img.png`}
              width={400}
              height={400}
              alt="Analytics Image"
              className="mx-auto"
            />
          </div>
          <div className="lg:basis-1/2 basis-full lg:text-left text-center">
            <h4 className="uppercase lg:text-xl font-bold lg:text-primary-red text-white">
              Testimonials
            </h4>
            <p className="text-white my-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              ducimus ullam dignissimos optio, quas asperiores quos magnam ut
              vero. Dolorem eaque nobis repudiandae tenetur harum tempore
              inventore perferendis, facilis aperiam.
            </p>
            <h2 className="text-2xl font-bold text-primary-red">Andrew Tate</h2>
            <h4 className="text-white">CEO, Founder</h4>
          </div>
        </div>
      </div>
      <NewsletterCTA />
      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
