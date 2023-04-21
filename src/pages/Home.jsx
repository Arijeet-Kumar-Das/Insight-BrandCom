import { Box, Button, Typography } from "@mui/material";
import React from "react";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div id="home">
      <Box
        sx={{
          p: "20px 100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: { xs: 5, sm: 10 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#363435",
            fontSize: { xs: "40px", md: "90px" },
            textAlign: { xs: "center", sm: "start", md: "start" },
          }}
        >
          Connecting The Dots
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography
            variant="h4"
            sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
          >
            Creating effective and inclusive communication
          </Typography>
          <Typography
            variant="p"
            sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
          >
            Connecting the dots is crucial in today's complex and rapidly
            changing world, where we are constantly bombarded with information.
            It allows us to make connections that spark creativity and
            innovation. Enabling us to think critically, make informed
            decisions, and develop simple, yet innovative solutions to complex
            problems.
          </Typography>

          <Typography
            variant="p"
            sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
          >
            At Insight Brandcom, that's our philosophy. We work with brands on
            their journey by creating compelling and integrated communications.
            Fusing together an elixir of strategy, creativity and technology to
            connect the dots, we weave a tapestry of compelling stories that
            help organisations achieve their goals. Know more
          </Typography>
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: "center", md: "end" },
              backgroundColor: "darkgreen",
            }}
          >
            Know more
          </Button>
        </Box>
      </Box>
      <Box marginTop="100px">
        <WhoWeAre />
      </Box>
      <Box marginTop="100px">
        <WhatWeDo />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
