import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Navbar from "@/components/Navbar";

const services = [
  {
    service_image: "plug",
    service_name: "mvp",
  },
  {
    service_image: "html5",
    service_name: "app",
  },
  {
    service_image: "game-controller",
    service_name: "game",
  },
  {
    service_image: "rocket",
    service_name: "platform",
  },
];

const device_features = [
  {
    feature_image: "camera",
    feature_name: "camera",
  },
  {
    feature_image: "map-pin",
    feature_name: "geolocation",
  },
  {
    feature_image: "chat-bubble",
    feature_name: "push notification",
  },
  {
    feature_image: "bluetooth",
    feature_name: "bluetooth integration",
  },
];

const functionalities = [
  {
    functionality_image: "calendar",
    functionality_name: "booking",
  },
  {
    functionality_image: "ai-ml",
    functionality_name: "ai-ml",
  },
  {
    functionality_image: "ar-vr",
    functionality_name: "ar/vr",
  },
  {
    functionality_image: "messages",
    functionality_name: "chat",
  },
  {
    functionality_image: "shopping-cart",
    functionality_name: "shopping cart",
  },
  {
    functionality_image: "wrench",
    functionality_name: "3rd party integration",
  },
  {
    functionality_image: "dashboard",
    functionality_name: "dashboard",
  },
  {
    functionality_image: "admin",
    functionality_name: "admin/agent app",
  },
  {
    functionality_image: "credit-card",
    functionality_name: "payments",
  },
  {
    functionality_image: "bitcoin",
    functionality_name: "blockchain",
  },
  {
    functionality_image: "insurance-card",
    functionality_name: "loyalty program",
  },
  {
    functionality_image: "star",
    functionality_name: "ratings",
  },
];
export default function AppPricing() {
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <h1 className="text-center  font-bold lg:text-7xl text-3xl desktop:text-[100px]">
          <span className="text-primary-red">App </span>
          Pricing
        </h1>
        <p className="max-w-4xl text-center my-6 mx-auto">
          {` To assist in estimating the costs associated especially with app
          development, we've developed this pricing form. Play around with it,
          and if you need some help, feel free to contact us anytime.`}
        </p>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold mb-16">
          <span className="text-primary-red">What</span> Do You Want To Build ?
        </h1>
        <div className="flex desktop:gap-28 gap-10 justify-between items-center">
          <div className="md:w-1/2 w-full grid md:grid-cols-2 grid-cols-1 gap-10 justify-between">
            {services.map((service, index) => (
              <GlassCard
                key={index}
                image={service.service_image}
                name={service.service_name}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:block hidden">
            <div className="p-20 mx-auto rounded-3xl bg-primary-red text-white">
              <form action="" className="flex flex-col gap-4">
                <input
                  type="text"
                  className="rounded-md drop-shadow-md p-4 w-full"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="rounded-md drop-shadow-md p-4 w-full"
                  placeholder="Email"
                />
                <button className="w-full block bg-primary-dark text-white mt-4 p-4 rounded-md drop-shadow-md">
                  Get back to me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <h1 className="desktop:text-4xl text-2xl  lg:text-left text-center font-semibold mb-16">
          <span className="text-primary-red">What</span> Device Features Does It
          Need?
        </h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-between">
          {device_features.map((feature, index) => (
            <GlassCard
              key={index}
              image={feature.feature_image}
              name={feature.feature_name}
            />
          ))}
        </div>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 ">
        <h1 className="desktop:text-4xl text-2xl lg:text-left text-center font-semibold mb-16">
          <span className="text-primary-red">What</span> Functionality Should It
          Have?
        </h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-between">
          {functionalities.map((functionality, index) => (
            <GlassCard
              key={index}
              image={functionality.functionality_image}
              name={functionality.functionality_name}
            />
          ))}
        </div>
      </div>
      {/* <Footer />  */}
    </main>
  );
}
