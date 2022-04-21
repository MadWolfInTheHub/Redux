import store from "./counter";
import { increment, decrement, reset } from "./counter";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());