/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Icon = (props) => {
    const {
        icon, 
        title,
    } = props;

    return(
        <div className="flex items-center text-sm">
            <div className="pr-2 sm:pl-8 ">{icon}</div>
            <div className="pr-12 text-black font-semibold">{title}</div>
        </div>
    );
};

export default Icon;