import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { ThemeService } from "../services/theme.service";
import { TranslationService } from "../services/translation.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login.html',
})
export class Login {
  themeService = inject(ThemeService);
  transService = inject(TranslationService);
  firstName = 'Muhammet';
  showIfBlock = false;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}