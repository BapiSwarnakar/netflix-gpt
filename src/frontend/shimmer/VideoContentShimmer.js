const VideoContentShimmer = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 max-w-3xl">
      {/* Title Shimmer */}
      <div className="h-12 md:h-16 bg-gray-700 rounded-lg w-3/4 mb-4">
        <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 -translate-x-full" />
      </div>

      {/* Overview Shimmer */}
      <div className="space-y-2 mb-8">
        <div className="h-4 bg-gray-700 rounded w-full">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 -translate-x-full" />
        </div>
        <div className="h-4 bg-gray-700 rounded w-5/6">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 -translate-x-full" />
        </div>
        <div className="h-4 bg-gray-700 rounded w-4/6">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 -translate-x-full" />
        </div>
      </div>

      {/* Buttons Shimmer */}
      <div className="flex gap-4">
        <div className="w-32 h-11 md:h-12 bg-gray-200 rounded">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 -translate-x-full" />
        </div>
        <div className="w-32 h-11 md:h-12 bg-gray-600 rounded">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 -translate-x-full" />
        </div>
      </div>

      {/* Mute Toggle Button Shimmer */}
      <div className="absolute bottom-28 right-8 w-10 h-10 bg-red-600 bg-opacity-50 rounded-full">
        <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-red-600 via-red-500 to-red-600 -translate-x-full rounded-full" />
      </div>
    </div>
  );
};

export default VideoContentShimmer;
