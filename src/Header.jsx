import React from "react";
import { Link } from "react-router-dom";
import { RiChatHeartFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import "./Header.scss";

import { motion } from "framer-motion";
const Header = (isAuthenticated = false) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <RiChatHeartFill />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/People">People</Link>
        <Link to="/People">Filter</Link>
        <Link to="/about">About </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
