// @flow

import Profile from '../../authentication/domain/Profile';

export async function FetchOffers(): Promise<any> {
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.offer")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      console.log(data);
  });
}