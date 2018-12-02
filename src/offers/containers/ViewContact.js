// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators }  from 'redux';
import { getSession, getAllUsers } from '../../authentication/selectors/authenticationSelectors';
import { Medias, Metrics, Colors } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';
import { getSelectedUser } from '../selectors/offerSelector';

const Container = styled(Grid)`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-grow: 1 !important;
  align-self: stretch !important;

  ${Medias.xs} {
    flex-direction: column-reverse !important;
  }
  ${Medias.md} {
    flex-direction: row !important;
  }
`;

const MainArea = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: space-between !important;
  align-self: stretch !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
`;


type Props = {
  session: Profile,
  actions: {
  },
  offer: Offer,
  users: Profile[],
  selectedUser: any,
}

type State = {
}

export class ViewContact extends React.Component<Props, State> {
  state = {

  }

  render() {
    console.log('profil recu', this.props.selectedUser);
    return (
      <div>ViewContact</div>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
    selectedUser: getSelectedUser(state),    
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContact);