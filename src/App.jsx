import { Box } from "@mui/material";
import "./App.css";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Header from "./components/Header";
import Body3 from "./components/Body3";

function App() {
  return (
    <>
      <Header />
      <Body1 />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
          // backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            marginX: "5rem",
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            transform: "translate(0,-5em)",
          }}
        >
          <Body2 />
        </Box>
      </Box>
      <Body3 />
    </>
  );
}

export default App;
