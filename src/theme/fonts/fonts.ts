import { OpenSansFontProps, SansProFontProps } from './fontsProps';

const SANS_SERIF = 'sans-serif';

export const OpenSansProps: OpenSansFontProps = {
    bold: `'Open-Sans Bold', ${SANS_SERIF}`,
    italic: `'Open-Sans Italic', ${SANS_SERIF}`,
    light: `'Open-Sans Light', ${SANS_SERIF}`,
    regular: `'Open-Sans Regular', ${SANS_SERIF}`
};

export const SansProProps: SansProFontProps = {
    bold: `'SansPro Bold', ${SANS_SERIF}`,
    italic: `'SansPro Italic', ${SANS_SERIF}`,
    light: `'SansPro Light', ${SANS_SERIF}`,
    regular: `'SansPro Regular', ${SANS_SERIF}`,
    semibold: `'SansPro Semibold', ${SANS_SERIF}`
};

const OpenSans = {...OpenSansProps};
const SansPro = {...SansProProps};

export const MainFonts = {...OpenSans, ...SansPro};