import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import GlassCard from "@/components/GlassCard";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";

const services = [
  {
    service_image: "mvp",
    service_name: "mvp",
  },
  {
    service_image: "appp",
    service_name: "app",
  },
  {
    service_image: "game",
    service_name: "game",
  },
  {
    service_image: "platform",
    service_name: "platform",
  },
];

const device_features = [
  {
    feature_image: "camera",
    feature_name: "camera",
  },
  {
    feature_image: "geo",
    feature_name: "geolocation",
  },
  {
    feature_image: "chat",
    feature_name: "push notification",
  },
  {
    feature_image: "blue",
    feature_name: "bluetooth integration",
  },
];

const functionalities = [
  {
    functionality_image: "booking",
    functionality_name: "booking",
  },
  {
    functionality_image: "ai",
    functionality_name: "ai-ml",
  },
  {
    functionality_image: "vr",
    functionality_name: "ar/vr",
  },
  {
    functionality_image: "message",
    functionality_name: "chat",
  },
  {
    functionality_image: "cart",
    functionality_name: "shopping cart",
  },
  {
    functionality_image: "setting",
    functionality_name: "3rd party integration",
  },
  {
    functionality_image: "meter",
    functionality_name: "dashboard",
  },
  {
    functionality_image: "user",
    functionality_name: "admin/agent app",
  },
  {
    functionality_image: "payment",
    functionality_name: "payments",
  },
  {
    functionality_image: "blockchain",
    functionality_name: "blockchain",
  },
  {
    functionality_image: "unity",
    functionality_name: "unity game",
  },
  {
    functionality_image: "star",
    functionality_name: "ratings",
  },
];

export default function AppPricing() {
  const isMobileScreen = useMediaQuery("(max-width: 1024px");
  const [data, setData] = useState([]);
  const handleData = (name, value) => {
    setData([...data, { name, value }]);
  };
  // const [totalValue, setTotalValue] = useState(0);
  const totalValue = data.reduce((total, item) => {
    return total + item.value;
  }, 0);
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <h1 className="text-center  font-bold lg:text-6xl text-3xl">
          <span className="text-primary-red">App </span>
          Pricing
        </h1>
        <p className="desktop:max-w-3xl max-w-2xl text-center my-6 mx-auto">
          {` To assist in estimating the costs associated especially with app
          development, we've developed this pricing form. Play around with it,
          and if you need some help, feel free to contact us anytime.`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 lg:py-24 py-10">
        <div className="flex justify-between items-center mb-16">
          <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold">
            <span className="text-primary-red">What</span> Do You Want To Build
            ?
          </h1>
          <h1 className="text-[100px] hidden md:block absolute right-0 font-montserrat font-bold text-gray-400 opacity-10">
            BUILD
          </h1>
        </div>
        <div className="flex desktop:gap-28 gap-10 justify-between items-center">
          <div className="md:w-1/2 w-full grid sm:grid-cols-2 grid-cols-1 gap-10 justify-between">
            {services.map((service, index) => (
              <GlassCard
                key={index}
                image={service.service_image}
                name={service.service_name}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:block hidden bg-[#D32A3D] px-5 py-10 rounded-3xl">
            {/* <div className="flex gap-5 text-[30px] max-h-[300px] overflow-y-auto font-montserrat justify-between px-8 font-semibold">
              <div>
                <h1>Your Selection</h1>
                <ul className="text-center font-montserrat font-light mt-4">
                  {data?.map((item) => (
                    <>
                      <li>{item.name}</li>
                    </>
                  ))}
                </ul>
              </div>
              <div>
                <h1>Estimated Cost</h1>
                <p className="text-[14px] font-montserrat font-light text-center">
                  (Subject to Final Scope)
                </p>
                <ul className="text-center font-montserrat font-light">
                  {data?.map((item) => (
                    <>
                      <li>{item.value}</li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[50px] text-center font-bold text-white font-montserrat">
                R OK
              </h1>
              <h1 className="text-center font-semibold font-montserrat text-[40px]">
                {totalValue}
              </h1>
            </div> */}
            <div className="px-12 space-y-4 mt-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-white italic p-3 w-full rounded-md focus:outline-none text-gray-700"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-white p-3 italic w-full rounded-md focus:outline-none text-gray-700"
              />

              <button className="bg-[#262626] font-montserrat w-full p-3 rounded-md text-[20px]">
                Get back to me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto desktop:px-36 lg:px-28 px-5 py-10">
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
            <GlassCard
              key={index}
              image={feature.feature_image}
              name={feature.feature_name}
            />
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
            <GlassCard
              key={index}
              image={functionality.functionality_image}
              name={functionality.functionality_name}
            />
          ))}
        </div>
      </div>
      {isMobileScreen && (
        <>
          <div className=" bg-[#D32A3D] px-5 py-10 rounded-3xl mx-4 mb-12">
            <div className="flex gap-5 text-[16px] max-h-[300px] overflow-y-auto font-montserrat justify-between px-2 font-semibold">
              <div>
                <h1>Your Selection</h1>
                <ul className="text-center font-montserrat font-light mt-4">
                  {data?.map((item) => (
                    <>
                      <li>{item.name}</li>
                    </>
                  ))}
                </ul>
              </div>
              <div>
                <h1>Estimated Cost</h1>
                <p className="text-[8px] font-montserrat font-light text-center">
                  (Subject to Final Scope)
                </p>
                <ul className="text-center font-montserrat font-light">
                  {data?.map((item) => (
                    <>
                      <li>{item.value}</li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-[30px] text-center font-bold text-white font-montserrat">
                R OK
              </h1>
              <h1 className="text-center font-semibold font-montserrat text-[30px]">
                {totalValue}
              </h1>
            </div>
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
    </main>
  );
}
