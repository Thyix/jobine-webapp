// @flow

import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { Colors } from '../../main/themes';

type Props = {};

type State = {
}

const RootContainer = styled.div`
  overflow: auto;
  display: flex;
  height: 100% !important;
  flex-direction: column;
`;

const TabContent = styled.div`
  height: 100%;
  overflow: auto;
`;

const StyledTabs = styled(Tabs)`
  display: flex;
  border-bottom: 1px solid ${Colors.primary};
`

class Activities extends React.Component<Props, State> {
  render() {
    console.log('okokook');

    return (
      <RootContainer id="higher-activities">
        <StyledTabs indicatorColor="primary" onChange={this.handleChange} >
          <Tab label="Afficher les offres" />
          <Tab label="Voir les réponses" />
          <Tab label="Une tab de plus" />
        </StyledTabs>
        <TabContent>
        </TabContent>
        <div />
      </RootContainer>
    );
  }

}

export default Activities;