import { type MovieDetails } from "../utils/movieSlice";
import { type HeroEl, type State } from "../components/MoiveBand";
import { useEffect, useState } from "react";
import {
  TMDB_GET_OPTIONS,
  BACKDROP_PATH_ORG,
  YT_VID,
} from "../assets/constants";

const useHeroMovieGetDetails = (movies: MovieDetails[]): HeroEl => {
  const [videoUrls, setVideoUrls] = useState<string[]>(() =>
    new Array(movies.length).fill("")
  );
  const [backdropUrls, setBackdropUrls] = useState<string[]>(() =>
    new Array(movies.length).fill("")
  );
  const [logoUrls, setLogoUrls] = useState<string[]>(() =>
    new Array(movies.length).fill("")
  );
  const [state, setState] = useState<State>("empty");

  useEffect(() => {
    let mounted = true;

    async function fetchAllSafe(): Promise<void> {
      try {
        const imgPromises = movies.map((movie) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/images`,
            TMDB_GET_OPTIONS
          ).then((res) => res.json())
        );

        const videoPromises = movies.map((movie) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
            TMDB_GET_OPTIONS
          ).then((res) => res.json())
        );

        const [imgOutcomes, videoOutcomes] = await Promise.all([
          Promise.all(imgPromises),
          Promise.all(videoPromises),
        ]);

        const vdeoUrls: string[] = [];
        const backdrpUrls: string[] = [];
        const lgoUrls: string[] = [];

        movies.forEach((_movie, i) => {
          const imgLst = imgOutcomes[i];
          const vidLst = videoOutcomes[i]?.results ?? [];

          const backdrop_match =
            imgLst?.backdrops?.find(
              (item: any) => Number(item.aspect_ratio) === 1.778
            )?.file_path ?? "";

          backdrpUrls[i] = backdrop_match
            ? BACKDROP_PATH_ORG + backdrop_match
            : "";

          const logo_match =
            imgLst?.logos
              ?.filter((item: any) => item.iso_3166_1 === "US")
              ?.map((result: any) => result.file_path)[0] ??
            imgLst?.logos?.[0]?.file_path ??
            "";

          lgoUrls[i] = logo_match ? BACKDROP_PATH_ORG + logo_match : "";

          const video_match =
            vidLst.find((item: any) => String(item.type) === "Trailer")?.key ??
            "";

          vdeoUrls[i] = video_match ? YT_VID + video_match : "";
        });

        if (!mounted) return;
        setVideoUrls(vdeoUrls);
        setBackdropUrls(backdrpUrls);
        setLogoUrls(lgoUrls);
        setState("filled");
      } catch (err) {
        console.error("Failed to fetch hero movie details", err);
      }
    }

    if (movies.length > 0) fetchAllSafe();

    return () => {
      mounted = false;
    };
  }, [movies]);

  return {
    movies,
    videoUrls,
    backdropUrls,
    logoUrls,
    state,
  };
};

export default useHeroMovieGetDetails;
