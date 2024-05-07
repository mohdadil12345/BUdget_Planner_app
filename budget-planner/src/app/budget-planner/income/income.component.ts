import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss',
})
export class IncomeComponent {

  incomeForm: any;
  selectedMonth : any

  januaryIncomes : any[] = [
    {source : "Salary", amount:5000, investments: "401(k)"},
    {source : "Freelancing", amount:1000, investments: "Stocks"},
  ]

  februaryIncomes : any[] = [
    {source : "Salary", amount:5500, investments: "401(k)"},
    {source : "Rental Income", amount:700, investments: "Real Esatate"},
  ]

  marchIncomes : any[] = [
    {source : "Salary", amount:5200, investments: "401(k)"},
    {source : "Freelancing", amount:1200, investments: "Stocks"},
    {source : "Rental Income", amount:600, investments: "Real Esatate"},
  ]




  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }



  onSubmit() {

  }


  onChange(event:any) {
  this.selectedMonth = event.target.value
  this.getFilteredIncomes()
  }

    getFilteredIncomes() {

    let filteredIncomes: any[]  = []
      switch (this.selectedMonth) {
        case "January":
          filteredIncomes = [...this.januaryIncomes]
          break;

          case "February":
            filteredIncomes = [...this.februaryIncomes]
            break;

            case "March":
              filteredIncomes = [...this.marchIncomes]
              break;
      
        default:
          break;
      }

    }



}
