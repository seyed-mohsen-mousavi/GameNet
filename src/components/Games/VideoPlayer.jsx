import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "video.js/dist/lang/fa.json"; // بارگذاری فایل زبان فارسی
import "./VideoPlayer.css"; // ایمپورت فایل CSS سفارشی
// const VideoPlayer = ({ options }) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     // initialize video.js player
//     if (playerRef.current) {
//       playerRef.current.dispose();
//     }

//     const videoElement = videoRef.current;
//     if (!videoElement) return;

//     playerRef.current = videojs(videoElement, options, () => {
//       console.log("player is ready");
//       console.log("Player language:", playerRef.current.language());
//     });

//     // سفارشی‌سازی کنترل‌ها بعد از بارگذاری پلیر
//     const controlBar = document.querySelector(".vjs-control-bar");
//     if (controlBar) {
//       controlBar.style.backgroundImage = "linear-gradient(to right, #3b35b2, #733cb3)";
//       controlBar.style.backgroundClip = "text";
//       controlBar.style.color = "transparent";
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [options]);

//   return (
//     <div data-vjs-player>
//       <video
//         ref={videoRef}
//         className="video-js vjs-default-skin rounded-lg border-2 border-gray-300"
//       />
//     </div>
//   );
// };

// export default VideoPlayer;

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // initialize video.js player
    if (playerRef.current) {
      playerRef.current.dispose();
    }

    const videoElement = videoRef.current;
    if (!videoElement) return;

    playerRef.current = videojs(videoElement, options, () => {
      console.log("player is ready");
      console.log("Player language:", playerRef.current.language());
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player className="my-4 mx-auto max-w-screen-md relative">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin rounded-lg border-2 border-gray-300"
      />
    </div>
  );
};

export default VideoPlayer;
