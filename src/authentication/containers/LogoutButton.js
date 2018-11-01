import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  actions: {
    logout: () => Promise<void>,
  }
};

const LogoutButton = (props: Props) => {
  return (
    <Button onClick={() => props.actions.logout()} size="small" variant="contained">
      Déconnexion
    </Button>
  );
};


export default LogoutButton;
