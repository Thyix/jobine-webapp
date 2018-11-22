
// @flow

import Profile from '../domain/Profile';
import moment from 'moment';

export async function AuthenticationLogin(identifier: string, password: string): Promise<any> {
  let attempt;
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.user")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      console.log(data);
      attempt = data.filter(d => d["emailUser"] === identifier && d["pwdUser"] === password);
  });
  attempt.length > 0 ? attempt = Profile.parse(attempt[0]) : attempt = null;
  return attempt;
}

export async function CheckEmailAvailability(email: string): Promise<any> {
  let attempt;
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.user")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data.filter(d => d["emailUser"]);
  });
  if (attempt.length > 0) {
    return false;
  } else {
    return true;
  }  
}


export async function AuthenticationSignup(username: string, job: string, email: string, password: string): Promise<any> {
  const available = await CheckEmailAvailability(email);
  if (!available) return false;
  let data = JSON.stringify({
      dateUser: moment(),
      descriptionUser: '', 
      emailUser: email, 
      idUserType: '1',
      imgUser:'', 
      jobUser: job, 
      nameUser: username, 
      pwdUser: password });
  console.log(data);

  let request = new Request("http://70.48.63.175:8080/JobineDB/webresources/entities.user", {
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
  return true;
}
