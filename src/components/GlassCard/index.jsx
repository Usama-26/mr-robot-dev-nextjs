import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function GlassCard({ image, name }) {
  const isMobileScreen = useMediaQuery("(max-width: 1023px");
  return (
    <div className="glass-card flex justify-center items-center p-10 rounded-md lg:bg-white/10 bg-white border border-zinc-600 relative">
      <div>
        <Image
          src={
            !isMobileScreen ? `/desktop/${image}.png` : `/mobile/${image}.png`
          }
          alt="Service Image"
          width={100}
          height={100}
          className="glass-card__image mb-8 desktop:h-28 desktop:w-28 h-20 w-20 object-contain mx-auto "
        />
        <h4 className="glass-card__title lg:text-primary-red desktop:text-lg text-primary-dark font-bold text-center uppercase">
          {name}
        </h4>
      </div>
      <p className="glass-card__desc text-center text-sm mx-4 text-black bottom-10 opacity-0 absolute">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
        nemo?
      </p>
    </div>
  );
}
