import { Link } from "react-router-dom";
    import {  useSelector } from "react-redux";
// import { changeTheme } from "../redux/actions/ThemAction";
import "./Home.css"; 
import { useContext } from "react";
import { langContexte } from "../Context/Lang";

function Navbar() {

    const { langContext, setLangContext } = useContext(langContexte);

    
    // (((((((((((((((((((((((())))))))))))))))))))))))

    // const dispatch = useDispatch();

    // const theme = useSelector((state) => state.theme);

                                                                      // THunk
    const moviesLength = useSelector((state) => state.allMovie.length);   

    // const HandleTheme = () => {
    //     dispatch(changeTheme(theme === "light" ? "dark" : "light"));
    // };
 
    
   

    return (

<>
        <nav id="nav" className="navbar navbar-expand-lg bg-body-danger  bg-info">

            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">React App</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 d-flex justify-content-center">

                        <li className="nav-item col-3 ">
                            <Link className={`nav-link active`} aria-current="page" to="/">Home</Link>
                        </li>
                                                                           {/* {%%%%%%%%  error Thunk %%%%%%%%% } */}
                        <li className="nav-item col-3 ">
                            <Link className="nav-link active" to="/Fav">Favurite  {moviesLength}</Link>
                           
                        </li>
                     
                        
                    </ul>
                    
                    <div className="d-flex justify-content-evenly w-100 ">


                        <button className="nav-item btn" style={{fontWeight:"700"}} >
                            <Link className="nav-link" to="/signup">Sing Up</Link>
                        </button>

                        <button className="nav-item btn" style={{fontWeight:"700"}} >
                            <Link className="nav-link" to="/signin">Log In</Link>
                        </button>                                                                  
                                                                                                              {/* ((((((Context)))))) */}

                        {/* <button className="btn btn-primary" onClick={HandleTheme}>Change {theme}</button> */}
              
                        <button className="btn" style={{fontWeight:"700"}} onClick={() => setLangContext(langContext === "en" ? "ar" : "en")}> 
                                {langContext} 
                            </button>
                        

                    </div>

                </div>
            </div>
        </nav>
        </>  

);
}

export default Navbar;
