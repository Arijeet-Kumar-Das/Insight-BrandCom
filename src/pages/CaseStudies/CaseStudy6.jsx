import React from "react";
import Logo from "../../assets/UNICEF-logo.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Image 28.png";

const CaseStudy6 = () => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          p: { xs: "10px", sm: "20px 100px" },
        }}
      >
        <img src={Logo} alt="" />
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            UNICEF
          </Typography>
          <Typography variant="h5">United Nations Children's Fund</Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            Major challenge was in form of knowing which and how to monitor
            among appropriate media channels, to explore issues that are being
            picked up to help strategise the media engagement in a targeted
            manner.
          </Typography>
          <Typography variant="h4">The Journey</Typography>
          <Typography variant="p">
            Depending upon the North-eastern States, a set of Online Media
            Platforms & Print Media of specific states were selected to track
            the News Articles. Daily reports were created that highlighted the
            State and the issue in the article. The reports were shared with
            UNICEF which helped them track, help and support specific state
            authorities in formulating and implementing policies.
          </Typography>

          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            UNICEF leveraged Media Monitoring to strategically plan their
            advocacy programs with Media, and prioritise issues related to Child
            Rights and well-being in the State. By closely monitoring media
            coverage, UNICEF was able to identify key areas of concern and
            tailor their messaging to resonate with the public. Additionally,
            this approach enabled UNICEF to collaborate more effectively with
            various State departments and provide valuable insights on specific
            domains like natural disasters. Overall, Media Monitoring proved to
            be an essential tool for UNICEF in driving meaningful change and
            advancing their mission.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img1} alt="" width="100%" height="250px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy6;
