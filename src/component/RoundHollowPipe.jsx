import React, { useState, useCallback } from "react";
import { Grid, Paper, TextField, InputAdornment } from "@material-ui/core";

export default function RoundHollowPipe(props) {
  const [outerDiameter, setOuterDiameter] = useState(0);
  const [wallThickness, setWallThickness] = useState(0);

  const handleODchange = useCallback((e) => {
    setOuterDiameter(Number(e.target.value));
  }, []);
  const handleWTchange = useCallback((e) => {
    setWallThickness(Number(e.target.value));
  }, []);
  return (
    <Paper
      style={{ width: "75%", padding: 20, margin: 5, maxWidth: 400 }}
      elevation={3}
    >
      <Grid spacing={2} container>
        <Grid container item justify="center" xs={12}>
          <TextField
            id="RoundTube_OD"
            label={props.languageCode === 1 ? "외경" : "Outer Diameter"}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            onChange={handleODchange}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            id="RoundTube_T"
            label={props.languageCode === 1 ? "두께" : "Wall Thickness"}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            onChange={handleWTchange}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            disabled
            id="RoundTube_Section_Modulus"
            label={props.languageCode === 1 ? "단면계수" : "Section Modulus"}
            InputProps={{
              endAdornment: <InputAdornment position="end">m3</InputAdornment>,
            }}
            defaultValue={0}
            value={calculateHollowTubeSectionModulus(
              outerDiameter,
              outerDiameter - 2 * wallThickness
            )}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
function calculateHollowTubeSectionModulus(outerDiameter, innerDiameter) {
  const sectionModulus =
    (Math.PI * (Math.pow(outerDiameter, 4) - Math.pow(innerDiameter, 4))) /
    (32 * outerDiameter);

  return !Number.isNaN(sectionModulus) ? sectionModulus : undefined;
}
