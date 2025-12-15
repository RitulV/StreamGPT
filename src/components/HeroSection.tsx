import { useAppSelector } from "../utils/storeHooks";
import { empHeroMovieList, type HeroEl } from "./MoiveBand";
type props = {
  currAct: number;
};

const HeroSection = ({ currAct }: props) => {
  var heroMovieDetails: HeroEl = empHeroMovieList;
  try {
    heroMovieDetails = useAppSelector((state) => state.movies.hero);
  } catch (error) {
    console.log("Error occured: ", error);
  }
  console.log(heroMovieDetails);

  var movie_list = heroMovieDetails.movies;

  return heroMovieDetails.state === "filled" ? (
    <div
      className="h-full w-full relative flex transform transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currAct * 100}%)` }}
    >
      {movie_list.map((movie, i) => (
        <div
          key={i * Math.random()}
          className="relative h-full min-w-full bg-cover bg-center bg-no-repeat rounded-md"
          style={{
            backgroundImage: heroMovieDetails?.backdropUrls?.[i]
              ? `url('${heroMovieDetails.backdropUrls[i]}')`
              : "none",
          }}
        >
          {/* {currAct === i && (
            <div
              className="pointer-events-none absolute h-full w-full"
              key={i * Math.random()}
            >
              <iframe
                width="full"
                height="full"
                title="YouTube video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`${heroMovieDetails.videoUrls[0]}?autoplay=1&mute=1&controls=0`}
              />
            </div>
          )} */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
          <div
            className="absolute sm:w-56 md:w-72 lg:w-80 aspect-[3/1] bg-contain bg-no-repeat bg-center rounded-md top-30 right-10 z-15"
            style={{
              backgroundImage: heroMovieDetails?.logoUrls?.[i]
                ? `url('${heroMovieDetails.logoUrls[i]}')`
                : "none",
            }}
          />

          <div className="h-12 w-40 bg-amber-50 rounded-md absolute z-15 right-28 top-100"></div>
          <div className="h-12 w-40 bg-amber-50 rounded-md absolute z-15 right-28 top-120"></div>
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default HeroSection;
