function getInfo() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      //console.log(json[0]);
      let userHTML = "";
      for (let user of users) {
        userHTML += `<h2>Id: ${user.id}</h2> 
        <h2>Name: ${user.name}</h2>
        <h3>Email: ${user.email}</h3><br>`;
      }

      document.getElementById("container").innerHTML = userHTML;
    });
}
