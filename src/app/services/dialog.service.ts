import { inject, Injectable, signal } from '@angular/core';
import { TranslationService } from './translation.service';

export interface DialogOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  transService = inject(TranslationService);
  isOpen = signal(false);
  options = signal<DialogOptions | null>(null);
  private resolveCallback: ((value: boolean) => void) | null = null;

  openConfirmDialog(message: string, title: string = this.transService.translate('CONFIRM_TITLE')): Promise<boolean> {
    this.options.set({
      message,
      title,
      confirmLabel: this.transService.translate('EXECUTE_COMMIT'),
      cancelLabel: this.transService.translate('ABORT_ACTION')
    });
    this.isOpen.set(true);

    return new Promise((resolve) => {
      this.resolveCallback = resolve;
    });
  }

  close(result: boolean) {
    this.isOpen.set(false);

    // Use setTimeout to ensure the UI update (closing the modal) is processed 
    // by Angular before the promise resolves and triggers navigation.
    setTimeout(() => {
      if (this.resolveCallback) {
        this.resolveCallback(result);
        this.resolveCallback = null;
      }
      this.options.set(null);
    }, 0);
  }
}
