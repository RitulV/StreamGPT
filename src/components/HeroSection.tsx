import { useAppSelector } from "../utils/storeHooks";
import { empHeroMovieList, type HeroEl } from "./MoiveBand";
type props = {
  currAct: number;
  plyV: boolean;
  plyT: () => void;
};

const HeroSection = ({ currAct, plyV, plyT }: props) => {
  var heroMovieDetails: HeroEl = empHeroMovieList;
  try {
    heroMovieDetails = useAppSelector((state) => state.movies.hero);
  } catch (error) {
    console.log("Error occured: ", error);
  }

  var movie_list = heroMovieDetails.movies;

  return heroMovieDetails.state === "filled" ? (
    <div
      className="h-full w-full relative flex transform transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currAct * 100}%)` }}
    >
      {movie_list.map((_movie, i) => (
        <div
          key={i * Math.random()}
          className="relative h-full min-w-full bg-cover bg-center bg-no-repeat rounded-md"
          style={{
            backgroundImage: heroMovieDetails?.backdropUrls?.[i]
              ? `url('${heroMovieDetails.backdropUrls[i]}')`
              : "none",
          }}
        >
          {plyV && (
            <div
              className="pointer-events-none absolute h-full w-full"
              key={i * Math.random()}
            >
              <iframe
                title="YouTube video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`${heroMovieDetails.videoUrls[i]}?autoplay=1&mute=1&controls=0`}
              />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
          {!plyV && (
            <div
              className="absolute sm:w-56 md:w-72 lg:w-80 aspect-[3/1] bg-contain bg-no-repeat bg-center rounded-md top-30 right-10 z-15"
              style={{
                backgroundImage: heroMovieDetails?.logoUrls?.[i]
                  ? `url('${heroMovieDetails.logoUrls[i]}')`
                  : "none",
              }}
            />
          )}

          {!plyV && (
            <div
              className="h-13 w-40 bg-gray-800 opacity-45 rounded-md absolute z-15 right-28 top-100 flex justify-center items-center hover:cursor-pointer hover:bg-blue-100 hover:text-neutral-950 hover:scale-105 duration-100 hover:font-semibold"
              onClick={() => plyT()}
            >
              Watch Trailer
            </div>
          )}
          {!plyV && (
            <div className="h-13 w-40 bg-gray-800 opacity-45 rounded-md absolute z-15 right-28 top-120 flex justify-center items-center hover:cursor-pointer hover:bg-blue-100 hover:text-neutral-950 hover:scale-105 duration-100 hover:font-semibold">
              <span>About</span>
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default HeroSection;
