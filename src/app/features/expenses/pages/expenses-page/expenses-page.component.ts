import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Expense } from '../../store/models/expense.model';
import { selectAllExpenses } from '../../store/selectors/expense.selector';
import { ExpenseFormComponent } from '../../components/expense-form/expense-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ExpenseFormComponent],
})
export class ExpensesPageComponent {
  expenses$: Observable<Expense[]>;

  constructor(private store: Store) {
    this.expenses$ = this.store.select(selectAllExpenses);
  }
}
