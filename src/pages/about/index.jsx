import { FeatureAbout } from "@/components/FeatureAbout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsletterCTA from "@/components/NewsletterCTA";
import Statistics from "@/components/Statistics";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const features = [
  {
    feature_image: "user",
    featuer_title: "Personal Immersion",
    feature_desc:
      "We prioritize personal immersion to understand our clients' needs and exceed their expectations. Empathizing with clients and understanding their goals helps us create unique software solutions.",
  },
  {
    feature_image: "thumbs-up",
    featuer_title: "Customer Satisfaction",
    feature_desc:
      "We prioritize customer satisfaction and strive to ensure our clients are happy with our solutions. This is achieved by listening to feedback, being responsive to needs, and continuously improving our services.",
  },
  {
    feature_image: "bubble-checked",
    featuer_title: "Quality Guaranteed",
    feature_desc:
      "We assure you that our services come with a guarantee of top-notch quality. We are committed to delivering excellence and meeting your expectations every time.",
  },
  {
    feature_image: "people",
    featuer_title: "Technical Experts",
    feature_desc:
      "We have a team of tech experts proficient in various programming languages and tools. They stay updated with the latest tech to provide innovative solutions to our clients.",
  },
  {
    feature_image: "flag",
    featuer_title: "Broad Industry Experience",
    feature_desc:
      "We've worked with clients from healthcare, finance, e-commerce, and more. Our industry experience helps us understand each sector's needs and deliver custo-mized software solutions that exceed expectations.",
  },
  {
    feature_image: "analytics",
    featuer_title: "Positive Outcomes",
    feature_desc:
      "We provide top-notch software solutions that fulfill our clients' needs and goals,  using our technical expertise and industry experience. Our commit-ment to customer satisfaction drives their business forward.",
  },
];

const works = [
  {
    work_image: "screen-share",
  },
  {
    work_image: "globe-checked",
  },
  {
    work_image: "globe-plus",
  },
  {
    work_image: "screen",
  },
  {
    work_image: "profile-lock",
  },
  {
    work_image: "robot",
  },
  {
    work_image: "robot-arm",
  },
  {
    work_image: "cloud-sync",
  },
];

