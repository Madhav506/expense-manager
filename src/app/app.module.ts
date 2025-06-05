import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExpenseEffects } from './features/expenses/store/effects/expense.effects';
import { expenseReducer } from './features/expenses/store/reducers/expense.reducer';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ expenses: expenseReducer }),
    EffectsModule.forRoot([ExpenseEffects]),
  ],
})
export class AppModule {}
