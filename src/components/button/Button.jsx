/* eslint-disable react/prop-types */

const Button = ({children, className,  type, ...rest}) => {
    return <button className={`custom-button ${className}`} type={type} { ...rest}>{children}</button>
};

export default Button;