import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookUpdate, getCardById } from "../services/ApiService";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Textarea } from "@mui/joy";

const LabelRtl = {
  ".MuiInputLabel-root": {
    right: 0,
  },
  ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
    right: 0,
    left: "unset",
  },
};
export interface Editbook {
  namebook: string;
  description: string;
  descriptionmore: string;
}
function Editpost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [namebook, setName] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionmore, setDescriptionmore] = useState("");

  const setCardValues = async (id: any) => {
    const cardResponse = await getCardById(id);
    setName(cardResponse.namebook);
    setDescription(cardResponse.description);
    setDescriptionmore(cardResponse.descriptionmore);
  };

  useEffect(() => {
    if (!!id) setCardValues(id);
  }, [id]);

  function validate(): boolean {
    if (!namebook) {
      toast.error("nameprojectx is required.");
      return false;
    }
    if (!description) {
      toast.error("img is required.");
      return false;
    }
    if (!descriptionmore) {
      toast.error("img is required.");
      return false;
    }

    return true;
  }
  function handleClick() {
    if (!validate()) {
      return;
    }

    if (!id) return;

    BookUpdate(id, {
      namebook,
      description,
      descriptionmore,
    }).then((data) => {
      navigate("/");
    });
  }
  return (
    <>
      <Grid xs={12} md={3}>
        <Container>
          <Typography variant="h2" align="center">
            עריכת ספר
          </Typography>

          <Stack dir="rtl" width={300} margin="0 auto">
            {!!namebook && !!description && (
              <>
                <TextField
                  dir="rtl"
                  id="namebook"
                  name="namebook"
                  type="text"
                  placeholder="שם הספר"
                  variant="standard"
                  style={{ textAlign: "right" }}
                  defaultValue={namebook}
                  sx={LabelRtl}
                  onChange={(e) => setName(e.target.value)}
                />
                <Textarea
                  style={{ textAlign: "right" }}
                  minRows={2}
                  size="lg"
                  id="description"
                  name="description"
                  sx={LabelRtl}
                  placeholder="תיאור בקצרה "
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Textarea
                  style={{ textAlign: "right" }}
                  minRows={2}
                  size="lg"
                  id="descriptionmore"
                  name="descriptionmore"
                  sx={LabelRtl}
                  placeholder="תיאור מלא "
                  defaultValue={descriptionmore}
                  onChange={(e) => setDescriptionmore(e.target.value)}
                />
                <Button className="fs-3" onClick={handleClick}>
                  שלח
                </Button>
              </>
            )}
          </Stack>
        </Container>
      </Grid>
    </>
  );
}

export default Editpost;
