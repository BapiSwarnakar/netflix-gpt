import { Volume2, VolumeX, Pause, Play } from 'lucide-react';

const SearchVideoContent = (props) => {
  const { hasMuted,  setHasMuted, hasPlay,  setHasPlay, playMovie } = props;
    return (
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {playMovie?.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              {playMovie?.overview}
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setHasPlay(!hasPlay)}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30"
            >
              {hasPlay ? <Pause className="text-white" /> : <Play className="text-white" />}
            </button>
            <button 
              onClick={() => setHasMuted(!hasMuted)}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30"
            >
              {hasMuted ? <VolumeX className="text-white" /> : <Volume2 className="text-white" />}
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default SearchVideoContent
  
  