import {Settings} from "@mui/icons-material"
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material"
import React from "react"

const Rightbar = () => {
    const itemData = [
        {
            img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            title: "Breakfast",
        },
        {
            img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            title: "Burger",
        },
        {
            img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
            title: "Camera",
        },
    ]
    return (
        <Box flex={1} sx={{display: {xs: "none", sm: "flex"}}}>
            <Box
                position={"fixed"}
                padding={"10px"}
                sx={{overflow: "auto", maxHeight: "100%"}}
            >
                <Box>
                    <Typography variant="h6" fontWeight={200}>
                        Online Friends
                    </Typography>

                    <AvatarGroup
                        max={5}
                        sx={{
                            justifyContent: "flex-end",
                            border: "1px solid black",
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="https://mui.com/static/images/avatar/2.jpg"
                        />
                        <Avatar
                            alt="Cindy Baker"
                            src="https://mui.com/static/images/avatar/3.jpg"
                        />
                        <Avatar
                            alt="Agnes Walker"
                            src="https://mui.com/static/images/avatar/4.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://mui.com/static/images/avatar/5.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://mui.com/static/images/avatar/5.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://mui.com/static/images/avatar/5.jpg"
                        />
                    </AvatarGroup>

                    <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
                        Latest Photos
                    </Typography>

                    <ImageList cols={3} rowHeight={164}>
                        {itemData.map((item, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
                        Latest Conversation
                    </Typography>

                    <List
                        sx={{
                            width: "100%",
                            bgcolor: "background.paper",
                        }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://mui.com/static/images/avatar/1.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: "inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {
                                            " — I'll be in your neighborhood doing errands this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Travis Howard"
                                    src="https://mui.com/static/images/avatar/2.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: "inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {
                                            " — Wish I could come, but I'm out of town this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Travis Howard"
                                    src="https://mui.com/static/images/avatar/2.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: "inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {
                                            " — Wish I could come, but I'm out of town this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://mui.com/static/images/avatar/3.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: "inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            " — Do you have Paris recommendations? Have you ever…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Rightbar
