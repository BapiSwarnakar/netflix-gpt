import PlaylistSectionShimmer from "./PlaylistSectionShimmer";
import SearchVideoShimmer from "./SearchVideoShimmer";

const SearchMoviePlaySectionShimmer = () => {
    return (
      <div className="w-full min-h-screen mt-2 p-1">
        <div className="max-w-[2000px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[65%] xl:w-[70%]">
              {/* Video Container Shimmer */}
              <div className="relative w-full pt-[56.25%] bg-black">
                <div className="absolute top-0 left-0 w-full h-full">
                  <SearchVideoShimmer />
                </div>
              </div>
  
              {/* Video Info Section Shimmer */}
              <div className="mt-4 pb-6 border-b border-gray-800">
                {/* Title Shimmer */}
                <div className="h-6 bg-gray-800 rounded w-2/3 mb-4 overflow-hidden">
                  <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
                </div>
                
                {/* Overview Shimmer */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded w-full overflow-hidden">
                    <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
                  </div>
                  <div className="h-4 bg-gray-800 rounded w-5/6 overflow-hidden">
                    <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
                  </div>
                  <div className="h-4 bg-gray-800 rounded w-4/6 overflow-hidden">
                    <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
                  </div>
                </div>
              </div>
            </div>
            
            <PlaylistSectionShimmer />
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
  
  export default SearchMoviePlaySectionShimmer;
  