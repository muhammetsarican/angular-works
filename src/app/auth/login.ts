import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass],
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