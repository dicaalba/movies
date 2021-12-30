import { Grid, Typography } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import React from 'react'
import Movie from './Movie'
import useMovieList from '../hooks/useMovieList'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';

import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Whirligig from 'react-whirligig'

export default function CardList({ nameList }) {
  const theme = useTheme();
  const { result, error } = useMovieList(nameList.id);

  let whirligig
  const handleNext = () => whirligig.next()
  const handleBack = () => whirligig.prev()

  const styles = {
    cardList: {
      marginTop: '50px',
      marginBottom: '50px'
    }
  };

  if (error) return null;
  if (!result) return (
    <Box sx={{ width: '100%' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  )

  return (
    <Box style={styles.cardList}>
      <Typography variant="h4" component="h2">
        {nameList.category} <ArrowForwardIcon />
      </Typography>
      <Typography variant="h6" component="h2">
        Lorem Ipsum
      </Typography>
      <Grid container spacing={2} style={styles.cardList}>
        <Whirligig visibleSlides={3} ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}>
          {result.results.map((movie) => {
            return (
              <Movie movie={movie} key={movie.id} />
            )
          })}
        </Whirligig>
        <Button size="small" onClick={handleBack}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <Button size="small" onClick={handleNext}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>


      </Grid>
      <Divider />
    </Box>
  )
}
