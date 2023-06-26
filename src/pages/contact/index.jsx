/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdLocalPhone, MdEmail, MdLocationOn } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/router";
import { baseURL } from "@/helpers/generic";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
export default function Contact() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setIsSubmitted(false);
    setUserAnswer("");
    generateNewQuestion();
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  const router = useRouter();
  const styles = {
    form_input:
      "rounded-full bg-white  border border-white w-full px-4 py-3 placeholder:italic placeholder:text-gray-700 drop-shadow-md text-gray-700",
  };
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
    type: "Contact us",
    appPricing: {},
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/contactus`, data);
      toast.success("Information Submitted Successfully", {});
      closeModal();
      setData({
        fullName: "",
        email: "",
        phoneNo: "",
        message: "",
        type: "Contact us",
        appPricing: {},
      });
    } catch (e) {
      toast.error("Something went wrong!!", {});
      closeModal();
      console.log("Error Post", e);
    }
  };

  const [firstNumber, setFirstNumber] = useState(
    Math.floor(Math.random() * 10)
  );
  const [secondNumber, setSecondNumber] = useState(
    Math.floor(Math.random() * 10)
  );
  const [operator, setOperator] = useState(
    ["+", "-", "*"][Math.floor(Math.random() * 3)]
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [isBot, setIsBot] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (!isSubmitted) {
      setStartTime(Date.now());
    }
  }, [isSubmitted]);

  const generateNewQuestion = () => {
    setFirstNumber(Math.floor(Math.random() * 20));
    setSecondNumber(Math.floor(Math.random() * 20));
    setOperator(["+", "-", "*"][Math.floor(Math.random() * 3)]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expectedAnswer = eval(`${firstNumber} ${operator} ${secondNumber}`);
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000; // Calculate elapsed time in seconds

    if (userAnswer === expectedAnswer.toString() && elapsedTime > 4) {
      console.log("Human");
      setIsBot(false);
      handlesubmit(e);
      submitCaptcha("Human", "Success");
    } else {
      console.log("Bot");
      setIsBot(true);
      submitCaptcha("Bot", "Failed");
    }

    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setUserAnswer("");
    generateNewQuestion();
  };

  const submitCaptcha = async (classfication, result) => {
    let payload = {
      userClassification: classfication,
      result: result,
    };
    try {
      const response = await axios.post(`${baseURL}/captchas`, payload);
    } catch (e) {}
  };

  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <h1 className="text-center font-bold lg:text-6xl text-4xl desktop:text-[100px]">
          <span>
            <Image
              src={"/images/commons/bars.svg"}
              height={50}
              width={50}
              alt="bars"
              className="hidden lg:inline"
            />
          </span>
          <span className="text-primary-red">Contact </span>
          us
        </h1>
        <p className="max-w-4xl desktop:text-2xl lg:text-lg text-center my-6 mx-auto">
          {`Feel free to ask anything`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-0 py-2 mb-20">
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
        <div className=" mb-12">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl desktop:text-5xl md:text-left text-center text-[#D32A3D] font-montserrat font-bold">
            Contact <span className="text-white">Our Team</span>
          </h1>
        </div>
        <form
          className=" flex flex-col sm:flex-row justify-between mb-32 gap-10"
          onSubmit={(e) => openModal(e)}
        >
          <div className="basis-1/2 flex flex-col ">
            <label
              htmlFor="Full Name"
              className="font-montserrat text-sm mb-2 md:hidden pl-1"
            >
              Full Name
            </label>
            <input
              type="text"
              className={`${styles.form_input} md:mb-8 mb-2`}
              placeholder="Enter Full Name"
              value={data.fullName}
              onChange={(e) => handleData("fullName", e.target.value)}
              required
            />
            <label
              htmlFor="Full Name"
              className="font-montserrat text-sm mb-2 md:hidden pl-1"
            >
              Email
            </label>
            <input
              type="email"
              className={`${styles.form_input} md:mb-8 mb-2`}
              placeholder="Enter Email"
              value={data.email}
              onChange={(e) => handleData("email", e.target.value)}
              required
            />
            <label
              htmlFor="Full Name"
              className="font-montserrat text-sm mb-2 md:hidden pl-1"
            >
              Phone
            </label>
            <input
              type="text"
              className={`${styles.form_input}`}
              placeholder="Enter Phone Number"
              value={data.phoneNo}
              onChange={(e) => handleData("phoneNo", e.target.value)}
              required
            />
          </div>
          <div className="basis-1/2">
            <label
              htmlFor="Full Name"
              className="font-montserrat md:hidden text-sm pl-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-5 md:mt-0 rounded-3xl px-4 py-3 drop-shadow-md md:h-full h-48 resize-none mb-4 bg-white border border-white  text-black md:border-transparent focus:outline-none"
              placeholder="Type your message here..."
              value={data.message}
              onChange={(e) => handleData("message", e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary-red float-right inline-block px-10 py-2 text-lg font-semibold rounded-full"
            >
              Send
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-10">
          <div className="lg:rounded-3xl rounded-xl bg-black flex flex-col lg:gap-10 gap-5 basis-2/5 md:px-20 px-5 py-12">
            <div className="flex items-center lg:gap-10 gap-5 md:mb-10">
              <AiFillHome className="w-12 h-12 fill-primary-red" />
              <h1 className="md:text-3xl text-xl font-bold">
                Get in <span className="text-primary-red"> Touch</span>
              </h1>
            </div>
            {/* <div className="flex items-center lg:gap-10 gap-5">
              <MdLocalPhone className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-xl lg:text-lg">+27 79 957 7606</h1>
            </div> */}
            {/* <div className="flex items-center lg:gap-10 gap-5">
              <MdEmail className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-xl lg:text-lg">
                sales@mrrobotdev.com
              </h1>
            </div> */}
            <div className="flex items-center lg:gap-10 gap-5">
              <MdLocationOn className="w-12 h-12 fill-primary-red" />
              <h1 className="desktop:text-xl lg:text-lg">
                Midrand, South Africa
              </h1>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114763.8273261964!2d28.094105399999997!3d-25.98870735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9571fd4965198b%3A0x87b2105c1c8bfe22!2sMidrand%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1684346205597!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            draggable="true"
            referrerpolicy="no-referrer-when-downgrade"
            className="grayscale basis-3/5 lg:rounded-3xl rounded-xl"
          ></iframe>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl  overflow-hidden rounded-2xl bg-black px-6 text-left">
                  <div className="mt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-white mb-12">
                        <div>
                          <img src="/desktop/captchaLogo.png" alt="" />
                        </div>
                        <h1 className="font-montserrat font-semibold mb-5 text-[18px]">
                          Verify your human identity to proceed securely.
                        </h1>
                        <span className="font-light font-montserrat text-[15px]">
                          Help us combat spam and maintain platform integrity.
                        </span>
                        <p className="mt-5 font-extralight font-montserrat text-[13px]">
                          Please Solve the Math problem below:
                        </p>
                        <div>
                          {isSubmitted && !isBot ? (
                            <>
                              <img
                                src="/desktop/verified.png"
                                alt=""
                                className="mt-2"
                              />
                            </>
                          ) : (
                            <>
                              <form onSubmit={handleSubmit}>
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`${
                                      isSubmitted && isBot
                                        ? "border-primary-red border-4"
                                        : "border-none"
                                    } flex bg-white items-center p-1.5 rounded-2xl w-[170px] mt-2`}
                                  >
                                    <p className="text-black font-bold ml-1">{`${firstNumber} ${operator} ${secondNumber} =`}</p>
                                    <input
                                      type="text"
                                      value={userAnswer}
                                      onChange={handleChange}
                                      className="text-black w-[70px] p-1.5 font-bold focus:outline-none"
                                    />
                                  </div>
                                  <HiOutlineRefresh
                                    className="w-7 h-7 cursor-pointer"
                                    onClick={handleTryAgain}
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  {isSubmitted && isBot && (
                                    <>
                                      <span className="text-primary-red text-[14px] mt-1">
                                        Verification failed, try again
                                      </span>
                                    </>
                                  )}

                                  <button
                                    type="submit"
                                    className="bg-primary-red text-white rounded-2xl px-3.5 py-1 mt-2"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <img
                          src="/desktop/captcha.png"
                          alt=""
                          className="w-[250px] h-[250px]"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
