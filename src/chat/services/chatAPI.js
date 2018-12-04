// @flow

import Message from '../domain/Message';

export async function FetchMessages(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/Jobine/webresources/entities.msg")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data;
  });
  attempt.length > 0 ? attempt.map(d => Message.parse(d)) : attempt = null;
  return attempt;
}

export async function CreateMessage(message: Message): Promise<any> {
  let data = JSON.stringify({
    contentMsg: message.contentMsg,
    dateMsg: message.dateMsg,
    idOffer: message.idOffer,
    idUserFrom: message.idUserFrom,
    idUserTo: message.idUserTo });
  let request = new Request("http://70.48.63.175:8080/Jobine/webresources/entities.msg", {
    method: 'POST', 
    mode: 'cors', 
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    })
  });
  fetch(request, {
    body: data
  })
  return message;
}