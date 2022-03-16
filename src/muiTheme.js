import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';

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
