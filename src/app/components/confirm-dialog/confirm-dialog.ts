import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (dialogService.isOpen()) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
        <div class="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)] p-8 flex flex-col gap-6 relative animate-in zoom-in duration-300 overflow-hidden">
          
          <!-- Scanning Line Animation -->
          <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
            <div class="w-full h-[2px] bg-cyan-500 animate-scan"></div>
          </div>

          <!-- Cyberpunk Accent Lines -->
          <div class="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div class="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
          
          <header class="flex flex-col gap-1">
            <h2 class="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase font-mono flex items-center gap-2">
              <span class="text-cyan-500 animate-pulse">●</span>
              {{ dialogService.options()?.title }}
            </h2>
            <div class="h-px w-24 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </header>

          <div class="py-2">
            <p class="text-sm font-mono text-slate-600 dark:text-slate-400 tracking-tight leading-relaxed border-l-2 border-slate-100 dark:border-slate-800 pl-4">
              {{ dialogService.options()?.message }}
            </p>
          </div>

          <footer class="flex gap-3">
            <button
              (click)="closeDialog(false)"
              class="flex-1 border border-slate-200 dark:border-slate-800 p-3 text-[10px] uppercase font-black tracking-widest text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all font-mono"
            >
              {{ dialogService.options()?.cancelLabel }}
            </button>
            <button
              (click)="closeDialog(true)"
              class="flex-1 bg-cyan-600/10 border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 p-3 text-[10px] uppercase font-black tracking-widest hover:bg-cyan-600 hover:text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] font-mono"
            >
              {{ dialogService.options()?.confirmLabel }}
            </button>
          </footer>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }
    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(1000%); }
    }
    .animate-scan {
      animation: scan 3s linear infinite;
    }
  `]
})
export class ConfirmDialogComponent {
  dialogService = inject(DialogService);

  closeDialog(result: boolean) {
    this.dialogService.close(result);
  }
}
