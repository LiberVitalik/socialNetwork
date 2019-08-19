interface StateColorProps {
    State: {
        error: string;
        active: string;
    };
}

interface TextColorProps {
    Text: {
        dark: string;
        light: string;
        middle: string;
        soft: string;
    };
}

interface BackgroundColorProps {
    Background: {
        dark: string;
        light: string;
    };
}

export interface MainColorProps {
    Main: {
        green: string;
        dark: string;
        light: string;
        brown: string;
    };
}

export { TextColorProps, StateColorProps, BackgroundColorProps };