// @flow

import Message from '../domain/Message';

export async function FetchMessages(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.msg")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data;
  });
  console.log('data', attempt);
  attempt.length > 0 ? attempt.map(d => Message.parse(d)) : attempt = null;
  return attempt;
}