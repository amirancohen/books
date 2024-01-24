import Reacr from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Container, List, ListItem } from "@mui/material";

const MyServices = () => {
    return (
        <Container style={{ marginTop: 30 }}>
            <Typography variant="h2" align="center">
                השירותים שלי
            </Typography>
            <Grid container style={{ marginTop: 10 }} spacing={2}>
                <Grid xs={4}>
                    <Typography
                        variant="h5"
                        align="center"
                        style={{ color: "#42a5f5" }}
                    >
                        עריכת תוכן/ספרות
                    </Typography>
                    <Typography variant="body1" padding={1}>
                        בעריכת תוכן או עריכה ספרותית ייבדק הטקסט במספר אלמנטים:
                    </Typography>
                    <List sx={{ listStyleType: "disc", m: 2 }}>
                        <ListItem sx={{ display: "list-item" }}>
                            <Typography align="right">
                                רצף כרונולוגי הגיוני - היות הטקסט קוהרנטי.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <Typography align="right">
                                הוספת מידע חסר ומחיקת המיותר
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <Typography align="right">סתירות בטקסט.</Typography>
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            <Typography align="right">
                                איתור ליקויים במבנה והצעות לשיפורו.
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={4}>
                    <Typography
                        variant="h5"
                        align="center"
                        style={{ color: "#42a5f5" }}
                    >
                        עריכה לשונית
                    </Typography>
                    <Typography variant="body1" padding={1}>
                        בעריכה לשונית אבדוק שגיאות תחביר, שיבושי לשון, שגיאות
                        כתיב והקלדה, וידוא כי הטקסט עומד בחוקי הלשון העברית,
                        התאמת המשלב לקהל לו הוא מיועד, ניסוח בהיר וקולח, אחידות
                        הטקסט, פסיקים ונקודות במקום הנכון וכד׳. המטרה היא לקבל
                        טקסט רהוט וזורם.
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography
                        variant="h5"
                        align="center"
                        style={{ color: "#42a5f5" }}
                    >
                        הגהה
                    </Typography>
                    <Typography variant="body1" padding={1}>
                        הגהה היא אחד מהשלבים החשובים ביותר שעובר טקסט לאחר עריכה
                        ולפני שהוא מוצע לקריאה. מטרת ההגהה למצוא ולתקן שגיאות
                        כתיב ודפוס וטעויות תחביריות, למרות שטעויות דקדוקיות
                        מתוקנות כבר בשלב העריכה הלשונית.למגיה/ה דרושות עיני נץ,
                        ולשמחתי בורכתי בכאלה.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyServices;
