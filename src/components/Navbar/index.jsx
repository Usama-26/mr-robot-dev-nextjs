import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileOverlayNav from "../MobileOverlayNav";
import { Popover } from "@headlessui/react";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  function openMobileNav() {
    setIsMobileNavVisible(true);
  }

  function closeMobileNav() {
    setIsMobileNavVisible(false);
  }

  const styles = {
    "nav-link":
      "relative text-white desktop:text-xl text-base hover:text-primary-red",
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link href={"/"} className="focus:outline-none">
          <Image
            src={"/images/commons/logo-primary.png"}
            width={160}
            height={160}
            alt="Mr. Robot Dev Logo"
            className="desktop:w-32 desktop:h-32 md:w-24 md:h-24 w-16 h-16"
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center list-none desktop:gap-16 gap-12">
          <li className={styles["nav-link"]}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Popover className="relative">
              <Popover.Button
                className={"inline-flex items-center focus:outline-none"}
              >
                Services
                <MdArrowDropDown />
              </Popover.Button>

              <Popover.Panel className="absolute top-10 right-0 z-10 font-normal text-black desktop:text-base text-xs bg-white rounded-xl desktop:w-72 w-56">
                <div className="flex flex-col text-center">
                  <Link
                    className="py-2 hover:bg-gray-200 rounded-t-xl"
                    href="/services/web_development"
                  >
                    Website Development
                  </Link>
                  <Link
                    className="py-2 hover:bg-gray-200"
                    href="/services/app_development"
                  >
                    App Development
                  </Link>
                  <Link
                    className="py-2 hover:bg-gray-200"
                    href="/services/custom_software"
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    className="py-2 hover:bg-gray-200 rounded-b-xl"
                    href="/services/game_development"
                  >
                    Game Development
                  </Link>
                </div>
              </Popover.Panel>
            </Popover>
          </li>
          <li className={styles["nav-link"]}>
            <Link href={"/pricing"}>App Pricing</Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href={"/blog"}>Blog </Link>
          </li>
          <li className={styles["nav-link"]}>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <Link
          href={"/contact"}
          className="text-white font-semibold desktop:text-xl text-base rounded-full desktop:px-6 desktop:py-3 px-4 py-2 bg-primary-red drop-shadow-md"
        >
          Contact Us
        </Link>
      </div>
      <div className="lg:hidden z-20">
        <button onClick={isMobileNavVisible ? closeMobileNav : openMobileNav}>
          <Image
            src={"/images/mobile/menu-btn.svg"}
            width={29}
            height={20}
            alt="Mr. Robot Dev Logo"
          />
        </button>
      </div>
      <MobileOverlayNav
        isVisible={isMobileNavVisible}
        setIsVisible={setIsMobileNavVisible}
      />
    </div>
  );
}
