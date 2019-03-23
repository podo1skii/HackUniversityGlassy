export function serverResponse(urlRequest) {
    let request = new XMLHttpRequest();
    request.open('GET', urlRequest, true);
    request.send();
    if (request.status !== 200) {
        console.log(request.status + ': ' + request.statusText);
    } else {
        let response = request.responseText;
        response = JSON.parse(response);
        return response;
    }
}


export function serverAsyncResponse(urlRequest){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'phones.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
    console.log(xhr.status + ': ' + xhr.statusText);
  } else {
    return xhr.responseText;
  }
}
}
