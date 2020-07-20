var elementAdditionPosition = "afterbegin";

function getTasks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let container = document.getElementById("container");
      let responses = JSON.parse(this.responseText);
      for (var i = 0; i < responses.length; i++) {
        container.insertAdjacentHTML(
          elementAdditionPosition,
          createResponse(responses[i])
        );
      }
    }
  };
  
  xhttp.open("GET", "http://localhost:3000/", true);
  xhttp.setRequestHeader("Authorization", "Basic " + btoa("name:password"));
  xhttp.send();
}

function createResponse(response) {
  return (
    "[" +
    response.id +
    "]: " +
    response.email + " " + response.full_name +
    "<br />" 
  );
}

getTasks();