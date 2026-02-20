import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslationService, Language } from '../../services/translation.service';
import { Router } from '@angular/router';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private router: Router, public optionsService: OptionsService) { }

  themeService = inject(ThemeService);
  transService = inject(TranslationService);

  toggleLang() {
    const nextLang = this.transService.lang() === 'en' ? 'tr' : 'en';
    this.transService.setLanguage(nextLang);
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
}
