import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useState } from 'react';
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function MovieList() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => getMovies(), [])

  const getMovies = () => {
    fetch("https://63d75fcdafbba6b7c93beca4.mockapi.io/movies", {
        method: "GET",
      })
        .then((data) => data.json())
          .then((data)=>setMovieList(data))
  }
  
  const deleteMovie = (id) =>{
    console.log(" Deliding Movie ", id);
    fetch(`https://63d75fcdafbba6b7c93beca4.mockapi.io/movies/${id}`, {
      method: "DELETE",
      }).then(()=>getMovies())
  }

  const navigate = useNavigate();

  return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}
      <div className='movie-list'>
        {movieList.map((mv) => (<Movie key={mv.id} movie={mv} id={ mv.id} deleteButton={<IconButton sx={{marginLeft:"auto"}}  color="error" onClick={()=>deleteMovie(mv.id)} ><DeleteIcon/></IconButton>} editButton={<IconButton sx={{marginLeft:"auto"}}  color="secondary" onClick={()=>navigate(`/movies/edit/${mv.id}`)} ><EditIcon/></IconButton>} />))}
      </div>
    </div>

  );
}

