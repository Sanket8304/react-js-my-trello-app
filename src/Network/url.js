export const fetchDataFormBackend = (url, type, formData, isPost) => {
  var headers = new Headers();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  headers.append("accept", "application/json, text/plain, */*");
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: type,
    headers: headers,
    redirect: "follow",
    credential: "same-origin",
  };

  if (isPost) requestOptions.body = JSON.stringify(formData);

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
