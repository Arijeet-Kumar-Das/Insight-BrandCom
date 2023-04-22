import React from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { data } from "../WorkData";

const OurWork = () => {
  return (
    <Box sx={{ padding: "20px 100px" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          color: "#363435",
          fontSize: { xs: "40px", md: "90px" },
        }}
      >
        Our Work{" "}
      </Typography>
      <Typography variant="h6">
        We create brand experiences the clients love
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          {data.map((item) => (
            <Paper
              elevation={5}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                marginTop: "20px",
              }}
            >
              <img
                src={`assets/${item.logo}`}
                alt={item.name}
                width="100px"
                height="50px"
              />
              <Typography variant="body1">{item.name}</Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "darkgreen" }}
                fullWidth
              >
                View More
              </Button>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurWork;
