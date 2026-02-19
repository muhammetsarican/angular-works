import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { DialogService } from '../services/dialog.service';

export const confirmLogoutGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  const dialogService = inject(DialogService);
  const result = dialogService.openConfirmDialog(`Dear ${component.name}, do you want to logout?`);

  return result;
};
