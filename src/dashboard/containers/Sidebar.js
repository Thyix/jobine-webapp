// @flow

import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchField from './search/components/SearchField';
import ContactList from '../../users/containers/UsersList';
import { fetchProfiles } from '../../authentication/actions/authenticationActions';
import { getSession, getAllUsers } from '../../authentication/selectors/authenticationSelectors';
import Scenes from '../../main/navigation/Scenes';
import { Metrics } from '../../main/themes';

const SidebarContainer = styled.div`
  flex-direction: column;
  flex: 1;
  position: relative !important;
`;

const PaddedContainer = styled.div`
  padding: ${Metrics.spacing.large}px !important;
`;

type Props = {
  history: {
    push: Function,
    location: {
      pathname: string,
    },
  },
  actions: {
    fetchProfiles: () => Promise<void>,
  },
  session:Profile,
  users: Profile[],
  query: string,
}



class Sidebar extends React.Component<Props> {

  goToSearch = () => {
    const isInSearchScene = this.props.history.location.pathname.includes(Scenes.Search);
    if (!isInSearchScene) {
      this.props.history.push(Scenes.Search);
    }
  }

  componentDidMount() {
    this.props.actions.fetchProfiles();
  }

  render() {
    console.log(this.props.users);
    return (
      <SidebarContainer style={{ height: window.screen.height - 350}}>
        <PaddedContainer>
        <SearchField 
            onFocus={this.goToSearch}
            onQueryChanged={(query: string) => {} /*this.props.actions.updateQuery(query)*/}
            onSearch={(query: string) => {} /*this.props.actions.search(query)*/}
            query={this.props.query}
          />
        </PaddedContainer>
        <PaddedContainer>
          <ContactList contacts={this.props.users.length > 0 ? [this.props.users[0], this.props.users[1], this.props.users[2], this.props.users[3]] : [this.props.session]}
          title={'Récents'}/>
          <ContactList contacts={this.props.users.length > 0 ? [this.props.users[4], this.props.users[5], this.props.users[6], this.props.users[7]] : [this.props.session]}
          title={'Vous pourriez connaître...'}/>
          </PaddedContainer>
      </SidebarContainer>
    );
  }

}

function mapStateToProps(state) {
  return {
    session: getSession(state),
    users: getAllUsers(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchProfiles,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));