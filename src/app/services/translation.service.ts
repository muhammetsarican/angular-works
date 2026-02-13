import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'tr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = signal<Language>(this.getInitialLang());

  // Simple dictionary for now - in a real app, this would be in JSON files
  private translations: Record<Language, Record<string, string>> = {
    en: {
      WELCOME: 'WELCOME',
      DASHBOARD: 'DASHBOARD',
      PROTOCOLS: 'PROTOCOLS',
      NEURAL_LINK: 'NEURAL_LINK',
      IDENTITY_LINK: 'Identity_Link',
      NEURAL_SYNC: 'Neural_Sync',
      BIO_CLASSIFICATION: 'Bio_Classification',
      TERMINATE: 'Terminate',
      EXECUTE_LOGIN: 'Execute Login sequence',
      AWAITING_ID: 'Awaiting identification...',
      INPUT_PARAMS: 'Input parameters...',
      SELECT_PROTOCOL: 'Select Protocol',
      MALE: 'Protocol: MALE',
      FEMALE: 'Protocol: FEMALE',
      STATUS_READY: 'Status: READY',
      ACCESS_PROTOCOL: 'Access_Protocol',
      SEC_OVERRIDE: 'Security_Override_Active',
      LOG_HANDSHAKE: 'Handshake initiated...',
      LOG_SYNC: 'Protocol v2.1 synchronized',
      LOG_MEMLEAK: 'Memory leak detected (suppressed)',
      LOG_WAITING: 'Waiting for user interaction',
      LOG_CONN: 'Connection established',
      RETURN: 'Initialize_Return',
      ENCRYPTION: 'ENCRYPTION',
      RUNTIME: 'RUNTIME',
      STABLE: 'STABLE',
      NAV_HOME: 'HOME',
      NAV_TODO: 'TO-DO_LIST',
      NAV_AUTH: 'AUTH_GATE',
      NAV_SETTINGS: 'SETTINGS',
      SYSTEM_ARCH: 'SYSTEM_ARCH'
    },
    tr: {
      WELCOME: 'HOŞ GELDİNİZ',
      DASHBOARD: 'PANEL',
      PROTOCOLS: 'PROTOKOLLER',
      NEURAL_LINK: 'NÖRAL_BAĞ',
      IDENTITY_LINK: 'Kimlik_Bağı',
      NEURAL_SYNC: 'Nöral_Senkronizasyon',
      BIO_CLASSIFICATION: 'Biyo_Sınıflandırma',
      TERMINATE: 'Sonlandır',
      EXECUTE_LOGIN: 'Giriş dizisini çalıştır',
      AWAITING_ID: 'Kimlik bekleniyor...',
      INPUT_PARAMS: 'Giriş parametreleri...',
      SELECT_PROTOCOL: 'Protokol Seçin',
      MALE: 'Protokol: ERKEK',
      FEMALE: 'Protokol: KADIN',
      STATUS_READY: 'Durum: HAZIR',
      ACCESS_PROTOCOL: 'Erişim_Protokolü',
      SEC_OVERRIDE: 'Güvenlik_Geçersiz_Kılma_Aktif',
      LOG_HANDSHAKE: 'El sıkışma başlatıldı...',
      LOG_SYNC: 'Protokol v2.1 senkronize edildi',
      LOG_MEMLEAK: 'Bellek sızıntısı tespit edildi (engellendi)',
      LOG_WAITING: 'Kullanıcı etkileşimi bekleniyor',
      LOG_CONN: 'Bağlantı kuruldu',
      RETURN: 'Geri_Dönüşü_Başlat',
      ENCRYPTION: 'ŞİFRELEME',
      RUNTIME: 'ÇALIŞMA_ZAMANI',
      STABLE: 'KARARLI',
      NAV_HOME: 'ANA_SAYFA',
      NAV_TODO: 'YAPILACAKLAR',
      NAV_AUTH: 'YETKİ_KAPISI',
      NAV_SETTINGS: 'AYARLAR',
      SYSTEM_ARCH: 'SİSTEM_MİMARİSİ'
    }
  };

  lang = computed(() => this.currentLang());

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  private getInitialLang(): Language {
    const saved = localStorage.getItem('lang') as Language;
    if (saved === 'en' || saved === 'tr') return saved;
    return 'en';
  }
}
