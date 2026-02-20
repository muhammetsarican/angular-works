import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';
import { TranslationService, Language } from '../../services/translation.service';
import { OptionsService } from '../../services/options.service';
import { ProfileSectionComponent } from '../../components/options/profile-section.component/profile-section.component';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfileSectionComponent],
  templateUrl: './options.html',
  styleUrl: './options.css'
})
export class Options {
  themeService = inject(ThemeService);
  transService = inject(TranslationService);
  // optionsService = inject(OptionsService);

  constructor(public optionsService: OptionsService) { }

  @Input() appName!: string;

  languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
  ];

  setLanguage(lang: Language) {
    this.transService.setLanguage(lang);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onMyEvent(event: string) {
    console.log('Event received:', event);
    this.optionsService.appName = event;
  }
}
