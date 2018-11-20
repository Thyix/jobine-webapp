
// @flow

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function AuthenticationLogin(identifier: string, password: string): Promise<any> {
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.user")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      var attempt = data.filter(d => d["emailUser"] === identifier && d["pwdUser"] === password);
      console.log(attempt);
      return attempt;
  }); 
}