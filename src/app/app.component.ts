import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpensesPageComponent } from './features/expenses/pages/expenses-page/expenses-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpensesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expense-manager';
}
