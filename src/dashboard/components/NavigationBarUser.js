// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Popover from '@material-ui/core/Popover';
import { Avatar, Button } from '@material-ui/core';
import LogoutButton from '../../authentication/containers/LogoutButton';
import Scenes from '../../main/navigation/Scenes';
import { Metrics } from '../../main/themes';
import { getSession } from '../../authentication/selectors/authenticationSelectors';

type Props = {
  session: Profile,
  status: string,
  history: {
    push: Function,
  }
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
    const imgLink = this.props.session.imgUser === '' ? 'https://krourke.org/img/md_avatar_stormtrooper.svg' : this.props.session.imgUser;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item>
            <Avatar alt="Unknown contact avatar" src={imgLink}>#</Avatar>
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
              <Button onClick={() => this.props.history.push(Scenes.Profile)}>
                Aller au profil
              </Button> <br/>
              <Button onClick={() => this.props.history.push(Scenes.CreateOffer)}>
                Créer une offre
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

export default withRouter(connect(mapStateToProps)(NavigationBarUser));