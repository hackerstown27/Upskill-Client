import React, { Component } from "react";
import styles from "./MyCoursesCSS";
import { Typography, Stack, Pagination, Grid } from "@mui/material";
import Card from "./Card/Card";
import LottieAnimation from "../../../../LottieAnimation/LottieAnimation";
import empty from "../../../../../Assets/Illustrations/empty.json";

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Adobe Premiere",
          author: "Joe Parys",
          progress: 25,
          rating: 3,
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAkFBMVEUqADTqd//vef8ZACSgVq4aACWdVKvxe/8cACcnADGPRJ4fACp7OYndb/E/Ekk+FEgNABoiACzWbOkUACAXACIeACi1WsYlAC8RAB3IbNkAAA6bSqtqLXaWSaUhACwFABW8XM6nUrcyBzyKQZlZI2VRH10GABXLZd5iKm5zNYGAO46sVLxFFVD5f/82C0C6W8xGxsaBAAAFLUlEQVR4nO3d62KiOBiAYQiDEJEOJ4EKWtF6duz9391iO9stSaCgEppvv/fvOOozgCQYGU2Hnzb0G5AQGmGERhihEUZfjARWIuPz6BekRs+8kYxmBqRmIyIwmhqkTDSCCI0wQiOM0AgjNMIIjTBCI4zQCCM0wgiNMEIjjNAIIzTCCI0wQiOM0AgjNMIIjTBCY/soTRJ/4TjO1DZN04ii8LPItKc+pT28+ZY9yLi4nDeb/WEyOa7H83mWFaf4s2I+PubnJEoNfxjoY4zO8Y/1N+FirusfuLssX23NAZiPMdrjL2vS6iqpJMjOni2bKdH48dxWsKahXKVsY5mlFxepygGM1702mzq9cIQNYiy3pZt7vXhEDWQsladU1v46mFG3As3vhcQ1nFEn7tOiFxPbgEad6E9StuSQxnJLrmQck4MadbJLe1FVG9aoW4WEU0hvxpofWHDIff+HZF/GYBkXWTa/lsU7t5yP1CDd/jdkT0brMAsjwzDN9wlzmtqvWSBmWuPeLzr0ZZww49HE2G5isXLR92erLGNZ4p13lmhD2o+h1CbRWCpnmQDpbh8BaUiqUdO2Ex7Z+0erZKPmjTkkicO7GY3JNmqzmP/gmd6raE66kdr8zvqa3MtoTLpRM7i9lWT9niLlGyn3u2ey7DAypzTxy7qcU+UbtZQ7ItuM56hjR6HnJZfzZp/n+bkDcgCjc2B3VstoenLq26EXng/j4m3nlg9+L+gwzB3ASClnrN0q1Im2q/04Dj6+Zfjvr/xwo7Z1WaN4FOAbHp2cAt0STM5+utHbtXi0E0b7Ylc7J/vpxvCNffSRebQfRofYrZ1zKmCMTsyjyboy0vHDfaw3AVUwFqyxMr3y941bUFVjZTtym1lFY8gOAqrHo5EBMKZL7urP1y8F7DUAoxcwb7h6fnQE82j1jOx2sp6+jnMWufrGZMON5SrzDn+vvtGcN887klf1jVv2cGTmj8mm7jPn36U+P37ewe+q1SGARs+88bq2x90ti2x8zK9NulwekW98Yc8c7PUckXE5zzXDSyPDdhbXywCLLleApBsXgqOt+nL0iTteU8++Y62dbCO12ckjd31VYIxuw/1NspHOuD1Vt/LqDFlgbLwW8m1yjUn4JjgvMB+RahujSyD4yMwYgcJGakdrXXTmY9d2KGqkie35a1c0fiEF+42OMsbDi2l/ZESpR1/HS1IzQuOW7KpiJNchyfuKh3F2WoovH378Y0y4b5FVMbZdukKWL9yTKWNsm8YPX4AZyUaw8hGW0cpFLwTKaE2ECwEgGUkuXusAx0jcc82rgDFab07dqhwgRss9zGrnvCCMhGSLhiU56hvLYWuRRE0XLhQ3EmLtjrRRqLSx9Om79Wo7/e7ikzJG/ieey3m+avXbR1WM5dyqKOLltbiYH/NNtE3NlpcPVTGWc+QoitJrYWROO13yVcbY9N3cN6HxhtDYNjR2DI03hMa2obFjaLwhNLYNjR1D4w2hsW1o7BgabwiNbUNjx9B4Q2hsGxo7hsYbQmPb0NgxNN4QGtuGxo6h8YbQ2DZn8nnv7o/+3HGPKkpJ9cms4L6bQT3oHuz+b6Z7bsNFL8yT3Xl3z8fdS7/aXW+KfbI7b7KH/ycCjNAIIzTCCI0wQiOM0AgjNMIIjTBCI4zQCCM0wgiNMEIjjNAIIzTCCI0wQiOM0AgjNMIIjTBCI4zQCCM0wgiNMEIjjNAIIzTCSGycGZCaCYz68+gXpEbPOm+s3iFW/XSREWxohBEaYYRGGP0fjP8AhnCkoNZ4LEcAAAAASUVORK5CYII=",
        },
        {
          title: "React",
          author: "Maximilian Schwarzmüller",
          progress: 80,
          rating: 3,
          img: "https://reactjs.org/logo-og.png",
        },
        {
          title: "Angular",
          author: "Mosh Hamedani",
          progress: 45,
          rating: 4.5,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        },
        {
          title: "Node JS",
          author: "Andrew Mead",
          progress: 60,
          rating: 4,
          img: "data:image/png;base64,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",
        },
      ],
      currPage: 1,
    };
  }

  onHandleChange = (events, page) => {
    this.setState({ currPage: page });
  };

  render() {
    return (
      <div style={styles.container}>
        <Typography sx={styles.heading}>My Courses</Typography>
        {this.state.data.length == 0 ? (
          <div>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={9}>
                <LottieAnimation lotti={empty} height={350} width={350} />
                <Typography style={styles.emptyHeading}>
                  You have not enrolled in any course yet.
                </Typography>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>
            <Grid sx={styles.courses} container spacing={2}>
              {this.state.data
                .slice(
                  (this.state.currPage - 1) * 3,
                  (this.state.currPage - 1) * 3 + 3
                )
                .map((details) => {
                  return (
                    <Grid item xs={4}>
                      <Card {...details} />
                    </Grid>
                  );
                })}
            </Grid>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Pagination
                  count={Math.ceil(this.state.data.length / 3)}
                  variant="outlined"
                  shape="rounded"
                  onChange={this.onHandleChange}
                />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default MyCourses;
