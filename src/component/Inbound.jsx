import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import RoundHollowPipe from "./RoundHollowPipe";
import LanguageSelection from "./LanguageSelection";

export default function Inbound(props) {
  const [languageCode, setLanguageCode] = useState(1);

  return (
    <Grid container justify="center">
      <LanguageSelection setLanguageCode={setLanguageCode} />
      <RoundHollowPipe languageCode={languageCode} />
    </Grid>
  );
}
