import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { API } from './global';

const formValidationSchema = yup.object({
  name : yup.string().required(),
  poster : yup.string().required().min(4).url(),
  rating : yup.number().required().min(0).max(10),
  summary : yup.string().required().min(20),
  trailer : yup.string().required().min(4).url(),
})

export function EditMovie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  
  useEffect(() => {
      fetch(`${API}/movies/${id}`)
        .then((data) => data.json())
          .then((data)=>setMovie(data))
  },[id])
  console.log(movie);
  return (
    movie ? <EditMovieForm movie={movie} /> :  <div className='loading'><CircularProgress /></div> 
  );
}


function EditMovieForm({ movie }) {
  const navigate = useNavigate();
  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema : formValidationSchema,
    onSubmit : (updatedMovie) => {
      // console.log("Form values",updatedMovie);
      updateMovie(updatedMovie);
    }
  });
  const updateMovie = async (updatedMovie) => {
    // console.log(updatedMovie);
    
   await fetch(`${API}/movies/${movie.id}`, {
      method : "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
    navigate("/movies")
        // setMovieList([...movieList, newMovie]);
        console.log(updatedMovie); 
      }

  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <TextField error={errors.name && touched.name} helperText={errors.name && touched.name ? errors.name : null } value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Name" variant="outlined" />

      <TextField error={errors.poster && touched.poster} helperText={errors.poster && touched.poster ? errors.poster : null } value={values.poster} name="poster" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Poster" variant="outlined" />

      <TextField error={errors.rating && touched.rating} helperText={errors.rating && touched.rating ? errors.rating : null } value={values.rating} name="rating" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Rating" variant="outlined" />
        
      <TextField error={errors.summary && touched.summary}  helperText={errors.summary && touched.summary ? errors.summary : null } value={values.summary} name="summary" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie Summary" variant="outlined" />
        
      <TextField error={errors.trailer && touched.trailer} helperText={errors.trailer && touched.trailer ? errors.trailer : null } value={values.trailer} name="trailer" onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Movie trailer" variant="outlined" />
         
      <Button variant="contained" color="success" type='submit'>Save</Button>
      {/* <p>***{ name }***{ poster }***{ rating }***{ summary }***</p> */}
    </form>
  );
}