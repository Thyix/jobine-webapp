import { Record } from 'immutable';

const ProfileRecord = Record({
  dateUser: undefined,
  descriptionUser: undefined,
  emailUser: undefined,
  idUser: undefined,
  idUserType: undefined,
  imgUser: undefined,
  jobUser: undefined,
  nameUser: undefined,
  pwdUser: undefined,
});

class Profile extends ProfileRecord {

  dateUser: string;
  descriptionUser: string;
  emailUser: string;
  idUser: string;
  idUserType: string;
  imgUser: string;
  jobUser: string;
  nameUser: string;
  pwdUser: string;

  hasId(id: string) {
    return id === this.id;
  }

  setDescription(description: string) {
    return this.set('descriptionUser', description);
  }

}

Profile.parse = (plain: any): Profile => {
  return new Profile({
    dateUser: plain["dateUser"],
    descriptionUser: plain["descriptionUser"],
    emailUser: plain["emailUser"],
    idUser: plain["idUser"],
    idUserType: plain["idUserType"],
    imgUser: plain["imgUser"],
    jobUser: plain["jobUser"],
    nameUser: plain["nameUser"],
    pwdUser: plain["pwdUser"],
  });
};

export default Profile;