// @flow 

import React from 'react';
import styled from 'styled-components';
import { Grid, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators }  from 'redux';
import { fetchOfferUser } from '../actions/offersActions';
import { getSession } from '../../authentication/selectors/authenticationSelectors';
import { Medias, Metrics, Colors } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';
import Offer from '../domain/Offer';
import { getUserOffer } from '../selectors/offerSelector';

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
  },
  offer: Offer,
  userOffer: Profile,
}

type State = {
  titleOffer: string,
  descriptionOffer: string,
  domainOffer: string,
  dateOffer: string,
  daysOffer: string,
  addressOffer: string,
  imgOffer: string,
  userOffer: string,
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
    userOffer: this.props.userOffer,
  }

  componentWillMount() {
    this.props.actions.fetchOfferUser(this.props.offer.idUser);
  }
  render() {
    console.log(this.props.userOffer);
    return (
      <Container>
        <MainArea>

            <Card style={{marginTop: Metrics.spacing.large, width: '300px'}}>
              <CardActionArea style={{backgroundColor: Colors.backgroundLight}}>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  style={{ height: 125, width: 150, marginLeft: 75, marginTop: Metrics.spacing.small }}
                  image={this.state.imgOffer || 'http://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png'}
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
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{moment(Date.parse(this.state.dateOffer.replace("[UTC]", ""))).format('DD/MM/YYYY') || 'Inconnu'}</Typography>

                  <Typography component="b" style={{color:'black'}}>Publié par: </Typography>
                  <Typography style={{marginLeft: Metrics.spacing.small}}>{this.props.userOffer ? this.props.userOffer[0].nameUser : ''}</Typography>

                </CardContent>
              </CardActionArea>
              <CardActions style={{ backgroundColor: Colors.highlightedBackground }}>
                <Button size="small" color="secondary">
                  Postuler
                </Button>
                <Button size="small" color="secondary">
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
    userOffer: getUserOffer(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchOfferUser
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListItem);