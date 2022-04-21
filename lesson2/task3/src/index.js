import store from './store';
import { addUser, deleteUser } from './users.actions'

console.log(store.dispatch(addUser({id: 23, name: 'Tom'})))
console.log(store.dispatch(addUser({id: 46, name: 'Jim'})))
console.log(store.dispatch(addUser({id: 454, name: 'Jim'})))
console.log(store.getState())
console.log(store.dispatch(deleteUser(46)))
console.log(store.getState())