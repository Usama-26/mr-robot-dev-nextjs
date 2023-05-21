import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function GlassCard({ image, name, desc, isSelected }) {
  const isMobileScreen = useMediaQuery("(max-width: 1023px");
  return (
    <div
      className={` flex justify-center items-center py-10 rounded-md border border-zinc-600 relative transition-all duration-500 ${
        isMobileScreen || isSelected ? "bg-white" : "bg-white/10"
      }`}
    >
      <div>
        <Image
          src={
            isSelected || isMobileScreen
              ? `/mobile/${image}.png`
              : `/desktop/${image}.png`
          }
          alt="Service Image"
          width={100}
          height={100}
          className={`transition-all duration-500 mb-8 desktop:h-28 desktop:w-28 w-20 h-20 object-contain mx-auto ${
            isSelected && "-translate-y-6 scale-75"
          } `}
        />
        <h4
          className={`transition-all duration-500 lg:text-primary-red desktop:text-xl font-bold text-center uppercase ${
            isSelected && "-translate-y-16 scale-75"
          }
          ${isMobileScreen || isSelected ? "text-black" : ""}`}
        >
          {name}
        </h4>
      </div>
      <p
        className={`transition-all duration-500 text-center text-sm mx-4 text-black top-32   opacity-0 absolute ${
          isSelected && "opacity-100"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}
