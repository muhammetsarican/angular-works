import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { FormsModule } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-profile-section',
  imports: [FormsModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css',
})
export class ProfileSectionComponent {
  transService = inject(TranslationService);

  @Input() appName = '';
  @Output() myEvent = new EventEmitter<string>();

  saveSettings() {
    console.log('Settings saved:', this.appName);
    this.myEvent.emit(this.appName);
    // Add logic here if needed, e.g., toast notification
  }
}
