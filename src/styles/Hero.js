import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {Color} from "./theme";

export const Container = styled(Box)(() => ({
    width: '75%',
    height: '100%',
    // border: `3px solid ${Color.white}`,
}))
export const ContainerMobile = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    padding:'0',
    // border: `3px solid ${Color.white}`,
}))
export const HeroContainer = styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',  
    height:'90vh',
    backgroundImage:`url('/images/desktop/image-hero.jpg') `,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // backgroundPosition:'100px',
}))

export const HeroContainerMobile = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    padding:'0',
    backgroundImage: `url('/images/mobile/image-hero.jpg') `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPosition:'100px',
}))

export const HeroTextContainer = styled(Box)(() => ({
    maxWidth: '760px',
    color:Color.white,
    border:`3px solid ${Color.white}`,
    textTransform:'uppercase',
    fontSize:'2.9rem',
    padding:'1em',
    lineHeight:'1.8em',
    // height:'100%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
}))
export const HeroTextContainerMobile = styled(Box)(() => ({
    // maxWidth: '350px',
    maxWidth:'350px',
    textTransform: 'uppercase',
    color: Color.white,
    border: `3px solid ${Color.white}`,
    fontSize: '1.5rem',
    padding: '1em',
    lineHeight: '1.8em',
    // fontFamily: 'Josefin Sans', sans - serif,
    marginTop: '4em ',
}))

export const NavContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
    height: '10vh',
    padding:'2em 0',
    // border: `3px solid ${Color.white}`,
}))

export const NavItems = styled(Box)(() => ({
    display:'inline-block',
    alignItems: 'center',
    justifyContent:'center',
    height: '4vh',
    textTransform:'capitalize',
    color: Color.white,
    // border: `3px solid ${Color.white}`,
    margin:'.6rem',
    fontSize:'1.2rem',
        "&:hover":{
            cursor:'pointer',
            borderBottom:`1px solid ${Color.white}`
    }
}))