const VideoBackgroundShimmer = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Shimmer for video placeholder */}
      <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 bg-gray-800">
        <div className="absolute inset-0">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 -translate-x-full" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90" />
    </div>
  );
};

export default VideoBackgroundShimmer;
