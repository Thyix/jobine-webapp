import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authenticationActions';
import { bindActionCreators } from 'redux';
import { Button } from '@material-ui/core';

type Props = {
  actions: {
    logout: () => Promise<void>,
  }
};

const LogoutButton = (props: Props) => {
  return (
    <Button onClick={() => props.actions.logout()}>
      Se Déconnecter
    </Button>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      logout,
    }, dispatch),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
