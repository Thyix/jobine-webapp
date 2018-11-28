// @flow

import Offer from '../domain/Offer';

export async function FetchOffers(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.offer")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data;
  });
  attempt.length > 0 ? attempt = Offer.parse(attempt[0]) : attempt = null;
  return attempt;
}

export async function CreateOffer(newOffer: Offer): Promise<any> {
  let data = JSON.stringify({
    addressOffer: newOffer.addressOffer,
    dateOffer: newOffer.dateOffer,
    daysOffer: newOffer.daysOffer,
    descriptionOffer: newOffer.descriptionOffer,
    domainOffer: newOffer.domainOffer,
    idUser: newOffer.idUser,
    titleOffer: newOffer.titleOffer,
  });
  let request = new Request("http://70.48.63.175:8080/JobineDB/webresources/entities.offer", {
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
  return newOffer;
}