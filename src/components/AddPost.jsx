import {
    Add,
    Close,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material"
import {
    Avatar,
    Stack,
    Box,
    Fab,
    Modal,
    Tooltip,
    Typography,
    Button,
    TextField,
    ButtonGroup,
} from "@mui/material"
import {useState} from "react"

const AddPost = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box bgcolor={"background.default"}>
            <Tooltip
                title="Add Post"
                sx={{
                    position: "fixed",
                    bottom: "10px",
                    left: {xs: "45%", sm: "10px"},
                    transform: "translate(0, -45%)",
                    opacity: 0.6,
                    ":hover": {opacity: 1},
                }}
                onClick={() => setOpen(true)}
            >
                <Fab color="primary" aria-label="add" size="small">
                    <Add />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    sx={{
                        width: "500px",
                        height: "auto",
                        padding: "10px",
                        borderRadius: "8px",
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={300}
                        color="gray"
                        textAlign={"center"}
                    >
                        Create Post
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap="5px"
                        margin={"5px 0 10px 0"}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/2.jpg"
                        />
                        <Typography variant="small" component={"small"}>
                            John Doe
                        </Typography>
                    </Stack>

                    <TextField
                        variant="outlined"
                        name="post_text"
                        multiline
                        rows={3}
                        sx={{width: "100%"}}
                        placeholder="What's on your mind?"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Stack direction={"row"} gap={"8px"} m={"5px"}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>

                    <ButtonGroup variant="contained" size="small" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}>
                            <DateRange />
                        </Button>
                        <Button
                            sx={{width: "100px"}}
                            onClick={() => setOpen(false)}
                        >
                            <Close />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </Box>
    )
}

export default AddPost
