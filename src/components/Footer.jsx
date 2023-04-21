import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Box
        padding={10}
        minHeight="100px"
        sx={{ backgroundColor: "darkgreen" }}
        marginTop="100px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 2 },
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="column">
              <Typography variant="p" sx={{ color: "white", fontSize: "13px" }}>
                Follow us at
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <TwitterIcon sx={{ color: "white" }} />
                <FacebookIcon sx={{ color: "white" }} />
                <InstagramIcon sx={{ color: "white" }} />
                <LinkedInIcon sx={{ color: "white" }} />
              </Box>
            </Box>
            <Typography variant="p" sx={{ color: "white", fontSize: "13px" }}>
              &copy; Copyright Insight Brandcom Pvt. Ltd.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography variant="p" sx={{ color: "white", fontSize: "13px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, maxime! Praesentium dolore sequi perferendis culpa,
              aperiam, vero et tenetur similique quo harum obcaecati sunt error!
              Sapiente perferendis natus ex possimus nisi quia reiciendis
              debitis commodi inventore itaque. Cumque, cupiditate tempore?
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
