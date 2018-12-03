import { Record } from 'immutable';

const OfferRecord = Record({
  contentMsg: undefined,
  dateMsg: undefined,
  idMsg: undefined,
  idOffer: undefined,
  idUserFrom: undefined,
  idUserTo: undefined,
});

class Message extends OfferRecord {
  contentMsg: string;
  dateMsg: string;
  idMsg: number;
  idOffer: number;
  idUserFrom: number;
  idUserTo: number;
}

Message.parse = (plain: any): Offer => {
  return new Message({
    contentMsg: plain["contentMsg"],
    dateMsg: plain["dateMsg"],
    idMsg: plain["idMsg"],
    idOffer: plain["idOffer"],
    idUserFrom: plain["idUserFrom"],
    idUserTo: plain["idUserTo"]
  });
};

Message.parseNew = (contentMsg: string, dateMsg: string, idMsg: number, idOffer: number, idUserFrom: number, idUserTo: number): Message => {
  return new Message({
    contentMsg: contentMsg,
    dateMsg: dateMsg,
    idMsg: idMsg,
    idOffer: idOffer,
    idUserFrom: idUserFrom,
    idUserTo: idUserTo,
  });
};

export default Message;