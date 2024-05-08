import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budget-planner';
  isSlideOut = true;


constructor(private router : Router) {}


  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDash() {
    this.router.navigate(["/budget-planner/dashboard"])
    
  }


  onProfile() {
    this.router.navigate(["budget-planner/profile"])
  }



  onHistory() {
    this.router.navigate(["/budget-planner/history"])
  }



  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }

}
