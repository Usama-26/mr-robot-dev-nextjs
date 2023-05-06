import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  const styles = {
    stats_number:
      "desktop:text-[80px] lg:text-5xl text-5xl font-bold mb-4 text-center",
    stats_name: "desktop:text-xl lg:text-lg text-base font-medium text-center",
  };

  return (
    <main className="bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className="mx-auto desktop:px-32 lg:px-20 px-5">
        <div className="flex">
          <div className="basis-7/12 desktop:py-52 py-40 hidden lg:block">
            <h1 className="text-white desktop:text-6xl lg:text-4xl font-bold desktop:leading-snug">
              <span className="text-primary-red-dark">Empowering </span>
              your business <br /> with leading-edge
              <span className="text-primary-red-dark">
                {" "}
                software solutions.
              </span>
            </h1>
            <p className="my-5 desktop:text-xl desktop:leading-relaxed text-base text-white font-medium tracking-wide w-5/6 text-justify">
              {`We provide top-notch solutions that help businesses stay ahead in
              the today's rapidly evolving technology landscape. Our
              customer-centric approach and expertise in the latest
              technologies...`}
              <button className="text-primary-red-dark hover:underline">
                Read more
              </button>
            </p>
            <button className="desktop:px-5 desktop:py-4 px-4 py-3 text-xl font-bold text-primary-red hover:text-white hover:bg-primary-red bg-white rounded-full transition duration-200">
              Get Started
            </button>
          </div>
          <div className="lg:basis-5/12 basis-full">
            <Image
              src={"/images/commons/hero-img.svg"}
              width={796}
              height={739}
              alt="Hero Image"
              className="lg:w-full lg:h-full w-96 h-96 mx-auto"
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
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 grid text-white text-center lg:grid-cols-4 grid-cols-2 lg:bg-gradient-to-b from-[#FF001D] to-[#BF1024] py-8 gap-10">
        <div className="order-3 lg:order-1">
          <h1 className={styles.stats_number}>60</h1>
          <h5 className={styles.stats_name}>Countries</h5>
        </div>
        <div className="order-2">
          <h1 className={styles.stats_number}>6,750</h1>
          <h5 className={styles.stats_name}>Total Group Employees</h5>
        </div>
        <div className="lg:order-3 order-1">
          <h1 className={styles.stats_number}>
            {isSmallScreen ? "21M" : "21,000,000"}
          </h1>
          <h5 className={styles.stats_name}>Total Group Monthly Traffic</h5>
        </div>
        <div className="order-3 lg:order-4">
          <h1 className={styles.stats_number}>10</h1>
          <h5 className={styles.stats_name}>Brands</h5>
        </div>
      </div>
    </main>
  );
}
