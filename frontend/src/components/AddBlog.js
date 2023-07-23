import React, { useState } from "react";
import { Box } from "@mui/system";
import { InputLabel, TextField, Typography,Button } from "@mui/material";
import axios from "axios";


const AddBlog = () => {
  const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:9000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor={
            "linear-gradient(90deg, rgba(22,15,47,1) 0%, rgba(89,21,187,0.9486388305322129) 35%, rgba(11,11,143,1) 100%)"
          }
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={5}
          display="flex"
          flexDirection="column"
          width="80%"
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="Black"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField
            value={inputs.title}
            name="title"
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField
            value={inputs.description}
            name="description"
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField
            value={inputs.imageURL}
            name="imageURL"
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
         <Button type="submit" sx={{color:"white",fontSize:"larger", background: "black", borderRadius: "20px", fontSize: "15px" }}>Submit</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
