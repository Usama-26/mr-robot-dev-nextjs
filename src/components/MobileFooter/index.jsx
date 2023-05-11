import Image from "next/image";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <footer className="bg-[#3F3637]">
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 border-b desktop:text-xl text-sm text-white">
        <Image
          src={"/images/commons/logo-primary.png"}
          alt="Team Image"
          height={"260"}
          width={410}
          className="w-20 h-20 object-cover"
        />
        <div className="flex ml-3 justify-between">
          <div>
            <h1 className="font-bold text-lg mb-6">Links</h1>
            <ul>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-primary-red">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/services"} className="hover:text-primary-red">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/pricing"} className="hover:text-primary-red">
                  App Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/blog"} className="hover:text-primary-red">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/about"} className="hover:text-primary-red">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/contact"} className="hover:text-primary-red">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-6">What we do</h1>
            <ul>
              <li className="mb-2">
                <Link
                  href={"/services/web_development"}
                  className="hover:text-primary-red"
                >
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/services/app_development"}
                  className="hover:text-primary-red"
                >
                  App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/services/custom_software"}
                  className="hover:text-primary-red"
                >
                  Custom Software
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/services/game_development"}
                  className="hover:text-primary-red"
                >
                  Game Development
                </Link>
              </li>
            </ul>
            <h1 className="font-bold text-lg mb-2">Company</h1>
            <ul>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-primary-red">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/services"} className="hover:text-primary-red">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-10 mt-10">
          <div className="text-xs flex flex-col gap-3 ml-3">
            <p>Address: Cape Town, South Africa</p>
            <p>Phone: +84 3 28 99 49 49</p>
            <p>Email: mrrobotdev.co.za</p>
          </div>
          <div className="flex flex-col">
            <Link href={"/"}>
              <Image
                src={"/images/mobile/facebook.svg"}
                width={64}
                height={64}
                className="w-10 h-10 mb-4"
                alt="facebook link"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/mobile/instagram.svg"}
                width={64}
                height={64}
                className="w-10 h-10 mb-4"
                alt="facebook link"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/mobile/linkedin.svg"}
                width={64}
                height={64}
                className="w-10 h-10 mb-4"
                alt="facebook link"
              />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center">Copyright mrrobotdev.com 2023.</p>
        </div>
      </div>
    </footer>
  );
}
