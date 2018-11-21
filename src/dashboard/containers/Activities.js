// @flow

import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { Colors } from '../../main/themes';
import Recents from './tabs/Recents';
import Answers from './tabs/Answers';
import ProfileItem from './tabs/Profile';

type Props = {};

type State = {
  value: number,
}

const RootContainer = styled.div`
  overflow: auto;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const TabContent = styled.div`
  height: 675px !important;
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
    return (
      <RootContainer id="higher-activities">
        <StyledTabs indicatorColor="primary" onChange={this.handleChange} value={this.state.value}>
          <Tab label="Offres en cours" />
          <Tab label="Messagerie" />
          <Tab label="Mon Profil" />
        </StyledTabs>
        <TabContent>
          {this.state.value === 0 && <Recents/>}
          {this.state.value === 1 && <Answers/>}
          {this.state.value === 2 && <ProfileItem/>}
        </TabContent>
        <div />
      </RootContainer>
    );
  }

}

export default Activities;