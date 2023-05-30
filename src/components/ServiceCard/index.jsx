import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ServiceCard({ name, desc, image, smallScreen, path }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(path);
  };
  return (
    <div className="rounded-xl bg-white shadow-md lg:p-8 px-8 py-4">
      <div>
        <Image
          src={`/images/commons/${image}`}
          width={419}
          height={292}
          alt={name}
          className="mx-auto w-[420px] desktop:h-[300px] object-contain h-56"
        />
      </div>
      <h1 className="text-primary text-center desktop:text-[40px] text-2xl font-bold mt-8">
        {name}
      </h1>
      <p className="desktop:text-xl text-base text-center font-medium leading-relaxed desktop:h-36 h-32 my-4">
        {desc}
      </p>
      <div className="text-center">
        <button
          className="desktop:py-4 desktop:px-8 py-3 px-6 bg-primary-dark hover:bg-black rounded-full text-white desktop:text-xl"
          onClick={() => handleRoute()}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
