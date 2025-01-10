import { Link } from "react-router-dom";

const VideoContent = (props) => {
  const { nowPlayingMovies, hasMuted, setHasMuted, hasPlay, setHasPlay } = props;
  const scrollToClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const PlayIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const PauseIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  return (
    <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 max-w-3xl">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
      {nowPlayingMovies?.title}
    </h1>
    
    {/* Only show overview on larger screens */}
    <p className="md:block text-14px text-gray-200 mb-8">
      {nowPlayingMovies?.overview}
    </p>

    <div className="flex gap-4">
      <button 
        onClick={() => setHasPlay(!hasPlay)}
        className="px-6 md:px-8 py-2 md:py-3 bg-white hover:bg-gray-200 text-black font-bold rounded flex items-center gap-2"
      >
        {hasPlay ? <PauseIcon /> : <PlayIcon />}
        {hasPlay ? 'Pause' : 'Play'}
      </button>

      <Link to={`/search/${nowPlayingMovies.id}?title=${nowPlayingMovies.title}`} onClick={scrollToClick} className="px-6 md:px-8 py-2 md:py-3 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white font-bold rounded flex items-center gap-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        More Info
      </Link>
    </div>

    {/* Mute Toggle */}
    <button
      onClick={() => setHasMuted(!hasMuted)}
      className="absolute bottom-28 right-8 p-2 bg-red-600 bg-opacity-50 hover:bg-opacity-75 rounded-full"
    >
      {hasMuted ? (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
    </button>
  </div>
);

}

export default VideoContent
