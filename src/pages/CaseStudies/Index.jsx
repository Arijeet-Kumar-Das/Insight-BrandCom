import React from "react";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2";
import CaseStudy3 from "./CaseStudy3";
import Logo1 from "../../assets/ACCF.png";
import Logo2 from "../../assets/APART Logo2.png";
import Logo3 from "../../assets/path2.png";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Box>
        <Box sx={{ p: { xs: 10, md: "20px 100px" } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#363435",
              fontSize: { xs: "40px", md: "90px" },
            }}
          >
            Case Studies
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: "20px" }}>
            <Grid item md={3} sm={4} xs={12}>
              <Paper
                elevation={3}
                sx={{ p: 1, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <img src={Logo1} alt="" height="75px" width="150px" />
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    Assam Cancer Care Foundation (ACCF)
                  </Typography>
                  <Typography variant="p">
                    The Government of Assam and the Tata Trusts set forth on
                    their joint initiative of establishing a comprehensive
                    cancer care network in the State. And that needed to be
                    amplified in an exhibition that was a starting point for the
                    Prime Minister's visit to the inauguration event. View more
                  </Typography>
                </Box>
                <Link to="/assam_cancer_care_foundation">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "darkgreen" }}
                    fullWidth
                  >
                    View more
                  </Button>
                </Link>
              </Paper>
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <Paper
                elevation={3}
                sx={{ p: 1, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <img src={Logo2} alt="" height="100px" width="100px" />
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    APART
                  </Typography>
                  <Typography variant="p">
                    APART, a project undertaken by the Govt. of India and World
                    Bank to support and facilitate agri-business investments,
                    increasing agriculture productivity and market access, along
                    with enabling smallholder farmers to produce crops that are
                    resilient to recurrent floods or droughts in the State.
                  </Typography>
                </Box>
                <Link to="/apart">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "darkgreen" }}
                    fullWidth
                  >
                    View more
                  </Button>
                </Link>
              </Paper>
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <Paper
                elevation={3}
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  minHeight: "400px",
                }}
              >
                <img src={Logo3} alt="" height="100px" width="100px" />
                <Box display="flex" flexDirection="column">
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    Bajaj Auto
                  </Typography>
                  <Typography variant="p">
                    Our objective for the client was to drive sales, improve the
                    conversion rate & increase the digital presence of 104
                    dealers across Northeast India
                  </Typography>
                </Box>
                <Link to="/bajaj">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "darkgreen", marginTop: "105px" }}
                    fullWidth
                  >
                    View more
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
