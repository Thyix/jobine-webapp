// @flow

import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux'
import { Colors } from '../../main/themes';
import { bindActionCreators } from 'redux';
import { fetchOffers } from '../../offers/actions/offersActions';
import Recents from './tabs/Recents';
import Answers from './tabs/Answers';

type Props = {
  actions: {
    fetchOffers: () => Promise<void>,
  },
};

type State = {
  value: number,
  time: Date,
}

const RootContainer = styled.div`
  overflow: auto;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const TabContent = styled.div`
  height: 705px !important;
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
      time: null
    }
    this.intervalID = null;
  }

  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
    this.props.actions.fetchOffers();
  }

  render() {
    return (
      <RootContainer id="higher-activities">
        <StyledTabs indicatorColor="primary" onChange={this.handleChange} value={this.state.value}>
          <Tab label="Offres en cours" id={this.state.time} />
          <Tab label="Messagerie" />
          <Tab label="Visualiser une offre" />
          <Tab label="Visualiser un profil"/>
        </StyledTabs>
        <TabContent>
          {this.state.value === 0 && <Recents/>}
          {this.state.value === 1 && <Answers/>}
          {this.state.value === 2 && <div>Cliquez sur une offre</div>}
          {this.state.value === 3 && <div>Cliquez sur un profil</div>}
        </TabContent>
        <div />
      </RootContainer>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchOffers
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);