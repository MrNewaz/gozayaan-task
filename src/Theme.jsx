import { CssBaseline } from "@mui/material"
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles"
import App from "App"

const Theme = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#430099",
        card: "#FFF",
      },
      text: {
        primary: "#111",
        secondary: "#1F1F23",
      },
    },
    typography: {
      fontFamily: "Helvetica Neue",
    },
  })
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

export default Theme
