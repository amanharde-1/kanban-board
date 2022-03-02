import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableTouchRipple: true
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'inherit'
                }
            }
        }
    }
});


export default responsiveFontSizes(theme);