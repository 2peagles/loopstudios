import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LeaderDesktop } from "./LeaderDesktop";
import {LeaderMobile} from './LeaderMobile'

export default function Leader() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches ? <LeaderMobile matches={matches} /> : <LeaderDesktop matches={matches} />}
        </>
    )
}