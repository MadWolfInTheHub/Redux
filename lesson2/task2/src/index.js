import store, { increment, decrement, reset } from './store.js';
import './index.scss';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  
  const state = store.getState()
  const currentValue = state.value;
  const historyString = state.history.join(' '); 
  resultElem.textContent = state.history === 0 
  ? '' : `${historyString} = ${currentValue}`;
});