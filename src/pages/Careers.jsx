import React from "react";
import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
const Careers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          p: { xs: "10px", sm: "20px 100px" },
        }}
      >
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Careers
          </Typography>
          <Typography variant="h5">Be part of the team. Join us.</Typography>

          <Typography variant="p">
            Atlnsight, we help clients navigate, progress and thrive in a world
            of change. We help champion meaningful progress through creative,
            media, data and technology. Come, be part of a team that strives to
            do meaningful work and leave a profound impact on communities.
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Vacancies
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="p">Senior Visualizer</Typography>
              <KeyboardArrowDownIcon onClick={() => handleOpen(true)} />
            </Box>
            <Divider />
            {open && (
              <Box
                marginTop="20px"
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Company Description
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numguam eius modi tempora incidunt ut
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Job Description
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numguam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Required Qualifications
                </Typography>
                <Typography variant="p">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "darkgreen", alignSelf: "start" }}
                >
                  Apply for the position
                </Button>
              </Box>
            )}
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="p">Experience Designer</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="p">Content Writer</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Careers;
