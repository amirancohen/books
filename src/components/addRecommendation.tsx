import {  Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { postRecommendation } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/joy";

const LabelRtl = {
  ".MuiInputLabel-root": {
    right: 0,
  },
  ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
    right: 0,
    left: "unset",
  },
};

export interface AddRecomen {
  _id?: string;
  name?: string;
  recommendation?: string;
}

const AddRecommendation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [recommendation, setRecommendation] = useState<string>("");

  const validate = (): boolean => {
    if (!name) {
      return false;
    }

    if (!recommendation) {
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    await postRecommendation({
      name,
      recommendation,
    });
    navigate("/");
  };
  return (
    <>
    
       <Typography variant="h2" align="center" sx={{marginX:"auto"}}>
          המלצות
        </Typography>
    <Box style={{ margin: "0 auto", width: "25%" }} >
       <Typography variant="h4" align="center" className="mt-5">
          הוסף המלצה
        </Typography>
      <Stack>
        <TextField
          id="name"
          name="name"
          label="שם"
          variant="standard"
          defaultValue={name}
          sx={LabelRtl}
          onChange={(e) => setName(e.target.value)}
          />
        <TextField
          id="recommendation"
          name="recommendation"
          label="המלצה"
          placeholder="המלצה"
          multiline
          variant="standard"
          defaultValue={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
          sx={LabelRtl}
          />
        <Link style={{ marginRight: 10 }} rel="noopener" href="/">
          <Button style={{ margin: "0 auto" }} onClick={handleSubmit}>
            הוסף המלצה
          </Button>
        </Link>
      </Stack>
    </Box>
          </>
  );
};

export default AddRecommendation;
