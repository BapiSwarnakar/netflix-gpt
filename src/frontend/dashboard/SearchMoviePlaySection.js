import React from "react";
import { useSelector } from "react-redux";
import SearchVideo from "./SearchVideo";
// import SearchVideoContent from "./SearchVideoContent";
import PlaylistSection from "./PlaylistSection";
import SearchMoviePlaySectionShimmer from "../shimmer/SearchMoviePlaySectionShimmer";

const SearchMoviePlaySection = () => {
  const playlistMovies = useSelector(
    (state) => state.movies?.searchMovies
  );
  return (
    <>
    {!playlistMovies ? (
      <SearchMoviePlaySectionShimmer />
    ):( 
      <div className="w-full min-h-screen mt-2 p-1">
        <div className="max-w-[2000px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[65%] xl:w-[70%]">
              {/* Video Container with 16:9 aspect ratio */}
              <div className="relative w-full pt-[56.25%] bg-black">
                <div className="absolute top-0 left-0 w-full h-full">
                  <SearchVideo playMovie={playlistMovies[0]} />
                  {/* <SearchVideoContent playMovie={playlistToplayMovie} /> */}
                </div>
              </div>

              {/* Video Info Section */}
              <div className="mt-4 pb-6 border-b border-gray-800">
                <h1 className="text-xl font-bold text-white">{playlistMovies[0]?.title}</h1>
                <p className="mt-2 text-gray-400">{playlistMovies[0]?.overview}</p>
              </div>
            </div>
            <PlaylistSection/>
          </div>
        </div>
      </div>
    )}
    </>
  );
  
};

export default SearchMoviePlaySection;
