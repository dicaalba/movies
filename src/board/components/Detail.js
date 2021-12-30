import { React, useState } from 'react'
import useMovieList from '../hooks/useMovieList'
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

export default function Detail({ movie }) {
  const { result, error } = useMovieList(movie.id);

  if (error) return null;
  if (!result) return null;

  return null;
}
