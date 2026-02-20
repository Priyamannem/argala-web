import { enContent } from './en/content';
import { teContent } from './te/content';
import { hiContent } from './hi/content';
import { Language } from '@/i18n/translations';

export const languageContent = {
    en: enContent,
    te: teContent,
    hi: hiContent,
};

export const getComponentContent = (lang: Language) => languageContent[lang];
