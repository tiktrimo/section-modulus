import React, { useCallback, useState } from "react";
import { Grid, TextField, Paper, InputAdornment } from "@material-ui/core";
import HollowSquarePipe from "../svgs/HollowSquarePipe.svg";

export default function SquareHollowPipe(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [wallThickness, setWallThickness] = useState(0);

  const handleWidthChange = useCallback((e) => {
    setWidth(e.target.value);
  }, []);
  const handleHeightChange = useCallback((e) => {
    setHeight(e.target.value);
  });
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
          <img
            style={{ width: "80%" }}
            src={HollowSquarePipe}
            alt="Hollow Square Tube"
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            id="SquareTube_Width"
            label={props.languageCode === 1 ? "폭" : "Width"}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            onChange={handleWidthChange}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            id="SquareTube_Height"
            label={props.languageCode === 1 ? "높이" : "Height"}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
            onChange={handleHeightChange}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            id="SquareTube_T"
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
            id="SquareTube_Section_Modulus"
            label={props.languageCode === 1 ? "단면계수" : "Section Modulus"}
            InputProps={{
              endAdornment: <InputAdornment position="end">mm3</InputAdornment>,
            }}
            defaultValue={0}
            value={numberWithCommas(
              calculateHollowSquareTubeSectionModulus(
                width,
                height,
                width - wallThickness,
                height - wallThickness
              )
            )}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
function calculateHollowSquareTubeSectionModulus(
  outerWidth,
  outerHeight,
  innerWidth,
  innerHeight
) {
  const sectionModulus =
    (outerWidth * outerHeight * outerHeight) / 6 -
    (innerWidth * Math.pow(innerHeight, 3)) / 6 / outerHeight;

  return !Number.isNaN(sectionModulus) ? sectionModulus.toFixed(2) : 0;
}
function numberWithCommas(x) {
  if (!x) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
