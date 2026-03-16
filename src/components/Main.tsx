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
      <div className="relative z-10 min-h-fit flex flex-col items-start gap-10 w-full px-[10vw]">
        <div>
          <span className="block text-[clamp(3rem,10vw,8rem)] font-black uppercase text-white leading-none tracking-tight select-none">
            all the <span className="text-yellow-400">entertainment</span>{" "}
            <span className="text-blue-500">you need</span>
          </span>
        </div>
        <div className="mt-5">
          <span className="block text-[clamp(3rem,10vw,8rem)] font-black uppercase text-white leading-none tracking-tight select-none">
            <span className="text-white">under </span>
            <span className="text-yellow-400">one </span>
            <span className="text-blue-500">hood</span>
          </span>
        </div>
      </div>
      <HomePageReels />
    </div>
  );
};

export default Main;
