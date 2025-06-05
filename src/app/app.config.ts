import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { expenseReducer } from './features/expenses/store/reducers/expense.reducer';
import { provideEffects } from '@ngrx/effects';
import { ExpenseEffects } from './features/expenses/store/effects/expense.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ expenses: expenseReducer }),
    provideEffects([ExpenseEffects]),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
