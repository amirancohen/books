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

const About = () => {
    return (
        <Container style={{ marginTop: 30 }}>
            <Typography variant="h2" align="center">
                אודות
            </Typography>
            <Grid container style={{ marginTop: 10 }}>
                <Grid xs={4}>
                    <Image alt="Einat Zilberman" src="/images/einat.jpg" />
                </Grid>
                <Grid xs={8}>
                    <Stack>
                        <Typography variant="h4" align="center">
                            עינת זילברמן
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            עורכת לשונית
                        </Typography>
                        <Typography variant="body1" padding={1}>
                            עורכת לשון, ספרות ומגיהה. במשך למעלה מ-30 שנים עסקתי
                            עריכת דין, בוגרת אוניברסיטת תל אביב במשפטים, בשנת
                            2022 עברתי הסבה מקצועית לתחום עריכת לשון וספרות,
                            מתוך אהבה וחיבור למילה הכתובה. למדתי עריכת לשון
                            ב-״מכללת אסיף״ בהצטיינות, עריכת ספרות ותוכן בבית
                            העורכים של לירון פיין.
                        </Typography>
                        <Typography variant="body1" padding={1}>
                            שמי עינת זילברמן, עורכת לשון, ספרות ומגיהה. במשך
                            למעלה מ-30 שנים עסקתי עריכת דין, בוגרת אוניברסיטת תל
                            אביב במשפטים, בשנת 2022 עברתי הסבה מקצועית לתחום
                            עריכת לשון וספרות, מתוך אהבה וחיבור למילה הכתובה.
                            למדתי עריכת לשון ב-״מכללת אסיף״ בהצטיינות, עריכת
                            ספרות ותוכן בבית העורכים של לירון פיין. כדי שטקסט
                            יצליח להגיע אל ליבו של הקורא ולספר את הסיפור שהכותב
                            מבקש לספר, עליו להיות בהיר, קולח, בלי שגיאות ופשוט
                            מבחינה תחבירית. זוהי עבודתו של העורך וזו העבודה
                            שבחרתי לעשות באהבה. מוזמנים ליצור עימי קשר. אפשר
                            לשלוח אליי קטע קצר מן הטקסט ואחזיר לכם דוגמת עריכה
                            (ללא תשלום).
                        </Typography>
                        <BottomNavigation showLabels>
                            <BottomNavigationAction
                                label="WhatsApp"
                                icon={<WhatsAppIcon />}
                                rel="noopener"
                                href="https://api.whatsapp.com/send?phone=972522935212"
                                target="_blank"
                            />
                            <BottomNavigationAction
                                label="Mail"
                                icon={<MailOutlineIcon />}
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
