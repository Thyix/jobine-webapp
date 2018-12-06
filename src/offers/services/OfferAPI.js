// @flow

import Offer from '../domain/Offer';

export async function FetchOffers(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/Jobine/webresources/entities.offer")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data;
  });
  attempt.length > 0 ? attempt.map(d => Offer.parse(d)) : attempt = null;
  return attempt;
}

export async function CreateOffer(newOffer: Offer): Promise<any> {
  let data = JSON.stringify({
    addressOffer: newOffer.addressOffer,
    dateOffer: newOffer.dateOffer,
    daysOffer: newOffer.daysOffer,
    descriptionOffer: newOffer.descriptionOffer,
    domainOffer: newOffer.domainOffer,
    imgOffer: newOffer.imgOffer,
    idUser: newOffer.idUser,
    titleOffer: newOffer.titleOffer,
  });
  let request = new Request("http://70.48.63.175:8080/Jobine/webresources/entities.offer", {
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

export async function DeleteOffer(offer: Offer) {
  var request = new Request(`http://70.48.63.175:8080/Jobine/webresources/entities.offer/${offer.idOffer}`, {
    method: 'DELETE', 
    mode: 'cors', 
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    })
  });
  fetch(request, {
  })
}