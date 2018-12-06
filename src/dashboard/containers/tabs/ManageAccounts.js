// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Medias } from '../../../main/themes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfiles } from '../../../authentication/actions/authenticationActions';
import { getAllUsers } from '../../../authentication/selectors/authenticationSelectors';  
import { getSession } from '../../../authentication/selectors/authenticationSelectors';
import ManageAccountListItem from '../search/components/ManageAccountListItem';

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
  actions: {
    fetchProfiles: () => Promise<void>,
  },
  users: Profile[],
  admin: boolean,
}

type State = {}

export class ManagerAccounts extends React.Component<Props, State> {

  state = {}
  
  componentWillMount() {
    this.props.actions.fetchProfiles();
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
    this.setState({
      time: new Date().toLocaleString()
    });
    this.props.actions.fetchProfiles();
  }
  
  render() {
    return (
      <Container>
        <MainArea>

          <CallHistoryContainer>
            <Grid container style={{ backgroundColor: 'white', height: '100%', paddingBottom:'50px' }}>
              {this.props.users && this.props.users.map(u =>
                <ManageAccountListItem key={u.idUser} contact={u}/>
              )}
            </Grid>
          </CallHistoryContainer>

        </MainArea>
      </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(ManagerAccounts);