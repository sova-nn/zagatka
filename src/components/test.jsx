import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import React from "react";

<div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
        <img src={img1} className="d-block w-100"/>

    </div>
    <div className="carousel-item" data-interval="10000">
        <img src={img2} className="d-block w-100"/>

    </div>
    <div className="carousel-item" data-interval="10000">
        <img src={img3} className="d-block w-100"/>
    </div>
</div>