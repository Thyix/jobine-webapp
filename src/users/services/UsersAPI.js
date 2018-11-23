// @flow

import Profile from '../../authentication/domain/Profile';

export async function UpdateUsers(newProfile: Profile): Promise<any> {
  console.log('api update users');
  var request = new Request(`http://70.48.63.175:8080/JobineDB/webresources/entities.user/${newProfile.idUser}`, {
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
      idUser: newProfile.idUser,
      idUserType: newProfile.idUserType,
      imgUser:newProfile.imgUser, 
      jobUser: newProfile.jobUser, 
      nameUser: newProfile.nameUser, 
      pwdUser: newProfile.pwdUser
    })
  });
  return newProfile;
}
