import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieSlider = (props) => {
  const { title, movies } = props;
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount =
      direction === 'left' ? -slider.offsetWidth : slider.offsetWidth;
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    setShowLeftButton(slider.scrollLeft > 0);
    setShowRightButton(
      slider.scrollLeft < slider.scrollWidth - slider.offsetWidth
    );
  };

  // const handleWheelScroll = (event) => {
  //   event.preventDefault();
  //   const slider = sliderRef.current;
  //   slider.scrollBy({ left: event.deltaY, behavior: 'smooth' });
  // };

  useEffect(() => {
    // const slider = sliderRef.current;
    // slider.addEventListener('wheel', handleWheelScroll);

    // return () => {
    //   slider.removeEventListener('wheel', handleWheelScroll);
    // };
  }, []);

  return (
    <div className="relative md:p-2">
      <h2 className="text-xl md:text-1xl font-bold text-white mb-4 ml-2">{title}</h2>
      {/* <hr className='mb-3'/> */}


      <div className="group relative">
        {showLeftButton && (
          <button
            className="absolute left-0 top-0 z-40 h-full w-12 
                     bg-gradient-to-r from-black/80 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft className="w-8 h-8 text-white hover:scale-125 transition-transform" />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-2 md:gap-4 overflow-x-scroll scrollbar-hide scroll-smooth py-2"
            onScroll={handleSliderScroll}
            style={{ height: '210px',scrollbarWidth: 'none'}} // Example fixed height
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        {showRightButton && (
          <button
            className="absolute right-0 top-0 z-40 h-full w-12 
                     bg-gradient-to-l from-black/80 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight className="w-8 h-8 text-white hover:scale-125 transition-transform" />
          </button>
        )}
      </div>
      <hr className="mt-2"/>
    </div>
  );
};

export default MovieSlider;
