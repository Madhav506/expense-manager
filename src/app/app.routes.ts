import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'expenses', pathMatch: 'full' },
  {
    path: 'expenses',
    loadComponent: () =>
      import(
        './features/expenses/pages/expenses-page/expenses-page.component'
      ).then((m) => m.ExpensesPageComponent),
  },
];
