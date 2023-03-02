import {
    Balance,
    Mail,
    Notifications,
    Search,
    Settings,
} from "@mui/icons-material"
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material"
import React, {useState} from "react"

const StyledTool = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const SearchDiv = styled("div")({
    backgroundColor: "white",
    color: "black",
    padding: "0 10px",
    width: "40%",
})

const IconDiv = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}))

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}))
//===================================================
export const MyDiv = styled("span")(({theme}) => ({
    display: "none",
    color: "white",
    padding: "5px 10px",
    backgroundColor: "goldenrod",
    [theme.breakpoints.up("sm")]: {
        display: "inline-block",
    },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const toggle = Boolean(anchorEl)
    const handleClick = (event) => {
        console.log("Evt: ", event.currentTarget)
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="sticky">
            <StyledTool>
                <Typography
                    sx={{display: {xs: "none", sm: "block"}}}
                    variant="h5"
                >
                    MUI
                </Typography>
                <Balance sx={{display: {xs: "block", sm: "none"}}} />
                <SearchDiv>
                    <InputBase placeholder="Search..." />
                </SearchDiv>
                <IconDiv>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge variant="dot">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg"
                        alt="leonardo da vinci"
                        onClick={handleClick}
                    />
                </IconDiv>
                <UserBox onClick={handleClick}>
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg"
                        alt="leonardo da vinci"
                    />
                    <Typography fontSize={"5px"} variant="small">
                        Da Vinci
                    </Typography>
                </UserBox>
            </StyledTool>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={toggle}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
