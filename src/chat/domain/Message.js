import { Record } from 'immutable';

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
  return new Message({
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