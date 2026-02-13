import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NgClass, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
