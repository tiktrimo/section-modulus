import React, { useState, useCallback, useEffect } from "react";
import { Button, ButtonGroup, Grid } from "@material-ui/core";

export default function LanguageSelection(props) {
  const [languageCode, setLanguageCode] = useState(1);
  //1for korean 2for english

  useEffect(() => {
    props.setLanguageCode(languageCode);
  }, [languageCode]);

  const handleEnglishClick = useCallback(() => {
    setLanguageCode(2);
  }, []);
  const handleKoreanClick = useCallback(() => {
    setLanguageCode(1);
  }, []);

  return (
    <React.Fragment>
      <Grid container item justify="flex-end" xs={12}>
        <ButtonGroup style={{ padding: 20 }}>
          <Button
            onClick={handleEnglishClick}
            color={languageCode === 2 ? "primary" : "default"}
            size="small"
            variant={languageCode === 2 ? "contained" : "outlined"}
          >
            English
          </Button>
          <Button
            onClick={handleKoreanClick}
            color={languageCode === 1 ? "primary" : "default"}
            size="small"
            variant={languageCode === 1 ? "contained" : "outlined"}
          >
            한글
          </Button>
        </ButtonGroup>
      </Grid>
    </React.Fragment>
  );
}
