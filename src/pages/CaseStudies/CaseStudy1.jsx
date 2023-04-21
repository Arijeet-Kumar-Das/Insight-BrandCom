import React from "react";
import Logo from "../../assets/ACCF.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/20220426_213406.png";
import img2 from "../../assets/WhatsApp Image 2023-03-16 at 17.36.45.png";
import img3 from "../../assets/20220426_213231.png";
import img4 from "../../assets/WhatsApp Image 2023-03-16 at 17.36.47(1).png";
const CaseStudy1 = () => {
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
            Assam Cancer Care Foundation
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            The new centres are located at Dibrugarh, Barpeta, Jorhat,
            Kokrajhar, Lakhimpur, Tezpur, Darrang and Tinsukia, and will offer
            diagnostic and day care services, including chemotherapy towards
            treatment and palliative care of cancer cases.
          </Typography>
          <Typography variant="p">
            This launch was going to happen simultaneously at all the districts
            at the same time. Assam Medical College, Dibrugarh was also
            celebrating their 75th years of establishment.
          </Typography>
          <Typography variant="h4">
            The Journey: Launch of Cancer Care Centres in 7 locations
          </Typography>
          <Typography variant="p">
            To combat our challenge of preparing an exhibit to announce and
            glorify the 7 cancer hospitals, we created a wall of glory. This
            wall showcased the geography of the newly inaugurated hospitals and
            the ones yet to be inaugurated.
          </Typography>
          <Typography variant="p">
            We created colourful standees that were informative and attractive.
            There were installations and audio visuals that highlighted the
            facilities of each Cancer hospital.
          </Typography>
          <Typography variant="p">
            We planned and created an installation that showcased all the cancer
            centres in different regions. We creatively represented it with a
            backlit river panel with the information listed out alongside. Other
            details of the project were showcased with standees and banners that
            not just welcomed our Hon'ble Prime Minister but also delighted him.
          </Typography>
          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            We thank the Government of Assam and Assam Cancer Care Foundation
            (ACCF) for entrusting us with the responsibility of the Cancer Care
            exhibition held in Dibrugarh For Hon'ble Prime Minister. This was
            followed by the launch of 7 State-of-the-art Cancer Care Centres,
            and the Foundation Laying Ceremony of 7 new Cancer Care Centres by
            Shri Narendra Modi.
          </Typography>
          <Typography variant="p">
            A huge congratulations to the ACCF team for coordinating and pulling
            this off with us. We are delighted that it was a huge success.
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
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy1;
