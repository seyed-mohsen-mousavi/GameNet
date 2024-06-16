import VideoPlayer from "./VideoPlayer";
function SinglePage() {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    language: "fa",
    sources: [
      {
        src: "/video/trailer/warzoneTrailer.mp4",
        type: "video/mp4",
      },
    ],
    playbackRates: [0.5, 1, 1.5, 2.5],
  };

  return (
    <div className="w-full  flex">
      <div className="w-[50rem] h-[30rem]">
        <VideoPlayer options={videoJsOptions} />
      </div>
      <div>vjs-icon-placeholders</div>
    </div>
  );
}

export default SinglePage;
