import reactLogo from './assets/react.svg'
import './App.css'
import { MovieList } from './MovieList';
import { Routes, Route, Link } from "react-router-dom";
import { AddColor } from './AddColor';
import { PageNotFound } from './PageNotFound';
import { useState, useEffect } from 'react';
import { Home } from './Home';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';


function App() {

  const navigate = useNavigate();

  const [show, setshow] = useState(true);

  const darkTheme = createTheme({
  palette: {
    mode: show ? 'dark' : 'light',
  },
  });

  const bgstyle = {
    borderRadius: "0px",
    minHeight:"100vh",
  }
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={4} sx={bgstyle} >
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={()=>navigate("/")} >Home</Button>
              <Button color="inherit" onClick={()=>navigate("/movies")} >Movies</Button>
              <Button color="inherit" onClick={()=>navigate("/movies/add")} >AddMovies</Button>
              <Button color="inherit" onClick={()=>navigate("/colorgame")} >Color Game</Button>
              {/* <Button color="inherit" onClick={() => navigate("/tictacteo")} >TicTacTeo Game</Button> */}
              <Button sx={{marginLeft:"auto"}} color="inherit" onClick={() => setshow(!show)} >{show ? <BrightnessHighIcon/> : <Brightness4Icon/> }{ show ? 'Light Mode' : 'Drak Mode'}</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList  />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/colorgame" element={<AddColor />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Paper>
     </ThemeProvider>
  );
}

export default App;



