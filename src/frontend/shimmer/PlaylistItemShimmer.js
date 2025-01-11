const PlaylistItemShimmer = () => {
  return (
    <div className="flex gap-3 p-2 rounded-lg">
      {/* Thumbnail Shimmer */}
      <div className="relative flex-shrink-0 bg-gray-800 w-40 h-24 sm:w-32 sm:h-20 rounded-lg overflow-hidden">
        <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
      </div>

      {/* Content Shimmer */}
      <div className="flex-1 space-y-2">
        {/* Title Shimmer */}
        <div className="h-4 bg-gray-800 rounded w-3/4 overflow-hidden">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
        </div>
        {/* Overview Shimmer */}
        <div className="h-3 bg-gray-800 rounded w-full overflow-hidden">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistItemShimmer;