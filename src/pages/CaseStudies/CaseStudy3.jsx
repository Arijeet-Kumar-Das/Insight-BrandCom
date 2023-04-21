import React from "react";
import Logo from "../../assets/path2.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Image 16.png";
import img2 from "../../assets/Image 17.png";
import img3 from "../../assets/Image 18.png";
import img4 from "../../assets/Image 19.png";
import img5 from "../../assets/Image 20.png";
import img6 from "../../assets/Image 21.png";

const CaseStudy3 = () => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          p: { xs: "10px", sm: "20px 100px" },
          marginTop: "100px",
        }}
      >
        <img src={Logo} alt="" />
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Bajaj Auto
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            In today's competitive market, it is crucial to maximize return on
            investment (ROI), even with small dealer-level budgets. Proper
            audience segmentation is necessary when dealing with more than one
            dealer in the same location. Digital sales tracking is an essential
            tool for measuring performance and identifying areas for
            improvement. However, irregularity in customer data management and
            the absence of a proper customer relationship management (CRM)
            system can hinder a company's ability to leverage customer data
            effectively. Addressing these issues can help businesses stay ahead
            of the competition and achieve their goals.
          </Typography>
          <Typography variant="h4">The Journey</Typography>
          <Typography variant="p">
            To effectively market their latest vehicles and offers, a company
            implemented several strategies. Targeted posts were created to
            showcase the features and specifications of the vehicles, with a
            focus on best-sellers. Geo-specific and targeted ad campaigns were
            launched to generate leads and convert them into sales. A proper
            customer relationship management (CRM) system was implemented to
            manage real-time customer leads and data. Cross-device targeting was
            also utilized to reach a wider audience. In addition, the company
            integrated their Facebook CRM to streamline their customer data
            management process. By utilizing these strategies, the company was
            able to effectively market their vehicles and boost sales.
          </Typography>
          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            Over the course of a 15+ month campaign, a company was able to
            generate an average of 11,000+ leads per month at an effective cost
            per acquisition (CPA). The campaign proved successful, resulting in
            a 77% increase in lead prospect percentage. Additionally, the
            company experienced a 35% increase in prospect to sales percentage,
            indicating that the leads generated were high-quality and likely to
            result in actual sales. Overall, the campaign was a resounding
            success, effectively driving leads and increasing conversion rates.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img1} alt="" width="100%" height="500px" />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <img src={img2} alt="" width="100%" height="500px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img3} alt="" width="100%" height="500px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img4} alt="" width="100%" height="500px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img5} alt="" width="100%" height="500px" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={img6} alt="" width="100%" height="500px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy3;