export default function About() {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <main className="mx-auto bg-primary bg-cover bg-no-repeat max-w-desktop font-montserrat text-white">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 lg:bg-[#3C64B122] bg-black/20">
        <Navbar />
      </div>
      <div className=" mx-auto desktop:px-32 lg:px-20 px-5 py-20">
        <h1 className="text-center  font-bold lg:text-7xl text-3xl desktop:text-[100px]">
          <span className="text-primary-red">About </span>
          us
        </h1>
        <p className="max-w-3xl desktop:text-xl text-center my-6 mx-auto">
          Proudly serving the top companies with smart software solutions
        </p>
        <hr className="max-w-[200px] border-t border-2 mx-auto border-primary-red" />
        <div className="pt-20">
          <h1 className="text-center  font-semibold lg:text-4xl text-xl">
            Our
            <span className="text-primary-red"> Quality </span>
            Standards
          </h1>
          <p className="max-w-3xl desktop:text-xl text-center my-6 mx-auto">
            Mr Robot Dev is a client-centric company that places a premium on
            delivering superior services.
          </p>
        </div>
        <div className="py-20 grid lg:grid-cols-3 grid-cols-1 lg:gap-28 gap-10">
          {features.map((feature, index) => (
            <FeatureAbout
              key={index}
              title={feature.featuer_title}
              image={feature.feature_image}
              desc={feature.feature_desc}
            />
          ))}
        </div>

        <div className="py-20">
          <h1 className="text-center  font-semibold lg:text-4xl text-xl">
            Who
            <span className="text-primary-red"> We </span>
            Are
          </h1>
          <div className="flex flex-col lg:flex-row desktop:gap-28 gap-10 py-20">
            <div className="basis-1/2">
              <p className="text-justify">
                With years of experience in the industry, Mr. Robot Dev has
                established itself as a leading software development company. We
                have helped startups and established companies alike with their
                software development needs. Our team is made up of skilled
                developers, designers, and project managers who work together to
                ensure that our clients receive the best possible services all
                over the world. <br /> <br /> Our expertise lies in web
                development, app development, custom software solution, and game
                development. We are passionate about helping our clients
                transform their ideas into reality by providing them with
                innovative and efficient software solutions.
              </p>
            </div>
            <div className="basis-1/2">
              <p className="text-justify">
                {`We understand that every project is unique, and we take a
                customized approach to deliver tailor-made solutions that meet
                the specific needs of our clients. At Mr. Robot Dev, We offers
                customized and innovative solutions & meet the unique
                requirements of our clients, delivering exceptional value and a
                superior user experience.`}{" "}
                <br /> <br />{" "}
                {`We use agile development
                methodologies to ensure that we deliver projects on time and
                within budget. We are committed to maintaining the highest level
                of quality in everything we do, and at every opportunity, we
                make it our mission to surpass our clients' expectations and
                deliver services that go above and beyond what they envision.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Statistics isSmallScreen={isSmallScreen} />
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 pt-32 pb-20">
        <div>
          <h1 className="text-center mx-auto max-w-lg font-semibold  lg:text-4xl text-xl">
            <span className="text-primary-red">
              {" "}
              Why We Are The Best Fit For Your{" "}
            </span>
            Tech Innovation?
          </h1>
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
            <div className="basis-1/2">
              <Image
                src={"/images/commons/team.svg"}
                width={700}
                height={400}
                alt="Team Image"
                className="desktop:w-[600px] w-[500px]"
              />
            </div>
            <div className="basis-1/2">
              <h1 className="desktop:text-4xl lg:text-2xl text-xl font-semibold mb-6">
                Dedicated <span className="text-primary-red">Team</span>
              </h1>
              <p className="text-justify  desktop:text-xl w-4/5">
                {`we have a dedicated team of developers, designers, and project
                managers who work together smartly to ensure the success of our
                clients' projects. Our team is committed to delivering
                high-quality software solutions that meet our clients' needs and
                exceed their expectations`}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
            <div className="basis-1/2">
              <h1 className="desktop:text-4xl lg:text-2xl text-xl font-semibold mb-6">
                Best <span className="text-primary-red">Solutions</span>
              </h1>
              <p className="text-justify desktop:text-xl w-4/5">
                {/* we have a dedicated team of developers, designers, and project
                managers who work together smartly to ensure the success of our
                clients' projects. Our team is committed to delivering
                high-quality software solutions that meet our clients' needs and
                exceed their expectations */}
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src={"/images/commons/solutions.svg"}
                width={700}
                height={400}
                alt="Team Image"
                className="desktop:w-[600px] w-[500px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
            <div className="basis-1/2">
              <Image
                src={"/images/commons/accountability.svg"}
                width={700}
                height={400}
                alt="Team Image"
                className="desktop:w-[600px] w-[500px]"
              />
            </div>
            <div className="basis-1/2">
              <h1 className="desktop:text-4xl lg:text-2xl text-xl font-semibold mb-6">
                <span className="text-primary-red">Accountability</span>
              </h1>
              <p className="text-justify  desktop:text-xl w-4/5">
                {` we understand that accountability is critical to delivering
                quality solutions to our clients, that’ why we take full
                responsibility for every aspect of the development process, from
                ideation to deployment, ensuring that our clients' expectations
                are met with the highest level of excellence.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto desktop:px-32 lg:px-20 px-5">
        <h1 className="text-center desktop:text-6xl lg:text-4xl text-2xl font-bold text-white mb-10">
          <span className="text-primary-red">Our</span> Work
        </h1>

        <div className="py-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] border border-gray-500 rounded-2xl flex items-center justify-center py-14 px-10"
            >
              <Image
                alt="Work Image"
                src={`/images/commons/${work.work_image}.svg`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 py-20">
        <h1 className="text-center desktop:text-6xl lg:text-4xl text-xl font-bold text-white mb-10">
          <span className="text-primary-red">Our</span> Newsletter
        </h1>
        <NewsletterCTA />
      </div>
      <Footer />
    </main>
  );
}
