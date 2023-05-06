import Link from "next/link";

export default function MobileOverlayNav({ isVisible, setIsVisible }) {
  const styles = {
    "nav-link": "text-xl mb-8 font-semibold tracking-wider",
  };
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen flex justify-center text-white lg:hidden bg-primary-red transition-all duration-200 ${
        isVisible ? "opacity-full visible" : "opacity-0 invisible"
      }`}
    >
      <ul className="list-none text-center mt-20">
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            Home
          </Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            Services
          </Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            App Pricing
          </Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            Blog
          </Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            About
          </Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link href="/" onClick={() => setIsVisible(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
