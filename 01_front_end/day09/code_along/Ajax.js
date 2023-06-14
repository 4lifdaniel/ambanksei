//AJAX
//Step 1 - Create an XMLHTTPRequest object
// const req = new XMLHttpRequest();

// //Step2 - Define a callback function
// req.onload = () => {
//   //What you want to do when response is ready
// };

// //Step 3 - Open the XMLHTTPRequest object
// req.open("GET", "url");

// //Step 4 - Send the request to a server
// req.send();

/*
Readystate:
0: request not initalized
1: server connection established
2: request received
3: processing request
4: request finised and response is ready
*/

function ajaxcall() {
  //Create an XML http request object
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    // console.log(this);
    // console.log(this.readyState);
    if (request.readyState == 4 && this.status == 200) {
      //   console.log("Current Status: " + this.status);
      console.log(request.responseText);
      const response = JSON.parse(this.responseText);
      //   console.log(response);
      const responseHTML = `<h2>${response.data[0].id}</h2><br/>
                            <h2>${response.data[0].first_name}</h2> <br/>
                            <h3>${response.data[0].email}</h3>`;
      document.getElementById("ajaxId").innerHTML = responseHTML;
    } else if (request.readyState == 4 && request.status !== 200) {
      console.log("Error while processing " + this.status);
    }
  };

  //   request.onload = function () {
  //     console.log(this);
  //     // document.getElementById("ajaxId").innerHTML = this.responseText;
  //   };
  request.open("GET", "https://reqres.in/api/users?page=2");
  request.send();
}

function ajaxPost() {
  //Create XML HTTP request object
  const postReq = new XMLHttpRequest();

  //Retrieve information from html
  let userName = document.getElementById("name").value;
  let jobDetails = document.getElementById("job").value;

  //Data we want to send to the api server
  let userDetails = {
    name: userName,
    job: jobDetails,
  };

  //Open our post request
  postReq.open("POST", "https://reqres.in/api/users");

  //We need to specify the type of data we are sending in case of post request
  postReq.setRequestHeader("content-type", "application/json");

  //We need to convert our object to JSON
  postReq.send(JSON.stringify(userDetails));

  //call back function to update page once we receive response
  postReq.onload = function () {
    if (postReq.status === 201) {
      document.getElementById("response").innerText = postReq.responseText;
    } else {
      document.getElementById("response").innerText =
        "Encountered some error while posting";
    }
  };
}

//To update data
function ajaxPut() {
  const putReq = new XMLHttpRequest();
  //Retrieve information from html
  let userName = document.getElementById("name").value;
  let jobDetails = document.getElementById("job").value;

  //Data we want to send to the api server
  let userDetails = {
    name: userName,
    job: jobDetails,
  };

  putReq.open("PUT", "https://reqres.in/api/users/2");
  //We need to specify the type of data we are sending in case of post request
  putReq.setRequestHeader("content-type", "application/json");
  putReq.send(JSON.stringify(userDetails));

  //call back function to update page once we receive response
  putReq.onload = function () {
    if (putReq.status === 200) {
      document.getElementById("response").innerText = putReq.responseText;
    } else {
      document.getElementById("response").innerText =
        "Encountered some error while updating";
    }
  };
}

//To delete data
function ajaxDel() {
  const delReq = new XMLHttpRequest();
  delReq.open("DELETE", "https://reqres.in/api/users/2");
  delReq.send();
  delReq.onload = function () {
    if (delReq.status === 204) {
      document.getElementById("response").innerText = "Successfully Deleted";
    } else {
      document.getElementById("response").innerText =
        "Encountered some error while deleting";
    }
  };
}
