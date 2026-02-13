import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  imports: [NgClass, FormsModule],
})
export class Home {
  transService = inject(TranslationService);
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