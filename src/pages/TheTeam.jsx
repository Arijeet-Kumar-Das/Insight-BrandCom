import React from "react";
import teamMember1 from "../assets/team-member-1.jpg";
import teamMember2 from "../assets/team-member-2.jpg";
import { Box, Grid, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 600, md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
  outline: "none",
};

const TheTeam = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box
        sx={{
          padding: "20px 100px",
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
            The Team
          </Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="p">
              "Great things in buimess are not done by one person they're done
              by a team or people"
            </Typography>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Steve Jobs
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <Box
              display="flex"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              gap={3}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                onClick={handleOpen}
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember1}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember2}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember1}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember2}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember1}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              gap={3}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember2}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember1}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember2}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember1}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ maxHeight: "400px", maxWidth: "200px" }}>
                  <img
                    src={teamMember2}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Anthony Stark
                </Typography>
                <Typography variant="p">Managing Director</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Team Modal */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              display="flex"
              gap={10}
              width="100%"
              height="100%"
              p={1}
              justifyContent="center"
              alignItems="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Box width="200px" height="300px">
                <img
                  src={teamMember1}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <Box
                sx={{ width: { xs: 200, sm: 500 }, gap: { xs: 2, sm: 15 } }}
                display="flex"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  sx={{
                    justifyContent: { xs: "initial", sm: "space-between" },
                    gap: { xs: 5, sm: 0 },
                  }}
                >
                  <Box>
                    <Typography variant="h5">Sumit Jain</Typography>
                    <Typography variant="h5">Managing Director</Typography>
                  </Box>
                  <CloseIcon onClick={handleClose} />
                </Box>
                <Box>
                  <Typography variant="p">
                    A Communications Professional with over 15 years of
                    experience in Telecom, Advertising & Media is our head who
                    leads the team from the front. Passionate about his team,
                    Sunit encourages growth along with learning together and
                    values relations above everything else.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TheTeam;
