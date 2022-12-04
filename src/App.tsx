import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Stack, styled } from "@mui/material";
import PostsList from "./components/PostsList";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <Wrapper>
        <CssBaseline />
        {/* The rest of your application */}
        <PostsList />
        <Chart />
      </Wrapper>
    </>
  );
}

const Wrapper = styled(Stack)(() => ({
  background: "#FBE6DF",
  display: "flex",
  flexDirection: "row",
}));
export default App;
