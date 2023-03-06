import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name : yup.string().required(),
  poster : yup.string().required().min(4).url(),
  rating : yup.number().required().min(0).max(10),
  summary : yup.string().required().min(20),
  trailer : yup.string().required().min(4).url(),
})

export function AddMovie() {
  const navigate  = useNavigate();
  
  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues: {
      name: " ",
      poster: " ",
      rating: " ",
      summary: " ",
      trailer: " ",
    },
    validationSchema : formValidationSchema,
    onSubmit : (newMovie) => {
      console.log("Form values",values);
      addMovie(newMovie);
    }
  });
  const addMovie = async (newMovie) => {

    
   await fetch("https://63d75fcdafbba6b7c93beca4.mockapi.io/movies", {
      method : "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
    navigate("/movies")
        // setMovieList([...movieList, newMovie]);
        console.log(newMovie);
      }

  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <TextField error={errors.name && touched.name} helperText={errors.name && touched.name ? errors.name : null } value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Name" variant="outlined" />

      <TextField error={errors.poster && touched.poster} helperText={errors.poster && touched.poster ? errors.poster : null } value={values.poster} name="poster" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Poster" variant="outlined" />

      <TextField error={errors.rating && touched.rating} helperText={errors.rating && touched.rating ? errors.rating : null } value={values.rating} name="rating" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Rating" variant="outlined" />
        
      <TextField error={errors.summary && touched.summary}  helperText={errors.summary && touched.summary ? errors.summary : null } value={values.summary} name="summary" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Summary" variant="outlined" />
        
      <TextField error={errors.trailer && touched.trailer} helperText={errors.trailer && touched.trailer ? errors.trailer : null } value={values.trailer} name="trailer" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie trailer" variant="outlined" />
         
      <Button variant="contained" type='submit'>Add Movie</Button>
      {/* <p>***{ name }***{ poster }***{ rating }***{ summary }***</p> */}
    </form>
  );
}
