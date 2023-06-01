import { Index } from "./index";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Head from "next/head";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HomeProvisionCard } from "@/components/HomeProvisionCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import MobileFooter from "@/components/MobileFooter";
import Link from "next/link";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

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
      path: "/services/web_development",
    },
    {
      service_name: "Game Development",
      service_short_desc:
        "Mr.Robot Dev creates visually stunning & immersive games that meet client preferences and attract a wider audience.",
      service_image: "game-development.png",
      path: "/services/game_development",
    },
    {
      service_name: "App Development",
      service_short_desc:
        "We make engaging apps for mobile & web using the latest tech. We keep clients updated, focus on interactivity to boost their brand .",
      service_image: "app-development.png",
      path: "/services/app_development",
    },
    {
      service_name: "Custom Software",
      service_short_desc:
        "We make engaging apps for mobile & web using the latest tech. We keep clients updated, focus on interactivity to boost their brand .",
      service_image: "custom-software.png",
      path: "/services/custom_software",
    },
  ];

  return (
    <>
      <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat">
        <div className="mx-auto desktop:px-36 lg:px-24 px-5 lg:bg-[#3C64B122] bg-black/20">
          <Navbar />
        </div>
        <div className="mx-auto desktop:px-36 lg:px-24 px-5">
          <div className="flex items-start gap-10">
            <div className="basis-7/12 desktop:py-36 py-28 hidden lg:block">
              <h1 className="text-white desktop:text-5xl lg:text-4xl font-bold desktop:leading-snug">
                <span className="text-primary-red">Empowering </span>
                your business <br /> with leading-edge
                <span className="text-primary-red"> software solutions.</span>
              </h1>
              <p className="mt-5 mb-6 desktop:text-xl desktop:leading-relaxed text-base text-white  w-5/6 text-justify">
                {`We provide top-notch solutions that help businesses stay ahead in
              the today's rapidly evolving technology landscape.`}
              </p>
              <Link
                href={"/pricing"}
                className="desktop:px-5 desktop:py-4 px-8 py-3 text-lg font-bold text-primary-red hover:text-white hover:bg-primary-red bg-white rounded-full transition duration-200"
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
            <h1 className="text-3xl font-bold leading-snug">
              <span className="text-primary-red">Empowering </span>
              your business <br /> with leading-edge
              <span className="text-primary-red"> software solutions.</span>
            </h1>
            <div className="mt-4">
              <button className=" px-8 py-3 text-xl font-bold text-primary-red hover:text-white hover:bg-primary-red bg-white rounded-full transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto desktop:px-36 lg:px-24 px-5 py-24">
          <h4 className="desktop:text-xl text-lg font-medium text-white text-center">
            Popular Services
          </h4>
          <h1 className="text-center desktop:text-5xl lg:text-3xl text-2xl font-bold text-white my-4">
            Do More With <span className="text-primary-red">Mr. Robot Dev</span>
          </h1>
          {isMobileScreen ? (
            <div className="flex flex-col items-center gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.service_name}
                  image={service.service_image}
                  path={service.path}
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
                      path={service.path}
                      smallScreen={isSmallScreen}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          )}

          <div className="flex flex-col-reverse lg:flex-row items-center desktop:py-20  justify-between gap-10">
            <div className="basis-1/2 lg:text-left text-center ">
              <h1 className="text-white desktop:text-5xl lg:text-3xl text-2xl font-bold desktop:leading-snug">
                <span className="text-primary-red">Build</span> Your
                <span className="text-primary-red"> Brand </span> With Us
              </h1>
              <p className="my-5 desktop:text-xl desktop:leading-relaxed text-white tracking-wide lg:text-justify text-center">
                {`Building a strong brand is essential for success in today's competitive market. At our company, we understand the importance of brand building and are dedicated to helping our clients achieve their goals. Our team of experts will work closely with you to understand your vision and craft a branding strategy that effectively communicates your unique value proposition to your target audience. `}
                {/* {`Whether it's through comprehensive market research, innovative design, or effective marketing campaigns, we have the tools and expertise to help you build a brand that resonates with your customers. `} */}
                <br />
              </p>
              {/* <p className="mt-5 mb-10 desktop:text-xl desktop:leading-relaxed text-base text-white tracking-wide lg:text-justify text-center">
              {`
              We understand that a strong brand can lead to increased recognition, loyalty, and customer trust. By choosing to build your brand with us, you can be confident that you're making a strategic investment in your future success.`}
            </p> */}
              <Link
                href={"/about"}
                className="desktop:px-5 desktop:py-4 px-8 py-3 inline-block mt-4 text-lg font-medium text-white bg-primary-red  rounded-full transition duration-200 hover:bg-white hover:text-primary-red"
              >
                Read More
              </Link>
            </div>
            <div className="lg:basis-1/2 lg:block basis-full">
              <Image
                src={"/images/commons/brand-image.png"}
                height={650}
                width={950}
                alt="Brand Section Image"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto desktop:px-36 lg:px-24 px-5 flex lg:flex-row flex-col gap-8 justify-between desktop:h-[750px] lg:h-[550px] ">
          <div className="text-white desktop:w-[400px] lg:w-[350px]">
            <svg
              width="408"
              height="314"
              viewBox="0 0 408 314"
              fill="none"
              className="absolute desktop:w-[350px] desktop:top-10 desktop:left-[25%] xl:w-[250px] xl:top-0 lg:w-[160px] lg:-top-10 lg:left-[28%] xl:left-[26%] lg:block hidden z-0"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M1.5 1.5C33.8843 2.64298 88.2051 11.8529 136.652 36.4838C206.47 71.9797 196.642 152.923 202.433 231.031V231.031C206.554 286.624 272.059 326.148 324.597 307.51C357.652 295.784 389.676 273.677 406 234.5"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="10 10"
              />
            </svg>
            <div className="z-10">
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
          <div className="relative text-white desktop:w-[400px] lg:w-[350px] lg:self-end">
            <svg
              width="426"
              height="72"
              viewBox="0 0 426 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute lg:-top-0 lg:left-[75%] lg:w-[160px] xl:w-[220px] xl:-top-10 xl:left-[75%] desktop:w-[350px] desktop:left-[80%] -z-0 hidden lg:block"
            >
              <path
                d="M2.35767 59.6674C24.0489 50.5588 54.9652 41.5277 88.9445 37.8341C225.711 22.9674 424.094 139.548 424.36 1.9756V1.9756"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="10 10"
              />
            </svg>

            <div className="z-10">
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

        <div className="mx-auto desktop:px-36 lg:px-24 px-5 py-20">
          <div className="flex xl:flex-row flex-col items-center justify-between xl:gap-14">
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
                {/* {`
             We provide personalized service, regular updates, and open communication to ensure that our clients are always informed and satisfied with the progress of their project. Our commitment to excellence extends beyond the delivery of the final product, as we work closely with our customers to ensure their long-term success. By establishing a strong and trusting relationship, we are able to consistently deliver exceptional software solutions that meet and exceed our customers' expectations.`} */}
              </p>
              <Link
                href={"/about#ourWork"}
                className="desktop:px-5 desktop:py-4 px-8 py-3 text-lg font-medium text-white bg-primary-red  rounded-full transition duration-200 hover:bg-white hover:text-primary-red"
              >
                Our Work
              </Link>
            </div>
          </div>
        </div>
        <Statistics isSmallScreen={isMobileScreen} />
        <div className="mx-auto desktop:px-36 lg:px-24 px-5 py-24 ">
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
              <p className="text-white my-6 lg:w-full w-4/5 mx-auto"></p>
              <h2 className="text-2xl font-bold text-primary-red"></h2>
              <h4 className="text-white">CEO, Founder</h4>

              <div className="lg:text-right text-center mt-4">
                <button>
                  <MdArrowCircleLeft className="fill-white w-12 h-12 mr-4 hover:fill-primary-red drop-shadow-md" />
                </button>
                <button>
                  <MdArrowCircleRight className="fill-white w-12 h-12 mr-4 hover:fill-primary-red drop-shadow-md" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <NewsletterCTA />
        {isMobileScreen ? <MobileFooter /> : <Footer />}
      </main>
    </>
  );
}
