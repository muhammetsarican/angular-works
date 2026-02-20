import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { DialogService } from '../services/dialog.service';
import { TranslationService } from '../services/translation.service';

export const confirmLogoutGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  const dialogService = inject(DialogService);
  const transService = inject(TranslationService);

  const message = transService.translateWithParams('CONFIRM_LOGOUT_MSG', { name: component.name || 'User' });
  const result = dialogService.openConfirmDialog(message);

  return result;
};
