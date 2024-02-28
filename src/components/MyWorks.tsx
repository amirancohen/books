import { Container, Grid, Paper } from "@mui/material";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserData } from "../context/user";
import Typography from "@mui/material/Typography";

import Book from "./Book";
import { getBook, removeBook } from "../services/ApiService";

export interface AllBooks {
  _id?: string;
  namebook?: string;
  description?: string;
  descriptionmore?: string;
  image?: File | null;
}

const MyWorks = () => {
  const [cards, setCards] = useState<Array<AllBooks>>([]);
  const user = useUserData();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    getBook().then((json) => setCards(json));
  }, []);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //remove project
  function handleRemove(_id: any) {
    const list = cards.filter((item) => item._id !== _id);

    setCards(list);
    console.log(_id);
    // remove item
    removeBook(_id);
  }

  return (
    <Container style={{ marginTop: 60 }}>
      <Typography variant="h2" align="center">
        ספרים שערכתי
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={3} marginTop={3} xs={12} sm={6} lg={6} xl={6} marginX={"auto"}>
        {cards.map((book) => (
          <Grid item key={book._id} >
            <Paper
              sx={{
                height: "100%",
                
              }}
            >
              <Book item={book} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyWorks;
