import { createTheme } from "@mui/material";
import { grey, orange, teal } from '@mui/material/colors';

const basicTheme = createTheme();

export const customMuiTheme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
        bigText: {
            ...basicTheme.typography.body1,
            fontSize: "1.3rem",
        },
    },
    palette: {
        relaxed: {
            main: grey[200],
            dark: grey[300],
        },
    },
});

export const customMuiTheme2 = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
        bigText: {
            ...basicTheme.typography.body1,
            fontSize: "1.6rem",
        },
    },
    palette: {
        relaxed: {
            main: grey[500],
            dark: grey[600],
        },
        info: {
            main: teal[400],
            dark: teal[600],
        },
    },
});
