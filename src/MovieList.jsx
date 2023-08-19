import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useState } from 'react';
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from "./global";

export function MovieList() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => getMovies(), [])

  const getMovies = () => {
    fetch(`${API}/movies`, {
        method: "GET",
      })
        .then((data) => data.json())
          .then((data)=>setMovieList(data))
  }
  
  const deleteMovie = (id) =>{
    console.log(" Deliding Movie ", id);
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
      }).then(()=>getMovies())
  }

  const navigate = useNavigate();

  return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}
      <div className='movie-list'>
        {movieList.map((mv) => (<Movie key={mv._id} movie={mv} id={ mv._id} deleteButton={<IconButton sx={{marginLeft:"auto"}}  color="error" onClick={()=>deleteMovie(mv._id)} ><DeleteIcon/></IconButton>} editButton={<IconButton sx={{marginLeft:"auto"}}  color="secondary" onClick={()=>navigate(`/movies/edit/${mv._id}`)} ><EditIcon/></IconButton>} />))}
      </div>
    </div>

  );
}

