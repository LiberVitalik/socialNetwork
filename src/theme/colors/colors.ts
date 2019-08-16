import { BackgroundColorProps, StateColorProps, TextColorProps } from './colorsProps';

export const Text: TextColorProps = {
    Gray: {
        dark: '#333',
        light: '#ccc',
        middle: '#666',
        soft: '#999'
    }
};

export const State: StateColorProps = {
    State: {
        active: '#26a69a',
        error: '#f04e65'
    }
};

export const Background: BackgroundColorProps = {
    Background: {
        dark: '#263238',
        light: '#f2f3f7'
    }
};

export const ColorPalette = {...Text, ...State, ...Background};
