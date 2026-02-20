import { en } from '../lang/en/translations';
import { te } from '../lang/te/translations';
import { hi } from '../lang/hi/translations';

export type Language = 'en' | 'te' | 'hi';

export const translations: Record<Language, Record<string, string>> = {
  en,
  te,
  hi,
};
