import React, { useEffect, useState } from "react";
import { Typography, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllRecommendations } from "../services/ApiService";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import ImageRecommend from "./ImageRecommend";

export interface AllRecommendations {
  _id?: string;
  name?: string;
  recommendation?: string;
}

const Recommendations = ({ _id, name, recommendation }: AllRecommendations) => {
  const [cards, setCards] = useState<Array<AllRecommendations>>([]);

  useEffect(() => {
    getAllRecommendations().then((json) => setCards(json));
  }, []);

  return (
    <>
      
      <Grid  style={{ justifyContent: "center" }} xs={12} sm={8} >
        <Stack>
          {cards.map((item) => (
            <Card
              key={item._id}
              variant="soft"
              color="primary"
              sx={{
                boxShadow: 15,
                
                margin:'auto',
                marginTop: 5,
                marginBottom: 5
                
              }}
            >
              <CardContent
          
                sx={{
                  boxShadow: 15,
                  
                }}
              >
                <Typography  fontSize={20}> {item.name}</Typography>
                <Typography  fontSize={17}> {item.recommendation}</Typography>
              
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default Recommendations;
