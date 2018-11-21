// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Popover from '@material-ui/core/Popover';
import { Avatar, Button } from '@material-ui/core';
import LogoutButton from '../../authentication/containers/LogoutButton';
import { Metrics } from '../../main/themes';
import { getSession } from '../../authentication/selectors/authenticationSelectors';

type Props = {
  session: Profile,
  status: string,
};

type State = {
  anchorEl: any,
};

const UserInfo = styled(Grid)`
  &:hover {
    cursor: pointer !important;
  }
`;

class NavigationBarUser extends React.Component<Props, State> {

  state = {
    anchorEl: null,
  };

  handleClick = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  close = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item>
            <Avatar alt="Unknown contact avatar" src={this.props.session.imgUser}>#</Avatar>
          </Grid>

          <UserInfo item onClick={this.handleClick}>
            <Typography>{this.props.session.nameUser}</Typography>
            <Typography>{'En ligne'}</Typography>
          </UserInfo>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            id="simple-popper"
            onClose={this.close}
            open={open}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div style={{ padding: Metrics.spacing.medium, flexDirection:'row' }}>
              <Button>
                Aller au profil
              </Button> <br/>
              <Button>
                Préférences
              </Button> <br/>
              <LogoutButton />
            </div>
          </Popover>
        </Grid>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    session: getSession(state),
  };
}

export default connect(mapStateToProps)(NavigationBarUser);