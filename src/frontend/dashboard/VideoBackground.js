import React from "react";
import { useSelector } from "react-redux";
import useVideoBackground from "../../hooks/useVideoBackground";

const VideoBackground = (props) => {
    const { nowPlayingMovies, hasMuted, hasPlay } = props;
    useVideoBackground(nowPlayingMovies);
    const trailer = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=${hasPlay}&mute=${hasMuted}&controls=1&loop=1`}
            title={trailer?.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
          ></iframe>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90" />
    </div>
  );
};

export default VideoBackground;
