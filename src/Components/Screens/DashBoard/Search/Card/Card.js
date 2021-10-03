import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  CardActions,
  Button,
} from "@mui/material";
import { BookmarkAddRounded } from "@mui/icons-material";
import styles from "./CardCSS";

function MyCard(props) {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        height="150"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={styles.heading}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>
        <Rating value={props.rating} precision={0.5} readOnly />
        <Typography
          sx={styles.subHeading}
          variant="body2"
          color="text.secondary"
        >
          By {props.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Enroll</Button>
        <Button variant="outlined" color="error" size="small"><BookmarkAddRounded/></Button>
      </CardActions>
    </Card>
  );
}

export default MyCard;
