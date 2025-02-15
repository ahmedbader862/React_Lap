import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeEn } from "../Redux/toolkit";

function Navbar() {
  const navigate = useNavigate();

  const goSignUn = () => {
    navigate("/signup");
  };

  const goSigngIn = () => {
    navigate("/signIn");
  };

  const dispatch = useDispatch();
  const curentLange = useSelector((state) => state.movies.lange);
  const text = useSelector((state) => state.movies[curentLange]);

  const en = () => {
    console.log(curentLange);
    dispatch(changeEn(curentLange === "en" ? "ar" : "en"));
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">{text.home}</Link>
            <Link to="/documentation" className="navbar-item">{text.favorite}</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">{text.more}</Link>
              <div className="navbar-dropdown is-disabled">
                <Link className="navbar-item" onClick={() => console.log("555")}>{text.trending}</Link>
                <Link className="navbar-item is-selected" to="/signin">{text.mostViewed}</Link>
                <Link className="navbar-item">{text.popular}</Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button" onClick={en}>{curentLange}</button>
                <button className="button is-primary" onClick={goSignUn}>
                  <strong>{text.signUp}</strong>
                </button>
                <button className="button is-light" onClick={goSigngIn}>{text.signIn}</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
