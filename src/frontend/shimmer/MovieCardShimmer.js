import React from 'react';

const MovieCardShimmer = () => {
  return (
    <div className="group/item relative flex-none transition-all duration-300 ease-in-out w-32">
      <div className="relative rounded-lg overflow-hidden">
        {/* Shimmer Container */}
        <div className="animate-pulse">
          {/* Poster Shimmer */}
          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 -translate-x-full" />
            </div>
          </div>

          {/* Content Shimmer */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
            {/* Title Shimmer */}
            <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-2">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
            </div>

            {/* Rating and Duration Shimmer */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 bg-gray-300 rounded-full w-12">
                <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
              </div>
              <div className="h-3 bg-gray-300 rounded-full w-8">
                <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
              </div>
            </div>

            {/* Genre Shimmer */}
            <div className="h-3 bg-gray-300 rounded-full w-16 mb-3">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
            </div>

            {/* Action Buttons Shimmer */}
            <div className="flex gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-300">
                <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-300">
                <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 -translate-x-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the shimmer animation to Tailwind
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);

export default MovieCardShimmer;