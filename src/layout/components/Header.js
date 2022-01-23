import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import React from 'react'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export default function Header() {
  const imagen = "https://www.cinemascomics.com/wp-content/uploads/2021/11/joker-joaquin-phoenix-ridley-scott.jpg";

  const styles = {
    paperContainer: {
      backgroundImage: `url(${imagen})`,
      height: '500px',
      color: 'white',
      textShadow: '5px 5px #000000',
      filter: 'brightness(80%)'
    },
    logo: {
      backgroundColor: 'yellow',
      color: 'black',
      with: '150px',
      display: 'inline-block',
      padding: '10px',
      marginTop: '260px'
    }
  };

  return (
    <Box style={styles.paperContainer}>
      <Container>
        <Box style={styles.logo}>
          <LocalMoviesIcon />
        </Box>
        <h1>Xepelin Movie Database</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accuman odio. Quisque et felis id magna ultricies.</h3>
      </Container>
    </Box>
  )
}
