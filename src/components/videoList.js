import React from "react";
import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderdList = videos.map((vid) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={vid} />;
  });

  return <div className="ui relaxed divided list">{renderdList}</div>;
};
export default VideoList;
