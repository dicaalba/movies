import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import { FormControl, Input, InputLabel, Button, Typography } from "@material-ui/core";
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export default function Register() {
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
        <Typography variant="h1" component="h2">Regístrate</Typography>
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

          <FormControl required fullWidth>
            <h4 htmlFor="passwordConfrim" style={styles.text}>
              <KeyIcon /> Confirm password
            </h4>
            <Input
              style={styles.input}
              name="passwordConfrim"
              autoComplete="passwordConfrim"
              disableUnderline={true}
              onChange={handleChange("passwordConfrim")}
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
            <Typography variant="h5" component="h6">
              <Link style={styles.text} to="/home">Registrar</Link></Typography>
          </Button>
        </form>
        <h3>Ya tienes cuenta? <Link style={styles.text} to="/">Inicia sesión</Link></h3>
      </Box>
    </Box>
  )
}
