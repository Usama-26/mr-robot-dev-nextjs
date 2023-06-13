import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { ToastContainer } from "react-toastify";
import { IoPaperPlaneSharp, IoPaperPlane } from "react-icons/io5";
import { HiArrowRightCircle } from "react-icons/hi2";

import { AiOutlinePaperClip } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

const monteserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }) {
  const [botStep, setBotStep] = useState(1);
  const [isBotVisible, setIsVisible] = useState(true);
  return (
    <main className={`${monteserrat.variable} font-montserrat`}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        position={"top-center"}
      />
      <Component {...pageProps} />
      <button
        onClick={() => {
          setIsVisible(true);
          setBotStep(1);
        }}
        className="fixed bottom-5 right-5 px-3 py-2 bg-primary-red-dark rounded-full"
      >
        <Image
          src={"/images/commons/bot-icon.svg"}
          width={50}
          height={50}
          alt="ChatBot Icon"
        />
      </button>
      <div
        className={`${
          isBotVisible ? "block" : "hidden"
        } fixed w-[350px] rounded-lg shadow bottom-5 right-5 bg-white`}
      >
        <div className="px-4 py-2 bg-primary-red-dark rounded-t-lg flex gap-6 items-center text-sm relative">
          <Image
            src={"/icon.png"}
            width={200}
            height={200}
            className="rounded-full object-cover w-12 h-12"
            alt="Bot Avatar"
          />
          <div>
            <h3 className="font-semibold text-white">John Smit</h3>
            <h6 className="text-white">Online</h6>
          </div>
          <button onClick={() => setIsVisible(false)}>
            <HiXMark className="w-6 h-6 stroke-2 stroke-white fill-white absolute top-2 right-2" />
          </button>
        </div>
        {(botStep === 1 && (
          <div className="my-20">
            <div className="mx-auto w-56 h-56 pt-16 rounded-full bg-primary-red-dark text-white text-center">
              <h2 className="text-2xl font-bold text-center">
                Welcome to Mr. Robot Dev
              </h2>
              <button onClick={() => setBotStep(2)}>
                <HiArrowRightCircle className="fill-white w-16 h-16" />
              </button>
            </div>
          </div>
        )) ||
          (botStep === 2 && (
            <div className="text-xs py-2 h-96 overflow-auto">
              <Image
                src={"/images/bot-hero.png"}
                width={200}
                height={200}
                className="mx-auto"
                alt="Bot Avatar"
              />

              <div className="bg-gray-200 rounded-lg mx-5 px-8 py-4 font-medium">
                <h4>Hey, My Name is John Smith</h4>
                <p>
                  Welcome to Mr.RobotDev, we are a leading and fastest growing
                  company in the world, providing solutions that takes your
                  businesses to the next level. I’m here to help.
                  <br />
                  <br />
                  I just need a few details and we’ll be get going.
                  <br />
                  <br />
                  Are you ready to set?
                </p>

                <button
                  onClick={() => setBotStep(3)}
                  className="mt-6 rounded-full px-6 py-2 bg-primary-red-dark text-white block w-32 mx-auto"
                >
                  {"Let's do this"}
                </button>
              </div>
            </div>
          )) ||
          (botStep === 3 && (
            <div className="px-5 py-10 bg-gray-100 h-96 overflow-auto rounded-md">
              <form>
                <label
                  htmlFor="firstName"
                  className="block mb-2 font-semibold text-sm"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your First Name"
                  className=" w-full rounded-full px-4 py-2 mb-4 placeholder:text-gray-500 placeholder:text-xs border border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="surName"
                  className="block mb-2 font-semibold text-sm"
                >
                  Sur Name
                </label>
                <input
                  type="text"
                  id="surName"
                  name="surName"
                  placeholder="Enter your Sur Name"
                  className=" w-full rounded-full px-4 py-2 mb-4 placeholder:text-gray-500 placeholder:text-xs border border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className=" w-full rounded-full px-4 py-2 mb-4 placeholder:text-gray-500 placeholder:text-xs border border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="subject"
                  className="block mb-2 font-semibold text-sm"
                >
                  Subject
                </label>
                <select
                  name="subject"
                  id="subject"
                  className=" w-full rounded-full px-4 py-2 mb-4 text-xs border border-gray-500 focus:outline-none"
                >
                  <option value="technical">Technical</option>
                  <option value="sales">Sales</option>
                </select>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold text-sm"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your Phone"
                  className=" w-full rounded-full px-4 py-2 mb-4 placeholder:text-gray-500 placeholder:text-xs border border-gray-500 focus:outline-none"
                />

                <button
                  onClick={() => setBotStep(4)}
                  type="button"
                  className="rounded-full w-full block py-2 text-sm text-white font-semibold bg-primary-red-dark"
                >
                  {"Let's begin the Chat"}
                </button>
              </form>
            </div>
          )) ||
          (botStep === 4 && (
            <>
              <div
                id="messages"
                className="flex flex-col h-96 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              >
                <div className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                          Can be verified on any platform using docker
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs order-1 items-end">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#D32A3D]  text-white">
                          Your error message says permission denied, npm global
                          installs must be given root privileges.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 px-4 py-4 mb-2 sm:mb-0 flex items-center">
                <div className="inline-flex items-start rounded-full px-4 pt-2 mr-3 border border-gray-500">
                  <input
                    type="text"
                    className="placeholder:text-gray-500 w-48 py-1 text-xs focus:outline-none"
                    placeholder="Type your message here..."
                  />
                  <div>
                    <button>
                      <AiOutlinePaperClip className="w-5 h-5 fill-gray-600 mr-2" />
                    </button>
                    <button>
                      <FaRegSmile className="w-5 h-5 fill-gray-600" />
                    </button>
                  </div>
                </div>
                <button className=" rounded-full p-1 bg-primary-red-dark">
                  <IoPaperPlane className="w-5 h-5 fill-white" />
                </button>
              </div>
            </>
          ))}
      </div>
    </main>
  );
}
