import React from "react";
import Logo from "../../assets/Group 52.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/JJMM1.png";
import img2 from "../../assets/JJMM2.png";
import img3 from "../../assets/JJMM3.png";
import img4 from "../../assets/JJMM4.png";
import img5 from "../../assets/JJMM5.png";
import img6 from "../../assets/JJMM6.png";
import img7 from "../../assets/JJMM7.png";
import img8 from "../../assets/JJMM8.png";

const CaseStudy9 = () => {
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
            Jal Jeevan Mission Meghalaya
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            The geographic disparity in terms of the area being far-flung and
            scattered especially in parts of Garo Hills, West Jaintia Hills is
            significant. Time being another factor here, people were unable to
            spare time to discuss and share their feedback. The FHTCs in the
            villages were present but many of these were not functional, causing
            dissent among people.
          </Typography>
          <Typography variant="p">
            The expectation of the people was unfulfilled, considering these
            issues & the gap that was covered as a big journey bridged with
            rigorous efforts.
          </Typography>
          <Typography variant="h4">
            The Journey Communication Need Assessment (CNA)
          </Typography>
          <Typography variant="p">
            A survey was conducted to determine the on-ground communication need
            gap and challenges of the actual beneficiaries with regard to the
            Mission objectives, benefits, media habits, current status, current
            challenges, and need for community contribution.
          </Typography>
          <Typography variant="p">
            The CNA report focused to bridge the gap in the community that
            contributed to and enabled to sustain along with understanding the
            operation and maintenance of the project activities in the
            community.
          </Typography>
          <Typography variant="p">
            A workflow was determined for the CNA Survey which consisted of the
            Identification of Zones & Districts along with the Target Groups in
            them, Determination of Samples Survey Sizes, Preparing Survey
            Questionnaires for the Target Groups, Forming Teams of Field
            Functionaries along with Supervisors, Preparing Route Plans along
            with Data Collection, Entry, and Evaluation.
          </Typography>
          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            The Jal Jeevan Mission (JJM) and Public Health Engineering (PHE) are
            being promoted through various measures. Data regarding water supply
            in different regions and villages is being collected, as well as
            information on personnel required for water quality testing and
            operation and maintenance. Proper data is being maintained on the
            FHTC connections, and VWSCs have been formed to ensure that people
            are aware of these facilities. The majority of people receiving
            water are satisfied with the service, with a consensus of 75%.
            Surveys have indicated that 64% of respondents now have more time
            for other work due to the JJM intervention, particularly among women
            population. Additionally, 75% of respondents expressed satisfaction
            with the water supply scheme and service, with 47% of these being
            women. Regular leakages and repairs of connection systems are
            conducted, and social media campaigns, newspaper ads, and
            observations of events like World Water Day are being implemented
            for better outreach, visibility, and awareness among the masses. The
            training of district and state-level staff is being facilitated for
            better functioning.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img1} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img2} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img3} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img4} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img5} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img6} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img7} alt="" width="100%" height="250px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img8} alt="" width="100%" height="250px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy9;
