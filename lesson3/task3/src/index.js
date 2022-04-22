import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProdact } from "./cart.actions";
import { removeUser, setUser } from "./user.actions";

store.subscribe(() => console.log(store.getState()));

/* store.dispatch(addProduct({id: 2, name: 'milk'}))
store.dispatch(addProduct({id: 3, name: 'bread'}))
store.dispatch(addProduct({id: 4, name: 'cellphone'}))
store.dispatch(setLanguage('ua'))
store.dispatch(removeProdacut(2))
store.dispatch(setUser({name: 'Bob'}));
store.dispatch(removeUser());
store.dispatch(removeProdacut(2)) */

console.log(store.getState())
