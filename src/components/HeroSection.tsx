import type { MovieDetails } from "../utils/movieSlice";
import { BACKDROP_PATH } from "../assets/constants";

type Props = {
  movie: MovieDetails;
};

const HeroSection = ({ movie }: Props) => {
  return (
    <div
      className="bg-size-[auto_400px] bg-no-repeat bg-center rounded-md shadow-xl shadow-zinc-900/40 ring-1 ring-zinc-700/40 ring-inset [box-shadow:inset_0_1px_4px_rgba(255,255,255,0.08),inset_0_-4px_8px_rgba(0,0,0,0.25)] shrink-0 h-100 w-65 border hover:cursor-pointer hover:scale-103 hover:shadow-cyan-300 duration-300 ease-in-out"
      style={{
        backgroundImage: `url('${BACKDROP_PATH}${movie.poster_path}}')`,
      }}
    ></div>
  );
};

export default HeroSection;
