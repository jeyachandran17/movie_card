import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";

export function MovieDetails( ) {
  
  const { id } = useParams();
  const [movie, setMovie] = useState({})
  
  useEffect(() => {
      fetch(`https://63d75fcdafbba6b7c93beca4.mockapi.io/movies/${id}`)
        .then((data) => data.json())
          .then((data)=>setMovie(data))
  },[id])

  // const movie = movieList[id];
  console.log(movie);
  const styles = {
    color: movie.rating < 8.5 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div className="moive-details-container">
      <iframe
        width="200%"
        height="650"
        src={movie.trailer}
        title="Jimikki Ponnu (Tamil) Video | Varisu | Thalapathy Vijay | Thaman S | Vamshi Paidipally"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
      </div>
      <p className="movie-show">{movie.summary}</p>
      <Button variant='contained' onClick={() => navigate("/movies")}><ArrowBackIcon />Back</Button>
    </div>
  );
}
