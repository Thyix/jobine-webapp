// @flow

import Profile from '../domain/Profile';

export async function CheckEmailAvailability(email: string): Promise<any> {
  let attempt;
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.user")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data.filter(d => d["emailUser"] === email);
  });
  if (attempt.length > 0) {
    return false;
  } else {
    return true;
  }  
}


export async function UpdateUsers(newProfile: Profile): Promise<any> {
  var request = new Request(`http://localhost:51617/JobineDB/webresources/entities.user/${newProfile.idUser}`, {
	method: 'PUT', 
	mode: 'cors', 
	headers: new Headers({
		'Accept': 'application/json',
    'Content-Type': 'application/json' 
	})
});

fetch(request, {
  body: JSON.stringify({
    dateUser: newProfile.dateUser,
      descriptionUser: newProfile.descriptionUser, 
      emailUser: newProfile.emailUser, 
      idUserType: newProfile.idUserType,
      imgUser:newProfile.imgUser, 
      jobUser: newProfile.jobUser, 
      nameUser: newProfile.nameUser, 
      pwdUser: newProfile.pwdUser
    })
  });
}
