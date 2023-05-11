import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

export default function Contact() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  const styles = {
    form_input:
      "rounded-full sm:bg-white bg-primary-dark  border border-white w-full p-4 placeholder:italic placeholder:text-gray-700 drop-shadow-md",
  };
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <h1 className="text-center font-bold lg:text-6xl text-3xl desktop:text-[100px]">
          <span className="text-primary-red">Contact </span>
          us
        </h1>
        <p className="max-w-4xl text-center my-6 mx-auto">
          {`Feel free to ask anything`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="basis-1/2 md:order-1 order-2">
            <h1 className="desktop:text-x6l lg:text-4xl text-2xl font-semibold mb-6 md:text-left text-center">
              We would <span className="text-primary-red"> love </span>
              to hear from you
            </h1>
            <p className="md:text-justify text-center desktop:text-xl w-4/5 md:mx-0 mx-auto">
              {`Please help us to respond better to your query`}
            </p>
          </div>
          <div className="basis-1/2 md:order-2 order-1">
            <Image
              src={"/images/commons/contact-us-hero.png"}
              width={700}
              height={400}
              alt="Team Image"
              className="desktop:w-[600px] w-[500px] mx-auto"
            />
          </div>
        </div>
        <h1 className="desktop:text-x6l lg:text-4xl text-2xl font-semibold mb-6 md:text-left text-center">
          <span className="text-primary-red"> Contact </span>
          Our Team
        </h1>
        <form className="flex flex-col sm:flex-row justify-between desktop:gap-20   gap-10 mb-20">
          <div className="basis-1/2  flex flex-col ">
            <input
              type="text"
              className={`${styles.form_input} mb-8`}
              placeholder="Enter Full Name"
            />
            <input
              type="email"
              className={`${styles.form_input} mb-8`}
              placeholder="Enter Email"
            />
            <input
              type="text"
              className={`${styles.form_input}`}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="basis-1/2 text-right">
            <textarea
              name="message"
              id="message"
              className="w-full rounded-3xl p-4 drop-shadow-md h-full resize-none mb-4 bg-primary-dark border border-white"
              placeholder="Type your message here..."
            ></textarea>
            <button className="bg-primary-red inline-block px-10 py-2 text-lg font-semibold rounded-full">
              Send
            </button>
          </div>
        </form>
      </div>
      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
