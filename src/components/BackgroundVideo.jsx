import React from "react";
import video from "../assets/Background.mp4";
import { Box } from "@mui/material";
const BackgroundVideo = () => {
  return (
    <div>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={-1}
      >
        <video
          autoPlay
          muted
          loop
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </Box>
    </div>
  );
};

export default BackgroundVideo;
