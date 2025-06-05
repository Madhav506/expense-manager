import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ExpenseActions from '../../store/actions/expense.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.expenseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      amount: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this.store.dispatch(
        ExpenseActions.addExpense({ expense: this.expenseForm.value })
      );
      this.expenseForm.reset();
    }
  }
}
