import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import GlassCard from "@/components/GlassCard";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/helpers/generic";

export default function AppPricing() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  const [selectedService, setSelectedService] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedFunctionalities, setSelectedFunctionalities] = useState([]);
  const [functionalities, setFunctionalities] = useState([]);
  const [services, setServices] = useState([]);
  const [device, setDevice] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const myDivRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getPricingItems = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/pricingitems`);
      console.log(data);
      setDevice(data.Device);
      setServices(data.Service);
      setFunctionalities(data.Functionality);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getPricingItems();
  }, []);

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
    if (Object.keys(selectedService).length == 0) {
      navigateToDiv();
      return;
    }

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
    if (Object.keys(selectedService).length == 0) {
      navigateToDiv();
      return;
    }

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

  const navigateToDiv = () => {
    if (!toast.isActive("my-toast-id5")) {
      toast.error("Please select build first!!", {
        toastId: "my-toast-id5",
      });
      if (myDivRef.current) {
        myDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      fullName: name,
      email: email,
      type: "App pricing",
      appPricing: {
        service: [selectedService],
        functionalities: [...selectedFunctionalities],
        devices: [...selectedFeatures],
        totalPrice: Number(totalPrice.toFixed(3)),
      },
    };
    try {
      const response = await axios.post(`${baseURL}/contactus`, payload);
      toast.success("Information Submitted Successfully", {});
      setName("");
      setEmail("");
      setSelectedService({});
      setSelectedFeatures([]);
      setSelectedFunctionalities([]);
    } catch (e) {
      toast.error("Something went wrong!!", {});
      console.log("Error Post", e);
    }
  };
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
      <div
        className=" mx-auto desktop:px-36 lg:px-10 px-5 lg:py-24 py-10"
        id="myDiv"
        ref={myDivRef}
      >
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
            {services?.map((item, index) => (
              <>
                <label htmlFor={item?.name}>
                  <GlassCard
                    key={index}
                    isSelected={
                      selectedService.name === item.name ? true : false
                    }
                    image={item?.logo}
                    name={item?.name}
                    desc={item?.description}
                  />
                </label>
                <input
                  type="radio"
                  name="service"
                  id={item?.name}
                  value={item?.name}
                  className="hidden"
                  data-price={item?.price}
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
              R {isNaN(totalPrice) ? 0 : totalPrice?.toFixed(3)}
            </h1>

            <form className=" flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="bg-white italic px-4 py-2 w-full rounded-full focus:outline-none text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white px-4 py-2 italic w-full rounded-full focus:outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-[#262626] font-montserrat w-full p-3 rounded-full "
              >
                Get back to me
              </button>
            </form>
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
          {device?.map((feature, index) => (
            <>
              <label htmlFor={feature?.name}>
                <GlassCard
                  key={index}
                  isSelected={isFeatureSelected(feature?.name)}
                  image={feature?.logo}
                  name={feature?.name}
                  desc={feature?.description}
                />
              </label>
              <input
                type="checkbox"
                name={feature.name}
                id={feature.name}
                value={feature.name}
                onChange={handleFeatures}
                data-price={feature.price}
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
              <label htmlFor={functionality?.name}>
                <GlassCard
                  key={index}
                  isSelected={isFunctionalitySelected(functionality?.name)}
                  desc={functionality?.description}
                  image={functionality?.logo}
                  name={functionality?.name}
                />
              </label>
              <input
                type="checkbox"
                name={functionality?.name}
                id={functionality?.name}
                value={functionality?.name}
                data-price={functionality?.price}
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
              R {isNaN(totalPrice) ? 0 : totalPrice?.toFixed(3)}
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
          <span>R {isNaN(totalPrice) ? 0 : totalPrice?.toFixed(3)}</span>
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
