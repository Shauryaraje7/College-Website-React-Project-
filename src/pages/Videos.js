import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Videos.css"; 

const videoData = {
  CSE2001: [
    "https://www.youtube.com/embed/VIDEO_ID_1",
    "https://www.youtube.com/embed/VIDEO_ID_2",
  ],
  CSE3001: [
    "https://www.youtube.com/embed/VIDEO_ID_3",
    "https://www.youtube.com/embed/VIDEO_ID_4",
  ],

};

const Videos = () => {
  const { subjectCode } = useParams();
  const videos = videoData[subjectCode] || [];

  return (
    <div className="videos-container">
      <h2>Recommended Videos for {subjectCode}</h2>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <p>No videos available for this subject.</p>
      )}
    </div>
  );
};

export default Videos;
