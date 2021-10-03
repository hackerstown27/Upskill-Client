import { Grid, Typography } from "@mui/material";
import styles from "./CourseDetailsCSS";

function CourseDetails(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div style={styles.courseDetail}>
          <Grid container alignItems="center" justifyContent="space-around">
            <Grid item xs={3}>
              <Typography sx={styles.courseDetailHeading}>11</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={styles.courseDetailSubHeading}>
                Course Completed
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={styles.courseDetail}>
          <Grid container alignItems="center" justifyContent="space-around">
            <Grid item xs={3}>
              <Typography sx={styles.courseDetailHeading}>4</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={styles.courseDetailSubHeading}>
                Course in Progress
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default CourseDetails;
