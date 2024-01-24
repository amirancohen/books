import React from "react";
import { Typography, Container } from "@mui/material";
import AddRecommendation from "./addRecommendation";

const Recommendations = () => {
    return (
        <Container style={{ marginTop: 30 }}>
            <Typography variant="h2" align="center">
                ממליצים
            </Typography>
            <AddRecommendation />
        </Container>
    );
};

export default Recommendations;
