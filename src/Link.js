import React from "react";

function Link({target, text}){

    return(
        <a class="nav-link" href={target}>{text}</a>
    )
}
export default Link