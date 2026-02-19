import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { ThemeService } from "../services/theme.service";
import { TranslationService } from "../services/translation.service";
import { FormsModule } from "@angular/forms";
import { Validate } from "../validate";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormsModule, Validate],
  templateUrl: './login.html',
})
export class Login {
  themeService = inject(ThemeService);
  transService = inject(TranslationService);
  firstName = 'Muhammet';
  password = '';
  showIfBlock = false;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}