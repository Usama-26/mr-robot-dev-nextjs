import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import GlassCard from "@/components/GlassCard";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    service_image: "mvp",
    service_name: "mvp",
    service_price: 1000,
    service_desc: "A Minimum Viable Product to test and verify your concept",
  },
  {
    service_image: "appp",
    service_name: "app",
    service_price: 2000,
    service_desc:
      "An extensively developed application designed for scalability and expansion.",
  },
  {
    service_image: "game",
    service_name: "game",
    service_price: 3000,
    service_desc:
      "A game developed with personalized features and specifications.",
  },
  {
    service_image: "platform",
    service_name: "platform",
    service_price: 4000,
    service_desc:
      "A comprehensive platform with multiple applications and supporting backend services",
  },
];

const device_features = [
  {
    feature_image: "camera",
    feature_name: "camera",
    feature_price: 200,
    feature_desc: "Utilize the camera on the device.",
  },
  {
    feature_image: "geo",
    feature_name: "geolocation",
    feature_price: 300,
    feature_desc: "Access the location of the device.",
  },
  {
    feature_image: "chat",
    feature_name: "push notification",
    feature_price: 400,
    feature_desc: "Push notifications to provide reminders and alerts",
  },
  {
    feature_image: "blue",
    feature_name: "bluetooth integration",
    feature_price: 500,
    feature_desc: "Incorporation with Bluetooth-enabled devices.",
  },
];

const functionalities = [
  {
    functionality_image: "booking",
    functionality_name: "booking",
    functionality_price: 20,
    functionality_desc: "Enable the user to schedule or reserve a booking.",
  },
  {
    functionality_image: "ai",
    functionality_name: "ai-ml",
    functionality_price: 30,
    functionality_desc: "Artificial Intelligence or Machine Learning",
  },
  {
    functionality_image: "vr",
    functionality_name: "ar/vr",
    functionality_price: 40,
    functionality_desc:
      "Augmented Reality or Virtual Reality Intelligence or Machine Learning",
  },
  {
    functionality_image: "message",
    functionality_name: "chat",
    functionality_price: 50,
    functionality_desc:
      "Facilitate in-app communication among users and/or administrators.",
  },
  {
    functionality_image: "cart",
    functionality_name: "shopping cart",
    functionality_price: 60,
    functionality_desc: "Permit users to buy goods or services.",
  },
  {
    functionality_image: "setting",
    functionality_name: "3rd party integration",
    functionality_price: 70,
    functionality_desc: "Incorporate with third-party external entities.",
  },
  {
    functionality_image: "meter",
    functionality_name: "dashboard",
    functionality_price: 80,
    functionality_desc:
      "A visual interface that displays key metrics and data in a centralized location.",
  },
  {
    functionality_image: "user",
    functionality_name: "admin/agent app",
    functionality_price: 90,
    functionality_desc:
      "A distinct application for the administrative or agent functions.",
  },
  {
    functionality_image: "payment",
    functionality_name: "payments",
    functionality_price: 100,
    functionality_desc: "Transferring payments to third-party entities.",
  },
  {
    functionality_image: "blockchain",
    functionality_name: "blockchain",
    functionality_price: 110,
    functionality_desc: "Sending payments to external third-party recipients.",
  },
  {
    functionality_image: "unity",
    functionality_name: "unity game",
    functionality_price: 120,
    functionality_desc: "Games developed using the Unity game engine.",
  },
  {
    functionality_image: "star",
    functionality_name: "ratings",
    functionality_price: 130,
    functionality_desc:
      "A system for users to rate products or services, or for products and services to be rated by users.",
  },
];

