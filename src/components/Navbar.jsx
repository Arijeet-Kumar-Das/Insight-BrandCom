import React, { useState } from "react";
import Logo from "../assets/insightLogo.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Box sx={{ p: { xs: "20px 50px", md: "20px 100px" } }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <img src={Logo} alt="" width="130px" height="60px" />
          </Link>

          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleMenuOpen}
            style={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              padding: "1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              zIndex: 999,
            }}
          >
            <MenuIcon />
          </motion.div>
          {isOpen && <Menu onClose={handleMenuClose} />}
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
