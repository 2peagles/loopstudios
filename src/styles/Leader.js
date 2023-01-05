import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Color } from "./theme";
import { Typography } from "@mui/material";


export const LeaderContainer = styled(Box)(() => ({
    // width: '450px',
    height: '70vh',
    padding: '0',
    margin:'0',
    // border: `2rem solid ${Color.black}`,
}))

export const LeaderTextContainer = styled(Box)(() => ({
    width: '630px',
    padding:'4em 5em',
    position:'relative',
    margin:'-600px -150px -910px ',
    background:Color.white,
    // border: `3px solid ${Color.black}`,
}))
export const LeaderContainerMobile = styled(Box)(() => ({
    width: '100%',
    // minHeight: '100vh',
    padding: '5em 1em',
    margin: '0',
    // border: `2rem solid ${Color.black}`,
}))

export const LeaderTextContainerMobile = styled(Box)(() => ({
    width: 'width',
    padding: '1em',
    // position: 'relative',
    // margin: '-600px -150px -910px ',
    background: Color.white,
    // border: `3px solid ${Color.black}`,
    textAlign:'center'
}))

export const TypographyGallery = styled(Typography)(() => ({
    position: 'absolute',
    color:Color.white,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'100px 50px',
    // width:'100%',
}))