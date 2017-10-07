import { createSelector } from 'reselect';

const selectApp = state => state.app;

export const selectCounter = () => createSelector(
  selectApp,
  (app) => app.counter
);