export default function NewsletterCTA() {
  return (
    <div className="mx-auto desktop:px-32 lg:px-20 px-5 py-20">
      <h1 className="text-center desktop:text-6xl lg:text-4xl text-xl font-bold text-white mb-10">
        <span className="text-primary-red">Our</span> Newsletter
      </h1>
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
    </div>
  );
}
