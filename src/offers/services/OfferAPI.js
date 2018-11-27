// @flow

import Offer from '../domain/Offer';

export async function FetchOffers(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.offer")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      console.log(data);
  });
  attempt.length > 0 ? attempt = Offer.parse(attempt[0]) : attempt = null;
  console.log(attempt);
  return attempt;
}