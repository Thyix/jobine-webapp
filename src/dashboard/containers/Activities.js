// @flow

import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { Colors } from '../../main/themes';
import Scenes from '../../main/navigation/Scenes'
import { bindActionCreators } from 'redux';
import { changeTab, fetchOffers } from '../../offers/actions/offersActions';
import Recents from './tabs/Recents';
import Answers from './tabs/Answers';
import { isAdmin } from '../../authentication/selectors/authenticationSelectors';
import { fetchProfiles } from '../../authentication/actions/authenticationActions';
import ViewContact from '../../offers/containers/ViewContact';
import ViewOffer from '../../offers/containers/ViewOffer';
import { getTab } from '../../offers/selectors/offerSelector';
import SendMessage from '../../chat/components/SendMessage';
import ManageTab from './tabs/ManagerTab';
import ManageAccounts from './tabs/ManageAccounts';

type Props = {
  actions: {
  fetchProfiles: () => Promise<void>,
  fetchOffers: () => Promise<void>,
  },
  tab: string,
  history: {
    push: Function,
  },
  messages: any,
  admin: boolean,
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
  height: 815px !important;
  background-color: ${Colors.secondary} !important;
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
  
  componentDidMount() {
    this.props.actions.fetchProfiles();
    this.props.actions.fetchOffers();
    this.intervalID = setInterval(
      () => this.tick(),
      2000,
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.props.actions.fetchProfiles();
    this.props.actions.fetchOffers();
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  

  handleChange = (event: any, value: number) => {
    this.setState({ value });
    switch(value) {
      case 0:
        this.props.history.push(Scenes.Recents);
        this.props.actions.changeTab(0);
        break;
      case 1:
        this.props.history.push(Scenes.Messages);
        this.props.actions.changeTab(1);
        break;
      case 2:
        this.props.history.push(Scenes.Offer);
        this.props.actions.changeTab(2);
        break;
      case 3:
        this.props.history.push(Scenes.Contact);
        this.props.actions.changeTab(3);
        break;
      case 4:
        this.props.history.push(Scenes.Manage);
        this.props.actions.changeTab(4);
        break;
      case 5:
        this.props.history.push(Scenes.ManageAccounts);
        this.props.actions.changeTab(5);
        break;
      default:
    }
  };

  render() {
    return (
      <RootContainer id="higher-activities">
        <StyledTabs indicatorColor="secondary" onChange={this.handleChange} value={this.props.tab}>
          <Tab label="Offres en cours" id={this.state.time} />
          <Tab label="Fil des messages" />
          <Tab label="Visualiser une offre" />
          <Tab label="Visualiser un profil"/>
          <Tab label="Gérer mes offres"/>
          {this.props.admin &&
            <Tab label="Gérer les comptes"/>
          }
        </StyledTabs>
        <TabContent>
          {this.props.tab === 0 && <Recents/>}
          {this.props.tab === 1 && <Answers/>}
          {this.props.tab === 2 && <ViewOffer/>}
          {this.props.tab === 3 && <ViewContact/>}
          {this.props.tab === 4 && <ManageTab/>}
          {this.props.tab === 5 && <ManageAccounts/>} 
        </TabContent>
        {this.props.tab === 1 &&  <SendMessage/>}
      </RootContainer>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    tab: getTab(state),
    admin: isAdmin(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      changeTab,
      fetchProfiles,
      fetchOffers,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Activities));