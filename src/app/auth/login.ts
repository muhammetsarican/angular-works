import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
})
export class Login {
  firstName = 'Muhammet';
  showIfBlock = false;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}