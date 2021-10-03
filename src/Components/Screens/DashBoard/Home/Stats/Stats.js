import { Typography } from "@mui/material";
import styles from "./StatsCSS";

import React from "react";
import { Chart } from "react-charts";

function Stats(props) {
  const data = React.useMemo(
    () => [
      {
        label: "Study Hours",
        data: [
          ["Monday", 0],
          ["Tuesday", 1],
          ["Wednesday", 2],
          ["Thursday", 1],
          ["Friday", 4],
          ["Saturday", 7],
          ["Sunday", 2],
        ],
      },
    ],
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "ordinal", position: "left" },
    ],
    []
  );

  return (
    <div style={styles.container}>
      <Typography sx={styles.heading}>Your Statistics</Typography>
      <Typography sx={styles.subHeading}>Learning Hours</Typography>
      <div style={styles.chart}>
        <Chart data={data} axes={axes} tooltip primaryCursor secondaryCursor />
      </div>
    </div>
  );
}
export default Stats;
