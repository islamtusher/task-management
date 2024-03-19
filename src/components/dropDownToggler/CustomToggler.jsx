import React from 'react';


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggler = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {/* Render custom icon here */}
        <span className="headerButton">
            <svg viewBox="0 0 26 26" height="26" width="26" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                <title>filter</title>
                <path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
            </svg>
        </span>
        {children}
    </a>
));

export default CustomToggler;