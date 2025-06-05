import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from '../reducers/expense.reducer';

// Feature selector
export const selectExpenseState =
  createFeatureSelector<ExpenseState>('expenses');

// Selectors
export const selectAllExpenses = createSelector(
  selectExpenseState,
  (state) => state.expenses
);

export const selectLoading = createSelector(
  selectExpenseState,
  (state) => state.loading
);
