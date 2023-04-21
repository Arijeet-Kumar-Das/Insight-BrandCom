import { Box, Button, Typography } from "@mui/material";
import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";

const WhatWeDo = () => {
  return (
    <div id="what_we_do">
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
            What We Do
          </Typography>

          <Box display="flex" flexDirection="column" gap={4}>
            <Box
              display="flex"
              alignItems="center"
              gap={5}
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon1} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Communication
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Consultancy
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon2} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Brand Strategy
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Development
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon3} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Content & Design
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Services
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon4} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Audio Visual
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Production
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon5} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Digital
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Marketing
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={5}
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon6} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Social Media
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Marketing
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon7} alt="" height="50px" width="50px" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Public
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Relations
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon8} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Events and
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Activations
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "darkgreen",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={icon9} alt="" height="50px" width="50px" />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    Allied Services
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    (Outdoor production
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "center" }}>
                    printing etc.)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "darkgreen",
                alignSelf: { xs: "center", sm: "start" },
              }}
            >
              Let's Connect
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default WhatWeDo;
