import { Button } from "@mui/material";
import React from "react";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        className="border-dotted border-2 border-indigo-600"
        variant="contained"
      >
        Contained
      </Button>
      <Button
        className="border-dotted border-2 border-indigo-600 hover:bg-pink-200"
        variant="outlined"
      >
        Outlined
      </Button>
    </>
  );
}
