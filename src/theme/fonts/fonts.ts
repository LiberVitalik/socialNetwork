import { SansProFontProps } from './fontsProps';

const SANS_SERIF = 'sans-serif';

const SansProFont: SansProFontProps = {
    bold: `'SansPro Bold', ${SANS_SERIF}`,
    italic: `'SansPro Italic', ${SANS_SERIF}`,
    light: `'SansPro Light', ${SANS_SERIF}`,
    regular: `'SansPro Regular', ${SANS_SERIF}`,
    semibold: `'SansPro Semibold', ${SANS_SERIF}`
};

export const SansPro = {...SansProFont};