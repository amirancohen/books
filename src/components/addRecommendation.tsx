import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { postRecommendation } from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const LabelRtl = {
    ".MuiInputLabel-root": {
        right: 0,
    },
    ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
        right: 0,
        left: "unset",
    },
};

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
        <Stack dir="rtl">
            <TextField
                id="name"
                name="name"
                label="שם הממליץ"
                variant="standard"
                style={{ textAlign: "right" }}
                defaultValue={name}
                dir="rtl"
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
                style={{ textAlign: "right" }}
                dir="rtl"
                onChange={(e) => setRecommendation(e.target.value)}
                sx={LabelRtl}
            />
            <Button onClick={handleSubmit}>הוסף המלצה</Button>
        </Stack>
    );
};

export default AddRecommendation;
