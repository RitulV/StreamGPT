import { HOST_URL } from "@/assets/constants";
import HomePageReels from "./HomePageReels";

const Main = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-[5rem] w-full">
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 opacity-1"
        style={{
          backgroundImage: `url(${HOST_URL}/star-of-life.svg)`,
          backgroundSize: "28px 28px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-fit flex flex-col items-center gap-10">
        <div className="max-w-3/4">
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
            all the entertainment you need
          </span>
        </div>
        <div className="max-w-9/10 mt-5">
          <span className="block text-[clamp(3rem,10vw,9rem)] font-black uppercase text-white leading-none tracking-tight text-balance select-none">
            under one hood
          </span>
        </div>
        <HomePageReels />
      </div>
    </div>
  );
};

export default Main;
