import { React, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material'
import { CardActionArea } from '@mui/material';
import { urlImage } from "../../constants"
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import useMovieList from '../hooks/useMovieList'
import Stack from '@mui/material/Stack';

import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import DialogContent from '@mui/material/DialogContent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Movie({ movie }) {
  const [open, setOpen] = useState(false);
  const { result, error } = useMovieList(movie.id);

  function handleClickOpen() {
    console.log('handleClickOpen', handleClickOpen);
    console.log('movie.id', movie.id)
    console.log('result', result)
    setOpen(true);
  };

  function handleClose() {
    console.log('handleClose', handleClose);
    setOpen(false);
  };


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    if (error) return null;
    if (!result) return null;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CancelIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => { handleClickOpen(movie) }}>
        <CardActionArea>
          <Stack spacing={2}>
            <CardMedia
              component="img"
              image={urlImage + movie.poster_path}
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.release_date}
              </Typography>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>

      {result ? (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Grid container>
            <Grid item>
              <CardMedia
                component="img"
                image={urlImage + result.backdrop_path}
                alt={movie.title}
              />
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {movie.title}
                <Typography variant="body2" color="text.secondary">
                  <AddCircleOutlineIcon />Agregar a favoritas
                </Typography>
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  {result.overview}
                </Typography>
              </DialogContent>
            </Grid>
          </Grid>
        </BootstrapDialog>
      ) : (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Cargando ...
          </BootstrapDialogTitle>
        </BootstrapDialog>
      )}
    </>
  );
}
