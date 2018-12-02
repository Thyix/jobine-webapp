// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar, Button, TextField, Typography, CardMedia } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Medias, Metrics, Colors } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';
import { getSelectedUser, getSelectedOffer } from '../selectors/offerSelector';

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


type Props = {
  session: Profile,
  actions: {
  },
  offer: Offer,
  users: Profile[],
  selectedOffer: Offer,
}

type State = {
}

export class ViewOffer extends React.Component<Props, State> {
  state = {

  }

  render() {
    console.log(this.props.selectedOffer);
    return (
      <Container>
      <MainArea>
          {this.props.selectedOffer ?
          <Grid container style={{ height: window.screen.height - 185, backgroundColor: 'white', alignItems:'center', flexDirection:'column'}}>
              <StyledAvatar image={this.props.selectedOffer.imgOffer ? this.props.selectedOffer.imgOffer : 'https://krourke.org/img/md_avatar_stormtrooper.svg'}/>
              <React.Fragment>
              <StyledTextField
                autoComplete="titleOffer"
                id="titleField"
                label={"Titre de l'offre"}
                style={{color: Colors.primary}}
                type="text"
                value={this.props.selectedOffer.titleOffer || 'Aucun titre'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                id="descriptionField"
                label={"Description de l'offre"}
                multiline
                rowsMax="4"
                type="text"
                autoComplete="description"
                value={this.props.selectedOffer.descriptionOffer || 'Aucune description'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />

              <StyledTextField
                id="domainField"
                label={"Domaine associé"}
                type="text"
                autoComplete="domain"
                value={this.props.selectedOffer.domainOffer || 'Aucun domaine' }
                variant="outlined"
                InputProps={{
                  readOnly: true,
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
                  readOnly: true,
                }}
              />

              <StyledTextField
                autoComplete="adressField"
                id="adressField"
                label={"Adresse de l'entreprise"}
                type="text"
                value={this.props.selectedOffer.addressOffer || 'Aucune adresse'}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
              />
            </React.Fragment>

            <UpdateButton
              style={{ backgroundColor: Colors.green}}
              id="goToDomainButton"
              onClick={
                () => {}
              }
              variant="contained"
            >
              POSTULER
            </UpdateButton>
            <ProfileButton
              color="primary"
              id="goToProfile"
              onClick={
                () => {}
              }
              variant="contained"
            >
              Profil de l'annonceur
            </ProfileButton>
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
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffer);