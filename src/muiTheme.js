import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';

export const customMuiTheme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
    },
    palette: {
        relaxed: {
            main: grey[200],
            dark: grey[300],
        },
    },
});
