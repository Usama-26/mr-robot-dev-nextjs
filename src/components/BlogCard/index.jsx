import Image from "next/image";

export default function BlogCard({ image, title, desc }) {
  return (
    <div className="flex flex-col justify-between">
      <div className="rounded-lg bg-[#2f2f2f] mb-4">
        <Image
          src={`/images/commons/${image}.png`}
          width={300}
          height={300}
          alt="Blog hero img"
          className="mx-auto desktop:w-72 desktop:h-72 w-60 h-60 p-8"
        />
      </div>
      <h1 className="desktop:text-3xl lg:text-2xl text-xl font-bold text-center mx-5 mb-4">
        {title}
      </h1>
      <p className="desktop:text-xl text-md text-center mx-5">{desc}</p>
    </div>
  );
}
