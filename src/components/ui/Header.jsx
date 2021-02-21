import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import logo from '../../assets/logo.svg'

const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const Header = (props) => {

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar color="primary">
                    <Toolbar>
                        <img alt="Company Logo" src={logo} style={{height:"7em",padding:"10px"}} />
                        <Typography variant="h3" >
                            Julian's Project
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar style={{marginBottom:"3em"}} />
        </>
    )
}

export default Header