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
    <>
      <VideoBackground hasMuted = {isMuted} hasPlay = {isPlaying} nowPlayingMovies = {nowPlayingFirstMovie} />
      <VideoContent hasMuted = {isMuted} setHasMuted = {setIsMuted} hasPlay = {isPlaying} setHasPlay = {setIsPlaying} nowPlayingMovies = {nowPlayingFirstMovie} />
    </>
  )
}

export default HeroSection
