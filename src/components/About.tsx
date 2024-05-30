import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Stack,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { Image } from "mui-image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import einat from "./pic/einat.jpg";
import printer from "./pic/printer.jpg";

const About = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Typography variant="h4" align="center">
        עינת זילברמן
      </Typography>
      <Typography variant="subtitle1" align="center" fontSize="large">
        עורכת לשון
      </Typography>
      <Typography variant="h2" align="center" sx={{ textAlign: "center" }}>
        <Image alt="about" src={printer} style={{width:'600px'}} />
      </Typography>
      <Grid
        container
        style={{ marginTop: 60 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={10} md={8}>
          <Stack>
            <Typography variant="h4" align="center">
              אודות
            </Typography>
            <Typography variant="subtitle1" align="center" fontSize="large">
              קצת עלי
            </Typography>

            <Typography variant="body1" padding={1} fontSize="large">
              שמי עינת זילברמן, עורכת לשון, ספרות ומגיהה. במשך למעלה מ-30 שנים
              עסקתי בעריכת דין.
              <br /> בוגרת אוניברסיטת תל אביב במשפטים. <br />
              בשנת 2022 עברתי הסבה מקצועית לתחום עריכת לשון וספרות, מתוך אהבה
              וחיבור למילה הכתובה. <br /> למדתי עריכת לשון ב-״מכללת אסיף״
              וסיימתיי בהצטיינות.
              <br />
              למדתי עריכת ספרות ותוכן בבית העורכים של לירון פיין.
            </Typography>
            <Typography
              variant="body1"
              padding={1}
              fontSize="large"
              className="text-dark"
            >
              כדי שטקסט יצליח להגיע אל ליבו של הקורא ולספר את הסיפור שהכותב מבקש
              לספר, עליו להיות בהיר, קולח, בלי שגיאות ופשוט מבחינה תחבירית. זוהי
              עבודתו של העורך <br />
              וזו העבודה שבחרתי לעשות באהבה. מוזמנים ליצור עימי קשר. <br />
              אפשר לשלוח אליי קטע קצר מן הטקסט ואחזיר לכם דוגמת עריכה (ללא
              תשלום).
            </Typography>
            <Container style={{ textAlign: "center" }}>
              <Image
                alt="Einat Zilberman"
                src={einat}
                style={{
                  borderRadius: "50%",
                  width: 150,
                  height: 150,
                  margin: "0 auto",
                }}
              />
            </Container>
            <BottomNavigation showLabels color="success">
              <BottomNavigationAction
                className="fs-6"
                label="WhatsApp"
                icon={<WhatsAppIcon color="success" fontSize="large" />}
                rel="noopener"
                href="https://api.whatsapp.com/send?phone=972522935212"
                target="_blank"
              />
              <BottomNavigationAction
                label="Mail"
                icon={<MailOutlineIcon color="info" fontSize="large" />}
                rel="noopener"
                href="mailto:einatzilbe@gmail.com?subject=עריכה לשונית&body="
              />
            </BottomNavigation>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
