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
        <h1 className="text-center font-bold lg:text-6xl text-4xl desktop:text-[100px]">
          <span className="text-primary-red">Contact </span>
          us
        </h1>
        <p className="max-w-4xl text-center my-6 mx-auto">
          {`Feel free to ask anything`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-0 py-2 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="basis-1/2 md:order-1 order-2">
            <h1 className="desktop:text-6xl lg:text-4xl font-montserrat font-bold text-2xl mb-6 md:text-left text-center">
              We would{" "}
              <span className="text-primary-red font-montserrat font-bold">
                {" "}
                love{" "}
              </span>
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
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[42px] text-[#D32A3D] font-montserrat font-bold">
            Contact{" "}
            <span className="text-white border-b-4 border-[#D32A3D]">
              Our Team
            </span>
          </h1>
        </div>
        <form className="flex flex-col sm:flex-row justify-between desktop:gap-20 gap-10 mb-32">
          <div className="basis-1/2  flex flex-col ">
            <label
              htmlFor="Full Name"
              className="font-montserrat text-[22px] mb-5 md:hidden pl-1"
            >
              Full Name
            </label>
            <input
              type="text"
              className={`${styles.form_input} mb-8`}
              placeholder="Enter Full Name"
            />
            <label
              htmlFor="Full Name"
              className="font-montserrat text-[22px] mb-5 md:hidden pl-1"
            >
              Email
            </label>
            <input
              type="email"
              className={`${styles.form_input} mb-8`}
              placeholder="Enter Email"
            />
            <label
              htmlFor="Full Name"
              className="font-montserrat text-[22px] mb-5 md:hidden pl-1"
            >
              Phone
            </label>
            <input
              type="text"
              className={`${styles.form_input}`}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="basis-1/2 ">
            <label
              htmlFor="Full Name"
              className="font-montserrat text-[22px] md:hidden pl-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-5 md:mt-0 rounded-3xl p-4 drop-shadow-md md:h-full h-[200px] resize-none mb-4 bg-primary-dark md:bg-white border border-white  md:text-black md:border-transparent focus:outline-none"
              placeholder="Type your message here..."
            ></textarea>
            <button className="bg-primary-red float-right inline-block px-10 py-2 text-lg font-semibold rounded-full">
              Send
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="lg:rounded-3xl rounded-xl bg-black flex flex-col lg:gap-10 gap-5 basis-2/5 md:px-20 px-10 py-12">
            <div className="flex items-center lg:gap-10 gap-5 md:mb-10">
              <AiFillHome className="w-12 h-12 fill-primary-red" />
              <h1 className="md:text-3xl text-xl font-bold">
                Get in <span className="text-primary-red"> Touch</span>
              </h1>
            </div>
            <div className="flex items-center lg:gap-10 gap-5">
              <MdLocalPhone className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-2xl text-xl">+27 79 957 7606</h1>
            </div>
            <div className="flex items-center lg:gap-10 gap-5">
              <MdEmail className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-2xl text-xl">sales@mrrobot.com</h1>
            </div>
            <div className="flex items-center lg:gap-10 gap-5">
              <MdLocationOn className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-2xl text-xl">
                Cape town, South Africa
              </h1>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633160.1046942765!2d18.221863380387568!3d-33.8654062401274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1683820168501!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            draggable="true"
            referrerpolicy="no-referrer-when-downgrade"
            className="grayscale basis-3/5 lg:rounded-3xl rounded-xl"
          ></iframe>
        </div>
      </div>

      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
