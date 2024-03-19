/* eslint-disable react/prop-types */
import { Badge } from "react-bootstrap";


const CustomBadge = ({ property, children }) => {
    console.log(property)
    return (
        <Badge
            bg={`${property === 'low' ? 'secondary' : property === 'high' ? 'danger' : property === 'medium' && 'warning'}`}
            text={`${property === 'low' || property === 'high' ? 'light' : 'dark'}`}
        >            
            {children}           
        </Badge>
    );
};

export default CustomBadge;