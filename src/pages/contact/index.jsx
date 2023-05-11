import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";

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

        <div className="flex flex-col md:flex-row gap-10">
          <div className="rounded-3xl bg-black flex flex-col gap-10 basis-2/5 px-20 py-12">
            <div className="flex items-center gap-10 mb-10">
              <AiFillHome className="w-12 h-12 fill-primary-red" />
              <h1 className="text-3xl font-bold">
                Get in <span className="text-primary-red"> Touch</span>
              </h1>
            </div>
            <div className="flex items-center gap-10">
              <MdLocalPhone className="w-12 h-12 fill-primary-red" />
              <h1 className="text-2xl">+27 79 957 7606</h1>
            </div>
            <div className="flex items-center gap-10">
              <MdEmail className="w-12 h-12 fill-primary-red" />
              <h1 className="text-2xl">sales@mrrobot.com</h1>
            </div>
            <div className="flex items-center gap-10">
              <MdLocationOn className="w-12 h-12 fill-primary-red" />
              <h1 className="text-2xl">Cape town, South Africa</h1>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633160.1046942765!2d18.221863380387568!3d-33.8654062401274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1683820168501!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="grayscale basis-3/5 rounded-3xl"
          ></iframe>
        </div>
      </div>

      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
