import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        className="bg-pink-700 text-white hover:bg-pink-300 rounded-b-lg"
        variant="contained"
      >
        Contained
      </Button>
      <Button
        className="border-dotted border-2 border-indigo-600"
        variant="outlined"
      >
        Outlined
      </Button>
    </>
  );
}

export default App;
