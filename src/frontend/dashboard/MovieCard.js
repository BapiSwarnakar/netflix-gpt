import { Play, Info, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { movie } = props;
    const scrollToClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return (
      <div className="group/item relative flex-none transition-all duration-300 ease-in-out w-32">
        {/* Base Card */}
        <div className="relative rounded-lg overflow-hidden transition-all duration-300 group-hover/item:shadow-xl group-hover/item:scale-110 group-hover/item:z-50">
          {/* Movie Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg object-cover"
          />
  
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
              {/* Title and Rating */}
              <h3 className="text-sm md:text-lg font-bold text-white mb-1 line-clamp-2">{movie.title}</h3>
              
              {/* Metadata */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-200 mb-2">
                <span className="flex items-center text-green-500">
                  <Star className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                  {movie.vote_average}
                </span>
                <span>{movie.duration}</span>
              </div>
  
              {/* Genre */}
              <p className="text-xs text-gray-300 mb-3 md:block">{movie.genre}</p>
  
              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link to={`/search/${movie.id}?title=${movie.title}`} onClick={scrollToClick} className="flex items-center justify-center bg-white text-black rounded-full p-1 md:p-2 hover:bg-gray-200 transition-colors">
                  <Play className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
                <Link to={`/search/${movie.id}?title=${movie.title}`} onClick={scrollToClick} className="flex items-center justify-center bg-gray-600/80 text-white rounded-full p-1 md:p-2 hover:bg-gray-500/80 transition-colors">
                  <Info className="w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default MovieCard;  