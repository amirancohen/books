import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, List, ListItem, Paper } from "@mui/material";

const MyServices = () => {
  const paperStyle = {
    height: "100%",
    p: 2,
  };
  return (
    <Grid
      container
      style={{ width: "100%", paddingRight: "20px", marginTop: 30 }}
      spacing={{ xs: 2, md: 3  }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4} >
        <Paper sx={paperStyle}>
          <Typography variant="h5" align="center" style={{ color: "#42a5f5" }}>
            עריכת תוכן/ספרות
          </Typography>
          <Typography variant="body1" sx={{ padding: "1", fontWeight: "bold" }}>
            בעריכת תוכן או עריכה ספרותית ייבדק הטקסט במספר אלמנטים:
          </Typography>
          <List sx={{ listStyleType: "disc", m: 2 }}>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                align="right"
                style={{ marginTop: -35, fontWeight: "bold" }}
              >
                רצף כרונולוגי הגיוני - היות הטקסט קוהרנטי.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                align="right"
                style={{ marginTop: -20, fontWeight: "bold" }}
              >
                הוספת מידע חסר ומחיקת המיותר.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                align="right"
                style={{ marginTop: -15, fontWeight: "bold" }}
              >
                סתירות בטקסט.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                align="right"
                style={{ marginTop: -10, fontWeight: "bold" }}
              >
                איתור ליקויים במבנה והצעות לשיפורו.
              </Typography>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Paper sx={paperStyle}>
          <Typography variant="h5" align="center" style={{ color: "#42a5f5" }}>
            עריכה לשונית
          </Typography>
          <Typography variant="body1" padding={1} fontWeight="bold">
            בעריכה לשונית אבדוק שגיאות תחביר, שיבושי לשון, שגיאות כתיב והקלדה,
            וידוא כי הטקסט עומד בחוקי הלשון העברית, התאמת המשלב לקהל לו הוא
            מיועד, ניסוח בהיר וקולח, אחידות הטקסט, פסיקים ונקודות במקום הנכון
            וכד׳. המטרה היא לקבל טקסט רהוט וזורם.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Paper sx={paperStyle}>
          <Typography variant="h5" align="center" style={{ color: "#42a5f5" }}>
            הגהה
          </Typography>
          <Typography variant="body1" padding={1} fontWeight="bold">
            הגהה היא אחד מהשלבים החשובים ביותר שעובר טקסט לאחר עריכה ולפני שהוא
            מוצע לקריאה. מטרת ההגהה למצוא ולתקן שגיאות כתיב ודפוס וטעויות
            תחביריות, למרות שטעויות דקדוקיות מתוקנות כבר בשלב העריכה
            הלשונית.למגיה/ה דרושות עיני נץ, ולשמחתי בורכתי בכאלה.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyServices;
