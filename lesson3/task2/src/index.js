import store from "./counter";
import { increment, decrement, reset } from "./counter";

store.subscribe(() => console.log(store.getState()));