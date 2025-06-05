import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExpenseService } from '../../services/expense.service';
import * as ExpenseActions from '../actions/expense.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ExpenseEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}

  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpenses),
      mergeMap(() =>
        this.expenseService.getExpenses().pipe(
          map((expenses) => ExpenseActions.loadExpensesSuccess({ expenses })),
          catchError((error) =>
            of(ExpenseActions.loadExpensesFailure({ error }))
          )
        )
      )
    )
  );
}
