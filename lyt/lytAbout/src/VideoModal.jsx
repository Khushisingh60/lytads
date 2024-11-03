import React from 'react';
import videoAd from './video-lytads.mp4'

function VideoModal({ isVideoOpen, closeVideo }) {
  return (
    isVideoOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative w-full max-w-4xl bg-black">
          <button
            className="absolute top-2 right-4 text-white text-2xl"
            onClick={closeVideo}
          >
            &times;
          </button>
          <video id="video-player" controls autoPlay className="w-full h-auto">
          <source src={videoAd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
}

export default VideoModal;
