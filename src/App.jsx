import {
    Autocomplete,
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    Input,
    InputBase,
    Stack,
    styled,
    TextField,
    Typography,
} from "@mui/material"
import {AddAlarm, Settings} from "@mui/icons-material"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import {useState} from "react"
import AddPost from "./components/AddPost"
import {ThemeProvider} from "@emotion/react"

const App = () => {
    const [mode, setMode] = useState("light")
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    })
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box background={"background.default"}>
                    <Navbar />
                    <Box>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                            justifyContent={"space-between"}
                        >
                            <Sidebar mode={mode} setMode={setMode} />
                            <Feed />
                            <Rightbar />
                        </Stack>
                        <AddPost />
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default App
