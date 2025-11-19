import React from "react";

const Header = () => {

    let styleObject={
        color: "black",
        backgroundColor: "yellow"
    }
    return(
        <div>
            <h1 style={styleObject} > This is Header </h1>
        </div>
    )
}

export default Header;