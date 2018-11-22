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

class SignupFailedDialog extends React.Component<Props> {
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
          <DialogTitle color="secondary" style={{ fontSize: Metrics.spacing.huge }}>{"Cet email déjà été utilisé"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              L'email que vous avez entré a déjà été utilisé pour créer un autre compte. Veuillez en choisir un autre pour commencer.
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

export default SignupFailedDialog;