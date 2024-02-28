import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { booknew } from "../services/ApiService";
import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { Textarea } from "@mui/joy";
import { styled } from "@mui/joy";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const LabelRtl = {
  ".MuiInputLabel-root": {
    right: 0,
  },
  ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
    right: 0,
    left: "unset",
  },
};
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export interface AddBook {
  _id?: string;
  namebook?: string;
  description?: string;
  descriptionmore?: string;
  image?: File | null;
}

function Addpost() {
  const navigate = useNavigate();
  const [namebook, setNamebook] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionmore, setDescriptionmore] = useState("");
  const [image, setImage] = useState<File | null>(null);

  function handleClick() {
    if (!image) {
      console.error("Image must be upload");
      return;
    }
    const formData = new FormData();
    formData.append("namebook", namebook);
    formData.append("description", description);
    formData.append("descriptionmore", descriptionmore);
    formData.append("image", image);
    booknew(formData).then((booknew) => {
      console.log(booknew);
      navigate("/");
    });
    setNamebook("");
    setDescription("");
    setDescriptionmore("");
    setImage(null);
  }
  return (
    <>
      
        <Container>
          <Typography variant="h2" align="center">
            הוסף ספר
          </Typography>

          <Stack dir="rtl" width={300} margin="0 auto">
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
              onChange={(e) => setNamebook(e.target.value)}
            />
            <Textarea
              style={{ textAlign: "right" }}
              minRows={2}
              size="lg"
              id="description"
              name="description"
              sx={LabelRtl}
              placeholder="  תיאור בקצרה עד 430 תווים"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Textarea
              style={{ textAlign: "right" }}
              minRows={2}
              size="lg"
              id="descriptionmore"
              name="descriptionmore"
              sx={LabelRtl}
              placeholder=" תיאור מלא "
              value={descriptionmore}
              onChange={(e) => setDescriptionmore(e.target.value)}
            />
            <Button
              component="label"
              variant="contained"
              className="mt-5"
              startIcon={<CloudUploadIcon />}
            >
              העלה תמונה
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </Button>
            <Button className="fs-3" onClick={handleClick}>
              שלח
            </Button>
          </Stack>
        </Container>
      
    </>
  );
}

export default Addpost;
