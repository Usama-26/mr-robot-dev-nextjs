import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function GlassCard({ image, name }) {
  const isMobileScreen = useMediaQuery("(max-width: 1023px");
  return (
    <div className="glass-card flex justify-center items-center p-10 rounded-md lg:bg-white/10 bg-white border border-zinc-600">
      <div>
        <Image
          src={
            !isMobileScreen ? `/desktop/${image}.png` : `/mobile/${image}.png`
          }
          alt="Service Image"
          width={100}
          height={100}
          className="mb-8 desktop:h-28 desktop:w-28 h-20 w-20 mx-auto "
        />
        <h4 className="lg:text-primary-red desktop:text-2xl text-lg text-primary-dark font-bold text-center uppercase">
          {name}
        </h4>
      </div>
    </div>
  );
}
