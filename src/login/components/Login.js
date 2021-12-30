import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import { FormControl, Input, Button, Typography } from "@material-ui/core";

export default function Login() {
  const styles = {
    form: {
      backgroundColor: '#141414',
      color: 'white',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignContent: "center",
      justifyContent: "center",
      flexWrap: 'wrap'
    },
    button: {
      backgroundColor: '#5031a9',
      color: 'white',
      marginTop: '25px'
    },
    input: {
      backgroundColor: '#2c2c2c',
      color: 'white'
    },
    text: {
      color: 'white'
    }

  };

  function submitRegistration(e) {
    console.log('submitRegistration', e);
  };

  function handleChange(e) {
    console.log('handleChange', e);
  };

  function isValid() {
    // if (email === "") {
    //   return false;
    // }
    return true;
  };

  return (
    <Box sx={styles.form}>
      <Box>
        <Typography variant="h1" component="h2">Inicia sesión</Typography>
        <Typography variant="h3" component="h4">Disfruta de una experiencia personalizada!</Typography>
        <form
          onSubmit={submitRegistration}
        >
          <FormControl required fullWidth>
            <h4 htmlFor="email" style={styles.text}>
              <MailIcon /> Email
            </h4>
            <Input
              style={styles.input}
              name="email"
              type="email"
              autoComplete="email"
              disableUnderline={true}
              onChange={handleChange("email")}
            />
          </FormControl>

          <FormControl required fullWidth>
            <h4 htmlFor="password" style={styles.text}>
              <KeyIcon /> Password
            </h4>
            <Input
              style={styles.input}
              name="password"
              autoComplete="password"
              disableUnderline={true}
              onChange={handleChange("password")}
              type="password"
            />
          </FormControl>

          <Button
            style={styles.button}
            disabled={!isValid()}
            disableRipple
            fullWidth
            variant="outlined"
            type="submit"
            onClick={submitRegistration}
          >
            <Typography variant="h5" component="h6">Ingresar</Typography>
          </Button>
        </form>
        <h3>No tienes cuenta? <Link style={styles.text} to="signup">Regístrate</Link></h3>
      </Box>
    </Box>
  )
}
