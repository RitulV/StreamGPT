import type { MovieDetails } from "../utils/movieSlice";
import { BACKDROP_PATH } from "../assets/constants";
import { type SeriesDetails } from "../utils/seriesSlice";

type Props = {
  media: MovieDetails | SeriesDetails;
};

const MovieBanner = ({ media }: Props) => {
  const isMovie = (
    media: MovieDetails | SeriesDetails,
  ): media is MovieDetails => {
    return "title" in media;
  };

  return (
    <div
      className="group relative bg-size-[auto_400px] bg-no-repeat bg-center rounded-md shadow-xl shadow-zinc-900/40 ring-1 ring-zinc-700/40 ring-inset [box-shadow:inset_0_1px_4px_rgba(255,255,255,0.08),inset_0_-4px_8px_rgba(0,0,0,0.25)] shrink-0 h-100 w-65 border hover:cursor-pointer hover:scale-103 hover:shadow-cyan-300 duration-300 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url('${BACKDROP_PATH}${media.poster_path}')`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <p className="text-white text-sm font-semibold">
          {isMovie(media) ? media.title : media.name}
        </p>
        <p className="text-zinc-400 text-xs mt-1">
          {isMovie(media)
            ? media.release_date?.slice(0, 4)
            : media.first_air_date?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default MovieBanner;
