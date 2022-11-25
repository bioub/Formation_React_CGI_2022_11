import axios from "axios";

export function fetchUsers() {
  // axios.request({
  //   method: 'GET',
  //   url: '/api',
  //   headers:
  // })
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export function fetchUserById(id) {
return axios.get('https://jsonplaceholder.typicode.com/users/'+id)
}


// function main() {
//   return fetchUsers().then((res) => res.data);
// }

// async function main() {
//   const res = await fetchUsers();
//   const users = res.data;
//   return users;
// }
