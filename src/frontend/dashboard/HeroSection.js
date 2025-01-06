import React, { useState } from 'react'
import VideoBackground from './VideoBackground';
import VideoContent from './VideoContent';
import { useSelector } from 'react-redux';

const HeroSection = () => {

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!nowPlayingMovies) return null;
  const nowPlayingFirstMovie = nowPlayingMovies[0];
  return (
    <div className="relative w-full h-screen">
      <VideoBackground hasMuted = {isMuted} hasPlay = {isPlaying} nowPlayingMovies = {nowPlayingFirstMovie} />
      <VideoContent isControl={true} hasMuted = {isMuted} setHasMuted = {setIsMuted} hasPlay = {isPlaying} setHasPlay = {setIsPlaying} nowPlayingMovies = {nowPlayingFirstMovie} />
    </div>
  )
}

export default HeroSection
