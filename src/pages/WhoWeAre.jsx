import { Box, Button, Typography } from "@mui/material";
import React from "react";

const WhoWeAre = () => {
  return (
    <div id="who_we_are">
      <Box
        display="flex"
        sx={{
          p: { xs: 10, md: "20px 100px" },
        }}
      >
        <Box display="flex" flexDirection="column" gap={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#363435",
              fontSize: { xs: "40px", md: "90px" },
            }}
          >
            Who Are We
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
            >
              Experts in Integrated Communication
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
            >
              With a decade of experience as a full-service communications
              agency, we have mastered the art & science of integrated branding
              and marketing communications. Our 360-degree approach ranges from
              on-ground study to performance marketing, demonstrating our
              expertise at every level.
            </Typography>

            <Typography
              variant="p"
              sx={{ textAlign: { xs: "center", sm: "start", md: "start" } }}
            >
              Our versatile team of young professionals comes from diverse
              backgrounds, sharing a common passion for connecting the dots.
              This allows us to be open to ideas, objective yet emotional, which
              is aided by our deep understanding of consumer behaviour.
            </Typography>
            <Box sx={{ margin: { xs: "auto", sm: "0" } }}>
              {" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "darkgreen",
                }}
              >
                Know more
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default WhoWeAre;
