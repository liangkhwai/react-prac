import { Box, Container, Grid, ListItem, Paper } from "@mui/material";
import React from "react";

const Body2 = () => {
  return (
    <div>
      {/* <Grid
        container
        columns={3}
        sx={{ backgroundColor: "red", width: "100%", height: "2rem" }}
      >
        <Grid item>1</Grid>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid> */}
      <Grid container>
        {/* First column */}
        <Grid item xs={4}>
          <Box
            style={{
              height: 200,
              textAlign: "center",
              padding: 20,
              backgroundColor: "black",
            }}
          >
            Column 1
          </Box>
        </Grid>

        {/* Second column */}
        <Grid item xs={4}>
          <Box
            style={{
              height: 200,
              textAlign: "center",
              padding: 20,
              backgroundColor: "#757575",
            }}
          >
            Column 2
          </Box>
        </Grid>

        {/* Third column */}
        <Grid item xs={4}>
          <Box
            style={{
              height: 200,
              textAlign: "center",
              padding: 20,
              backgroundColor: "black",
            }}
          >
            Column 3
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body2;
