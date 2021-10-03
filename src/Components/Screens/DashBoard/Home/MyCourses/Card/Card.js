import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  LinearProgress,
  Box,
  Rating,
} from "@mui/material";

import styles from "./CardCSS";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function MyCard(props) {
  return (
    <Card>
      <CardActionArea sx={{ maxWidth: 225, height: 325 }}>
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
          <LinearProgressWithLabel value={props.progress} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyCard;
