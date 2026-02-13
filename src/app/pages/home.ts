import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Navbar } from "../components/navbar/navbar";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  imports: [Navbar, NgClass, FormsModule],
})
export class Home {
  titleForFun = 'angular-works for fun'
  inputModel = ''
  gender = ''

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onNameChange(event: Event) {
    this.titleForFun = (event.target as HTMLInputElement).value;
  }
}