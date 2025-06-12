import React from 'react';
function Video({
  title = '',
  width = '100%',
  height = 'auto',
  src,
  id = '',
  poster = '',
}: {
  title?: string;
  width: string;
  height?: number | 'auto';
  src: string;
  id?: string;
  poster?: string;
}) {
  return (
    <video
      className="overflow-hidden rounded-lg"
      width={width}
      height={height}
      controls
      id={id}
      poster={poster}
      playsInline
    >
      <source
        src={src.match(/^https/) ? src : `/videos/${src}`}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
