import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopment() {
  const isMobileScreen = useMediaQuery("(max-width: 640px");
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10">
        <h1 className="text-center font-bold lg:text-6xl text-3xl">
          Game
          <span className="text-primary-red"> Development </span>
        </h1>
        <p className="max-w-4xl desktop:text-xl text-lg text-center my-6 mx-auto">
          we are committed to creating captivating gaming experiences, one game
          at a time.
        </p>
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 lg:py-24 py-10 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          <div className="basis-1/2 md:text-left text-center">
            <h1 className="desktop:text-5xl lg:text-3xl text-xl font-bold mb-6 md:text-left text-center">
              <span className="text-primary-red"> Custom </span>
              Games
            </h1>
            <p className="text-justify  desktop:text-xl md:mx-0 mx-auto">
              {`  We provide full-service game development, offering a diverse range of services such as game design, programming, art, and animation. Our team is dedicated to providing tailored and high-quality game development services that align with our clients' unique requirements. If you're seeking to bring your game idea to fruition, Mr. Robot Dev has the expertise and support to make it a reality.`}
            </p>
          </div>
          <div className="basis-1/2">
            <Image
              src={"/images/commons/game-development-1.png"}
              width={700}
              height={400}
              alt="Team Image"
              className="desktop:w-[600px] w-[500px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          <div className="basis-1/2">
            <Image
              src={"/images/commons/game-development-2.png"}
              width={700}
              height={400}
              alt="Team Image"
              className="desktop:w-[600px] w-[500px]"
            />
          </div>
          <div className="basis-1/2 md:text-left text-center">
            <h1 className="desktop:text-5xl lg:text-3xl text-xl font-bold mb-6 md:text-left text-center">
              <span className="text-primary-red"> We </span>
              take game development to the
              <span className="text-primary-red"> next </span> level
            </h1>
            <p className="text-justify  desktop:text-xl md:mx-0 mx-auto">
              We pride ourselves on taking game development to the next level.
              We believe that every game should be a unique and immersive
              experience that engages players on a deeper level. To achieve
              this, we use the latest technology and industry best practices to
              create games that are visually stunning, highly interactive, and
              optimized for different platforms and devices.
              {`Whether you're looking to create a mobile game, PC game, or console game, we have the expertise and creativity to bring your vision to life and take it to the next level.`}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          <div className="basis-1/2 md:text-left text-center">
            <h1 className="desktop:text-5xl lg:text-5xl text-xl font-bold mb-6 md:text-left text-center">
              We
              <span className="text-primary-red"> deliver </span>
              responsive design
              <span className="text-primary-red"> VR gaming </span>
              experience
            </h1>
            <p className="text-justify  desktop:text-xl md:mx-0 mx-auto">
              “Crafting immersive worlds” we are dedicated to delivering the
              best VR experience games on the market. We believe that VR is the
              future of gaming and that it has the power to transform the way
              players experience games. To achieve this, we use top technology
              and innovative design to create immersive worlds that players can
              explore and interact with in ways that were never before possible.
              {`From concept to launch, we are committed to delivering games that
              push the boundaries of what's possible in VR gaming and provide
              players with an unforgettable experience. If you're looking to
              create a VR game, we have the expertise and passion to help you
              bring your vision to life and deliver the best VR experience
              possible.`}
            </p>
          </div>
          <div className="basis-1/2">
            <Image
              src={"/images/commons/game-development-3.png"}
              width={700}
              height={400}
              alt="Team Image"
              className="desktop:w-[600px] w-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <h1 className="font-bold text-2xl mb-4">
          Ready to try different work experience now?
        </h1>
        <h6 className="mb-6">
          Get the best working experience that you never feel before
        </h6>
        <div>
          <Link
            href={"/contact"}
            className="text-white font-semibold desktop:text-2xl text-lg rounded-full desktop:px-6 desktop:py-3 px-4 py-2 bg-primary-red drop-shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {isMobileScreen ? <MobileFooter /> : <Footer />}
    </main>
  );
}
