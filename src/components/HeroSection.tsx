import { useAppSelector } from "../utils/storeHooks";
import { empHeroMovieList, type HeroEl } from "./MoiveBand";
empHeroMovieList;

const HeroSection = () => {
  var heroMovieDetails: HeroEl = empHeroMovieList;
  try {
    heroMovieDetails = useAppSelector((state) => state.movies.hero);
  } catch (error) {
    console.log("Error occured: ", error);
  }

  console.log(heroMovieDetails);

  var movie_list = heroMovieDetails.movies;

  return heroMovieDetails.state === "filled" ? (
    <div className="h-full w-full overflow-clip">
      {movie_list.map((movie, i) => (
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat rounded-md"
          style={{
            backgroundImage: heroMovieDetails?.backdropUrls?.[i]
              ? `url('${heroMovieDetails.backdropUrls[i]}')`
              : "none",
          }}
        ></div>
      ))}
    </div>
  ) : (
    <div>No movies</div>
  );
};

export default HeroSection;
