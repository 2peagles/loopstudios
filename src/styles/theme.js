import {createTheme} from '@mui/material/styles'

export const Color = {
    white:'#fff', 
    black: '#000', 
    darkgray: '#8c8c8c', 
    verydarkgray: '#696969'
}

const theme = createTheme({
    palette:{
        primary:{
            main: Color.white,
        },
        secondary:{
            main:Color.black,
        },
    },
    components:{
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
                color:'secondary',
            },
        },
    },
});

export default theme;