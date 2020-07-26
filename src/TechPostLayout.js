import React from "react";
import "./TechPostLayout.css";

function TechPostLayout(props) {
    return(<div className="TechPostLayout">
        {props.children}
    </div>);
}

export default TechPostLayout;