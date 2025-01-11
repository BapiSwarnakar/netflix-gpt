import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoContent from "./VideoContent";
import { useSelector } from "react-redux";
import HeroSectionShimmer from "../shimmer/HeroSectionShimmer";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  return (
    <>
      {!nowPlayingMovies ? (
        <HeroSectionShimmer />
      ) : (
        <div className="relative w-full h-screen">
          <VideoBackground
            hasMuted={isMuted}
            hasPlay={isPlaying}
            nowPlayingMovies={nowPlayingMovies[0]}
          />
          <VideoContent
            isControl={true}
            hasMuted={isMuted}
            setHasMuted={setIsMuted}
            hasPlay={isPlaying}
            setHasPlay={setIsPlaying}
            nowPlayingMovies={nowPlayingMovies[0]}
          />
        </div>
      )}
    </>
  );
};

export default HeroSection;
