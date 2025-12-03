import type { MovieDetails } from "../utils/movieSlice";
import { BACKDROP_PATH } from "../assets/constants";

type Props = {
  movie: MovieDetails;
};

const HeroSection = ({ movie }: Props) => {
  return (
    <div
      className="bg-size-[auto_500px] bg-no-repeat bg-center shadow-lg/20 rounded-md shrink-0 h-120 w-83 border text-black hover: cursor-pointer hover:shadow-cyan-50"
      style={{
        backgroundImage: `url('${BACKDROP_PATH}${movie.poster_path}}')`,
      }}
    ></div>
  );
};

export default HeroSection;
