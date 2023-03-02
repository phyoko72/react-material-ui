import {
    CheckBox,
    ExpandMore,
    Favorite,
    FavoriteBorder,
    MoreVert,
    Settings,
    Share,
} from "@mui/icons-material"
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Skeleton,
    Typography,
} from "@mui/material"
import {useState} from "react"

const Post = () => {
    const [myData, setMyData] = useState(true)
    return (
        <>
            {myData ? (
                <Card sx={{margin: 1.5}}>
                    <CardHeader
                        avatar={<Avatar aria-label="recipe">L</Avatar>}
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title="Leonardo Da Vinci"
                        subheader={new Date().toDateString()}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg"
                        alt="Leo"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton>
                            <Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite sx={{color: "red"}} />}
                            />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </CardActions>
                </Card>
            ) : (
                <Skeleton width={210} height={118} />
            )}
        </>
    )
}

export default Post
