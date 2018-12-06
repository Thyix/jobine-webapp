import { Record } from 'immutable';

const OfferRecord = Record({
  addressOffer: undefined,
  dateOffer: undefined,
  daysOffer: undefined,
  descriptionOffer: undefined,
  domainOffer: undefined,
  imgOffer: undefined,
  idOffer: undefined,
  idUser: undefined,
  titleOffer: undefined,
  
});

class Offer extends OfferRecord {
  addressOffer: string;
  dateOffer: string;
  daysOffer: number;
  descriptionOffer: string;
  domainOffer: string;
  imgOffer: string;
  idOffer: number;
  idUser: number;
  titleOffer: string;
}

Offer.parse = (plain: any): Offer => {
  return new Offer({
    addressOffer: plain["adressOffer"],
    dateOffer: plain["dateOffer"],
    daysOffer: plain["daysOffer"],
    descriptionOffer: plain["descriptionOffer"],
    domainOffer: plain["domainOffer"],
    imgOffer: plain["imgOffer"],
    idOffer: plain["idOffer"],
    idUser: plain["idUser"],
    titleOffer: plain["titleOffer"],
  });
};

Offer.parseNew = (address: string, date: string, days: number, description: string, domain: string, imgOffer: string, idOffer: string, idUser: string, title:string): Offer => {
  return new Offer({
    addressOffer: address,
    dateOffer: date,
    daysOffer: days,
    descriptionOffer: description,
    domainOffer: domain,
    imgOffer: imgOffer,
    idOffer: idOffer,
    idUser: idUser,
    titleOffer: title,
  });
};

export default Offer;