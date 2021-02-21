import { createMuiTheme } from '@material-ui/core/styles'

const purple = "#3B27BA"
const pink = "#E847AE"
const green = "#13CA91"
const orange = "#FF9472"

export default createMuiTheme({
    pallette: {
        common: {
            purple: `${purple}`,
            pink: `${pink}`,
            green: `${green}`,
            orange: `${orange}`
        },
        primary: {
            main: `${purple}`
        },
        secondary: {
            main: `${pink}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
})