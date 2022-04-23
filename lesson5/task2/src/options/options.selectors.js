import { createSelector } from "reselect";

export const optionsListSelectior = state => {
  return state.options.optionsList;
};

export const selectedListSelectior = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelectior, selectedListSelectior],
  (allOptionsList, selectedIds) => {
  return allOptionsList.filter(option => selectedIds.includes(option.id))
  }
);
export const availabledOptionsSelector = createSelector(
[optionsListSelectior, selectedListSelectior],
(allOptionsList, selectedIds) => {
  return allOptionsList.filter(option => !selectedIds.includes(option.id))
}
);

/* 
export const selectedOptionsSelector = state =>{
  const allOptionsList = optionsListSelectior(state);
  const selectedIds = selectedListSelectior(state);

  return allOptionsList.filter(option => selectedIds.includes(option.id))
}; */

/* export const availabledOptionsSelector = state =>{
  const allOptionsList = optionsListSelectior(state);
  const selectedIds = selectedListSelectior(state);

  return allOptionsList.filter(option => !selectedIds.includes(option.id))
}; */