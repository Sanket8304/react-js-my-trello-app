export const fetchDataFormBackend = (url, type) => {
  var headers = new Headers();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  headers.append("accept", "application/json, text/plain, */*");

  var requestOptions = {
    method: type,
    headers: headers,
    redirect: "follow",
    credential: "same-origin",
  };

  return fetch(baseUrl + url, requestOptions)
    .then((res) => {
      let result = {};
      return res.json().then((json) => {
        result.data = json;
        return result;
      });
    })
    .catch((error) => console.log(error));
};
