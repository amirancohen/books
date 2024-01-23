import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footerc">
        <div className="d-flex flex-column mt-5">
          <footer
            id="sticky-footer"
            className="flex-shrink-0 py-4  text-white-50"
          >
            <div className="container text-center">
              <div>
                <small className="text-black fs-5">
                  Copyright &copy; עינת זילברמן
                </small>
              </div>
              <small className="text-black fs-5">
                Copyright &copy; Building Website by amiran cohen
              </small>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
