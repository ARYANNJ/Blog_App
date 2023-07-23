import React from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import{useDispatch, useSelector} from 'react-redux'
import { authActions } from "../store";
const Header = () => {
    const dispath =useDispatch();
    const isLoggedIn =useSelector(state => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(22,15,47,1) 0%, rgba(89,21,187,0.9486388305322129) 35%, rgba(11,11,143,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography sx={{ fontSize: 30 }}>BlogApp</Typography>
        {isLoggedIn &&<Box display={"flex"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
          </Tabs>
        </Box>}
        <Box sx={{ Display: "Flex", marginLeft: "auto" }}>
         {!isLoggedIn && <><Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{
              background: "black",
              margin: "5px",
              borderRadius: "20px",
              fontSize: "15px",
            }}
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ background: "black", borderRadius: "20px", fontSize: "15px" }}
          >
            Signup
          </Button></> }
         {isLoggedIn && <Button
            onClick={()=>dispath(authActions.logout())}
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ background: "black", borderRadius: "20px", fontSize: "15px" }}
          >
            Logout
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
