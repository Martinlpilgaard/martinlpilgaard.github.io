import React from "react";

export default function VideoPlayer({ src, className = "", asBackground = false }) {
  return (
    <div className={`relative ${asBackground ? "overflow-hidden" : ""}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`${asBackground ? "absolute inset-0 w-full h-full object-cover" : "w-full h-auto"} ${className}`}
      >
        <source src={src} type="video/mp4" />
        Din browser understøtter ikke video-tagget.
      </video>

      {asBackground && (
        <div className="relative z-10 flex items-center justify-center h-[40vh]">
          {/* Her kan du smide tekst/billeder ovenpå baggrundsvideoen */}
        </div>
      )}
    </div>
  );
}
