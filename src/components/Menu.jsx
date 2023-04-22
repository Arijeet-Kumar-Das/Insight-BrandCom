import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Menu = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          background: "#fff",
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            padding: "1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          <CloseIcon />
        </motion.div>
        <Box
          sx={{ p: { xs: 5, md: 10 } }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                HOME
              </Typography>
            </ScrollLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <ScrollLink
              to="who_we_are"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                WHO WE ARE
              </Typography>
            </ScrollLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <ScrollLink
              to="what_we_do"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                WHAT WE DO
              </Typography>
            </ScrollLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/our_work"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                OUR WORK
              </Typography>
            </RouterLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/case_study"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                CASE STUDIES
              </Typography>
            </RouterLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/team"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                THE TEAM
              </Typography>
            </RouterLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/careers"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                CAREERS
              </Typography>
            </RouterLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              cursor: "pointer",
            }}
          >
            <RouterLink
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h4"
                sx={{ "&:hover": { color: "darkgreen" } }}
                onClick={onClose}
              >
                CONTACT US
              </Typography>
            </RouterLink>
          </motion.div>
        </Box>
      </motion.div>
    </div>
  );
};

export default Menu;
