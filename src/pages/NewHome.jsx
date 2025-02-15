import { Link } from "react-router-dom";
import './Home.css';
import Carde from "../Components/Carde";
import download from '../images/download.jpg'
import {  useSelector , useDispatch } from "react-redux";
import {  changeEn } from "../Redux/toolkit";
// import { useEffect } from "react";
function NewHome(props) {

  
    const dispatch = useDispatch();
    const curentLange = useSelector((state) => state.movies.lange);
    const text = useSelector((state) => state.movies[curentLange]);

  const en = () => {
    console.log(text.home);

    dispatch(changeEn(curentLange === "en" ? "ar" : "en"));
  }
  
  // useEffect(() => {
  //   dispatch(getMovies());
  // }
  // ,[dispatch]);

    return (
      <>
      
      <button className="button" onClick={en} >{curentLange}</button>

     <Carde title="aaa" poster_path={download}/>

{/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

      <nav id="pagenation" className="pagination is-centered" role="navigation" aria-label="pagination">
        <ul className="pagination-list">

        <li> <Link href="#" className="pagination-previous">{text.previous}</Link> </li>

          <Link><button href="#" className="pagination-link" aria-label="Goto page 1">1</button></Link>
          <Link><button href="#" className="pagination-link" aria-label="Goto page 2">2</button></Link>
          <Link>
            <button className="pagination-link is-current"aria-label="Page 3" aria-current="page">3</button >
            </Link>
       
          <li><span className="pagination-ellipsis">&hellip;</span></li>
        <Link href="#" className="pagination-next">{text.nextPage}</Link>

        </ul>
      </nav>
      
      </>
    );
    
}
export default NewHome;