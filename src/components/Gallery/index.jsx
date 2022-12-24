import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GalleryDesktop } from './GalleryDesktop';
import { GalleryMobile} from './GalleryMobile';

export default function index () {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <GalleryMobile matches={matches} /> : <GalleryDesktop matches={matches} />}
        </>
    )
}