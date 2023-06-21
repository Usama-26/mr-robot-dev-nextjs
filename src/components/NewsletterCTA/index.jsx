import CombineRepository from "@/repositories/CombineRepository";
import { useState } from "react";
import alert from "../Notification/Alert";

export default function NewsletterCTA() {
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
    <div className="mx-auto desktop:px-32 lg:px-20 px-5 pb-24">
      <h1 className="text-center desktop:text-6xl lg:text-4xl text-xl font-bold text-white mb-5">
        <span className="text-primary-red">Our</span> Newsletter
      </h1>
      <div className="text-center">
        <form onSubmit={subscribeNewsLetter}>
          <span className="relative">
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="desktop:py-3 px-4 py-2 rounded-full bg-white lg:w-96 md:w-72 w-60 placeholder:text-sm placeholder:text-black drop-shadow-md"
              placeholder="Your Email..."
            />

            <button
              type="submit"
              className="px-4 desktop:py-3 py-2 rounded-full text-white bg-primary-red absolute right-0 hover:bg-primary-red-dark "
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
