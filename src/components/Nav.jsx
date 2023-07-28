import React from "react";
import SearchBar from "./SearchBar";

function Nav(props){
    return (
        <div>   
            <SearchBar onSearch = {props.onSearch}/>
        </div>
    ); 
}

export default Nav;