import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function GlassCard({ image, name, isSelected }) {
  const isMobileScreen = useMediaQuery("(max-width: 1023px");
  return (
    <div
      className={` flex justify-center items-center py-10 rounded-md border border-zinc-600 relative transition-all duration-500 ${
        isSelected ? "bg-white" : "bg-white/10"
      }`}
    >
      <div>
        <Image
          src={!isSelected ? `/desktop/${image}.png` : `/mobile/${image}.png`}
          alt="Service Image"
          width={100}
          height={100}
          className={`transition-all duration-500 mb-8 desktop:h-28 desktop:w-28 w-20 h-20 object-contain mx-auto ${
            isSelected && "-translate-y-6 scale-75"
          } `}
        />
        <h4
          className={`transition-all duration-500 lg:text-primary-red desktop:text-xl text-primary-dark font-bold text-center uppercase ${
            isSelected && "-translate-y-16 scale-75"
          }`}
        >
          {name}
        </h4>
      </div>
      <p
        className={`transition-all duration-500 text-center text-sm mx-4 text-black bottom-10 opacity-0 absolute ${
          isSelected && "opacity-100"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
        nemo?
      </p>
    </div>
  );
}
