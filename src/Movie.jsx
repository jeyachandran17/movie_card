import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom"

export function Movie({ movie, id, deleteButton,editButton }) {
  const styles = {
    color: movie.rating < 8.5 ? "green" : "red",
  };

  // Manage State | Independent
  const [show, setshow] = useState(true);

  // Derived State | dependent
  // const summaryStyles = {
  //   display : show ? "block" : "none",
  // }

  const navigate = useNavigate();

  return (
    <Card  className="moive-container">
      <img className="movie-poster" src={movie.poster} alt="Movie poster" />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}
            <IconButton color='primary' onClick={() => setshow(!show)}>{show ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
            <IconButton color='primary' onClick={()=>navigate(`/movies/${id}`)}><InfoIcon/></IconButton></h3>   
          <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
        </div>
        {show ? <p className="movie-show">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />{editButton }{deleteButton}
      </CardActions>
    </Card >
  );
}
