// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ActivityList from '../../../activities/components/ActivityList';
import { Metrics, Medias, Colors } from '../../../main/themes';
import SendMessage from '../../../offers/containers/SendMessage';

const Container = styled(Grid)`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-grow: 1 !important;
  height: 100%;
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
  height: 100%;
`;

const ChatContentContainer = styled.div`
  flex-grow: 1 !important;
  max-height: 100% !important;
  overflow-y: scroll !important;
`;

const ContactArea = styled.div`
  min-width: 335px !important;
  height: 100% !important;
  display: block;
  background-color: ${Colors.primaryBackground};
  z-index: 100 !important;
  ${Medias.xs} {
    width: 100% !important;
    border-bottom: 1px solid ${Colors.primary};
  }
  ${Medias.md} {
    width: 335px !important;
    max-width: 335px !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  }
`;

const CallHistoryContainer = styled.div`
  flex-grow: 1 !important;
  max-height: 100% !important;
  overflow-y: scroll !important;
`;
type Props = {
}

type State = {}

export class Answers extends React.Component<Props, State> {

  state = {}
  render() {
    return (
      <Container>
        <MainArea>

          <ChatContentContainer>
            <Grid container style={{backgroundColor: 'white'}}>
            <ActivityList dailyActivities={'Réponsesssssd'}/>
            <SendMessage />
            </Grid>
          </ChatContentContainer>

        </MainArea>
      </Container>
    );
  }

}
export default Answers;