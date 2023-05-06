import Image from "next/image";

export default function ServiceCard({ name, desc, image, smallScreen }) {
  return (
    <div className="rounded-xl bg-white shadow-md lg:p-8 px-8 py-4 desktop:w-[500px] desktop:h-[700px] lg:h-[600px] lg:w-96">
      <div>
        <Image
          src={`/images/commons/${image}`}
          width={419}
          height={292}
          alt={name}
          className="mx-auto w-[420px] desktop:h-[300px] h-56"
        />
      </div>
      <h1 className="text-primary text-center desktop:text-[40px] text-2xl font-bold mt-8">
        {name}
      </h1>
      <p className="desktop:text-xl text-base text-center font-medium leading-relaxed desktop:h-36 h-32 my-4">
        {desc}
      </p>
      <div className="text-center">
        <button className="desktop:py-4 desktop:px-8 py-3 px-6 bg-black rounded-full text-white desktop:text-xl text- drop-shadow-md">
          Read More
        </button>
      </div>
    </div>
  );
}
