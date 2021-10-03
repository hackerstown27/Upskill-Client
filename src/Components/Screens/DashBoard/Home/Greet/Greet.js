import {Grid, Typography} from "@mui/material";
import styles from "./GreetCSS";
import greetIllustration from "../../../../../Assets/Illustrations/greet.svg";


function Greet(props) {
    return (
        <div style={styles.card}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography sx={styles.greetHeading}>Hello Tarun!</Typography>
            <Typography sx={styles.greetP}>
              It's good to see you again.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              style={styles.greetImg}
              src={greetIllustration}
              alt="greet"
            />
          </Grid>
        </Grid>
      </div>
    )
};

export default Greet;