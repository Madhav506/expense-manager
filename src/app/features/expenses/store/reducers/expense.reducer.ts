import { createReducer, on } from '@ngrx/store';
import { Expense } from '../models/expense.model';
import * as ExpenseActions from '../actions/expense.action';

export interface ExpenseState {
  expenses: Expense[];
  loading: boolean;
  error: string | null;
}

export const initialState: ExpenseState = {
  expenses: [],
  loading: false,
  error: null,
};

export const expenseReducer = createReducer(
  initialState,
  on(ExpenseActions.loadExpenses, (state) => ({ ...state, loading: true })),
  on(ExpenseActions.loadExpensesSuccess, (state, { expenses }) => ({
    ...state,
    loading: false,
    expenses,
  })),
  on(ExpenseActions.loadExpensesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ExpenseActions.addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
  })),
  on(ExpenseActions.deleteExpenseSuccess, (state, { id }) => ({
    ...state,
    expenses: state.expenses.filter((exp) => exp.id !== id),
  }))
);
