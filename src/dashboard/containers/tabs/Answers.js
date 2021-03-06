// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Medias } from '../../../main/themes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../../../chat/actions/chatActions';
import { getSession } from '../../../authentication/selectors/authenticationSelectors';
import { getMessages } from '../../../chat/selector/chatSelector';
import ActivityList from '../../../activities/components/ActivityList';
import { getOffer, getChatUser } from '../../../offers/selectors/offerSelector';

const Container = styled(Grid)`
  display: flex !important;
  width: 100% !important;
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

const CallHistoryContainer = styled.div`
  flex-grow: 1 !important;
  max-height: 100% !important;
  overflow-y: scroll !important;
`;

type Props = {
  actions: {
    fetchMessages: () => Promise<void>,
  },
  messages:[],
  offer: [],
  session: Profile,
  selectedUser: Profile,
}

type State = {}

export class Answers extends React.Component<Props, State> {

  state = {}

  componentWillMount() {
    this.props.actions.fetchMessages(this.props.session);
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.props.actions.fetchMessages(this.props.session);
      this.setState({
        time: new Date().toLocaleString()
      });
    }
  

  render() {
    return (
      <Container>
        <MainArea>

          <CallHistoryContainer>
            <Grid container style={{ backgroundColor: 'white', height: '100%' }}>
                <ActivityList dailyActivities={this.props.messages} tab={'answers'}/>
            </Grid>
          </CallHistoryContainer>

        </MainArea>
      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    messages: getMessages(state),
    offer: getOffer(state),
    session: getSession(state),
    chatUser: getChatUser(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchMessages,
    }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Answers);