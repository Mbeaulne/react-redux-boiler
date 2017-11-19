import 'isomorphic-fetch';
export const fakeLogin = (email) => fetch(
    'https://jsonplaceholder.typicode.com/users'
)
.then(response => response.json());
