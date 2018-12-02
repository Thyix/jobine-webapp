// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { getSession, getAllUsers } from '../../authentication/selectors/authenticationSelectors';
import { Medias } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';

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
}

type State = {
}

export class ViewOffer extends React.Component<Props, State> {
  state = {

  }

  render() {
    return (
      <div>View offer</div>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
    session: getSession(state),
    users: getAllUsers(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffer);