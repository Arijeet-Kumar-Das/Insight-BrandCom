import React from "react";
import Logo from "../../assets/Image 10.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Image 29.png";
import img2 from "../../assets/Image 30.png";
import img3 from "../../assets/Image 31.png";
import img4 from "../../assets/Image 32.png";
import img5 from "../../assets/Image 33.png";
import img6 from "../../assets/Image 34.png";

const CaseStudy8 = () => {
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
            Brahmaputra Board
          </Typography>
          <Typography variant="p">United Nations Children's Funds</Typography>

          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            The Expedition was extensive, starting from Gelling in Upper Siang
            District of Arunachal Pradesh and was scheduled to conclude at
            Assameralga in South Salmara Mankachar District of Assam tentatively
            from the 16th December, 2020 to 14th January, 2021.
          </Typography>
          <Typography variant="p">
            Full coverage of the expedition, along with LIVE recording and
            documentation in rugged terrains with less or no network.
          </Typography>
          <Typography variant="h4">The Journey</Typography>
          <Typography variant="p">
            To ensure the success of their rafting campaign, a 3-member team was
            deployed to work closely with the rafting team. In addition, a
            separate on-ground local support team was stationed at various key
            locations to facilitate the capture of high-impact and action-packed
            visuals. Throughout the project, there was constant coordination
            between the on-ground team and the backend team, which was
            responsible for shortlisting and finalizing visuals before
            disseminating them to the public. To maintain an organised and
            comprehensive approach, the backend team also kept detailed logs of
            all content released. Ultimately, the campaign was a resounding
            success, with more than 7 videos on different topics and themes
            released to the public.
          </Typography>
          <Typography variant="p">
            A full-page ad was released on International Day of Yoga, the 21st
            of June, asking people to stay tuned for the winner's announcement
            on their page, promoting followers.
          </Typography>

          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            The Brahmaputra Aamantran Abhiyaan was executed with careful
            attention to detail and thorough planning. The project included
            several critical components, such as the capture of high-quality
            audio, video, and photography at all halting, camping, and rafting
            sites. Additionally, the team organized press conferences and media
            interactions at key locations, disseminated press releases, and
            utilised social media tools to create engagement and awareness
            around the event.
          </Typography>
          <Typography variant="p">
            A comprehensive digital documentation of news, events, campaigns,
            outreach activities, and community involvement programs was also
            compiled. To ensure maximum reach and awareness, the team identified
            suitable media platforms for boosting viewership and coordinated for
            their implementation upon approval. They also proposed and engaged
            with influencers to endorse the Abhiyaan.
          </Typography>
          <Typography variant="p">
            A calendar for planned content release and dissemination was
            created, with a focus on creating infectious and shareable content
            that would drive engagement and virality. The team also engaged key
            media houses in the region and tracked news daily, adapting their
            action plan and content plan as needed. Ultimately, the success of
            the Brahmaputra Aamantran Abhiyaan was due to the careful planning,
            execution, and tracking of all aspects of the project.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={10} md={10}>
            <img src={img1} alt="" width="100%" height="300px" />
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <img src={img2} alt="" width="100%" height="300px" />
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <img src={img3} alt="" width="100%" height="300px" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <img src={img4} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img src={img5} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img src={img6} alt="" width="100%" height="250px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy8;
