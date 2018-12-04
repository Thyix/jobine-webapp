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
    return (
      <React.Fragment>
        <Grid item xs={12} style={{  marginLeft:'15px', marginRight:'50px' }}>
          <StyledTitledDivider id="sectionTitle" title={this.props.tab === 'recents' ? "Fil d'actualité" : "Fil des messages"} />
        </Grid>
        {this.props.activities && this.props.activities.map(a =>
              <div key={a.idOffer}>
                {this.props.tab === 'recents' ?
                  <div style={{ marginLeft: '100px', alignSelf:'center', justifyContent:'space-between', color: 'blue' }}>
                    <OfferListItem offer={a}/>
                  </div>
                :
                  <div>
                  {this.props.chatUser ?
                    <ChatMessage chatMessage={a} received={this.props.session.idUser === a.idUserFrom ? false : true}/>
                  :
                  <div style={{display:'flex', marginLeft: 400, justifyContent:'center', alignContent:'center', marginTop: Metrics.spacing.huge }}>
                    <Typography style={{ color: Colors.primary, fontSize: 25, display:'flex', textAlign:'center'}}>
                      Vous devez postuler ou envoyer un message <br/> à un utilisateur pour voir le fil des messages
                    </Typography>
                  </div>
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