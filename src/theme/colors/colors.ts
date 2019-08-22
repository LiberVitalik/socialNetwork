import { BackgroundColorProps, MainColorProps, StateColorProps, TextColorProps } from './colorsProps';

export const Main: MainColorProps = {
    Main: {
        green: '#32b38c',
        dark: '#292929',
        light: '#f2f3f7',
        brown: '#393836',
    }
};

export const Text: TextColorProps = {
    Text: {
        dark: '#333',
        light: '#ccc',
        middle: '#666',
        soft: '#999'
    }
};

export const State: StateColorProps = {
    State: {
        active: '#26a69a',
        error: '#fba387'
    }
};

export const Background: BackgroundColorProps = {
    Background: {
        dark: 'rgba(58,77,83,0.91)',
        light: '#DDDEEE'
    }
};


export const ColorPalette = {...Main, ...Text, ...State, ...Background};
