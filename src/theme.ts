import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
        }
    },
});