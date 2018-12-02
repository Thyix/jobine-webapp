// @flow


export async function FetchMessages(): Promise<any> {
  let attempt
  await fetch("http://70.48.63.175:8080/JobineDB/webresources/entities.msg")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      attempt = data;
  });
  return attempt;
}