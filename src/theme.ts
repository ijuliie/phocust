import { createTheme } from '@mui/material/styles';
const baseTheme = createTheme();

export const theme = createTheme({
    typography: {
        fontFamily: ["Orbitron", "sans-serif"].join(","),
        subtitle1: {
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },
        subtitle2: {
            [baseTheme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#000",
                    color: "#FFF"
                }
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "#000",
                    color: "#FFF"
                }
            },
        },
    },
});