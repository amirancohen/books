import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ButtonProps, Grid, Button, Link, Box, Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router-dom";
import { removeBook } from "../services/ApiService";
import { useUserData } from "../context/user";

const ExpandMore = styled((props: ButtonProps) => {
  return <Button {...props} />;
})(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  borderRadius: "unset",
}));

export default function RecipeReviewCard({ item }: any) {
  const user = useUserData();
  const navigate = useNavigate();
  const styles = {
    "& .MuiButton-startIcon": {
      margin: 0,
      display: "block",
    },
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const btnProps = expanded
    ? { startIcon: <ExpandLessIcon /> }
    : { endIcon: <ExpandMoreIcon /> };

  return (
    
      <Card sx={{ mx: "auto", boxShadow: 15 }} variant="outlined">
        <Grid container>
          <Grid xs={12} sm={4} >
            <CardMedia
              component="img"
              // image={`http://localhost:3000/images/${item.image}`}
              image={`https://squid-app-5s93p.ondigitalocean.app/images/${item.image}`}
              alt=""
              width={1200}
              height={300}
            />
          </Grid>
          <Grid xs={12} sm={8} >
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                style={{ fontFamily: "Alef-Bold", fontWeight: "bold" }}
                color={"#1976d2"}
              >
                {item.namebook}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{
                  fontFamily: "simpleclm-boldoblique-webfont",
                  fontSize: "17px",
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <CardActions disableSpacing>
          <ExpandMore
            variant="outlined"
            onClick={handleExpandClick}
            {...btnProps}
          >
            <Typography align="center" style={{ fontFamily: "David Libre" }}>
              {expanded ? "סגור" : "קרא עוד"}
            </Typography>
          </ExpandMore>

          {user?.isLogedIn() && (
            <>
              <Button
                // component={RouterLink}
                sx={styles}
                style={{ marginRight: 6 }}
                startIcon={<EditIcon className="fs-4" />}
                aria-label="edit"
                variant="outlined"
                onClick={() => {
                  navigate(`/editpost/${item._id}`);
                }}
              />

              <Link href="/">
                <Button
                  sx={styles}
                  style={{ marginRight: 6, color: "#C01919" }}
                  startIcon={<DeleteIcon className="fs-4" />}
                  aria-label="delete"
                  variant="outlined"
                  onClick={() => removeBook(item._id)}
                />
              </Link>
            </>
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              paragraph
              variant="body1"
              color="text.secondary"
              style={{ fontFamily: "Alef-Bold", fontSize: "17px" }}
            >
              {item.descriptionmore}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
  
  );
}
