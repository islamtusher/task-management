/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
function TopHeader ({title, children}) {
    return (
        <div className="header">
            <h3 className="header-title">{title}</h3>
            {children}
        </div>
    );
}

export default TopHeader;