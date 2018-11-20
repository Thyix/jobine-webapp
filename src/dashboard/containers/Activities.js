// @flow

import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { Colors } from '../../main/themes';
import Recents from './tabs/Recents';
import Answers from './tabs/Answers';
import AllOffers from './tabs/AllOffers';

type Props = {};

type State = {
  value: number,
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

  constructor(props: Props) {
    super(props);

    this.state = {
      value: 0,
    }
  }

  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  render() {
    console.log('okokook');

    return (
      <RootContainer id="higher-activities">
        <StyledTabs indicatorColor="primary" onChange={this.handleChange} value={this.state.value}>
          <Tab label="Afficher les offres" />
          <Tab label="Voir les réponses" />
          <Tab label="Une tab de plus" />
        </StyledTabs>
        <TabContent>
          {this.state.value === 0 && <Recents/>}
          {this.state.value === 1 && <Answers/>}
          {this.state.value === 2 && <AllOffers/>}
        </TabContent>
        <div />
      </RootContainer>
    );
  }

}

export default Activities;