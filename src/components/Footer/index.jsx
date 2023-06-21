import Image from "next/image";
import Link from "next/link";
import { MdMail, MdPhone } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CombineRepository from "@/repositories/CombineRepository";
import alert from "../Notification/Alert";
export default function Footer() {
  const styles = {
    footer_links_li: "relative mb-4 footer-link",
  };
  const [email, setEmail] = useState("");
  async function subscribeNewsLetter(e) {
    e.preventDefault();
    try {
      const data = await CombineRepository.subscribeNewsLetter({
        email: email,
      });
      alert.showSuccessAlert(
        "You have successfully subscribed to our NewsLetter"
      );
      setEmail("");
    } catch (error) {
      alert.showErrorAlert(error);
    }
  }
  return (
    <footer className="bg-primary-red-dark/25 ">
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 border-b desktop:text-xl text-sm text-white">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 pt-20 pb-10">
          <div>
            <div className="flex flex-col items-start">
              <Image
                src={"/images/commons/logo-secondary.png"}
                alt="Team Image"
                height={"260"}
                width={410}
                className="w-96 h-20 object-cover desktop:-ml-11 -ml-9"
              />
              <h6 className=" desktop:text-base">Midrand, South Africa</h6>
            </div>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Pages</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"pricing"}>App Pricing</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"blog"}>Blogs</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"about"}>About us</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"contact"}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Services</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <Link href={"/services/web_development"}>Web Development</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/services/app_development"}>App Development</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/services/custom_software"}>Custom Software</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/services/game_development"}>
                  Game Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Social Media</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li}>
                <a
                  href="https://www.facebook.com/profile.php?id=100092171062219"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/"}>LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-0 font-semibold">Contact Us</h5>
            <ul className="list-none">
              <li
                className={styles.footer_links_li + " flex items-center gap-2"}
              >
                {/* <MdMail className="w-5 h-5" />
                <Link href={"mailto:sales@mrrobotdev.com"}>
                  sales@mrrobotdev.com
                </Link> */}
              </li>
              {/* <li className={styles.footer_links_li + " inline-flex gap-2"}>
                <MdPhone className="w-5 h-5" />
                <Link href={"tel:+27799577606"}>+27 79 957 7606</Link>
              </li> */}
              <li className={" mt-0 mb-4"}>
                <h5 className="desktop:text-xl  font-semibold">
                  Subscribe to our Newsletter
                </h5>
              </li>
              <li className="relative mb-4">
                <form onSubmit={subscribeNewsLetter}>
                  <input
                    type="email"
                    className="desktop:p-4 p-2 rounded-full w-full text-black"
                    placeholder="Your email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-primary-red desktop:px-4 desktop:py-2 px-2 py-1 rounded-r-full absolute right-0 h-full "
                  >
                    <IoPaperPlane className="w-6 h-6 " />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 ml-10 flex justify-between items-center desktop:text-xl text-sm text-white">
        <ul className="list-none flex py-8 gap-8 ">
          <li className="hover:text-underline">
            <Link href={"/"}>Cookies Policy</Link>
          </li>

          <li className="hover:text-underline">
            <Link href={"/"}>Privacy Policy</Link>
          </li>

          <li className="hover:text-underline">
            <Link href={"/"}>Terms & Condition</Link>
          </li>
        </ul>
        <span>© 2023, Mr.RobotDev PTY LTD, All Rights Reserved</span>
      </div>
    </footer>
  );
}
