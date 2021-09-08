import React from "react";
import "./search-box.styles.css";

const SearchComponent = ({placeHolder, handelChange}) => (


    <input className="search" 
    type='search'
     placeholder={placeHolder} 
    onChange={handelChange}/>
)

export default SearchComponent
