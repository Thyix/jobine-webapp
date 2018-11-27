import { Record } from 'immutable';

const OfferRecord = Record({
  addressOffer: undefined,
  dateOffer: undefined,
  idOffer: undefined,
  idUser: undefined,
  titleOffer: undefined,
});

class Offer extends OfferRecord {
  addressOffer: string;
  dateOffer: string;
  idOffer: string;
  idUser: string;
  titleOffer: string;
}

Offer.parse = (plain: any): Offer => {
  return new Offer({
    addressOffer: plain["adressOffer"],
    dateOffer: plain["dateOffer"],
    idOffer: plain["idOffer"],
    idUser: plain["idUser"],
    titleOffer: plain["titleOffer"],
  });
};

export default Offer;