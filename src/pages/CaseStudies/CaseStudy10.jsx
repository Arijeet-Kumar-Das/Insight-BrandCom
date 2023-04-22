import React from "react";
import Logo from "../../assets/Pernod_Ricard_logo_2019.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Image 23.png";
import img2 from "../../assets/Image 24.png";
import img3 from "../../assets/Image 25.png";
import img4 from "../../assets/Image 26.png";
import img5 from "../../assets/Image 27.png";

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
            Campaign 1
          </Typography>
          <Typography variant="h5">
            Influencer Campaign for Blenders Pride Shantanu & Nikhil Limited
            Edition Pack
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            Our responsibilities involved promoting and selling the latest
            limited-edition pack of Blenders Pride Whisky. We aim to create
            awareness of this exclusive product among whisky connoisseurs and
            customers alike, with the goal of generating interest and excitement
            in the market. Our marketing efforts are aimed at igniting a spark
            of curiosity among potential customers, enticing them to explore the
            unique features of this limited-edition pack. The ultimate goal of
            the entity is to ensure that the product receives the attention it
            deserves, thereby increasing its visibility and sales in the market.
          </Typography>

          <Typography variant="h4">The Journey</Typography>
          <Typography variant="p">
            We executed a weeklong Instagram-led campaign in collaboration with
            ten select influencers who created various forms of content,
            including videos, posts, reels, and images. These influencers were
            given special hampers exclusively designed to showcase the product.
            The selection of these influencers was based on their engagement
            rate, ensuring that they had a strong following and could
            effectively promote the product to their audience. The campaign
            utilised special hashtags, including #Blenders Pride,
            #Shantanu&Nikhil, and #Limited Edition Pack, to create a buzz around
            the product and attract attention from potential customers. By
            leveraging the power of social media and influencer marketing, we
            aimed to reach a wider audience and increase awareness and sale of
            the product.
          </Typography>

          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            We successfully reached out to over 40,00,000 new audience members,
            achieving an average engagement rate of 10%. The campaign was able
            to reach a staggering 40,00,000 audience members, increasing the
            entity's cumulative audience base to over 5,00,000 people. As a
            result of the campaign, a significant spike in tertiary sales was
            observed within one week of the campaign and product launch. This
            indicates that the campaign was effective in generating interest in
            the product and driving sales. Overall, our marketing efforts were
            successful in reaching a large number of potential customers,
            increasing brand awareness, and boosting sales.
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Campaign 2
          </Typography>
          <Typography variant="h5">
            Imperial Blue Product and New Packaging Launch
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            We aimed to drive sales and promote the integration of the latest
            product packaging in the market. The primary objective is to create
            awareness of this innovative packaging among whisky connoisseurs and
            customers, highlighting the unique features of the product and its
            benefits. By effectively promoting the product packaging, we aimed
            to increase its market share and enhance its competitive edge. Our
            marketing efforts are focused on reaching a wider audience and
            generating interest in the product, ultimately resulting in
            increased sales and revenue.
          </Typography>

          <Typography variant="h4">The Journey</Typography>
          <Typography variant="p">
            Our marketing strategy involved a range of different tactics,
            including selfie campaigns, an interactive microsite, SMS
            integration, and the distribution of Amazon gift vouchers for daily
            winners. In addition, we offered weekly prizes such as iPhones,
            AirPods, and LEDs to encourage ongoing engagement and participation
            in the campaign. To further promote the campaign and increase brand
            visibility, we implemented retail branding and an influencer
            campaign. Furthermore, a canter activity had been organised across
            Sivasagar, Lakhimpur, and Dibrugarh, providing an opportunity to
            reach a wider audience and generate interest in the product.
            Overall, our marketing efforts were designed to maximize engagement,
            attract attention, and ultimately drive sales.
          </Typography>

          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            The influencer campaign successfully reached over 20,00,000 people,
            generating significant exposure and increasing brand awareness.
            Additionally, the campaign attracted over 3000 participants,
            indicating strong engagement and interest in the product. Through
            this influencer-led approach, we were able to effectively leverage
            the reach and credibility of popular social media personalities,
            enabling it to tap into new audiences and expand its market share.
            Overall, the campaign was a success, providing us with valuable
            insights and driving engagement and sales.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img1} alt="" width="100%" height="300px" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img2} alt="" width="100%" height="300px" />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={4} md={4}>
            <img src={img3} alt="" width="100%" height="400px" />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <img src={img4} alt="" width="100%" height="400px" />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <img src={img5} alt="" width="100%" height="400px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy9;
