import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

// inome
  lastMonthIncome = ["January: $1000", "February:$1500", "March: $1200"]
  currentMonthIncome = '$2000'

  // expense
  lastMonthExpense = ["January: $800", "February:$1000", "March: $1200"]
  currentMonthExpense = '$1500'

  constructor(public router:Router){}
  onIncome() {
    this.router.navigate(["/budget-planner/income"])
  }
  onExpense() {
    this.router.navigate(["/budget-planner/income"])
  }



}
