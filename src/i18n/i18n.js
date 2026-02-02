import en from './en';
import es from './es';
import pt from './pt';
import ht from './ht';
import ch from './ch';
import fr from './fr';
import ru from './ru';
import ar from './ar';
import vi from './vi';

let i18n = {
  i18n: {
    languages: [
      {
        language: 'en',
        title: 'English',
      },
      // Add other languages here after translation:
      { language: 'es', title: 'Español' },
      { language: 'pt', title: 'Português' },
      { language: 'ht', title: 'Ayisyen' },
      { language: 'ch', title: '中文' },
      { language: 'fr', title: 'Français' },
      { language: 'ru', title: 'Русский' },
      { language: 'ar', title: 'عربى' },
      { language: 'vi', title: 'Tiếng Việt' },
    ],
    header: 'inside',
    enabled: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en',
      messages: {
        en: en,
        // Add other language imports here after translation:
        es: es,
        pt: pt,
        ht: ht,
        ch: ch,
        fr: fr,
        ru: ru,
        ar: ar,
        vi: vi,
      },
    },
  },
};

export default i18n;
