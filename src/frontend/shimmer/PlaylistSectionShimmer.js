import PlaylistItemShimmer from "./PlaylistItemShimmer";

const PlaylistSectionShimmer = () => {
  return (
    <div className="w-full lg:w-[35%] xl:w-[30%] bg-gray-950 p-1">
      <div className="sticky top-4">
        {/* Title Shimmer */}
        <div className="h-6 bg-gray-800 rounded w-32 mb-4 overflow-hidden">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
        </div>

        {/* Playlist Items */}
        <div className="space-y-3 max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <PlaylistItemShimmer key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistSectionShimmer