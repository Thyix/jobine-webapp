// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar, Button, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators }  from 'redux';
import Scenes from '../../main/navigation/Scenes';
import { Medias, Metrics, Colors } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';
import { getSelectedUser } from '../selectors/offerSelector';
import { getAllUsers } from '../../authentication/selectors/authenticationSelectors';

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

const StyledAvatar = styled(Avatar)`
width: 100px !important;
height: 100px !important;
align-items: center !important;
margin-top: ${Metrics.spacing.huge}px !important;
margin-bottom: ${Metrics.spacing.large}px !important;
`;

const StyledTextField = styled(TextField)`
  width: ${300}px !important;
  margin-top: ${Metrics.spacing.small}px !important;
`;

const MainArea = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: space-between !important;
  align-self: stretch !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
`;

const UpdateButton = styled(Button)`
  margin-top: ${Metrics.spacing.large}px !important;
  width: 300px !important;
  height: 50px !important;
  font-size: 15px !important;
  border-radius: 20px !important; 
  padding-vertical: ${Metrics.spacing.small}px !important;
`;


type Props = {
  session: Profile,
  actions: {
    updateSelectedUser: (user: Profile) => Promise<void>,
  },
  offer: Offer,
  users: Profile[],
  selectedUser: any,
  history: {
    push: Function,
  }
}

type State = {
}

export class ViewContact extends React.Component<Props, State> {
  state = {

  }

  render() {
    return (
      <Container>
      <MainArea>
          {this.props.selectedUser ?
          <Grid container style={{ height: window.screen.height - 185, backgroundColor: 'white', alignItems:'center', flexDirection:'column'}}>
              <StyledAvatar src={this.props.selectedUser.imgUser ? this.props.selectedUser.imgUser : 'https://krourke.org/img/md_avatar_stormtrooper.svg'}/>
              <React.Fragment>
              <StyledTextField
                autoComplete="username"
                id="usernameField"
                label={"Nom d'utilisateur"}
                style={{color: Colors.primary}}
                type="text"
                value={this.props.selectedUser.nameUser || 'Aucun'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                id="emailField"
                label={"Adresse mail"}
                type="text"
                autoComplete="email"
                value={this.props.selectedUser.emailUser}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                id="descriptionField"
                label={"Description de votre profil"}
                type="text"
                autoComplete="description"
                value={this.props.selectedUser.descriptionUser || 'Aucune description'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                id="imgField"
                label={'Image du profil'}
                autoComplete="imgLink"
                type="text"
                value={this.props.selectedUser.imgUser || 'Aucune image'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                autoComplete="jobField"
                id="jobField"
                label={"Domaine d'affaire"}
                type="text"
                value={this.props.selectedUser.jobUser}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />
            </React.Fragment>

            <UpdateButton
              color="primary"
              id="goToDomainButton"
              onClick={
                () => this.props.history.push(Scenes.Messages)
              }
              variant="contained"
            >
              Envoyer un message
            </UpdateButton>
          </Grid>
          :
          <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop: Metrics.spacing.huge}}>
          <Typography style={{ color: Colors.primary, fontSize: 25, display:'flex', textAlign:'center'}}>
              Vous devez sélectionner un contact <br/> pour voir ses informations
            </Typography>
          </div>
          }

      </MainArea>
    </Container>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
    selectedUser: getSelectedUser(state), 
    users: getAllUsers(state),   
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewContact));