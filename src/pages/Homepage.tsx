import About from "../components/About";
import Bookswork from "../components/Bookswork";
import Contactus from "../components/Contactus";
import Title from "../components/Title";
import ViewContactus from "../components/Viewcontact";
import printer from "../components/pic/printer.jpg";
import "./hoempage.css";

function Homepage() {
  
  return (
    <>
      <Title mainText=" עינת זילברמן  " subText=" עורכת לשונית " />
      <div className="text-center">
        <img src={printer} className="img-thumbnail macin" alt="..." />
      </div>
      <About />
      <Bookswork />
      <Contactus />
      <ViewContactus />
    </>
  );
}

export default Homepage;
