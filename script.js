const endpoint = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  let response = await fetch(endpoint);
  let convertedResponse = await response.json();
  console.log(convertedResponse);

  convertedResponse.map((items) => {
    show.innerHTML += `
        <h5>${items.id}</h5>
        <h1>${items.name}</h1>
        <h3>${items.username}</h3>
        `;
  });
}
