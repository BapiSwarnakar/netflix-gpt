import React from "react";
import useVideoBackground from "../../hooks/useVideoBackground";
import { useSelector } from "react-redux";
const SearchVideo = (props) => {
  const { playMovie} = props;
  useVideoBackground(playMovie);
  const trailer = useSelector((state) => state.movies?.trailerVideo);
  return (
    <div className="w-full h-full inset-0">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=0&controls=1&loop=1`}
        title={trailer?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default SearchVideo;
