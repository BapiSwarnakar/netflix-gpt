import VideoBackgroundShimmer from "./VideoBackgroundShimmer";
import VideoContentShimmer from "./VideoContentShimmer";

const HeroSectionShimmer = () => {
    return (
      <div className="relative w-full h-screen">
        <VideoBackgroundShimmer />
        <VideoContentShimmer />
      </div>
    );
}

export default  HeroSectionShimmer;