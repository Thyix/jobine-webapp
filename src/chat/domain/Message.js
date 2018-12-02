import { Record } from 'immutable';

/*contentMsg: "salut xd je m'appel bob, même si jsuis mécanicien d'engin lourd j'aimerais bien travailler chex nexapp! "
dateMsg: "2018-11-30T05:00:00Z[UTC]"
idMsg: 1
idOffer: 1
idUser: 1*/

const OfferRecord = Record({
  contentMsg: undefined,
  dateMsg: undefined,
  idMsg: undefined,
  idOffer: undefined,
  idUser: undefined,
});

class Message extends OfferRecord {
  contentMsg: string;
  dateMsg: string;
  idMsg: number;
  idOffer: number;
  idUser: number;
}

Message.parse = (plain: any): Offer => {
  return new Offer({
    contentMsg: plain["contentMsg"],
    dateMsg: plain["dateMsg"],
    idMsg: plain["idMsg"],
    idOffer: plain["idOffer"],
    idUser: plain["idUser"],
  });
};

Message.parseNew = (contentMsg: string, dateMsg: string, idMsg: number, idOffer: number, idUser: number): Message => {
  return new Message({
    contentMsg: contentMsg,
    dateMsg: dateMsg,
    idMsg: idMsg,
    idOffer: idOffer,
    idUser: idUser,
  });
};

export default Message;