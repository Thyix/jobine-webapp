import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Colors, Metrics } from '../../main/themes';

class LoginFailedDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle color="secondary" style={{fontSize: Metrics.spacing.huge}}>{"Mot de passe incorrect"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Votre nom d'utilisateur ou votre mot de passe n'a pas fonctionné. Veuillez réessayer avec des identifiants différents.
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