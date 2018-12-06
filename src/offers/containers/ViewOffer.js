// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Button, TextField, Typography, CardMedia } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators }  from 'redux';
import Scenes from '../../main/navigation/Scenes';
import { Medias, Metrics, Colors } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import { changeTab, updateSelectedUser, updateChatUser, updateOffer, fetchOffers } from '../actions/offersActions';
import { getAllUsers, getSession } from '../../authentication/selectors/authenticationSelectors';
import Offer from '../domain/Offer';
import { getSelectedOffer } from '../selectors/offerSelector';

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

const StyledAvatar = styled(CardMedia)`
width: 100px !important;
height: 100px !important;
border-radius: 20px !important;
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

const ProfileButton = styled(Button)`
  margin-top: ${Metrics.spacing.large}px !important;
  width: 250px !important;
  height: 50px !important;
  font-size: 13px !important;
  border-radius: 20px !important; 
  padding-vertical: ${Metrics.spacing.small}px !important;
`;

const EditButton = styled(Button)`
  margin-top: ${Metrics.spacing.large}px !important;
  width: 225px !important;
  height: 40px !important;
  font-size: 11px !important;
  border-radius: 20px !important; 
  padding-vertical: ${Metrics.spacing.small}px !important;
`;


type Props = {
  session: Profile,
  actions: {
  },
  offer: Offer,
  users: Profile[],
  selectedOffer: Offer,
  history: {
    push: Function,
  }
}

type State = {
  titleOffer: string,
  descriptionOffer: string,
  domainOffer: string,
  addressOffer: string,
}

export class ViewOffer extends React.Component<Props, State> {
  state = {
    titleOffer: this.props.selectedOffer && this.props.selectedOffer.titleOffer,
    descriptionOffer: this.props.selectedOffer && this.props.selectedOffer.descriptionOffer,
    domainOffer: this.props.selectedOffer && this.props.selectedOffer.domainOffer,
    addressOffer: this.props.selectedOffer && this.props.selectedOffer.addressOffer,
  }

  componentWillMount() {
    this.props.actions.fetchOffers();
  }

  goToContact() {
    this.props.actions.updateSelectedUser(this.props.users.filter(u => u.idUser === this.props.selectedOffer.idUser)[0]);
    this.props.actions.changeTab(3);
    this.props.history.push(Scenes.Contact);
  }

  goToConversation() {
    this.props.actions.updateChatUser(this.props.users.filter(u => u.idUser === this.props.selectedOffer.idUser)[0]);
    this.props.actions.changeTab(1);
    this.props.history.push(Scenes.Messages);
  }

  editOffer() {
    const newOffer = Offer.parseNew(this.state.addressOffer, this.props.selectedOffer.dateOffer, this.props.selectedOffer.daysOffer,
    this.state.descriptionOffer, this.state.domainOffer, this.props.selectedOffer.imgOffer, this.props.selectedOffer.idOffer, this.props.selectedOffer.idUser, this.state.titleOffer);
    this.props.actions.updateOffer(newOffer);
    this.props.actions.fetchOffers();
  }

  render() {
    return (
      <Container>
      <MainArea>
          {this.props.selectedOffer ?
          <Grid container style={{ height: window.screen.height - 185, backgroundColor: 'white', alignItems:'center', flexDirection:'column'}}>
              <StyledAvatar image={this.props.selectedOffer.imgOffer ? this.props.selectedOffer.imgOffer : 'http://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png'}/>
              <React.Fragment>
              <StyledTextField
                autoComplete="titleOffer"
                id="titleField"
                label={"Titre de l'offre"}
                style={{color: Colors.primary}}
                onChange={(event) => this.setState({ titleOffer: event.target.value })}
                type="text"
                value={this.state.titleOffer || 'Aucun titre'}
                variant="outlined"
                InputProps={{
                  readOnly: this.props.session.idUser === this.props.selectedOffer.idUser ? false : true,
                }}
              />

              <StyledTextField
                id="descriptionField"
                label={"Description de l'offre"}
                multiline
                rowsMax="4"
                type="text"
                autoComplete="description"
                onChange={(event) => this.setState({ descriptionOffer: event.target.value })}
                value={this.state.descriptionOffer || 'Aucune description'}
                variant="outlined"
                InputProps={{
                  readOnly: this.props.session.idUser === this.props.selectedOffer.idUser ? false : true,
                }}
              />

              <StyledTextField
                id="domainField"
                label={"Domaine associé"}
                type="text"
                autoComplete="domain"
                onChange={(event) => this.setState({ domainOffer: event.target.value })}
                value={this.state.domainOffer || 'Aucun domaine' }
                variant="outlined"
                InputProps={{
                  readOnly: this.props.session.idUser === this.props.selectedOffer.idUser ? false : true,
                }}
              />

              <StyledTextField
                id="daysField"
                label={'Durée du mandat'}
                autoComplete="daysOffer"
                type="text"
                value={this.props.selectedOffer.daysOffer + ' jours' || 'Aucune durée'}
                variant="outlined"
                InputProps={{
                  readOnly: this.props.session.idUser === this.props.selectedOffer.idUser ? false : true,
                }}
              />

              <StyledTextField
                autoComplete="adressField"
                id="adressField"
                label={"Adresse de l'entreprise"}
                type="text"
                onChange={(event) => this.setState({ addressOffer: event.target.value })}
                value={this.state.addressOffer || 'Aucune adresse'}
                variant="outlined"
                InputProps={{
                  readOnly: this.props.session.idUser === this.props.selectedOffer.idUser ? false : true,
                }}
              />
            </React.Fragment>

            <UpdateButton
              style={{ backgroundColor: Colors.green}}
              id="goToDomainButton"
              onClick={
                () => this.goToConversation()
              }
              variant="contained"
            >
              POSTULER
            </UpdateButton>
            <ProfileButton
              color="primary"
              id="goToProfile"
              onClick={
                () => this.goToContact()
              }
              variant="contained"
            >
              Profil de l'annonceur
            </ProfileButton>

            {this.props.session.idUser === this.props.selectedOffer.idUser &&
              <EditButton
                color="primary"
                id="editOffer"
                onClick={
                  () => this.editOffer()
                }
                variant="contained"
              >
                Modifier l'offre
              </EditButton>
            }
          </Grid>
          :
          <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop: Metrics.spacing.huge}}>
            <Typography style={{ color: Colors.primary, fontSize: 25, display:'flex', textAlign:'center'}}>
              Vous devez sélectionner une offre <br/> pour voir ses informations
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
    selectedOffer: getSelectedOffer(state),
    users: getAllUsers(state),
    session: getSession(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      changeTab,
      updateSelectedUser,
      updateChatUser,
      updateOffer,
      fetchOffers,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewOffer));