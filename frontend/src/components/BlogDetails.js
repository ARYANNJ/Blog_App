import { Button, InputLabel, TextField, Typography,Box } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const BlogDetails = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState()
  const id=useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const fetchDetails = async()=>
 { const res=await axios.get(`http://localhost:9000/api/blog/${id}`).catch((err)=>console.log(err))
 const data=await res.data;
 return data;
}
useEffect(() => {
  fetchDetails().then((data) => {
    setBlog(data.blog);
    setInputs({
      title: data.blog.title,
      description: data.blog.description,
    });
  });
}, [id]);
const sendRequest = async () => {
  const res = await axios
    .put(`http://localhost:9000/api/blog/update/${id}`, {
      title: inputs.title,
      description: inputs.description,
      
    })
    .catch((err) => console.log(err));

  const data = await res.data;
  return data;
};
console.log(blog);
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  sendRequest()
    .then((data) => console.log(data))
    .then(() => navigate("/myBlogs/"));
};

  return (
    <div>
      {inputs &&
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
         <Button type="submit" sx={{ mt: 2, borderRadius: 4 ,color:"white",background: "linear-gradient(90deg, rgba(22,15,47,1) 0%, rgba(89,21,187,0.9486388305322129) 35%, rgba(11,11,143,1) 100%)"}}>Submit</Button>
        </Box>
      </form>
 } </div>
  )

  }
export default BlogDetails