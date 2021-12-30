import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsConfig from './aws-exports';
import Layout from './layout/comnponents/Layout';
import awsExports from './aws-exports';
import React from 'react';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./styles.css";

Amplify.configure(awsExports);

function App({ signOut }) {

  return (
    <>
      <Button size="small" onClick={signOut}>
        <ExitToAppIcon /> Cerrar sesión
      </Button>
      <Layout />
    </>

  );
}

export default withAuthenticator(App);
