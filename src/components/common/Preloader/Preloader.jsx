import React from "react";
import preloader from "../../../assets/images/preloader-colorfull.svg";

let Preloader = () => {

    return <div style={ {position: 'absolute', left: '50%', top: '50%'} } ><img src={preloader} alt="image"/></div>
}

export default Preloader;