export default function NewsletterCTA() {
  return (
    <div className="text-center">
      <form>
        <span className="relative">
          <input
            type="email"
            id="email"
            className="desktop:py-3 px-4 py-2 rounded-full bg-white lg:w-96 md:w-72 w-60 placeholder:text-sm placeholder:text-black drop-shadow-md"
            placeholder="Your Email..."
          />

          <button className="px-4 desktop:py-3 py-2 rounded-full text-white bg-primary-red absolute right-0 ">
            Submit
          </button>
        </span>
      </form>
    </div>
  );
}
