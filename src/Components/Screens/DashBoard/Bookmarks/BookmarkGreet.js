import {Grid, Typography} from "@mui/material";
import styles from "./BookmarkCSS";
import Bookmark from '../../../../Assets/Illustrations/Bookmark.svg'


function BookmarkGreet(props) {
    return (
        <div style={styles.card}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography sx={styles.greetHeading} >Bookmark</Typography>
            <Typography sx={styles.greetP}>
              See, What is left to Learn.
            </Typography>
          </Grid>
          <Grid item xs={6} padding={3}>
            <img  
              style={styles.greetImg}
              src={Bookmark}
              alt="greet"
            />
          </Grid>
        </Grid>
      </div>
    )
};

export default BookmarkGreet;