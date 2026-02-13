import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  themeService = inject(ThemeService);
  transService = inject(TranslationService);

  toggleLang() {
    const nextLang = this.transService.lang() === 'en' ? 'tr' : 'en';
    this.transService.setLanguage(nextLang);
  }
}
