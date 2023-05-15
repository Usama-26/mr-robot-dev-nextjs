import Image from "next/image";
import React from "react";
export function HomeProvisionCard({ name, image, desc }) {
  return (
    <div className="rounded-xl bg-white shadow-md lg:p-8 px-8 py-4 desktop:w-[400px] w-[300px] desktop:h-[500px] lg:h-[450px] h-[400px]">
      <div className="desktop:mb-8 lg:mb-6 mb-4">
        <Image
          src={`/images/commons/${image}.png`}
          width={200}
          height={200}
          alt="Analytics Image"
          className="mx-auto desktop:w-36 desktop:h-36 h-28 w-28"
        />
      </div>
      <h1 className="text-primary-red text-center desktop:text-2xl lg:text-xl font-extrabold uppercase mb-6">
        {name}
      </h1>
      <p className="desktop:text-xl text-center leading-relaxed">{desc}</p>
    </div>
  );
}