export default function AppPricing() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  const [selectedService, setSelectedService] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedFunctionalities, setSelectedFunctionalities] = useState([]);
  const [revealed, setRevealed] = useState(false);

  function handleServices(event) {
    const { value } = event.target;
    const { price } = event.target.dataset;
    setSelectedService({
      name: value,
      price: price,
    });
  }
  const handleFeatures = (event) => {
    const { value, checked } = event.target;
    const { price } = event.target.dataset;

    if (checked) {
      setSelectedFeatures((prevSelectedFeatures) => [
        ...prevSelectedFeatures,
        { name: value, price: price },
      ]);
    } else {
      setSelectedFeatures((prevSelectedFeatures) =>
        prevSelectedFeatures.filter((item) => item.name !== value)
      );
    }
  };
  const handleFunctionalities = (event) => {
    const { value, checked } = event.target;
    const { price } = event.target.dataset;

    if (checked) {
      setSelectedFunctionalities((prevSelectedFunctionalities) => [
        ...prevSelectedFunctionalities,
        { name: value, price: price },
      ]);
    } else {
      setSelectedFunctionalities((prevSelectedFunctionalities) =>
        prevSelectedFunctionalities.filter((item) => item.name !== value)
      );
    }
  };
  const isFeatureSelected = (value) => {
    return selectedFeatures.filter((item) => item.name === value).length === 1;
  };
  const isFunctionalitySelected = (value) => {
    return (
      selectedFunctionalities.filter((item) => item.name === value).length === 1
    );
  };

  const totalPrice = [
    selectedService,
    ...selectedFeatures,
    ...selectedFunctionalities,
  ].reduce((total, item) => {
    return total + +item.price;
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      if ((isMobileScreen && window.scrollY >= 300) || window.scrollY >= 800) {
        setRevealed(true);
      } else setRevealed(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <h1 className="text-center font-bold lg:text-6xl text-3xl">
          <span>
            <Image
              src={"/images/commons/bars.svg"}
              height={50}
              width={50}
              alt="bars"
              className="hidden lg:inline"
            />
          </span>
          <span className="text-primary-red">App </span>
          Pricing
        </h1>
        <p className="desktop:max-w-3xl max-w-2xl text-center my-6 mx-auto">
          {` To assist in estimating the costs associated especially with app
          development, we've developed this pricing form. Play around with it,
          and if you need some help, feel free to contact us anytime.`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-10 px-5 lg:py-24 py-10">
        <div className="flex justify-between items-center mb-16">
          <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold">
            <span className="text-primary-red">What</span> Do You Want To Build
            ?
          </h1>
          <h1 className="text-[100px] hidden md:block absolute right-0 font-montserrat font-bold text-gray-400 opacity-10">
            BUILD
          </h1>
        </div>
        <div className="flex gap-20 justify-between">
          <div className="lg:w-3/5 sm:w-4/5 w-full mx-auto grid sm:grid-cols-2 grid-cols-1 gap-10 justify-between self-start">
            {services.map((service, index) => (
              <>
                <label htmlFor={service.service_name}>
                  <GlassCard
                    key={index}
                    isSelected={
                      selectedService.name === service.service_name
                        ? true
                        : false
                    }
                    image={service.service_image}
                    name={service.service_name}
                    desc={service.service_desc}
                  />
                </label>
                <input
                  type="radio"
                  name="service"
                  id={service.service_name}
                  value={service.service_name}
                  className="hidden"
                  data-price={service.service_price}
                  onChange={handleServices}
                />
              </>
            ))}
          </div>
          <div
            id="CTA"
            className="lg:w-2/5 md:block hidden bg-[#D32A3D] px-10 py-10 lg:rounded-2xl rounded-xl h-full"
          >
            <div className="flex justify-between text-sm mb-8">
              <div>
                <h3 className="mb-4 font-semibold desktop:text-lg text-base">
                  Your Selection
                </h3>
                <h4 className="font-semibold text-center border-b pb-2 mb-4 border-dashed">
                  {selectedService.name}
                </h4>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index}>{feature.name}</li>
                  ))}
                </ul>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFunctionalities.map((functionality, index) => (
                    <li key={index}>{functionality.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold desktop:text-lg text-base">
                  Estimated Cost
                </h3>
                <span className="text-xs">(Subject to Final Scope)</span>
                <h4 className="font-semibold text-center border-b pb-2 mb-4 border-dashed">
                  {selectedService.price}
                </h4>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index}>{feature.price}</li>
                  ))}
                </ul>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFunctionalities.map((functionality, index) => (
                    <li key={index}>{functionality.price}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h1 className="text-4xl text-center font-bold text-white font-montserrat">
              R {isNaN(totalPrice) ? 0 : totalPrice}K
            </h1>

            <div className=" flex flex-col gap-4 mt-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-white italic px-4 py-2 w-full rounded-full focus:outline-none text-gray-700"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white px-4 py-2 italic w-full rounded-full focus:outline-none text-gray-700"
              />

              <button className="bg-[#262626] font-montserrat w-full p-3 rounded-full ">
                Get back to me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-20 px-5 py-10">
        <div className="flex items-center justify-between mb-16">
          <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold ">
            <span className="text-primary-red">What</span> Device Features Does
            It Need?
          </h1>
          <h1 className="text-[100px] hidden md:block absolute right-0 font-montserrat font-bold text-gray-400 opacity-10">
            FEATURES
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 justify-between">
          {device_features.map((feature, index) => (
            <>
              <label htmlFor={feature.feature_name}>
                <GlassCard
                  key={index}
                  isSelected={isFeatureSelected(feature.feature_name)}
                  image={feature.feature_image}
                  name={feature.feature_name}
                  desc={feature.feature_desc}
                />
              </label>
              <input
                type="checkbox"
                name={feature.feature_name}
                id={feature.feature_name}
                value={feature.feature_name}
                onChange={handleFeatures}
                data-price={feature.feature_price}
                className="hidden"
              />
            </>
          ))}
        </div>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <div className="flex items-center justify-between mb-16">
          <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold ">
            <span className="text-primary-red">What</span> Functionality Should
            It Have?
          </h1>
          <h1 className="text-[80px] hidden md:block absolute right-0 font-montserrat font-bold text-gray-400 opacity-10">
            FUNCTIONALITY
          </h1>
        </div>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5 justify-between">
          {functionalities.map((functionality, index) => (
            <>
              <label htmlFor={functionality.functionality_name}>
                <GlassCard
                  key={index}
                  isSelected={isFunctionalitySelected(
                    functionality.functionality_name
                  )}
                  desc={functionality.functionality_desc}
                  image={functionality.functionality_image}
                  name={functionality.functionality_name}
                />
              </label>
              <input
                type="checkbox"
                name={functionality.functionality_name}
                id={functionality.functionality_name}
                value={functionality.functionality_name}
                data-price={functionality.functionality_price}
                onChange={handleFunctionalities}
                className="hidden"
              />
            </>
          ))}
        </div>
      </div>
      {isMobileScreen && (
        <>
          <div className="bg-[#D32A3D] px-5 py-10 rounded-3xl mx-4 mb-12">
            <div className="flex justify-between gap-4 text-sm">
              <div>
                <h3 className="mb-4 font-semibold desktop:text-lg text-base">
                  Your Selection
                </h3>
                <h4 className="font-semibold text-center border-b pb-2 mb-4 border-dashed">
                  {selectedService.name}
                </h4>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index}>{feature.name}</li>
                  ))}
                </ul>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFunctionalities.map((functionality, index) => (
                    <li key={index}>{functionality.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold desktop:text-lg text-base">
                  Estimated Cost
                </h3>
                <span className="text-xs">(Subject to Final Scope)</span>
                <h4 className="font-semibold text-center border-b pb-2 mb-4 border-dashed">
                  {selectedService.price}
                </h4>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFeatures.map((feature, index) => (
                    <li key={index}>{feature.price}</li>
                  ))}
                </ul>
                <ul className="list-disc max-h-16 list-inside pb-2 mb-4 border-b border-dashed overflow-y-auto ">
                  {selectedFunctionalities.map((functionality, index) => (
                    <li key={index}>{functionality.price}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h1 className="text-[50px] text-center font-bold text-white font-montserrat">
              R {isNaN(totalPrice) ? 0 : totalPrice}K
            </h1>
            <div className="px-0 space-y-4 mt-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-white italic p-3 w-full rounded-full focus:outline-none text-gray-700"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white p-3 italic w-full rounded-full focus:outline-none text-gray-700"
              />

              <button className="bg-[#262626] font-montserrat w-full p-3 rounded-full text-[18px]">
                Get back to me
              </button>
            </div>
          </div>
        </>
      )}
      {isMobileScreen ? <MobileFooter /> : <Footer />}
      {revealed ? (
        <div className="sticky bottom-0 w-full py-4 md:px-20 px-5 bg-primary-red text-white text-center text-2xl font-bold z-10">
          <span>R {isNaN(totalPrice) ? 0 : totalPrice}K</span>
          <Link
            className="inline-block md:ml-60 sm:ml-10 ml-5 font-semibold border px-4 py-2 rounded-full border-white desktop:text-lg md:text-base text-sm"
            href={"/pricing#CTA"}
          >
            Get a Quote
          </Link>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
