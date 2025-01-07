import React from "react";
import { useSelector } from "react-redux";
import SearchVideo from "./SearchVideo";
import SearchVideoContent from "./SearchVideoContent";

const SearchMoviePlaySection = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return null;
  const nowPlayingFirstMovie = nowPlayingMovies[0];

  return (
    <div className="w-full min-h-screen mt-2 p-1">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[65%] xl:w-[70%]">
            {/* Video Container with 16:9 aspect ratio */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <div className="absolute top-0 left-0 w-full h-full">
                <SearchVideo nowPlayingMovies={nowPlayingFirstMovie} />
                <SearchVideoContent />
              </div>
            </div>

            {/* Video Info Section */}
            <div className="mt-4 pb-6 border-b border-gray-800">
              <h1 className="text-xl font-bold text-white">lorem test</h1>
              <p className="mt-2 text-gray-400">paragaraph</p>
            </div>
          </div>
          <div className="w-full lg:w-[35%] xl:w-[30%] bg-gray-950 p-1">
            <div className="sticky top-4">
              <h2 className="text-lg font-semibold text-white mb-4">Up Next</h2>
              <div className="space-y-3 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                {nowPlayingMovies?.map((movie) => (
                  <div
                    key={movie.id}
                    className="flex gap-3 p-2 hover:bg-gray-800/50 rounded-lg cursor-pointer group"
                  >
                    {/* Thumbnail with overlay on hover */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-40 h-24 object-cover rounded-lg sm:w-32 sm:h-20"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    </div>

                    {/* Video Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium line-clamp-2">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMoviePlaySection;
