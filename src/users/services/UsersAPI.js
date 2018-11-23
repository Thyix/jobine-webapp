// @flow

import Profile from '../domain/Profile';
import moment from 'moment';

export async function UpdateUsers(identifier: string, password: string): Promise<any> {
  let attempt;
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.user")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data.filter(d => d["emailUser"] === identifier && d["pwdUser"] === password);
  });
  attempt.length > 0 ? attempt = Profile.parse(attempt[0]) : attempt = null;
  return attempt;
}
