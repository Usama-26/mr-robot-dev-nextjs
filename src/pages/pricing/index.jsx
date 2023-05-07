import Navbar from "@/components/Navbar";

export default function AppPricing() {
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 py-24">
        <h1 className="text-center  font-bold lg:text-7xl text-3xl desktop:text-[100px]">
          <span className="text-primary-red">App </span>
          Pricing
        </h1>
        <p className="max-w-4xl text-center my-6 mx-auto">
          To assist in estimating the costs associated especially with app
          development, we've developed this pricing form. Play around with it,
          and if you need some help, feel free to contact us anytime.
        </p>
      </div>
    </main>
  );
}
