// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import TitledDivider from '../../main/components/TitledDivider';
import { Metrics, Colors } from '../../main/themes';
import OfferListItem from '../../offers/components/OfferListItem';
import { getMessages } from '../../chat/selector/chatSelector';
import { getSession } from '../../authentication/selectors/authenticationSelectors';
import { getChatUser } from '../../offers/selectors/offerSelector';
import Profile from '../../authentication/domain/Profile';
import ChatMessage from '../../chat/components/ChatMessage';

const StyledTitledDivider = styled(TitledDivider)`
  margin-top: ${Metrics.spacing.medium}px;
  margin-bottom: ${Metrics.spacing.large}px;
`;

type Props = {
  activities: any,
  tab: string;
  session: Profile,
  chatUser: Profile,
}
export class ActivityListSection extends React.Component<Props> {
  render() {
    let chatTitle;
    this.props.chatUser ? chatTitle = `Fil des messages avec ${this.props.chatUser.nameUser}` :  chatTitle = 'Vous devez choisir un contact pour voir le fil de discussion';
    console.log('activities', this.activities, 'session', this.props.session, 'chatUser', this.props.chatUser);
    return (
      <React.Fragment>
        <Grid item xs={12} style={{  marginLeft:'15px', marginRight:'50px' }}>
          <StyledTitledDivider id="sectionTitle" title={this.props.tab === 'recents' ? "Fil d'actualité" : chatTitle} />
        </Grid>
        {this.props.activities && this.props.activities.map(a =>
              <div key={this.props.tab === 'recents' ? a.idOffer : a.idMsg}>
                {this.props.tab === 'recents' ?
                  <div style={{ marginLeft: '100px', alignSelf:'center', justifyContent:'space-between', color: 'blue' }}>
                    <OfferListItem offer={a}/>
                  </div>
                :
                  <div>
                  {this.props.chatUser &&
                    <ChatMessage chatMessage={(a.idUserFrom === this.props.session.idUser && a.idUserTo === this.props.chatUser.idUser) ||
                    (a.idUserFrom === this.props.chatUser.idUser && a.idUserTo === this.props.session.idUser) ? a : null} received={this.props.session.idUser === a.idUserFrom ? false : true}/>
                  }
                  </div>
                }
              </div>
        )}
      </React.Fragment>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: getMessages(state),
    chatUser: getChatUser(state),
    session: getSession(state),
  };
}



export default connect(mapStateToProps)(ActivityListSection);