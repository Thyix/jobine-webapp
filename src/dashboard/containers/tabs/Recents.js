// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Metrics, Medias } from '../../../main/themes';
import ActivityList from '../../../activities/components/ActivityList';

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

const CallHistoryContainer = styled.div`
  flex-grow: 1 !important;
  max-height: 100% !important;
  overflow-y: scroll !important;
`;

type Props = {
}

type State = {}

export class Recents extends React.Component<Props, State> {

  state = {}
  render() {
    return (
      <Container>
        <MainArea>

          <CallHistoryContainer>
            <Grid container style={{ backgroundColor: 'white', height: '100%' }}>
              <ActivityList dailyActivities={'Recentsssssss'}/>
            </Grid>
          </CallHistoryContainer>

        </MainArea>
      </Container>
    );
  }

}
export default Recents;