import {
    Add,
    CardTravel,
    Home,
    ModeNight,
    Pages,
    Person,
    Settings,
} from "@mui/icons-material"
import {
    Box,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Switch,
    Tooltip,
} from "@mui/material"
import React from "react"

const MyBox = styled(Box)(({theme}) => ({
    background: [theme.palette.background],
}))

const Sidebar = ({mode, setMode}) => {
    return (
        <Box
            flex={1}
            // bgcolor={"background.default"}
            // color={"text.primary"}
            sx={{
                display: {xs: "none", sm: "flex"},
            }}
        >
            <Box position={"fixed"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Group" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <CardTravel />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <Pages />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton disableTouchRipple>
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch
                                size="small"
                                onClick={() =>
                                    setMode(mode === "light" ? "dark" : "light")
                                }
                                defaultChecked
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar
