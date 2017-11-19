import 'isomorphic-fetch'
import { filter, head, pipe, when, not, isNil } from 'ramda'

const findUserByEmail = email => user => user.email === email;
export const fakeLogin = email => fetch(
    'https://jsonplaceholder.typicode.com/users'
)
.then(response => response.json())
.then(pipe(
    filter(findUserByEmail(email)),
    head
))
