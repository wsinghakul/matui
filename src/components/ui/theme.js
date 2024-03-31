import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
export  const theme = createTheme({ 
  palette: {
    common : {
        blue: `${arcBlue}`,
        arcOrange: `${arcOrange}`
    },
    primary: {
        main: `${arcBlue}`
    },
    secondary: {
        main: `${arcOrange}`
    }
  },
});
