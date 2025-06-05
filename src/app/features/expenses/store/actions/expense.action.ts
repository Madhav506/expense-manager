import { createAction, props } from '@ngrx/store';
import { Expense } from '../models/expense.model';

export const loadExpenses = createAction('[Expense] Load Expenses');
export const loadExpensesSuccess = createAction(
  '[Expense] Load Success',
  props<{ expenses: Expense[] }>()
);
export const loadExpensesFailure = createAction(
  '[Expense] Load Failure',
  props<{ error: string }>()
);

export const addExpense = createAction(
  '[Expense] Add',
  props<{ expense: Expense }>()
);
export const addExpenseSuccess = createAction(
  '[Expense] Add Success',
  props<{ expense: Expense }>()
);

export const deleteExpense = createAction(
  '[Expense] Delete',
  props<{ id: string }>()
);
export const deleteExpenseSuccess = createAction(
  '[Expense] Delete Success',
  props<{ id: string }>()
);
