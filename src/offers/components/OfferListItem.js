// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import Scenes from '../../main/navigation/Scenes';
import { bindActionCreators }  from 'redux';
import { getSession, getAllUsers } from '../../authentication/selectors/authenticationSelectors';
import { Medias, Metrics, Colors } from '../../main/themes';
import { updateSelectedOffer, changeTab } from '../actions/offersActions'; 
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';

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


type Props = {
  session: Profile,
  actions: {
    updateSelectedOffer: () => Promise<void>,
    changeTab: (id: number) => Promise<void>,
  },
  offer: Offer,
  users: Profile[],
  history: {
    push: Function,
  }
}

type State = {
  titleOffer: string,
  descriptionOffer: string,
  domainOffer: string,
  dateOffer: string,
  daysOffer: string,
  addressOffer: string,
  imgOffer: string,
  user: Profile,
}

export class OfferListItem extends React.Component<Props, State> {
  state = {
    titleOffer: this.props.offer.titleOffer,
    descriptionOffer: this.props.offer.descriptionOffer,
    domainOffer: this.props.offer.domainOffer,
    dateOffer: this.props.offer.dateOffer,
    daysOffer: this.props.offer.daysOffer,
    addressOffer: this.props.offer.addressOffer,
    imgOffer: this.props.offer.imgOffer,
    user: '',
  }
  getImage(user: Profile) {
    if (user.imgUser === '') {
      return 'https://krourke.org/img/md_avatar_stormtrooper.svg'
    } else {
      return user.imgUser;
    }
  }

  seeOffer() {
    this.props.actions.updateSelectedOffer(this.props.offer);
    this.props.actions.changeTab(2);
    this.props.history.push(Scenes.Offer);
  } 
  render() {
    let user = this.props.users.filter(u => u.idUser === this.props.offer.idUser) || this.props.session;
    return (
      <Container>
        <MainArea>

            <Card style={{marginTop: Metrics.spacing.large, width: '300px'}}>
              <CardActionArea style={{backgroundColor: Colors.backgroundLight}} onClick={() => this.seeOffer()}>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  style={{ height: 125, width: 150, marginLeft: 75, marginTop: Metrics.spacing.small, borderRadius: 20 }}
                  src={this.state.imgOffer || 'http://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png'}
                  title="Offer image"
                />
                <CardContent>
                  <div style={{ flexDirection:'row'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {this.state.titleOffer}
                  </Typography>
                  </div>
                  <Typography component="p" style={{marginBottom: Metrics.spacing.small}}>
                  {this.state.descriptionOffer || 'Aucune description'}
                  </Typography>

                  <Typography component="b" style={{color:'black'}}>Emplacement: </Typography>
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{this.state.addressOffer}</Typography>

                  <Typography component="b" style={{color:'black'}}>Durée de l'offre: </Typography>
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{this.state.daysOffer} jours</Typography>

                  <Typography component="b" style={{color:'black'}}>Domaine d'activité: </Typography>
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{this.state.domainOffer || 'Aucun domaine'}</Typography>

                  <Typography component="b" style={{color:'black'}}>Date de parution: </Typography>
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{this.props.offer.dateOffer instanceof moment ? moment(this.props.offer.dateOffer).format('DD/MM/YYYY') : moment(Date.parse(this.props.offer.dateOffer.replace("[UTC]", ""))).format('DD/MM/YYYY')}</Typography>

                  <Typography component="b" style={{color:'black'}}>Publié par: </Typography>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Avatar src={user[0] ? this.getImage(user[0]) : 'https://krourke.org/img/md_avatar_stormtrooper.svg'}/>
                    <Typography component="p"  style={{ marginTop:10, marginLeft: 20, fontSize: 15}}>{user[0] ? user[0].nameUser : ''}</Typography>
                    </div>


                </CardContent>
              </CardActionArea>
              <CardActions style={{ backgroundColor: Colors.highlightedBackground }}>
                <Button size="small" color="secondary">
                  Postuler
                </Button>
                <Button size="small" color="secondary" onClick={() => this.seeOffer()}>
                  En savoir plus
                </Button>
              </CardActions>
            </Card>

        </MainArea>
      </Container>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
    session: getSession(state),
    users: getAllUsers(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      updateSelectedOffer,
      changeTab,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferListItem));