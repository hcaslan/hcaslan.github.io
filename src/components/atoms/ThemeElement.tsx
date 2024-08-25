import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Palette, PaletteOptions } from '@mui/material/styles/createPalette';

// Extend the Palette and PaletteOptions interfaces
declare module '@mui/material/styles' {
    interface Palette {
        paletteFirstColour: Palette['primary'];
        paletteSecondColour: Palette['primary'];
        paletteThirdColour: Palette['primary'];
        paletteFourthColour: Palette['primary'];
    }
    interface PaletteOptions {
        paletteFirstColour?: PaletteOptions['primary'];
        paletteSecondColour?: PaletteOptions['primary'];
        paletteThirdColour?: PaletteOptions['primary'];
        paletteFourthColour?: PaletteOptions['primary'];
    }
}

const theme = createTheme({
    palette: {
        secondary: {
            main: '#000000',
        },
        paletteFirstColour: {
            main: '#08D9D6',
        },
        paletteSecondColour: {
            main: '#252A34',
        },
        paletteThirdColour: {
            main: '#FF2E63'
        },
        paletteFourthColour: {
            main: '#EAEAEA'
        }
    },
    typography: {
        fontFamily: 'Roboto Mono, monospace',
    },
});

type RootElementProps = {
    children: React.ReactNode;
};


function ThemeElement({ children }: RootElementProps) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ThemeElement