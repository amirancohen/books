import Title from "./Title";
import imgme from "./pic/einat.jpg";
import "./about.css";
function About() {
  return (
    <>
      <div className="mt-5">
        <Title mainText=" אודות " subText="קצת על עצמי" />
      </div>
      <div className="text-center mt-5">
        <h2>אודות</h2>
        <h5>קצת עלי</h5>
        <small>
          <p className="fontca ">
            שמי עינת זילברמן, עורכת לשון, ספרות ומגיהה. במשך למעלה מ-30 שנים
            עסקתי עריכת דין, בוגרת אוניברסיטת תל אביב במשפטים, בשנת 2022 עברתי
            הסבה מקצועית לתחום עריכת לשון וספרות, מתוך אהבה וחיבור למילה הכתובה.
            למדתי עריכת לשון ב-״מכללת אסיף״ בהצטיינות, עריכת ספרות ותוכן בבית
            העורכים של לירון פיין.
          </p>
        </small>
        <small>
          <p className="fontca mt-4">
            כדי שטקסט יצליח להגיע אל ליבו של הקורא ולספר את הסיפור שהכותב מבקש
            לספר, עליו להיות בהיר, קולח, בלי שגיאות ופשוט מבחינה תחבירית. זוהי
            עבודתו של העורך וזו העבודה שבחרתי לעשות באהבה. מוזמנים ליצור עימי
            קשר. אפשר לשלוח אליי קטע קצר מן הטקסט ואחזיר לכם דוגמת עריכה (ללא
            תשלום).
          </p>
        </small>
        <img
          src={imgme}
          className="img-fluid mt-5 imgeinat rounded-circle"
          alt="..."
        />
      </div>
      <div className="cardfw">
        <div
          className="row row-cols-1 row-cols-md-3 g-4 cardsize  mt-5"
          dir="rtl"
        >
          <div className="col ">
            <div className="card  border border-5 rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded ">
              <div className="card-bodyv cardh">
                <h5 className="card-title text-center text-primary mt-3  ">
                  עריכת תוכן/ספרות
                </h5>
                <p className="card-text mt-3 ">
                  בעריכת תוכן או עריכה ספרותית ייבדק הטקסט במספר אלמנטים:
                  <ul>
                    <li>רצף כרונולוגי הגיוני - היות הטקסט קוהרנטי.</li>
                    <li> הוספת מידע חסר ומחיקת המיותר</li>
                    <li>סתירות בטקסט.</li>
                    <li>איתור ליקויים במבנה והצעות לשיפורו.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  border border-5 rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body cardh">
                <h5 className="card-title text-center text-primary">
                  עריכה לשונית{" "}
                </h5>
                <p className="card-text">
                  בעריכה לשונית אבדוק שגיאות תחביר, שיבושי לשון, שגיאות כתיב
                  והקלדה, וידוא כי הטקסט עומד בחוקי הלשון העברית, התאמת המשלב
                  לקהל לו הוא מיועד, ניסוח בהיר וקולח, אחידות הטקסט, פסיקים
                  ונקודות במקום הנכון וכד׳. המטרה היא לקבל טקסט רהוט וזורם.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  border border-5 rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body cardh">
                <h5 className="card-title text-center text-primary">הגהה </h5>

                <p className="card-text">
                  {" "}
                  הגהה היא אחד מהשלבים החשובים ביותר שעובר טקסט לאחר עריכה ולפני
                  שהוא מוצע לקריאה. מטרת ההגהה למצוא ולתקן שגיאות כתיב ודפוס
                  וטעויות תחביריות, למרות שטעויות דקדוקיות מתוקנות כבר בשלב
                  העריכה הלשונית.למגיה/ה דרושות עיני נץ, ולשמחתי בורכתי בכאלה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
