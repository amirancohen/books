import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import image1 from './pic/image1.jpg';
import image2 from './pic/image2.jpg';
import { Image } from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function ImageRecommend() {
    return ( 
        <>
        <Box sx={{ width: '50%' , margin:'auto' }}>
      <Grid container xs={12} sm={8}>
          <Item> 
          <Image
                alt="Einat Zilberman"
                src={image1}
                style={{
                 
                  width: 400,
                  height: 500,
                  margin: "0 auto",
                }}
              />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item><Image
                alt="Einat Zilberman"
                src={image2}
                style={{
                  
                  width: 300,
                  height: 500,
                  margin: "0 auto",
                }}
              /></Item>
        </Grid>
    </Box>
        </>
     );
}

export default ImageRecommend;