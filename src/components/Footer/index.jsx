import Image from "next/image";
import Link from "next/link";
import { MdMail, MdPhone } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
export default function Footer() {
  const styles = {
    footer_links_li: "relative mb-4 hover:text-primary-red",
  };
  return (
    <footer className="lg:bg-primary-red-dark/25 bg-[#3F3637]">
      <div className="mx-auto desktop:px-36 lg:px-28 px-5 border-b desktop:text-xl text-sm text-white">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 pt-20 pb-10">
          <div>
            <div>
              <Image
                src={"/images/commons/logo-secondary.png"}
                alt="Team Image"
                height={"260"}
                width={410}
                className="w-96 h-20 object-cover"
              />
            </div>
            <h6 className="desktop:ml-11 ml-7 desktop:text-base">
              Midrand, South Africa
            </h6>
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
                <Link href={"blogs"}>Blogs</Link>
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
                <Link href={"/"}>Twitter</Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"www.facebook.com/profile.php?id=100092171062219"}>
                  Facebook
                </Link>
              </li>
              <li className={styles.footer_links_li}>
                <Link href={"/"}>LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="desktop:text-xl mb-4 font-semibold">Contact Us</h5>
            <ul className="list-none">
              <li className={styles.footer_links_li + " inline-flex gap-2"}>
                <MdMail className="w-5 h-5" />
                <Link href={"mailto:sales@mrrobotdev.com"}>
                  sales@mrrobotdev.com
                </Link>
              </li>
              <li className={styles.footer_links_li + " inline-flex gap-2"}>
                <MdPhone className="w-5 h-5" />
                <Link href={"phone:+27799577606"}>+27 79 957 7606</Link>
              </li>
              <li className={" mb-8"}>
                <h5 className="text-xl font-semibold">
                  Subscribe to our Newsletter
                </h5>
              </li>
              <li className="relative mb-4">
                <form>
                  <input
                    type="email"
                    className="desktop:p-4 p-3 rounded-lg w-full"
                    placeholder="Your email"
                  />
                  <button className="bg-primary-red desktop:px-4 desktop:py-2 px-2 py-1 rounded-md absolute desktop:top-1 desktop:right-1 top-0.5 right-0.5 ">
                    <IoPaperPlane className="w-8 h-8 " />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto desktop:px-32 lg:px-20 px-5 ml-10 flex justify-between items-center desktop:text-xl text-sm text-white">
        <ul className="list-none flex py-8 gap-8 ">
          <li className="hover:text-primary-red">
            <Link href={"cookies_policy"}>Cookies Policy</Link>
          </li>

          <li className="hover:text-primary-red">
            <Link href={"privacy_policy"}>Privacy Policy</Link>
          </li>

          <li className="hover:text-primary-red">
            <Link href={"terms_conditions"}>Terms & Condition</Link>
          </li>
        </ul>
        <Link href={"/"}>© 2023, www.mrrobotdev.com All Right Reserved</Link>
      </div>
    </footer>
  );
}
