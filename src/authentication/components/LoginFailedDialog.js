import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Slide } from '@material-ui/core';
import { Metrics } from '../../main/themes';

type Props = {
  closeDialog: Function,
  opened: boolean,
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class LoginFailedDialog extends React.Component<Props> {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.closeDialog();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.opened}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle color="secondary" style={{ fontSize: Metrics.spacing.huge }}>{"Mot de passe incorrect"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              La combinaison de votre nom d'utilisateur et de votre mot de passe n'a pas fonctionnée. Veuillez réessayer avec des identifiants valides.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary" autoFocus>
              Recommencer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginFailedDialog;